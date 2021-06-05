import { ref } from "vue";
import { externalFetch } from "./externalFetch";

const bets = ref(null);
const betsError = ref(null);

export default function BetHandler() {
  async function getBetsByLeagueAndUser(leagueId, userId) {
    let result;
    try {
      result = await externalFetch(`http://192.168.1.2:8090/api/bets/league/${leagueId}/user/${userId}`);
      
      bets.value = result.bets;
    } catch (error) {
      betsError.value = error;
      return
    }  
  }

  async function addBet(bet) {
      betsError.value = null;
      let result;
  
      try {
        result = await externalFetch("http://192.168.1.2:8090/api/bets", "POST", bet);
        if (result.error) {
          userError.value = result.error;
          return;
        }
  
      } catch (error) {
        betsError.value = error;
        return;
      }
    }

  return { getBetsByLeagueAndUser, addBet, bets, betsError }
}