<template>
  <fragment>
    <NavbarPaginaInicial />
    <PaginaInicialTop />
    <VagasDisponiveis />
    <ImagemOportunidade />
    <BusqueOportunidades />
    <Depoimentos />
    <InstituicoesParceiras />
    <Contato />
    <Footer />
    <div id="voltarTopo">
      <b-button id="btnTop" @click="backToTop()" class="btn-up"
        ><b-icon class="icon" icon="arrow-up"></b-icon
      ></b-button>
    </div>
  </fragment>
</template>

<script>
import NavbarPaginaInicial from "./NavbarPaginaInicial";
import PaginaInicialTop from "./PaginaInicialTop"
import VagasDisponiveis from "./VagasDisponiveis"
import ImagemOportunidade from "./ImagemOportunidade";
import BusqueOportunidades from "./BusqueOportunidades"
import Depoimentos from "./Depoimentos"
import InstituicoesParceiras from "./InstituicoesParceiras";
import Contato from "./Contato";
import Footer from "./Footer";

import { btnTop } from "@/assets/js";

export default {
  name: "PaginaInicial",
  components: {
    NavbarPaginaInicial,
    PaginaInicialTop,
    VagasDisponiveis,
    ImagemOportunidade,
    BusqueOportunidades,
    Depoimentos,
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