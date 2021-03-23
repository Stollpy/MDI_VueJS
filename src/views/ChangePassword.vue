<template>
<div class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-lg-2 border border-dark shadow rounded">
                <ul class="d-none d-lg-block nav-account mt-3">
                    <li class="fw-bold"><router-link to="/account" class="text-dark">Mon compte</router-link></li>
                    <li class=""><hr class="dropdown-divider"></li>
                    <li class="fw-bold"><router-link to="/account/change-password" class="text-dark">Changer mon mot de passe</router-link></li>
                 </ul>
                <nav class="d-lg-none navbar navbar-expand navbar-light bg-light">
                    <div class="container-fluid">  
                        <div class="navbar" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <router-link to="/account"><a class="nav-link fw-bold" aria-current="page" href="#">Mon compte</a></router-link>
                                <router-link to="/account/change-password"><a class="nav-link fw-bold" aria-current="page" href="#">Changer mon mot de passe</a></router-link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="col-lg-8 mt-5 shadow">
               <div class="row">
                   <div class="col-12 text-center mb-3">
                       <h2 class="fw-bold">Changer mon mot de passe</h2>
                   </div>
                   <div class="col-12 mb-3">
                       <label for="passwordFormer" class="form-label">Votre ancien mot de passe</label>
                        <input type="password" class="form-control" id="passwordFormer">
                   </div>
                   <div class="col-12 mb-3">
                       <label for="passwordNew" class="form-label">Votre nouveau mot de passe</label>
                        <input type="password" class="form-control" id="passwordNew">
                   </div>
                   <div class="col-12 mb-3">
                       <label for="passwordComfirmation" class="form-label">Comfirmer votre nouveau mot de passe</label>
                        <input type="password" class="form-control" id="passwordComfirmation">
                   </div>
               </div>
            </div>
        </div>
    </div>
</div>
</template>





<script>
export default{
    name: 'ChangePassword',

    data(){
        return{
            iri: this.$store.state.iri,
            api: this.$store.state.api,
            modified: null,
        }
    },
    methods:{
        
    }
}
</script>



<style scoped>
.nav-account
{
    list-style: none;
}
</style>