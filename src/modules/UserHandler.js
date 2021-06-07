import { ref } from "vue";
import { externalFetch } from "./externalFetch";

const currentUser = ref(null);
const loginError = ref(null);
const userError = ref(null);

export default function UserHandler() {

  function setCurrentUser() {
    currentUser.value = JSON.parse(localStorage.getItem("currentUser"));
  }

  function logout() {
    localStorage.removeItem("currentUser");
    currentUser.value = null;
  }

  async function login(mail, password) {
    loginError.value = null;
    let result;

    try {
      result = await externalFetch("http://192.168.1.2:8090/api/login", "POST", {
        mail: mail,
        password: password,
        });
        if (result.error) {
          loginError.value = result.error;
          return;
        }

      currentUser.value = result.user;
      localStorage.setItem("currentUser", JSON.stringify(currentUser.value));
    } catch (error) {
      loginError.value = error;
      return;
    }
  }

  async function updateUser(user) {
    userError.value = null;
    let result;

    try {
      result = await externalFetch("http://192.168.1.2:8090/api/users/" + user.id, "PUT", user);
      if (result.error) {
        userError.value = result.error;
        return;
      }

      currentUser.value = result.user;
      localStorage.setItem("currentUser", JSON.stringify(currentUser.value));
    } catch (error) {
      userError.value = error;
      return;
    }
  }

  async function createUser(form) {
    userError.value = null;
    let result;

    try {
      result = await externalFetch("http://192.168.1.2:8090/api/users", "POST", form);
      if (result.error) {
        userError.value = result.error;
        return;
      }

    } catch (error) {
      userError.value = error;
      return;
    }
  }

  return {
    login,
    logout,
    createUser,
    updateUser,
    setCurrentUser,
    currentUser,
    loginError,
    userError
  }
}