<template>
    <form @submit.prevent="submit">
      <div class="form-group" :class="{ 'form-group--error': $v.NumOfBooked.$error }">
        <label class="form-control-label" name="NumOfBooked">NunOfBooked(0~9999)</label>
        <input class="form__input" type="decimal" v-model.trim="NumOfBooked"/>
      </div>
      <div class="error" v-if="!$v.NumOfBooked.between">NunOfBooked must be between 0 and 9999</div>
<!--      预定人-->
      <div class="form-group" :class="{ 'form-group--error': $v.Scheduler.$error }">
        <label class="form__label">Scheduler</label>
        <input class="form__input" placeholder="enter attraction name here" v-model.trim="$v.Scheduler.$model"/>
      </div>
      <div class="error" v-if="!$v.Scheduler.required">Name is Required</div>
      <div class="error" v-if="!$v.Scheduler.minLength">Name must have at least {{$v.Scheduler.$params.minLength.min}} letters.</div>
<!--      付款方式-->
      <div class="form-group">
        <label class="form-label">Select Payment Type</label>
        <select id="PaymentMethod" name="PaymentMethod" class="form-control"
                type="text" v-model="PaymentMethod">
          <option value="null" selected disabled hidden>Choose Payment Type</option>
          <option value="Direct">Direct</option>
          <option value="PayPal">PayPal</option>
          <option value="Visa">Visa</option>
          <option value="花呗">花呗</option>
          <option value="Master Card">Master Card</option>
          </select>
      </div>
<!--      景点-->
      <div class="form-group" :class="{ 'form-group--error': $v.Attraction.$error }">
        <label class="form__label">Attraction Name</label>
        <input class="form__input" placeholder="enter attraction name here" v-model.trim="$v.Attraction.$model"/>
      </div>
      <div class="error" v-if="!$v.Attraction.required">Name is Required</div>
      <div class="error" v-if="!$v.Attraction.minLength">Name must have at least {{$v.Attraction.$params.minLength.min}} letters.</div>
      <p>
        <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ orderBtnTitle }}</button>
      </p>
      <p>
        <a href="#/order" class="btn btn-primary btn1" role="button">Manage Order</a>
      </p>
      <p class="typo__p" v-if="submitStatus === 'OK'">Add success</p>
      <p class="typo__p" v-if="submitStatus === 'ERROR'">Add wrong</p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Adding...</p>
    </form>
  </template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import { required, minLength, between } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})
Vue.use(Vuelidate)
export default {
  name: 'FormData',
  props: ['orderBtnTitle', 'order'],
  data () {
    return {
      messagetitle: ' Add order ',
      NumOfBooked: this.order.NumOfBooked,
      Scheduler: this.order.Scheduler,
      PaymentMethod: this.order.PaymentMethod,
      Attraction: this.order.Attraction,
      submitStatus: null
    }
  },
  validations: {
    Scheduler: {
      required,
      minLength: minLength(1)
    },
    NumOfBooked: {
      required,
      between: between(0, 9999)
    },
    Attraction: {
      required,
      minLength: minLength(1)
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var order = {
            NumOfBooked: this.NumOfBooked,
            Scheduler: this.Scheduler,
            PaymentMethod: this.PaymentMethod,
            Attraction: this.Attraction
          }
          this.order = order
          console.log('Submitting in OrderForm : ' +
            JSON.stringify(this.order, null, 5))
          this.$emit('order-is-created-updated', this.order)
        }, 500)
      }
    }
  }
}
</script>
<style scoped>
    #app1 {
      width: 95%;
      margin: 0 auto;
    }
    .required-field > label::after {
      content: '*';
      color: red;
      margin-left: 0.25rem;
    }
    .donate-form .form-control-label.text-left{
      text-align: left;
    }

    label {
      display: inline-block;
      width: 540px;
      text-align: left;
      font-size: x-large;
    }
    .typo__p {
      width: 540px;
      font-size: x-large;
    }
    .btn1 {
      width: 300px;
      font-size: x-large;
    }
    p {
      margin-top: 20px;
    }

    input {
      border: 1px solid silver;
      border-radius: 4px;
      background: white;
      padding: 5px 10px;
      width: 540px;
    }

    .dirty {
      border-color: #5A5;
      background: #EFE;
    }

    .dirty:focus {
      outline-color: #8E8;
    }

    .error {
      border-color: red;
      background: #157ffb;
      color: whitesmoke;
    }

    .error:focus {
      outline-color: #ffa519;
    }
</style>
