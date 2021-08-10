<template lang="pug">
    movieDetail(:movies="moviesList[0].id")
</template>

<script>
import movieDetail from "~/components/movieDetail.vue";

export default {
  scrollToTop: true,
  components: {
    movieDetail,
  },
  data() {
    return {
      moviesList: [],
    };
  },
  created() {
    //Get data from store and split it based on slug
    this.moviesList = this.$store.state.moviesList.filter(
      item => item.name != null ? this.slugify(item.name) === this.$route.params.slug : ''
    );
  },
  methods: {
    slugify(string) {
      return string
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    },
  },
};
</script>
