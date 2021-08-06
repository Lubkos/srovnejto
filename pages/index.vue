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
      errored: false,
      loading: true,
    };
  },
  created(){
    this.moviesList = this.$store.state.data.moviesList;
  },
};
</script>
