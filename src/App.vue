<script setup>

</script>

<template>
  <nav class="navbar">
    <ul>
      <li>
        <router-link :to="{name: 'home'}">Home</router-link>
      </li>
      <li>
        <router-link :to="{name: 'pokemons'}">Pokemons</router-link>
      </li>
      <li>
        <router-link :to="{name: 'contact'}">Contact</router-link>
      </li>
    </ul>
  </nav>
  <router-view></router-view>
</template>


<style>
     h1 {
      text-align: center;
      margin-bottom: 1rem;
    }
</style>
