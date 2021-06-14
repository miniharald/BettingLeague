<template>
  <form>
    <h1>Logga in</h1>
    <span class="p-float-label">
      <InputText id="mail" type="email" v-model="state.form.mail" />
      <label for="mail">E-mail</label>
    </span>
    <span class="p-float-label">
      <InputText id="password" type="password" v-model="state.form.password" />
      <label for="password">Lösenord</label>
    </span>
    <div v-if="loginError">{{loginError}}</div>
    <div class="formButtons">
      <Button label="Logga In" icon="pi pi-sign-in" iconPos="left" @click="submitForm()" />
    </div>
    <div class="link" @click="openRegisterPage()">Har du inget konto?</div>
  </form>
</template>

<script>
import { reactive } from "vue";
import UserHandler from '../modules/UserHandler';
import PageHandler from '../modules/PageHandler';

const state = reactive({
      form: {
        mail: "",
        password: ""
      }
    });

export default {
  setup() {
    const { login, loginError } = UserHandler();
    const { showGamesPage, showLoginPage, showRegisterPage } = PageHandler();

    async function submitForm() {
      await login(state.form.mail, state.form.password)
      if (!loginError.value) {
        showLoginPage.value = false;
        showGamesPage.value = true;
      }
    }

    function openRegisterPage() {
      showLoginPage.value = false;
      showRegisterPage.value = true;
    }

    return { state, submitForm, openRegisterPage, loginError }
  }

}
</script>

<style lang="scss" scoped>
@import "../style/_form";
@import "../style/_button-design";

.link {
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    color: $text-secondary;
    text-decoration: underline;
  }
}

@media only screen and (max-height: 414px) {
  .link {
    margin-top: 10px;
  }
}
</style>