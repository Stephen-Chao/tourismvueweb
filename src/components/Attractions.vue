<template>
  <div class="hero" >
    <div style="top:10%;">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="Attractions" :options="options">
        <a slot="increaseRemainticket" slot-scope="props" class="fa fa-arrow-circle-up fa-2x" @click="increaseRemainticket(props.row._id)"></a>
        <a slot="decreaseRemainticket" slot-scope="props" class="fa fa-arrow-circle-down fa-2x" @click="decreaseRemainticket(props.row._id)"></a>
        <a slot="deleteAttraction" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteAttraction(props.row._id)"></a>
      </v-client-table>
      <b-nav-item to ="/addattraction"><el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">Add Attraction</el-button></b-nav-item>
    </div>
  </div>
  </div>
</template>

<script>
import AttractionService from '@/service/attractionservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Attractions',
  data () {
    return {
      messagetitle: ' Attraction List ',
      Attractions: [],
      props: ['_id'],
      errors: [],
      columns: ['_id', 'attractionsname', 'ticketprice', 'remaintickets', 'increaseRemainticket', 'decreaseRemainticket', 'deleteAttraction'],
      options: {
        perPage: 10,
        filterable: ['attractionsname', 'ticketprice', 'remaintickets'],
        sortable: ['remaintickets'],
        headings: {
          _id: 'ID',
          attractionsname: 'Attraction Name',
          ticketprice: 'Ticket Price',
          remaintickets: 'Remain Tickets',
          increaseRemainticket: 'Increase Remain Tickets',
          decreaseRemainticket: 'Decrease Remain Tickets',
          deleteAttraction: 'Delete'
        }
      }
    }
  },
  // Fetches Donations when the component is created.
  created () {
    this.loadAttractions()
  },
  methods: {
    loadAttractions: function () {
      AttractionService.fetchAttractions()
        .then(response => {
          // JSON responses are automatically parsed.
          this.Attractions = response.data
          console.log(this.Attractions)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    increaseRemainticket: function (id) {
      AttractionService.increaseRemainticket(id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.loadAttractions()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    decreaseRemainticket: function (id) {
      AttractionService.decreaseRemainticket(id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.loadAttractions()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    deleteAttraction: function (id) {
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
          AttractionService.deleteAttraction(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadAttractions()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this Attraction ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          console.log('SWAL Else Result : ' + result.value)
          this.$swal('Cancelled', 'Attraction still Counts!', 'info')
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
