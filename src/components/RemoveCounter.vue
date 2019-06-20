<template>
    <div class="container">
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-primary" :disabled='isZero' @click="removeCounter" style="background-color: red">Remove</button>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store/store';
    import * as type from '../store/mutation types/types'
    import {mapGetters} from 'vuex'

    export default {
        name: "RemoveCounter",

        methods:{
            removeCounter(){
                store.dispatch('decrement')
            }
        },

        computed: {
            ...mapGetters({
                isZero: 'isZero'
            })
        }
    }
</script>

<style scoped>

</style>
