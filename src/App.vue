<template>
  <div id="app" style="background: #e4c95b repeat-y; ">
    <b-navbar toggleable="md" variant="dark" type="dark" style="position:fixed; top:0px; width:100%;">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/mevnnav.png" class="img-circle" style="padding: 5px">
      <b-navbar-brand to="/">Attraction Management</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px">Home</i></b-nav-item>
          <b-nav-item to="/attractions"><i class="fa fa-list" style="padding: 5px">Attractions</i></b-nav-item>
          <b-nav-item to="/order"><i class="fa fa-money" style="padding: 5px">Orders</i></b-nav-item>
          <b-nav-item to="/map"><i class="fa fa-globe" style="padding: 5px">Map</i></b-nav-item>
          <b-nav-item to="/about"><i class="fa fa-info" style="padding: 5px">About Us</i></b-nav-item>
          <b-nav-item to="/contact"><i class="fa fa-comment" style="padding: 5px">Contact Us</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login"><i class="fa fa-sign-in" style="padding: 5px">Login</i></b-nav-item>
          <b-nav-item to="/register"><i class="fa fa-register" style="padding: 5px">Register</i></b-nav-item>
          <b-nav-item to="/#"><i class="fa fa-sign-out" style="padding: 5px">Logout</i></b-nav-item>
          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: white;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #0b1a3d;
    margin-top: 60px;
  }
</style>
