<template>
  <div>
    <b-form @submit.prevent="logarUsuario()">
      <b-row>
        <b-col cols="12">
          <b-form-group id="loginUser" label="CPF:" label-for="CPF">
            <b-form-input
              id="loginUser"
              v-model="loginUser"
              type="text"
              required
              v-mask="maskCpf"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group id="senhaUser" label="Senha:" label-for="Senha">
            <b-form-input
              id="senhaUser"
              v-model="senhaUser"
              type="password"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-button type="submit" block variant="primary">Login</b-button>
        </b-col>
        <b-col cols="12">
          <small class="form-text text-muted mt-3">
            Cadastre-se,
            <a href="/cadastroUsuario">Clique Aqui</a>
          </small>
          <small class="form-text text-muted">
            Esqueceu a senha?
            <a href="/recuperarSenhaUsuario">Clique Aqui</a>
          </small>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import { signInUser } from "@/authUser";

export default {
  name: "ModalLoginUser",
  data() {
    return {
      // Login Usuário
      loginUser: "",
      senhaUser: "",

      maskCpf: "###.###.###-##",
    };
  },
  methods: {
    async logarUsuario() {
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');

      await signInUser(this.loginUser, this.senhaUser).catch((error) => {
        console.log(error);
        //this.errorMsg = "Usuário ou senha inválidos.";
        // this.errorMsg = error
        //this.showAlertDanger();
      });
      this.$router.push("/usuario/homeUsuario");
    },
  },
};
</script>

<style>
</style>