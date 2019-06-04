<template>
  <div>
    <Header/>
    <Main/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/main/Main.vue";
export default {
  name: "app",
  components: {
    Header,
    Main
  }
};
</script>

<style>
</style>
