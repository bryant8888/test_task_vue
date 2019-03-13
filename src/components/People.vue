<template>
    <div>
        <div v-for="people in peoples" class="entity">
            <div class="entity-container">
                <div>Имя: <span>{{people.name}}</span></div>
                <div>Масса: <span>{{people.mass ? people.mass : 'Неизвестно'}}</span></div>
                <div>Пол: <span>{{people.gender}}</span></div>
                <div>Фильмы:</div>
                <div>
                    <Film v-for="film in people.films" v-bind:film=film></Film>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {PeopleEntity} from "./People.entity";
    import Film from './Film.vue';

    @Component({
        components: {
            Film
        },
    })
    export default class People extends Vue {
        @Prop() private peoples!: Array<PeopleEntity>;
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .entity {
        display: inline-block;
        margin: 8px;
        &-container {
            background: aqua;
            color: black;
            padding: 15px;
            border-radius: 8px;
            width: 300px;
            display: inline-block;
        }
    }
</style>
