<template>
    <div class="container">
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-primary" v-on:click="addCounter"
                        style="background-color: #42b983">Add
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store/store'
    import * as type from '../store/mutation types/types'

    export default {
        name: "AddCounter",

        methods: {
            addCounter() {
                // store.dispatch('increment')

                store.commit('INCREMENT');
            }
        },
    }
</script>

<style scoped>

</style>
