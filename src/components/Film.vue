<template>
  <div>
        <span class="film-name">{{film}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {PeopleEntity} from "./People.entity";

@Component
export default class People extends Vue {
  @Prop() private film!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.film-name {
    background: blue;
}
</style>
