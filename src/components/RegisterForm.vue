<template>
  <form @submit.prevent="submit">
    <div class="form-group" :class="{ 'form-group--error': $v.username.$error }">
      <label class="form__label">Username</label>
      <input class="form__input" placeholder="Username" v-model.trim="$v.username.$model"/>
    </div>
    <div class="error" v-if="!$v.username.required">Name is Required</div>
    <div class="error" v-if="!$v.username.minLength">Name must have at least {{$v.username.$params.minLength.min}} letters.</div>
    <!--    票价-->
    <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
      <label class="form__label">Email</label>
      <input class="form__input" placeholder="Email" v-model.trim="$v.email.$model"/>
    </div>
    <div class="error" v-if="!$v.email.required">Email is Required</div>
    <div class="error" v-if="!$v.email.minLength">Email must have at least {{$v.email.$params.minLength.min}} letters.</div>
    <!--    余票-->
    <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
      <label class="form__label">Password</label>
      <input class="form__input" placeholder="Password" v-model.trim="$v.password.$model"/>
    </div>
    <div class="error" v-if="!$v.password.required">Password is Required</div>
    <div class="error" v-if="!$v.password.minLength">Password must have at least {{$v.password.$params.minLength.min}} letters.</div>
    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ userBtnTitle }}</button>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Register success</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Register wrong</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Adding...</p>
  </form>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)

export default {
  name: 'FormData',
  props: ['userBtnTitle', 'user'],
  data () {
    return {
      messagetitle: ' Register ',
      username: this.user.username,
      email: this.user.email,
      password: this.user.password,
      submitStatus: null
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(5)
    },
    email: {
      required,
      minLength: minLength(5)
    },
    password: {
      required,
      minLength: minLength(5)
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
          var user = {
            username: this.username,
            email: this.email,
            password: this.password
          }
          this.user = user
          console.log('Submitting in RegisterForm : ' +
            JSON.stringify(this.user, null, 5))
          this.$emit('user-is-created-updated', this.user)
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
