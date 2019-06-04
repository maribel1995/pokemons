<template>
  <div class="card pokemon">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <span class="is-family-code has-text-weight-bold">{{order}}</span>
          <figure class="image">
            <img :src="imgUrl" :alt="imgUrl">
          </figure>
          <div class="tag--center">
            <p
              class="tag"
              v-for="type of types"
              :key="type.type.name"
            >{{type.type.name.toUpperCase()}}</p>
          </div>
        </div>
        <div class="media-content">
          <p class="title is-4">{{captilize(name)}}</p>
          <div class="content">
            <p class="is-size-6 is-family-monospace">Abilities</p>
            <ul>
              <li
                v-for="ability of abilities"
                :key="ability.ability.name"
              >{{captilize(ability.ability.name)}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pokemon",
  props: ["pokemonUrl"],
  data() {
    return {
      pokemon: {},
      imgUrl: "",
      abilities: [],
      name: "",
      types: "",
      order: ""
    };
  },
  created() {
    this.$http.get(this.pokemonUrl).then(res => {
      const data = res.data;
      this.pokemon = data;
      this.imgUrl = data.sprites.front_default;
      this.abilities = data.abilities;
      this.name = data.name;
      this.types = data.types;
      this.order = data.order;
    });
  },
  methods: {
    captilize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
};
</script>

<style scoped>
.pokemon {
  margin: 5px 5px 5px 1px;
  width: 330px;
  min-width: 300px;
  height: 230px;
}
.tag {
  margin-right: 5px;
  background-color: #ff7171;
  color: #fff;
}
.tag--center {
  text-align: center;
}
</style>