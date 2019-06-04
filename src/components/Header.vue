<template>
  <header class="header navbar is-light">
    <div class="header-title">
      <img
        class="img-logo"
        src="https://cdn2.iconfinder.com/data/icons/gaming-color-icons/104/22-gaming-pokemon-pokeball-512.png"
      >
      <h1 class="title has-text-warning">Pokemons</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>


<style scoped>
.header {
  /* box-shadow: 1px 1px 3px #cecece; */
}
.header-title {
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  padding: 10px;
}
.img-logo {
  height: 100px;
  margin-right: 10px;
}
</style>
