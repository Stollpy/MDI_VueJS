import { createStore } from 'vuex'

export default createStore({
  state: {
    api: 'https://localhost:8000',
    iri_user: sessionStorage.getItem('iri_user'),
    iri_individual: sessionStorage.getItem('iri_individual')
  },
  getters:{
    returnIri(state){
      return state.iri = sessionStorage.getItem('iri_user');
    }
  },
  mutations: {
    setIriUser(state, value){
      state.iri_user = value;
    },
    setIriIndividual(state, value){
      state.iri_individual = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
