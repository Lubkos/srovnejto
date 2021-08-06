import axios from 'axios';

export const state = () => ({
})

export const actions = {

  async nuxtServerInit({commit}, {store}){

      const moviesList = await axios.get('https://gist.githubusercontent.com/jechtom-srovnejto/0353eef29258e4f59422a8a753ff8874/raw/0a2971d0900d5645b3209a1ebfe73dceb2d6e4fd/movies.json')
      .then(response => {
        commit('data/addMovies', response.data.Movies);
      })
  }
}
