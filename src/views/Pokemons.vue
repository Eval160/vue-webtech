<script setup>
import usePokemons from '@/composables/pokemons'

const { data } = usePokemons('limit/100')


</script>
<template>
  <h1>Pokemons</h1>
  <ul v-if="data">
    <li v-for="pokemon in data" :key="pokemon.id">
      <router-link :to="{name: 'pokemon', params: {id: pokemon.id}}">
        {{ pokemon.name }}
      </router-link>
    </li>
  </ul>
  <div v-else> Loading...</div>
</template>
