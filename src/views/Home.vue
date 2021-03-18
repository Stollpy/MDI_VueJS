<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="spinner-border" role="status" id="spinner">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
          <div class="card-ads" :key="index" v-for="(ads, index) in announcements">
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="card shadow" style="width: 100%;">
                    <div :id="carousel + ads.id" class="carousel slide" :data-bs-ride="carousel + ads.id">
                      <div class="carousel-inner">
                            <div :key="index" v-for="(picture, index) in ads.adsPictures">
                              <div class="carousel-item active"  v-if="index == 0">
                                <img src="../assets/manuel-cosentino-n-CMLApjfI-unsplash-jpg-6050cbf579a6b.jpg" :alt="ads.title" class="d-block w-100">
                              </div>
                              <div class="carousel-item" v-else>
                                  <img src="../assets/manuel-cosentino-n-CMLApjfI-unsplash-jpg-6050cbf579a6b.jpg" :alt="ads.title" class="d-block w-100">
                              </div>
                            </div>
                      </div>
                      <button class="carousel-control-prev bg-transparent" type="button" :data-bs-target="'#carousel-'+ads.id" data-bs-slide="prev">
                        <span class=" bg-transparant border-none carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next bg-transparent" type="button" :data-bs-target="'#carousel'+ads.id" data-bs-slide="next">
                        <span class="bg-transparant border-none carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title fw-bold">{{ ads.title }}</h5>
                      <p class="card-text">Type d'annonce : <span class="fw-bold">{{ ads.adsCategory.label }}</span> </p>
                      <p class="card-text">Prix : <span class="fw-bold">{{ formatPrice(ads.price) }}</span> €</p>
                      <p class="card-text">{{ slice(ads.content) }} [...]</p>
                      <div class="btn btn-outline-primary"><router-link :to="'/annonce/'+ads.id">Voir l'annonce</router-link></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import CardAds from '@/components/CardAds.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    // CardAds
  },

  data(){
    return {
      assetDirectory: '',
      carousel: 'carousel-',
      announcements: null,
    }
  },

  mounted(){
    axios
    .get('https://localhost:8000/api/ads')
    .then((response) => {
      document.getElementById('spinner').classList.add('d-none');
      this.announcements = response.data['hydra:member']
      console.log(response.data['hydra:member'])
    })
  },

  methods: {
    formatPrice(value){
      var val = (value/1).toFixed(2).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    slice(value){
      return value.substr(0, 125);
    }
  }
}
</script>
