import { ref } from "vue";

const showGamesPage = ref(false);
const showLoginPage = ref(false);
const showRegisterPage = ref(false);

export default function ModalHandler() {

  function closeAllModals() {
    showRegisterPage.value = false;
    showGamesPage.value = false;
    showLoginPage.value = false;
  }

  return {
    showGamesPage,
    showLoginPage,
    showRegisterPage,
    closeAllModals
  }
}