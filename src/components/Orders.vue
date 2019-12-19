<template>
  <div class="hero">
    <div style="top:10%;">
      <h3 class="vue-title"><i class="fa fa-list" ></i>{{messagetitle}}</h3>
      <div id="app1">
        <v-client-table :columns="columns" :data="Order" :options="options">
          <a slot="increaseBooked" slot-scope="props" class="fa fa-arrow-circle-up fa-2x" @click="increaseBooked(props.row._id)"></a>
          <a slot="decreaseBooked" slot-scope="props" class="fa fa-arrow-circle-down fa-2x" @click="decreaseBooked(props.row._id)"></a>
          <a slot="deleteOrder" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteOrder(props.row._id)"></a>
        </v-client-table>
        <b-nav-item to ="/addorder"><el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">Add Order</el-button></b-nav-item>
      </div>
    </div>
  </div>
</template>

<script>
import OrderService from '@/service/orderservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Order',
  data () {
    return {
      messagetitle: ' Order List ',
      Order: [],
      props: ['_id'],
      errors: [],
      columns: ['_id', 'NumOfBooked', 'Scheduler', 'PaymentMethod', 'Attraction', 'increaseBooked', 'decreaseBooked', 'deleteOrder'],
      options: {
        perPage: 10,
        filterable: ['NumOfBooked', 'Scheduler', 'PaymentMethod', 'Attraction'],
        sortable: ['NumOfBooked'],
        headings: {
          _id: 'ID',
          NumOfBooked: 'Number Of Booked',
          Scheduler: 'Scheduler',
          PaymentMethod: 'Payment Method',
          Attraction: 'Attraction',
          increaseBooked: 'Increase Booked',
          decreaseBooked: 'Decrease Booked',
          deleteOrder: 'Delete'
        }
      }
    }
  },
  // Fetches Donations when the component is created.
  created () {
    this.loadOrders()
  },
  methods: {
    loadOrders: function () {
      OrderService.fetchOrder()
        .then(response => {
          // JSON responses are automatically parsed.
          this.Order = response.data
          console.log(this.Order)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    increaseBooked: function (id) {
      OrderService.increaseBooked(id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.loadOrders()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    decreaseBooked: function (id) {
      OrderService.decreaseBooked(id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.loadOrders()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    deleteOrder: function (id) {
      this.$swal({
        title: 'Are you totaly sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true
        // showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result.value)
        if (result.value === true) {
          OrderService.deleteOrder(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadAttractions()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this Order ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          console.log('SWAL Else Result : ' + result.value)
          this.$swal('Cancelled', 'Order still Counts!', 'info')
        }
      })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  .login_btn {
    width: 40%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #0d6f99, #04996f); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right,#0d6f99, #04996f); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right,#0d6f99,#04996f); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right,#0d6f99, #04996f); /* 标准的语法 */
    filter: brightness(1.2);
  }
</style>
