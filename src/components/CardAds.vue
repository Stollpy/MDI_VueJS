<template>
<div class="card-ads col-sm-12 col-md-6 col-lg-4 mt-3" :key="index" v-for="(ads, index) in announcements">
    <div class="card shadow" style="width: 100%;">
        <div :id="carousel + ads.id" class="carousel slide" :data-bs-ride="carousel + ads.id">
            <div class="carousel-inner">
                <div :key="index" v-for="(picture, index) in ads.adsPictures">
                    <div class="carousel-item active"  v-if="index == 0">
                        <img :src="require(`../assets/${picture.data}`)" :alt="ads.title" class="d-block w-100">
                    </div>
                    <div class="carousel-item" v-else>
                        <img :src="require(`../assets/${picture.data}`)" :alt="ads.title" class="d-block w-100">
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev bg-transparent" type="button" :data-bs-target="'#'+carousel + ads.id" data-bs-slide="prev">
                <span class=" bg-transparant border-none carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next bg-transparent" type="button" :data-bs-target="'#'+carousel+ads.id" data-bs-slide="next">
                <span class="bg-transparant border-none carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="card-body">
            <h5 class="card-title fw-bold">{{ ads.title }}</h5>
            <p class="card-text">Type d'annonce : <span class="fw-bold">{{ ads.adsCategory.label }}</span> </p>
            <p class="card-text">Prix : <span class="fw-bold">{{ formatPrice(ads.price) }}</span> €</p>
            <p class="card-text">{{ slice(ads.content) }} </p>
            <div class="btn btn-outline-primary"><router-link :to="'/annonce/'+ads.id">Voir l'annonce</router-link></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'CardAds',
    props: {
        announcements: Array
    },
    methods: {
    formatPrice(value){
      var val = (value/1).toFixed(2).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    slice(value){
       var valSlice = value.substr(0, 125);
       if(value.length > 125){
         return valSlice += ' [...]';
       }else{
         return valSlice;
       }
    },
  },
  data(){
      return {
          carousel: 'carousel',
      }
  }
}
</script>

<style scoped>

</style>