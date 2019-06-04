<template>
  <div>
    <SearchBar @getSearchWord="searchWord=$event"/>
    <Pokemons :pokemons="pokemons" :searchWord="searchWord"/>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import Pokemons from "./pokemons/Pokemons.vue";

export default {
  name: "Main",
  components: {
    SearchBar,
    Pokemons
  },
  data() {
    return {
      pokemons: [],
      searchWord: ""
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=40")
      .then(res => (this.pokemons = res.data.results));
  }
};
</script>

<style scoped>
</style>