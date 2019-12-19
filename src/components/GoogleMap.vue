<template>
  <div style="position: relative; top: 35px;background: #e4c95b ; high :100%;">
    <label>
      <nobr>
      Find Location:
      <GmapAutocomplete class="form-group" @place_changed="setPlace">
      </GmapAutocomplete>
      <el-button class="login_btn" @click.native="usePlace" type="primary" round :loading="isBtnLoading">Search</el-button>
      </nobr>
    </label>
    <br />
    <GmapMap
      style="position:fixed; top:150px;left:9% ;width: 1200px; height: 600px;background: #e4c95b;"
      :zoom="zoom"
      :center="center"
    >
      <GmapMarker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
      />
      <GmapMarker
        v-if="this.place"
        label="★"
        :position="{
          lat: this.place.geometry.location.lat(),
          lng: this.place.geometry.location.lng(),
        }"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  props: {
    setAddress: {
      type: Function
    }
  },
  data () {
    return {
      markers: [],
      place: null,
      center: { lat: 0, lng: 0 },
      zoom: 1
    }
  },
  description: 'Autocomplete Example (#164)',
  methods: {
    setDescription (description) {
      this.description = description
    },
    setPlace (place) {
      this.place = place
      this.center.lat = place.geometry.location.lat()
      this.center.lng = place.geometry.location.lng()
      this.zoom = 15
      console.log(this.setAddress)
      this.setAddress(place)
      console.log(this.place)
    },
    usePlace (place) {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng()
          }
        })
        this.place = null
      }
    }
  }
}
</script>
<style>
  .login_btn {
  width: 30%;
  font-size: 16px;
  background: -webkit-linear-gradient(left, #0d6f99, #04996f); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right,#0d6f99, #04996f); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right,#0d6f99,#04996f); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right,#0d6f99, #04996f); /* 标准的语法 */
  filter: brightness(1.4);
  }
</style>
