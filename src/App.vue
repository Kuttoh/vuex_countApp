<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <counter></counter>
    <br>
    <div class="columns">
      <div class="column is-11">
        <RemoveCounter></RemoveCounter>
      </div>
      <div class="column auto">
        <AddCounter></AddCounter>
      </div>
    </div>
<!--    <router-view/>-->
  </div>
</template>

<script>
import Counter from './components/Counter'
import AddCounter from './components/AddCounter'
import RemoveCounter from './components/RemoveCounter'

export default {
  name: 'App',

  components: {Counter, AddCounter, RemoveCounter}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
