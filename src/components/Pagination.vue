<template>
    <div>
        <div v-for="index in calculate()">
            <button v-on:click="$emit('click', index)">{{index}}</button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class People extends Vue {
        @Prop() private count!: number;
        @Prop() private size!: number;

        private calculate(): Array<number> {
            let accResult: Array<number> = [];

            for (let i = 0; i < this.count; i += this.size) {
                const pageIndex: number = (i/this.size) + 1;

                accResult.push(pageIndex);
            }

            return accResult;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>