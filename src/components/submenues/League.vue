<template>
  <div class="desktop">
    <span>Mina ligor</span>
    <div class="myLeagues" v-if="state.thereAreLeagues">
      <span v-for="(league, index) in state.leagues" :key="index">
        - {{league.name}}
      </span>
    </div>
    <span>Skapa ny liga</span>
    <span>Ansök till liga</span>
  </div>
</template>

<script>
import LeagueHandler from '../../modules/LeagueHandler';
import { onBeforeMount, watch, reactive } from 'vue';

export default {
  setup() {
    const { getLeaguesByCreator, leagues } = LeagueHandler();

    const state = reactive({
      thereAreLeagues: false,
      leagues: []
    });

    onBeforeMount(async () => {
      await getLeaguesByCreator(1);
      state.leagues = leagues.value;
    })

    watch(leagues, async () => {
      state.thereAreLeagues = true;
    })

    return { state }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/_variables";
@import "../../style/menu-design";

.desktop {
  display: flex;
  flex-direction: column;
  width: 200px;
  span {
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.myLeagues {
  display: flex;
  flex-direction: column;
  font-family: $font-tertiary;
  font-size: large;
  margin-bottom: $margin-primary;
}
</style>