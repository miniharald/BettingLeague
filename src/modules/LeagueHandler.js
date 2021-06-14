import { ref } from "vue";
import { externalFetch } from "./externalFetch";

const leagues = ref(null);
const leaguesError = ref(null);

export default function LeagueHandler() {
    async function getLeaguesByCreator(creatorId) {
      let result;
      try {
        result = await externalFetch(`http://213.164.198.82:8090/api/leagues/creator/${creatorId}`);
        
        leagues.value = result.leagues;
      } catch (error) {
        leaguesError.value = error;
        return
      }  
    }
  
    return { getLeaguesByCreator, leagues, leaguesError }
  }