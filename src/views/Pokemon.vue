<script setup>
  import { useRoute } from 'vue-router'
  import usePokemons from '@/composables/pokemons'

  const route = useRoute()
  const id = route.params.id

  const { data } = usePokemons(id)

</script>
<template>
  <div v-if="data">
    <h1>Pokemon {{ data.name }}</h1>
    <img :src="data.image" alt="">
  </div>
</template>
