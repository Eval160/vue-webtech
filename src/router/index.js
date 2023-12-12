import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Pokemons from '@/views/Pokemons.vue'
import Pokemon from '@/views/Pokemon.vue'

const routes = [
  { path: '/', redirect: '/pokemons', name: 'home' },
  { path: '/about', component: About, name: 'about' },
  { path: '/pokemons', component: Pokemons, name: 'pokemons' },
  { path: '/pokemons/:id', component: Pokemon, name: 'pokemon' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
