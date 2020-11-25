<template>
  <div class="section mt-5 imagemConteiner">
    <div class="imagemHome">
      <div class="container">
        <div class="card-container card-interno">
          <b-row>
            <b-col md="12">
              <h3>Olá, Bem-vindo(a)</h3>
            </b-col>
            <b-col md="12">
              <a href="/empresa/perfilEmpresa"
                ><b-button class="btn-home mt-4">Editar Perfil</b-button></a
              >
            </b-col>
            <b-col md="12">
               <a href="/empresa/cadastrarVaga"
                ><b-button class="btn-home"
                >Cadastrar Vaga</b-button
              ></a>
            </b-col>
            <b-col md="12">
              <a href="/empresa/vagasCadastradas"
                ><b-button class="btn-home"
                >Vagas Cadastradas</b-button
              ></a>
            </b-col>
          </b-row>
        </div>
      </div>

      <b-modal centered id="vagasCadastradas" title="Vagas Cadastradas">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeEmpresa",
  data() {
    return {};
  },
};
</script>

<style>
</style>