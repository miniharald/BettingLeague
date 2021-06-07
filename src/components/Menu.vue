<template>
  <div class="desktop">
    <span>Vänner</span>
    <span>Ligor</span>
    <span>Profil</span>
    <span>Logga ut</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../style/_variables";

  .desktop {
    display: flex;
    justify-content: center;
    background-color: $bg-secondary;
    font-family: $font-secondary;
    font-size: x-large;
    span {
      margin: $margin-primary;
    }
  }
</style>