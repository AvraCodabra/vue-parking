<template>
  <Parking />
</template>

<script>
import Parking from './components/Parking.vue'

export default {
  name: 'App',
  components: {
    Parking
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 500px;
  margin: auto;
}
</style>
