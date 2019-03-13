<template>
  <div>
      <input v-on:keyup="$emit('custom-keyup', $event)" type="text">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {PeopleEntity} from "./People.entity";

@Component
export default class CustomInput extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.film-name {
    background: blue;
}
</style>
