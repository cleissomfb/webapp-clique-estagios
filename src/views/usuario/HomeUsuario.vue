<template>
  <section class="section mt-5 imagemConteiner">
    <div class="imagemHome">
      <div class="container">
        <div class="card-container card-interno">
          <b-row>
            <b-col md="12">
              <h3>Olá, Bem-vindo(a)</h3>
            </b-col>
            <b-col md="12">
              <a href="/usuario/perfilUsuario"
                ><b-button class="btn-home mt-4">Editar Perfil</b-button></a
              >
            </b-col>
            <b-col md="12">
              <a href="/usuario/visualizarVagas"
                ><b-button class="btn-home">Visualizar Vagas</b-button></a
              >
            </b-col>
            <b-col md="12">
              <a href="/usuario/vagasSelecionadas"
                ><b-button class="btn-home">Vagas Selecionadas</b-button></a
              >
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeUsuario",
  data() {
    return {};
  },
};
</script>

<style></style>
