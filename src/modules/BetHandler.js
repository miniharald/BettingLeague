import { ref } from "vue";
import { externalFetch } from "./externalFetch";

const bets = ref(null);
const betsError = ref(null);

export default function BetHandler() {
    async function getBetsByLeagueAndUser(leagueId, userId) {
      let result;
      try {
        result = await externalFetch(`http://192.168.1.2:8090/api/league/${leagueId}/user/${userId}`);
        
        bets.value = result.bets;
      } catch (error) {
        betsError.value = error;
        return
      }  
    }
  
    return { getBetsByLeagueAndUser, bets, betsError }
  }