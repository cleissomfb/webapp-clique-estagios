<template>
  <div class="section">
   
    <div class="busque-oportunidades ">
       <div class="imagem-busque-oportunidades">
      <div class="container">
        <b-row>
          <b-col md="12">
            <h1>Busque por Oportunidades</h1>
          </b-col>
          <b-col md="12">
            <div class="text-busque-oportunidade">
              <p>
                Seja para a primeira oportunidade profissional ou para recolocação
                de trabalho, conte com a Clique Estágios. <br> Conectamos quem busca e quem
                oferece vagas no mercado de trabalho.
              </p>
            </div>
          </b-col>
          <b-col md="12">
            <a href="/cadastroUsuario"><b-button class="btn-home btn-busque-oportunidade">Cadastre-se</b-button></a><br>
            <small class="small-btn-busque-oportunidade">Já é cadastrado? <a v-b-modal.modal-2>Faça Login</a></small>
          </b-col>
        </b-row>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusqueOportunidades",
};
</script>

<style>
</style>