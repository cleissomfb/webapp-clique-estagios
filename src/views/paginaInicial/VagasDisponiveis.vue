<template>
  <section>
    <div class="section">
      <div class="depoimentos">
        <div class="imagem-depoimentos">
          <div class="container">
            <form class="col-md-12 ml-auto mr-auto">
              <div>
                <h2 class="title titulo-vagas">Visualizar Vagas</h2>
              </div>
              <div md="12">
                <div class="mt-5 mb-5">
                  <b-overlay :show="show" rounded="sm">
                    <b-row md="12">
                      <b-col md="12" v-if="vagasDisponiveis.length == 0">
                        <p class="text-center my-5">
                          Ainda não há vagas cadastradas.
                        </p>
                      </b-col>
                      <b-col md="12">
                        <swiper
                          class="swiper"
                          ref="swiper"
                          :options="swiperOption"
                        >
                          <swiper-slide
                            v-for="(input, k) in vagasDisponiveis"
                            :key="k"
                          >
                            <b-card class="mx-2">
                              <template #header>
                                <div md="12">
                                  <label>{{ input.titulo }}</label>
                                </div>
                              </template>
                              <div md="12">
                                <b-card-text>
                                  <b-row>
                                    <b-col md="12">
                                      <div>
                                        <div class="subtitulo">
                                          <label>Atividade </label> <br />
                                        </div>
                                        <label class="item">{{
                                          input.atividades
                                        }}</label>
                                      </div>
                                    </b-col>
                                    <b-col md="12">
                                      <div>
                                        <div class="subtitulo">
                                          <label>Remuneração</label> <br />
                                        </div>
                                        <label class="item">{{
                                          input.remuneracao
                                        }}</label>
                                      </div>
                                    </b-col>
                                  </b-row>
                                </b-card-text>
                              </div>
                              <template #footer>
                                <b-col md="12">
                                  <b-button
                                    small
                                    class="mr-1"
                                    variant="info"
                                    @click="visualizarVaga(input)"
                                    v-b-tooltip.hover
                                    ><b-icon icon="file-earmark-text"></b-icon
                                  ></b-button>
                                </b-col>
                              </template>
                            </b-card>
                          </swiper-slide>
                          <div class="swiper-pagination" slot="pagination"></div>
                          <!-- <div
                            class="swiper-button-prev"
                            slot="button-prev"
                          ></div>
                          <div
                            class="swiper-button-next"
                            slot="button-next"
                          ></div> -->
                        </swiper>
                      </b-col>
                    </b-row>
                  </b-overlay>
                </div>
              </div>
            </form>
          </div>
          <b-modal
            id="visualizarVaga"
            centered
            class="modalVisualizarVaga"
            size="lg"
            title="Visualizar Vaga"
          >
            <div class="container-visualizar-vaga">
              <b-overlay :show="show" rounded="sm">
                <div class="vagaContainer">
                  <b-row>
                    <b-col md="12" class="descrVagas">
                      <div class="titulo-vaga">
                        <label class="item">{{ vaga.titulo }}</label>
                      </div>
                    </b-col>
                    <b-col md="4" class="descrVagas">
                      <div>
                        <div class="subtitulo"><label>Ramo: </label> <br /></div>
                        <label class="item" v-if="vaga.ramo != null">{{
                          vaga.ramo
                        }}</label>
                        <label class="item" v-if="vaga.ramo == null"
                          >Não Descrito</label
                        >
                      </div>
                    </b-col>
                    <b-col md="4" class="descrVagas">
                      <div>
                        <div class="subtitulo">
                          <label class="sub-titulo">Cidade: </label> <br />
                        </div>
                        <label class="item" v-if="vaga.cidade != null">
                          {{ vaga.cidade }}</label
                        >
                        <label class="item" v-if="vaga.cidade == null"
                          >Não Descrito</label
                        >
                      </div>
                    </b-col>
                    <b-col md="4" class="descrVagas">
                      <div>
                        <div class="subtitulo">
                          <label class="sub-titulo">Bairro: </label> <br />
                        </div>
                        <label class="item" v-if="vaga.bairro != null"
                          >{{ vaga.bairro }}
                        </label>
                        <label class="item" v-if="vaga.bairro == null"
                          >Não Descrito</label
                        >
                      </div>
                    </b-col>
                    <b-col md="12" class="descrVagas">
                      <div class="subtitulo">
                        <label>Ônibus Próximos</label>
                      </div>
                    </b-col>
                    <b-col md="12" class="descrVagas">
                      <label v-if="vaga.onibusProximos != null">{{
                        vaga.onibusProximos
                      }}</label>
                      <label class="item" v-if="vaga.onibusProximos == null"
                        >Não Descrito</label
                      >
                    </b-col>
                    <b-col md="12" class="descrVagas">
                      <div class="subtitulo">
                        <label>Ponto de Referência</label>
                      </div>
                    </b-col>
                    <b-col md="12" class="descrVagas">
                      <label v-if="vaga.pontoReferencia != null">{{
                        vaga.pontoReferencia
                      }}</label>
                      <label class="item" v-if="vaga.pontoReferencia == null"
                        >Não Descrito</label
                      >
                    </b-col>
                    <b-col md="4"  class="descrVagas">
                      <div>
                        <div class="subtitulo noBorderMobile">
                          <label>Nª de Vagas: </label> <br />
                        </div>
                        <label>{{ vaga.numeroVagas }}</label>
                      </div>
                    </b-col>
                    <b-col md="4"  class="descrVagas">
                      <div>
                        <div class="subtitulo noBorderMobile">
                          <label>Remuneração: </label> <br />
                        </div>
                        <label> {{ vaga.remuneracao }}</label>
                      </div>
                    </b-col>
                    <b-col md="4"  class="descrVagas">
                      <div>
                        <div class="subtitulo noBorderMobile">
                          <label>Possiblidade de Efetivação: </label>
                          <br />
                        </div>
                        <label>{{ vaga.possibilidadeEfetivacao }} </label>
                      </div>
                    </b-col>
                    <b-col md="6"  class="descrVagas">
                      <div>
                        <div class="subtitulo">
                          <label class="sub-titulo">Remuneração: </label> <br />
                        </div>
                        <label> {{ vaga.remuneracao }}</label>
                      </div>
                    </b-col>
                    <b-col md="6"  class="descrVagas">
                      <div>
                        <div class="subtitulo">
                          <label class="sub-titulo">Carga Horária: </label> <br />
                        </div>
                        <label>{{ vaga.cargaHoraria }} </label>
                      </div>
                    </b-col>
                    <b-col md="6"  class="descrVagas">
                      <div>
                        <div class="subtitulo">
                          <label class="sub-titulo">Requisitos: </label> <br />
                        </div>
                        <label> {{ vaga.requisitos }}</label>
                      </div>
                    </b-col>
                    <b-col md="6"  class="descrVagas">
                      <div class="subtitulo-vaga">
                        <div class="subtitulo">
                          <label>Semestre Mínimo: </label> <br />
                        </div>
                        <label>{{ vaga.semestreMinimo }} </label>
                      </div>
                    </b-col>
                    <b-col md="12" class="descrVagas">
                      <div class="subtitulo">
                        <label>Atividades: </label>
                      </div>
                    </b-col>
                    <b-col md="12" class="descrVagas">
                      <label>{{ vaga.atividades }} </label>
                    </b-col>
                    <b-col md="12" class="descrVagas">
                      <div class="subtitulo">
                        <label>Benefícios: </label>
                      </div>
                    </b-col>
                    <b-col md="12" class="descrVagas">
                      <label>{{ vaga.beneficios }} </label>
                    </b-col>
                    <b-col md="12" class="descrVagas">
                      <div class="subtitulo">
                        <label>Outros Benefícios : </label>
                      </div>
                    </b-col>
                    <b-col md="12" class="descrVagas">
                      <label>{{ vaga.outrosBeneficios }} </label>
                    </b-col>
                    <b-col md="12" class="descrVagas">
                      <div class="subtitulo">
                        <label>Observações: </label>
                      </div>
                    </b-col>
                    <b-col md="12" class="descrVagas">
                      <label>{{ vaga.observacao }} </label>
                    </b-col>
                    <b-col md="12" class="descrVagas">
                      <div class="visualizar-vaga-botao-candidatar"></div>
                    </b-col>
                  </b-row>
                </div>
              </b-overlay>
            </div>
            <template #modal-footer>
              <b-button
                size="md"
                pill
                class="float-right btn-editado"
                @click="modalConfirmarVaga"
                ><b-icon icon="check" class="mr-1"></b-icon>
                Candidatar-se
              </b-button>
              <b-button
                size="md"
                pill
                class="float-right btn-editado"
                @click="hideVisualizarVaga"
                ><b-icon icon="x" class="mr-1"></b-icon>
                Voltar
              </b-button>
            </template>
          </b-modal>
          <b-modal
            id="cancelarPerfilUsuario"
            centered
            class="mt-5"
            title="Ops, atenção!"
          >
            <p class="my-2">
              Você precisa estar logado para se candidatar a vaga, gostaria de
              fazer login?
            </p>
            <template #modal-footer>
              <b-button
                size="md"
                pill
                class="float-right btn-editado mr-2"
                @click="cancelarPerfilUsuario"
                ><b-icon icon="check" class="mr-1"></b-icon>
                Sim
              </b-button>
              <b-button
                size="md"
                pill
                class="float-right btn-editado"
                @click="hideConfirmacaoUsuario"
                ><b-icon icon="x" class="mr-1"></b-icon>
                Não
              </b-button>
            </template>
          </b-modal>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { vagaService } from "@/service";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "@/assets/css/swiper.css";

