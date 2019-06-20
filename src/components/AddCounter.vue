<template>
    <div class="container">
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-primary" v-on:click="addCounter">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store/store'
    import * as type from '../store/mutation types/types'

    export default {
        name: "AddCounter",

        methods:{
            addCounter(){
                store.dispatch({
                    type: type.Increment,
                    amount: 1
                })
            }
        }
    }
</script>

<style scoped>

</style>
