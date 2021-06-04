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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&family=Righteous&family=Teko:wght@500&display=swap');
@import "./style/_variables";

body {
  background-color: $bg-primary;
  width: 100%;
  margin: 0;
}
#app {
  font-family: $font-primary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-primary;
}
</style>
