<template lang="pug">
  div
    movies(:movies="moviesList" :limit="9")
</template>

<script>
import movies from "~/components/movies";

export default {
  name: "index",
  components: { movies },
  scrollToTop: true,
  data() {
    return {
      moviesList: Array,
    };
  },
  created(){
    //Get data from store
    this.moviesList = this.$store.state.moviesList;
  },
};
</script>
