<template>
  <div v-if="state.thereIsGames">
    <div class="gameRow" v-for="(game, index) in state.games" :key="index">
      <img :src="`/img/teams/${game.home_id}.png`" /> {{game.home_name}}
       - 
       <img :src="`/img/teams/${game.away_id}.png`" /> {{game.away_name}}
       <InputText /> - <InputText />
    </div>
  </div>
</template>

<script>
import GameHandler from "../modules/GameHandler"
import { onBeforeMount, watch, reactive } from 'vue';

export default {
  setup() {
    const {games, getGamesByCompetition} = GameHandler();

    const state = reactive({
      thereIsGames: false,
      games: []
    });

    onBeforeMount(async () => {
      await getGamesByCompetition(1);
      state.games = games.value;
    })

    watch(games, async () => {
      state.thereIsGames = true;
    })

    return { state }
  }
}
</script>

<style lang="scss">
  .gameRow {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 10px;
    img {
      height: 40px;
    }
  }
</style>