<template>
  <form @submit.prevent="submit">
    <div class="form-group" :class="{ 'form-group--error': $v.attractionsname.$error }">
      <label class="form__label">Attraction Name</label>
      <input class="form__input" placeholder="enter attraction name here" v-model.trim="$v.attractionsname.$model"/>
    </div>
    <div class="error" v-if="!$v.attractionsname.required">Name is Required</div>
    <div class="error" v-if="!$v.attractionsname.minLength">Name must have at least {{$v.attractionsname.$params.minLength.min}} letters.</div>
<!--    票价-->
    <div class="form-group" :class="{ 'form-group--error': $v.ticketprice.$error }">
      <label class="form-control-label" name="ticketprice">Ticket price(0~9999)</label>
      <input class="form__input" type="decimal" v-model.trim="ticketprice"/>
    </div>
    <div class="error" v-if="!$v.ticketprice.between">Ticket Price must be between 0 and 9999</div>
    <!--    余票-->
    <div class="form-group" :class="{ 'form-group--error': $v.remaintickets.$error }">
      <label class="form-control-label" name="remaintickets">Remain tickets(0~9999)</label>
      <input class="form__input" type="decimal" v-model.trim="remaintickets"/>
    </div>
    <div class="error" v-if="!$v.remaintickets.between">Remain tickets must be between 0 and 9999</div>
    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ attractionBtnTitle }}</button>
    </p>
    <p>
      <a href="#/attractions" class="btn btn-primary btn1" role="button">Manage Attraction</a>
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
  props: ['attractionBtnTitle', 'attraction'],
  data () {
    return {
      messagetitle: ' Add attraction ',
      attractionsname: this.attraction.attractionsname,
      ticketprice: this.attraction.ticketprice,
      remaintickets: this.attraction.remaintickets,
      submitStatus: null
    }
  },
  validations: {
    attractionsname: {
      required,
      minLength: minLength(5)
    },
    ticketprice: {
      required,
      between: between(0, 9999)
    },
    remaintickets: {
      required,
      between: between(0, 9999)
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
          var attraction = {
            attractionsname: this.attractionsname,
            ticketprice: this.ticketprice,
            remaintickets: this.remaintickets
          }
          this.attraction = attraction
          console.log('Submitting in AttractionForm : ' +
            JSON.stringify(this.attraction, null, 5))
          this.$emit('attraction-is-created-updated', this.attraction)
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
