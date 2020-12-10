<template>
  <fragment>
    <NavbarPaginaInicial />
    <section>
      <div class="section">
        <div class="imagem-oportunidade">
          <div class="container">
            <b-row>
              <div class="titulo">
                <h3>Página em Desenvolvimento.</h3>
              </div>
            </b-row>
          </div>
        </div>
      </div>
    </section>
    <Contato />
    <Footer />
  </fragment>
</template>

<script>
import NavbarPaginaInicial from "../paginaInicial/NavbarPaginaInicial";
import Contato from "../paginaInicial/Contato";
import Footer from "../paginaInicial/Footer";

export default {
  name: 'RecuperarSenhaEmpresa',
  components: {
    NavbarPaginaInicial,
    Contato,
    Footer,
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
</style>