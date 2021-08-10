import axios from 'axios';
export const strict = false;

export const state = () => ({
  moviesList: []
})
export const mutations = {

  addMovies(state, items){
    state.moviesList = items;
  }
}

export const actions = {

  async nuxtServerInit({commit}, {store}){

      const moviesList = await axios.get('http://localhost:4000/Movies')
      .then(response => {
        commit('addMovies', response.data)
      }).catch( err => {
         //console.log(err);
      })
  },

    // async moviesListEdit ({ commit }, data) {
    //   try {
    //     const moviesListPut = await axios.put('https://app.fakejson.com/q/aLn84gdN?token=aOW21-yNbXHbVjok9QpqyA', data)
    //     .then(response => this.setState(response.data));
    //   } catch (error) {
    //     return Promise.reject(error.response.data)
    //   }
    // }
}
