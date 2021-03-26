<template>
  <div class="ads-all">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <div class="spinner-border" role="status" v-if="loading">
            <span class="visually-hidden">Loading...</span>
          </div>
          <h1 class="mt-3 fw-bold">Aucune annonce trouvé 😭</h1>
        </div>
        <CardAds :announcements="announcements" v-if="annoucemments !== null"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardAds from '@/components/CardAds.vue';
import axios from 'axios';

export default {
  name: 'AdsAll',
  components: {
    CardAds
  },

  data(){
    return {
      announcements: null,
      loading: false,
      notAds: null,
    }
  },

  mounted(){
    this.loading = true;
    axios
    .get('https://localhost:8000/api/ads')
    .then((response) => {
      this.loading = false;
      if(response.data['hydra:member'] == null){
        
      }
      else{
        this.announcements = response.data['hydra:member']
      }
      console.log(response.data['hydra:member'])
    })
  },
}
</script>