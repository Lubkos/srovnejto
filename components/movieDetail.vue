<template lang="pug">
    section
        .container.mx-auto
            .row
                div(class="grid mb-4 text-center")
                    h1(class="text-3xl text-white mb-3")  Databases of movies
            .row
                div(class="w-full text-white")
                    h1(class="text-3xl text-white" contenteditable @input="send"  v-model="movies.name" ) {{movies.name}}
                    p(v-if="movies.storyline" class="my-3")    {{movies.storyline}}
                    p(class="mb-3")  Director: {{movies.director}}
                    div(class="grid grid-cols-2")
                        div(class="mb-3")
                            h3(class="text-xl mb-2") Categories
                            p(v-for="item in movies.categories")    {{item}}
                        div(class="mb-3")
                            h3(class="text-xl mb-2") Actors
                            p(v-for="item in movies.actors")    {{item}}
</template>

<script>
export default {
  name: "movieDetail",
  data(){
      return{
          message: "Hello"
      }
  },
  props: {
    movies: {
      type: Object,
      required: true,
    },
  },
  methods:{
      send(event){
          this.$emit('input', event.target.innerText)
      }
  }
};
</script>

<style lang="postcss" scoped>
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
