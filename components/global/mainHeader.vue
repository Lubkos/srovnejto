<template lang="pug">
  header(class="bg-gray-900 z-index-2 mt-0 border border-b-2 border-gray-800")
    div(class="py-4" )
      div(class="container mx-auto")
        div(class="row items-center grid grid-cols-2 justify-between")
            nuxt-link(to="/" class="text-white")
              img(:src="require('~/assets/img/svg/logo_footer.svg')")
            p(class="text-sm ml-3 mb-0 text-white text-right") Tailiwind | Nuxt | Vue2 | Axios
</template>

<script>
export default {
  name: "mainHeader",
}
</script>