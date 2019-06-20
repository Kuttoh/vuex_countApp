<template>
    <div class="container">
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-primary" @click="removeCounter">Remove</button>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store/store';
    import * as type from '../store/mutation types/types'
    export default {
        name: "RemoveCounter",

        methods:{
            removeCounter(){
                store.dispatch({
                    type: type.Decrement,
                    amount: 1
                })
            }
        }
    }
</script>

<style scoped>

</style>
