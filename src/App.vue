<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Testing Props</h1>
    <hr>
    <h2>Testing by using props directly</h2>
    <RMainComp />
    <hr>
    <h2>Testing by using props assigned to data variable</h2>
    <RMainComp2 />
    <hr>
    <h2>Testing by using props assigned to computed variables which are working as expected</h2>
    <RMainComp3 />
    <hr>
    <h2>Testing by using props assigned to computed variables which are NOT working as expected</h2>
    <RMainComp4 />
  </div>
</template>

<script>
import RMainComp from './components/RMainComp.vue'
import RMainComp2 from './components/RMainComp2.vue'
import RMainComp3 from './components/RMainComp3.vue'
import RMainComp4 from './components/RMainComp4.vue'

export default {
  name: 'App',
  components: {
    RMainComp,
    RMainComp2,
    RMainComp3,
    RMainComp4

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main {
  margin: 2em;
}
</style>
