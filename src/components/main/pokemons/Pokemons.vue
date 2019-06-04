<template>
  <section class="section">
    <div class="container">
      <ul class="list--pokemons">
        <li v-for="pokemon of filterPokemons" :key="pokemon.name">
          <Pokemon :pokemonUrl="pokemon.url"/>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Pokemon from "./Pokemon";
export default {
  props: ["pokemons", "searchWord"],
  components: {
    Pokemon
  },
  computed: {
    filterPokemons() {
      if (this.searchWord) {
        const exp = this.buildRegex(this.searchWord);
        const filteredPokemons = this.pokemons.filter(pokemon =>
          exp.test(pokemon.name)
        );
        return filteredPokemons;
      } else {
        return this.pokemons;
      }
    }
  },
  methods: {
    buildRegex(str) {
      const arr = str.split("");
      const exp = arr.map((x, i) => `(.*?)${arr[i]}`).join("");
      return new RegExp(exp, "gi");
    }
  }
};
</script>

<style scoped>
.list--pokemons {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
}
</style>