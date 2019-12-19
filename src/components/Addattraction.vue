<template>
  <div id="app1" class="hero">
    <div style="top:20%">
      <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
      <div style="left: 10%">
        <div class="container mt-3 mt-sm-5">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <attraction-form :attraction="attractions" attractionBtnTitle="Add attraction" @attraction-is-created-updated="submitAttraction"></attraction-form>
            </div><!-- /col -->
          </div><!-- /row -->
        </div><!-- /container -->
      </div>
  </div>
  </div>
</template>

<script>
import AttractionService from '@/service/attractionservice'
import AttractionForm from '@/components/AttractionForm'
export default {
  data () {
    return {
      attractions: {attractionsname: '', amount: 0.0, message: ''},
      messagetitle: ' Add Attraction '
    }
  },
  components: {
    'attraction-form': AttractionForm
  },
  methods: {
    submitAttraction: function (attraction) {
      AttractionService.AddAttraction(attraction)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
