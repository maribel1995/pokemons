<template>
  <section class="section search-bar">
    <div class="container">
      <h1 class="title has-text-light is-family-code">Find a Pokemon</h1>
      <input
        class="input"
        type="text"
        @input="handleChange($event.target.value)"
        placeholder="Search for Pokemon"
      >
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    handleChange(value) {
      this.$emit("getSearchWord", value);
    }
  }
};
</script>

<style scoped>
.search-bar {
  background-color: #263238;
}
</style>