<template>
  <div v-if="state.thereIsGames">
    <div class="gameRow" v-for="(game, index) in state.games" :key="index">
      <div class="time">
        {{moment(game.start).format("YYYY-MM-DD HH:mm")}}
      </div>
      <div class="home">
        <img :src="`/img/teams/${game.home_id}.png`" />
        <span class="teamName">{{game.home_name}}</span>
        <InputText type="number" v-model="game.home_result" />
      </div>
      <div class="away">
        <img :src="`/img/teams/${game.away_id}.png`" />
        <span class="teamName">{{game.away_name}}</span>
        <InputText type="number" v-model="game.away_result" />
      </div>
    </div>
    <Button @click="test()">Tippa</Button>
  </div>
</template>

<script>
import GameHandler from "../modules/GameHandler";
import moment from "moment";
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

    function test() {
      state.games.forEach(game => {
        console.log(game);
      })
    }

    return { state, moment, test }
  }
}
</script>

<style lang="scss">
@import "../style/_variables";

  .gameRow {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    margin-top: $margin-primary;
    width: 500px;
    border: $border;
    border-radius: 5px;
    padding: 10px;
    img {
      height: 40px;
    }
  }
  .time {
    text-align: left;
  }
  .home, .away {
    display: flex;
    align-items: center;
    margin: $margin-primary;
  }
  .teamName {
    text-align: left;
    width: 330px;
    margin: $margin-primary;
  }
  .p-inputtext {
    width: 50px;
  }

  .p-button {
    background: $bg-secondary !important;
    border: $border !important;
    margin: $margin-primary !important;
  }
</style>