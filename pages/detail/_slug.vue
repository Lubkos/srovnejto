<template lang="pug">
    movieDetail(:movies="moviesList[0]")
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
    this.moviesList = this.$store.state.data.moviesList.filter(
      item => this.slugify(item.name) === this.$route.params.slug
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
