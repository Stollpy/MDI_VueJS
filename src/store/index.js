import { createStore } from 'vuex'

export default createStore({
  state: {
    api: 'https://localhost:8000',
    iri: sessionStorage.getItem('iri'),
  },
  getters:{
    returnIri(state){
      return state.iri = sessionStorage.getItem('iri');
    }
  },
  mutations: {
    setIri(state, value){
      state.iri = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
