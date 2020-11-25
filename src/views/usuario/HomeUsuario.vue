 <template>
  <div>
    <div class="section mt-5 imagemConteiner">
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
                  ><b-button class="btn-home"
                  >Visualizar Vagas</b-button
                ></a>
              </b-col>
              <b-col md="12">
                <b-button v-b-modal.vagasSelecionadas class="btn-home"
                  >Vagas Selecionadas</b-button
                >
              </b-col>
            </b-row>
          </div>
        </div>
        <b-modal centered id="visualizarVagas" title="Visualizar Vagas">
          <p class="my-4">Hello from modal!</p>
        </b-modal>

        <b-modal centered id="vagasSelecionadas" title="Vagas Selecionadas">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomeUsuario",
  data() {
    return {};
  },
};
</script>

<style>
</style>