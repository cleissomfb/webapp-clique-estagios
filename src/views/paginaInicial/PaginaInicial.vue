<template>
  <div>
    <NavbarPaginaInicial />
    
    <div class="mt-5 mb-5">
      <h1 class="text-center">Página Inicial</h1>
    </div>
    <Contato />
    <Footer />
  </div>
</template>

<script>
import NavbarPaginaInicial from "./NavbarPaginaInicial";
import Contato from "./Contato";
import Footer from "./Footer"

export default {
  name: "PaginaInicial",
  components: {
    NavbarPaginaInicial,
    Contato,
    Footer
  },
};
</script>

<style>
</style>