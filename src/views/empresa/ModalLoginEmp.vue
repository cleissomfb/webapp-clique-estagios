<template>
  <div>
    <b-form @submit.prevent="logarEmpresa()">
      <b-row>
        <b-col cols="12">
          <b-form-group id="loginEmp" label="CNPJ:" label-for="CNPJ">
            <b-form-input
              id="loginEmp"
              v-model="loginEmp"
              type="text"
              required
              v-mask="maskCnpj"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group id="senhaEmp" label="Senha:" label-for="Senha">
            <b-form-input
              id="senhaEmp"
              v-model="senhaEmp"
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
            <a href="/cadastroEmpresa">Clique Aqui</a>
          </small>
          <small class="form-text text-muted">
            Esqueceu a senha?
            <a href="/recuperarSenhaEmpresa">Clique Aqui</a>
          </small>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import { signInEmp } from "@/authEmp";

export default {
  name: "ModalLoginEmp",
  data() {
    return {
      // Login Empresa
      loginEmp: "",
      senhaEmp: "",
      errorMsg: "",
      maskCnpj: "##.###.###/####-##",
    };
  },
  methods: {
    async logarEmpresa() {
      localStorage.removeItem('token');
      localStorage.removeItem('empresa');

      await signInEmp(this.loginEmp, this.senhaEmp).catch(error => {
        console.log(error);
        //this.errorMsg = "Usuário ou senha inválidos.";
        this.errorMsg = error
        this.showAlertDanger();
      });
      this.$router.push("/empresa/homeEmpresa");
    },
    showAlertDanger(append = false) {
      this.toastCount++;
      this.$bvToast.toast(this.errorMsg, {
        title: "Error",
        autoHideDelay: 5000,
        appendToast: append,
        variant: "danger",
        solid: true,
      });
    },
  },
};
</script>

<style>
</style>