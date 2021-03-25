<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light shadow fixed-top">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand"><img alt="Vue logo" src="./assets/logo.png" class="w-25"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="logo">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <div class="nav-link active" aria-current="page" href="#"><router-link to="/">Home</router-link></div>
            </li>
            <li class="nav-item" v-if="auth() == null ">
              <div class="nav-link active" aria-current="page" href="#"><router-link to="/login">Se connecter / créer un compte</router-link></div>
            </li>
            <li class="nav-item dropdown" v-if="auth()!== null ">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mes informations
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><span class="dropdown-item" href="#"><router-link to="/account">Mon compte</router-link></span></li>
                <div class="dropdown-item" aria-current="page" href="#"><router-link to="/dossier-locataire">Dossier locataire</router-link></div>
              </ul>
            </li>
            <li class="nav-item">
              <div class="nav-link active" aria-current="page" href="#"><router-link to="/annonces">Annonces</router-link></div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view/>
</template>
<script>

export default {
  name: 'App',

  methods:{
    auth: function(){
      return this.$store.state.iri_user;
    }
  }
}
</script>


<style>
router-link {
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif !important;
  color: #2c3e50;
}

#nav {
  margin-bottom: 10%;

}
.navbar{
  background-color: #FFFFFF !important;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #5271FF;
  text-decoration: none;
}
</style>

<style scoped>
#logo {
  position: absolute;
  left: 80%
}


/* MEDIUM */
@media screen and (max-width: 991px){
  #nav {
  margin-bottom: 20%;

  }

/* LARGE */
@media screen and (max-width: 767px){
    #nav {
  margin-bottom: 30%;

  }
}
}
</style>
