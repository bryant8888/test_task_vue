<template>
    <div>
        <CustomInput v-on:custom-keyup="search($event)"></CustomInput>
        <div id="app">
            <People v-bind:peoples=peoplesList></People>
        </div>
        <div class="pagination">
            Всего сущностей: {{peoplesCount}}
        </div>
        <div class="pagination-buttons">
            <Pagination v-on:click=paginate($event) v-bind:count=peoplesCount v-bind:size=pageSize></Pagination>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import People from './components/People.vue';
    import CustomInput from './components/CustomInput.vue';
    import Pagination from './components/Pagination.vue';
    import {fetchPeoples} from './services/fetch.peoples';
    import {PeopleEntity} from "./components/People.entity";
    import {PeopleInfo} from "./components/People.info";
    import {RequestPeople} from "./services/entities/request.entity";

    @Component({
        components: {
            People,
            Pagination,
            CustomInput
        },
    })
    export default class App extends Vue {
        peoplesList: Array<PeopleEntity> = [];
        peoplesCount: number = 0;
        pageSize: number = 10;
        searchfield: string = '';
        private $accessThread: number = 0;

        beforeMount(): void {
            this.updatePeoples(new RequestPeople(1, this.searchfield));
        };

        updatePeoples(request: RequestPeople): void {
            fetchPeoples(request).then((src: PeopleInfo): void => {
                this.peoplesList = src.peoples;
                this.peoplesCount = src.count;
            });
        }

        paginate(index: number): void {
            this.updatePeoples(new RequestPeople(index, this.searchfield));
        }

        search(event: any): void {
            this.searchfield = event.target.value;

            clearTimeout(this.$accessThread);
            this.$accessThread = setTimeout(() => {
                this.updatePeoples(new RequestPeople(1, this.searchfield));
            }, 1500);
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>
