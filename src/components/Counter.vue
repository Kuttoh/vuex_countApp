<template>
    <div class="counter">
        <div class="notification">
            <h1 class="title" align="center" style="color: #42b983">{{count}}</h1>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        computed: mapState({
            count: state => state.count

            // // For cases where negative values should not be shown
            // count: function(state){
            //     if(state.count < 0){
            //         state.count = 0;
            //         return state.count;
            //     }
            //     return state.count;
            // }
        })
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {*/
/*  font-weight: normal;*/
/*}*/
/*ul {*/
/*  list-style-type: none;*/
/*  padding: 0;*/
/*}*/
/*li {*/
/*  display: inline-block;*/
/*  margin: 0 10px;*/
/*}*/
/*a {*/
/*  color: #42b983;*/
/*}*/
</style>
