export const state = () => ({
    moviesList: []
  })
  export const mutations = {

    addMovies(state, items){
      state.moviesList = items;
    }
  }
