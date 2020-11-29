<template>
  <div>
    <NavbarPaginaInicial />
    <ImagemOportunidade />
    <BusqueOportunidades />
    <InstituicoesParceiras />
    <Contato />
    <Footer />
    <div id="voltarTopo">
      <b-button id="btnTop" @click="backToTop()" class="btn-up"
        ><b-icon class="icon" icon="arrow-up"></b-icon
      ></b-button>
    </div>
  </div>
</template>

<script>
import NavbarPaginaInicial from "./NavbarPaginaInicial";
import ImagemOportunidade from "./ImagemOportunidade";
import BusqueOportunidades from "./BusqueOportunidades"
import InstituicoesParceiras from "./InstituicoesParceiras";
import Contato from "./Contato";
import Footer from "./Footer";

import { btnTop } from "@/assets/js";

export default {
  name: "PaginaInicial",
  components: {
    NavbarPaginaInicial,
    ImagemOportunidade,
    BusqueOportunidades,
    InstituicoesParceiras,
    Contato,
    Footer,
  },
  methods: {
    backToTop() {
      btnTop.backToTop();
    },
  },
};
</script>

<style>
</style>