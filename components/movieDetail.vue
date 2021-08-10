<template lang="pug">
    section
        .container.mx-auto
            .row(class="pb-20")
                div(class="grid mb-4 text-center")
                    h1(class="text-3xl text-white mb-3")  Databases of movies
            .row( class="grid grid-cols-2 justify-center")
                div(class="text-white w-full")
                    h1(class="text-3xl text-white") {{moviesLoad.name}}
                    p(v-if="moviesLoad.storyline" class="mt-3 mb-4")    {{moviesLoad.storyline}}
                    p(class="mb-4")  Director: {{moviesLoad.director}}
                    div(class="mt-8")
                      h3(class="text-xl mb-2") Categories
                      div(class="flex flex-row mt-2")
                        p(v-for="item in moviesLoad.categories" class="mr-3")    {{item}}
                    div(class="mb-3 col-span-2 mt-8")
                        h3(class="text-xl mb-2") Actors
                        div(class="grid grid-cols-3")
                          p(v-for="item in moviesLoad.actors")    {{item}}
                div(class="w-full text-white ml-5 p-4 bg-gray-700")
                    h1(class="text-2xl text-white mb-2") Edit data
                    div( v-if="error || confirm != null" :class="{'bg-red-500':error != null, 'bg-green-500': confirm != null }" class="px-3 py-2")
                      p( v-if="error != null")  {{error}}
                      p( v-if="confirm != null")  {{confirm}}
                    form(@submit="submitForm" class="text-black c-form mt-5")
                      div(class="c-form__row mb-3 flex flex-column")
                        label(for="director") Director
                        input(id="director" type="text" :placeholder="moviesLoad.director" v-model="movieInfo.director")
                      div(class="c-form__row mb-3 flex flex-column")
                        label(for="description") Storyline
                        textarea(id="description" type="text"  rows="5" :placeholder="moviesLoad.storyline" v-model="movieInfo.storyline")
                      div(class="c-form__row mb-3")
                        label(for="year") Year
                        input(id="year" type="text" :placeholder="moviesLoad.year" v-model="movieInfo.year")
                      div(class="c-form__row mb-3")
                        button(type="submit" class="py-2 px-3 bg-green-500 text-white") Edit data


</template>

<script>
import axios from 'axios';
export default {
  name: "movieDetail",
  data(){
      return{
          message: "Hello",
          name: "",
          activeEdit: false,
          error:null,
          confirm:null,
          moviesLoad:{},
          movieInfo:{
            director:"",
            storyline:"",
            year:"",
          }
      }
  },
  props: {
    movies: {
      type: Number,
      required: true,
    },
  },
  methods:{
    async submitForm() {
        const moviesData = this.moviesLoad

        //Check if some data are not empty
        if(this.movieInfo.director != ""){
            moviesData.director = this.movieInfo.director
        }
        if(this.movieInfo.storyline != ""){
            moviesData.storyline = this.movieInfo.storyline
        }
        if(this.movieInfo.year != ""){
          moviesData.year = this.movieInfo.year
        }

        // Call axios to edit data
        const moviesPut = await axios.put('http://localhost:4000/Movies/' + this.movies, moviesData)
        .then(response => {
              this.confirm = "Success edit"
        }).catch( err => {
              this.error = "Something wrong"
        })
    }
  },
  // Load data from json based on id of params
   async fetch() {
      this.moviesLoad = await fetch(
        'http://localhost:4000/Movies/' + this.movies
      ).then(res => res.json())
    }
};
</script>

<style lang="postcss" scoped>
.c-form{
  &__row{
    @apply flex flex-col mb-4;
    input{
      @apply py-2 px-3;
    }
    textarea{
      @apply  py-2 px-3;
    }

    label{
      @apply text-white mb-3;
    }
  }
}
.c-movies {
  &__item {
    /* @apply shadow-sm p-4 bg-gray-50 transition-colors duration-300 rounded-sm border; */
    @apply shadow-sm p-4 bg-gray-800 transition-colors duration-300 rounded-sm border border-gray-700 text-white;

    &:hover {
      /* @apply bg-gray-300 cursor-pointer; */
      @apply bg-gray-900 cursor-pointer;
    }
  }
}
</style>