export default {
  name: "VagasDisponiveis",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      vagasDisponiveis: [],
      empresa: {},
      perPage: 4,
      currentPage: 1,
      idVaga: null,
      vaga: {},
      show: false,

      swiperOption: {
        // loop: true,
        effect: "fade",

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          995:{
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  methods: {
    findVagas() {
      this.show = true;
      vagaService
        .findVaga()
        .then((vagas) => {
          this.vagasDisponiveis = vagas.data;
          // console.log(this.vagasDisponiveis);
          this.show = false;
        })
        .catch((error) => {
          this.errorMsg = error;
          // this.errorMsg = "Erro ao criar a lista.";
          // console.log(error);
          this.showAlertDanger();
        });
    },

    visualizarVaga(vaga) {
      this.$bvModal.show("visualizarVaga");
      // console.log("passei aqui")
      this.show = true;
      this.idVaga = vaga._id;
      vagaService
        .findVagaSearch(vaga._id)
        .then((vaga) => {
          this.vaga = vaga.data;
          this.show = false;
        })
        .catch((error) => {
          this.errorMsg = error;
          // this.errorMsg = "Erro ao criar a lista.";
          // console.log(error);
          this.show = false;
          this.showAlertDanger();
        });
    },
    hideVisualizarVaga() {
      this.$bvModal.hide("visualizarVaga");
    },

    modalConfirmarVaga() {
      this.$bvModal.show("cancelarPerfilUsuario");
    },

    confirmarInteresseVaga() {
      this.$bvModal.show("cancelarPerfilUsuario");
    },

    cancelarPerfilUsuario() {
      this.$bvModal.show("modal-2");
    },

    hideConfirmacaoUsuario() {
      this.$bvModal.hide("cancelarPerfilUsuario");
    },
  },

  mounted() {
    // this.empresa = JSON.parse(localStorage.getItem("empresa"));
    this.findVagas();
  },
  computed: {
    rows() {
      return this.vagasDisponiveis.length;
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style scoped>
</style>