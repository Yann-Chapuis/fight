<template>
  <div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Start Bootstrap </div>
      <div class="list-group list-group-flush">
        <a href="index.html" class="list-group-item list-group-item-action bg-light">Ville</a>
        <a href="donjons.html" class="list-group-item list-group-item-action bg-light">Donjons</a>
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">

      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <img src="">
        <img v-bind:src="'/icons/nobg/Building_01_nobg.png'" class="icons-top" alt="">
        <span>Population</span>

        <img v-bind:src="'/icons/nobg/Building_01_nobg.png'" class="icons-top" alt="">
        <span>Nourriture</span>

        <img v-bind:src="'/icons/nobg/Building_01_nobg.png'" class="icons-top" alt="">
        <span>Bois</span>

        <img v-bind:src="'/icons/nobg/Building_01_nobg.png'" class="icons-top" alt="">
        <span>Pierre</span>

        <img v-bind:src="'/icons/nobg/Building_01_nobg.png'" class="icons-top" alt="">
        <span>Peaux</span>


        <img v-bind:src="'/icons/nobg/Building_01_nobg.png'" class="icons-top" alt="">
        <span>Fantassins</span>

        <img v-bind:src="'/icons/nobg/Building_01_nobg.png'" class="icons-top" alt="">
        <span>Cavaliers</span>

        <img v-bind:src="'/icons/nobg/Building_01_nobg.png'" class="icons-top" alt="">
        <span>Archers</span>

        <img v-bind:src="'/icons/nobg/Building_01_nobg.png'" class="icons-top" alt="">
        <span>Catapultes</span>

        <img v-bind:src="'/icons/nobg/Building_01_nobg.png'" class="icons-top" alt="">
        <span>Or</span>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Wiki</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Se déconnecter</a>
            </li>
          </ul>
        </div>
      </nav>

    <City msg="Welcome to Your Vue.js App"/>

    </div>
    <!-- /#page-content-wrapper -->

  </div>
  <!-- /#wrapper -->
</template>

<script>
import City from './components/City.vue'

export default {
  name: 'App',
  components: {
    City
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
