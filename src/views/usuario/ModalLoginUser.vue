<template>
  <div>
    <b-form @submit.prevent="logarUsuario()">
      <b-overlay :show="show" rounded="sm">
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
          <b-col md="12" style="text-align: center">
            <b-button type="submit" class="btn-home">Login</b-button>
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
      </b-overlay>
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
      show: false,
    };
  },
  methods: {
    async logarUsuario() {
      this.show = true;
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");

      await signInUser(this.loginUser, this.senhaUser).catch((error) => {
        // console.log(error);
        this.errorMsg = "CPF ou senha inválidos.";
        // this.errorMsg = error
        this.showAlertDanger();
      });
       this.show = false;
      this.$router.push("/usuario/visualizarVagas");
    },
    showAlertDanger(append = false) {
      this.toastCount++;
      this.$bvToast.toast(this.errorMsg, {
        title: "Error",
        autoHideDelay: 5000,
        appendToast: append,
        variant: "danger",
        solid: true,
        toaster: "b-toaster-bottom-right",
      });
    },
  },
};
</script>

<style>
</style>