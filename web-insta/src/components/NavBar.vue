<template>
  <div class="nav-bar">
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand href="#">Instagram</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
    
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">DM</b-nav-item>
          <b-nav-item href="#">Create</b-nav-item>
          <b-nav-item href="#">Explore</b-nav-item>
          <b-nav-item href="#">Notice</b-nav-item>
          <b-nav-item href="#">Profile</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style>


</style>