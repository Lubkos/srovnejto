<template lang="pug">
    section
        .container.mx-auto
            .row
                div(class="grid mb-4 text-center")
                    h1(class="text-3xl text-white mb-3")  Databases of movies
            .row(class="grid grid-cols-4")
                sidebar(class="col-span-1 mr-4" :categories="categories" :active="activeCategory" :activeCategory.sync="activeCategory")
                div(class="c-movies")
                    article(class="c-movies__item" v-for="(item,index) in getFilteredData.slice(0,limit)" :key="index")
                        nuxt-link(:to="{path: 'detail/' + slugify(item.name), params: { name: item.name }}" tag="a" prefetch )
                            div(class="c-movies__item-image")
                                img( :src="require('~/assets/img/illustration/mandalorian.jpg')")
                            h2(class="text-lg mb-3 min-h-5" v-model="item.name" v-text="item.name" contenteditable)
                            p(class="mb-2")
                                strong  Director:
                                |   {{item.director}}
                            div(class="flex flex-row flex-wrap text-sm")
                                p(v-for="itemCategory in item.categories" class="mr-3") {{itemCategory}}
                            span(class="mx-auto bg-gray-500 mt-3 px-3 py-2 absolute bottom-5 block") Show detail
</template>

<script>
import sidebar from "~/components/sidebar.vue";

export default {
  name: "movies",
  data() {
    return {
      showDesc: "",
      moviesList: [],
      categoriesList: [],
      activeCategory: null,
    };
  },
  components: {
    sidebar,
  },
  props: {
    movies: {
      type: Array,
      required: true,
    },
    limit: {
      type: Number,
      required: false,
    },
  },
  computed: {
    //Filter data based on categories
    getFilteredData() {
      var results = [];
      if (this.activeCategory != null) {
        this.movies.filter((item) =>
          item.categories.filter((itemin) =>
            itemin == this.activeCategory ? results.push(item) : ""
          )
        );
      } else {
        results = this.movies;
      }
      return results;
    },
    //Filter join same categories to one array
    categories() {
      let myArray = [];
      this.movies.filter((item) =>
        item.categories.filter((itemin) => myArray.push(itemin))
      );
      [...new Set(myArray)];
      myArray.filter((item, index) => myArray.indexOf(item) === index);
      return myArray.reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        []
      );
    },
  },
  methods: {

    // showMore(input) {
    //   if (this.showDesc == input) {
    //     return this.showDesc = "";
    //   } else {
    //     return this.showDesc = input;
    //   }
    // },

    // Set active category
    setActiveCategory(category) {
      this.activeCategory = category;
    },
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

<style lang="postcss" scoped>
.c-movies {
    @apply grid xl:grid-cols-3 md:grid-cols-2 grid-rows-3 gap-4 col-span-3 pb-20;
  &__item {
    @apply shadow-sm p-4 bg-gray-800 transition-colors duration-300 rounded-sm border border-gray-700 text-white relative pb-20;

    &:hover {
      @apply bg-gray-900 cursor-pointer;
    }

    &-image{
        @apply w-full h-36 overflow-hidden relative mb-3;

        img{
             @apply h-full w-full absolute object-cover object-top;
        }
    }
  }
}
</style>
