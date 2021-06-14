<template>
  <div class="games" v-if="state.thereIsGames">
    <div class="gameRow" v-for="(game, index) in state.games" :key="index">
      <div class="time">
        {{moment(game.start).format("YYYY-MM-DD HH:mm")}}
      </div>
      <div class="home">
        <img :src="`/img/teams/${game.home_id}.png`" />
        <span class="teamName">{{game.home_name}}</span>
        <InputText type="number" v-model="game.home_result" :disabled="timeHasExpired(game.start)" />
      </div>
      <div class="away">
        <img :src="`/img/teams/${game.away_id}.png`" />
        <span class="teamName">{{game.away_name}}</span>
        <InputText type="number" v-model="game.away_result" :disabled="timeHasExpired(game.start)" />
      </div>
    </div>
    <Button @click="test()">Tippa</Button>
  </div>
</template>

<script>
import GameHandler from "../modules/GameHandler";
import UserHandler from "../modules/UserHandler";
import BetHandler from "../modules/BetHandler";
import moment from "moment";
import { onBeforeMount, watch, reactive } from 'vue';

export default {
  setup() {
    const { addBet, getBetsByLeagueAndUser, bets } = BetHandler();
    const { currentUser } = UserHandler();
    const { games, getGamesByCompetition } = GameHandler();

    const state = reactive({
      thereIsGames: false,
      games: [],
      bets: []
    });

    onBeforeMount(async () => {
      await getGamesByCompetition(1);
      await getBetsByLeagueAndUser(1, currentUser.value.id);
      state.games = games.value;
      state.bets = bets.value;
    })

    watch(games, async () => {
      state.thereIsGames = true;
    })

    function test() {
      state.games.forEach(game => {
        if (game.home_result && game.away_result) {
          if (state.bets.find(bet => game.id === bet.game_id)) {
            console.log("MATCH");
          } else {
            console.log("YES");
            addBet({
              leagueId: 1, 
              userId: 
              currentUser.value.id, 
              gameId: game.id,
              homeResult: game.home_result,
              awayResult: game.away_result
            });
          } 
        }
        
      })
    }

    function timeHasExpired(date) {
      return moment().isAfter(date)
    }

    return { state, moment, test, timeHasExpired }
  }
}
</script>

<style lang="scss" scoped>
  @import "../style/_variables";
  @import "../style/_button-design";

  .games {
    width: 100%;
  }
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
</style>