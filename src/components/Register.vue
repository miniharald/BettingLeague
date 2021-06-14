<template>
  <form>
    <span class="p-float-label">
      <InputText id="username" type="text" v-model="state.form.username" />
      <label for="username">Användarnamn</label>
    </span>
    <span class="p-float-label">
      <InputText id="firstName" type="text" v-model="state.form.firstName" />
      <label for="firstName">Förnamn</label>
    </span>
    <span class="p-float-label">
      <InputText id="lastName" type="text" v-model="state.form.lastName" />
      <label for="lastName">Efternamn</label>
    </span>
    <span class="p-float-label">
      <InputText id="mail" type="email" v-model="state.form.mail" />
      <label for="mail">E-mail</label>
      <small v-if="userError === 'Ifylld e-mail används redan!'" class="p-error">{{userError}}</small>
    </span>
    <span class="p-float-label">
      <Password id="password" v-model="state.form.password" toggleMask />
      <label for="password">Lösenord</label>
      <small v-if="!state.form.pw_match" class="p-error">Lösenorden matchar inte.</small>
      <small v-if="!state.form.pw_regex_check" class="p-error">Lösenorden måste innehålla både stora och små bokstäver och vara minst åtta tecken långt.</small>
    </span>
    <span class="p-float-label">
      <InputText id="repeat_password" type="password" v-model="state.form.repeat_password" />
      <label for="repeat_password">Upprepa lösenord</label>
    </span>
    <div class="formButtons">
      <Button label="Återställ" icon="pi pi-times" iconPos="left" @click="reset()" />
      <Button label="Registrera" icon="pi pi-check" iconPos="left" @click="submitForm()" />
    </div>
  </form> 
</template>

<script>
import { reactive } from "vue";
import PageHandler from '../modules/PageHandler';
import UserHandler from '../modules/UserHandler';

export default {
  setup() {
    const state = reactive({
      form: {
        username: "",
        firstName: "",
        lastName: "",
        mail: "",
        password: "",
        repeat_password: "",
        pw_match: true,
        pw_regex_check: true
      }
    });

    const { createUser, userError } = UserHandler();
    const { showGamesPage, showRegisterPage } = PageHandler();

    function reset() {
      state.form.username = "";
      state.form.firstName = "";
      state.form.lastName = "";
      state.form.mail = "";
      state.form.password = "";
      state.form.repeat_password = "";
      state.form.pw_match = true;
      state.form.pw_regex_check = true;
    }

        async function submitForm() {
      if (checkPasswordMatch() && checkPasswordRegex()) {
        await createUser(state.form);
        if(!userError.value) {
          showRegisterPage.value = false;
          showGamesPage.value = true;
        }
      }
    }

    function checkPasswordMatch() {
      if(state.form.password !== state.form.repeat_password) {
        state.form.pw_match = false;
        return false;
      }

      state.form.pw_match = true;
      return true;
    }

    function checkPasswordRegex() {
      let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if(!regex.test(state.form.password)) {
        state.form.pw_regex_check = false;
        return false;
      }

      state.form.pw_regex_check = true;
      return true;
    }

    return { state, reset, submitForm }
  }
}
</script>

<style lang="scss" scoped>
  @import "../style/_form";
  @import "../style/_button-design";


</style>