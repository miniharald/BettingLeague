import { ref } from "vue";
import { externalFetch } from "./externalFetch";

const games = ref(null);
const gamesError = ref(null);

export default function GameHandler() {
    async function getGamesByCompetition(compId) {
      let result;
      try {
        result = await externalFetch("http://192.168.1.2:8090/api/comp/" + compId);
        
        games.value = result.games;
      } catch (error) {
        gamesError.value = error;
        return
      }  
    }
  
    return { getGamesByCompetition, games, gamesError }
  }