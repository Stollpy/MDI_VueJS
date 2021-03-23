import { createStore } from 'vuex'

export default createStore({
  state: {
    api: 'https://localhost:8000',
    iri: localStorage.getItem('iri'),
  },
  getters:{
    returnIri(state){
      return state.iri = localStorage.getItem('iri');
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
