<template lang="pug">
    aside
        div(class="c-sidebar p-4 bg-gray-900 text-white border border-gray-800")
            h3(class="text-xl mb-4") Categories
            div(class="c-sidebar__in")
                a(v-for="item in categories" class="c-sidebar__in-item" :class="{'active': active == item}" @click="$emit('update:activeCategory',item)") {{item}}
                a(class="c-sidebar__in-item" :class="{'active': active == null}" @click="$emit('update:activeCategory',null)") All
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      activeCategory: null,
    };
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
    active: {
      type: String,
      required: false,
    },
  },
  computed: {},
};
</script>

<style lang="postcss" scoped>
.c-sidebar {
  &__in {
    &-item {
      @apply mb-2 text-gray-500 block cursor-pointer border-b-2 pb-2 border-gray-800;
      &:hover {
        @apply text-gray-100 transition-all bg-gray-900;
      }
      &.active {
        @apply text-gray-100 transition-all bg-gray-900;
      }
    }
  }
}
</style>
