<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Games />
</template>

<script>
import Games from './components/Games.vue'

export default {
  name: 'App',
  components: {
    Games
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&family=Righteous&family=Teko:wght@500&display=swap');

#app {
  font-family: 'Odibee Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
