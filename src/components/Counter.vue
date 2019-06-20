<template>
    <div class="counter">
        <div class="notification">
            <h1 class="title" align="center" style="color: #42b983">{{count}}</h1>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    export default {

        computed:{
            ...mapState({
                count: state => state.count
            }),

            ...mapGetters({
                count: 'count'
            })
        }
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
