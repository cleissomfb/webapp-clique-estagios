<template>
  <div class="section">
    <div class="depoimentos">
      <div class="imagem-depoimentos">
        <div class="container">
          <form class="col-md-12 ml-auto mr-auto">
            <div class="mt-5">
              <h2 class="title titulos">Visualizar Vagas</h2>
            </div>
            <div md="12">
              <div>
                <b-overlay :show="show" rounded="sm">
                  <b-row md="12">
                    <b-col md="12" v-if="vagasDisponiveis.length == 0">
                      <p class="text-center my-5">
                        Ainda não há vagas cadastradas.
                      </p>
                    </b-col>
                    <b-col
                      md="3"
                      v-for="(input, k) in vagasDisponiveis.slice(
                        (currentPage - 1) * perPage,
                        (currentPage - 1) * perPage + perPage
                      )"
                      :key="k"
                      class="my-4"
                    >
                      <b-card>
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
                              title="Visualizar a vaga"
                              ><b-icon icon="file-earmark-text"></b-icon
                            ></b-button>
                          </b-col>
                        </template>
                      </b-card>
                    </b-col>
                  </b-row>
                </b-overlay>
              </div>
              <b-pagination
                v-if="vagasDisponiveis.length > 0"
                v-model="currentPage"
                :per-page="perPage"
                :total-rows="vagasDisponiveis.length"
                align="center"
                class="mt-5"
              ></b-pagination>
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
              <b-row>
                <b-col md="12">
                  <div class="titulo-vaga">
                    <label class="item">{{ vaga.titulo }}</label>
                  </div>
                </b-col>
                <b-col md="4" class="noPaddingRight">
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
                <b-col md="4" class="noPaddingLeft noPaddingRight">
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
                <b-col md="4" class="noPaddingLeft">
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
                <b-col md="12">
                  <div class="subtitulo">
                    <label>Ônibus Próximos</label>
                  </div>
                </b-col>
                <b-col md="12">
                  <label v-if="vaga.onibusProximos != null">{{
                    vaga.onibusProximos
                  }}</label>
                  <label class="item" v-if="vaga.onibusProximos == null"
                    >Não Descrito</label
                  >
                </b-col>
                <b-col md="12">
                  <div class="subtitulo">
                    <label>Ponto de Referência</label>
                  </div>
                </b-col>
                <b-col md="12">
                  <label v-if="vaga.pontoReferencia != null">{{
                    vaga.pontoReferencia
                  }}</label>
                  <label class="item" v-if="vaga.pontoReferencia == null"
                    >Não Descrito</label
                  >
                </b-col>
                <b-col md="4" class="noPaddingRight">
                  <div>
                    <div class="subtitulo noBorderMobile">
                      <label>Nª de Vagas: </label> <br />
                    </div>
                    <label>{{ vaga.numeroVagas }}</label>
                  </div>
                </b-col>
                <b-col md="4" class="noPaddingLeft noPaddingRight">
                  <div>
                    <div class="subtitulo noBorderMobile">
                      <label>Remuneração: </label> <br />
                    </div>
                    <label> {{ vaga.remuneracao }}</label>
                  </div>
                </b-col>
                <b-col md="4" class="noPaddingLeft">
                  <div>
                    <div class="subtitulo noBorderMobile">
                      <label>Possiblidade de Efetivação: </label>
                      <br />
                    </div>
                    <label>{{ vaga.possibilidadeEfetivacao }} </label>
                  </div>
                </b-col>
                <b-col md="6" class="noPaddingRight">
                  <div>
                    <div class="subtitulo">
                      <label class="sub-titulo">Remuneração: </label> <br />
                    </div>
                    <label> {{ vaga.remuneracao }}</label>
                  </div>
                </b-col>
                <b-col md="6" class="noPaddingLeft">
                  <div>
                    <div class="subtitulo">
                      <label class="sub-titulo">Carga Horária: </label> <br />
                    </div>
                    <label>{{ vaga.cargaHoraria }} </label>
                  </div>
                </b-col>
                <b-col md="6" class="noPaddingRight">
                  <div>
                    <div class="subtitulo">
                      <label class="sub-titulo">Requisitos: </label> <br />
                    </div>
                    <label> {{ vaga.requisitos }}</label>
                  </div>
                </b-col>
                <b-col md="6" class="noPaddingLeft">
                  <div class="subtitulo-vaga">
                    <div class="subtitulo">
                      <label>Semestre Mínimo: </label> <br />
                    </div>
                    <label>{{ vaga.semestreMinimo }} </label>
                  </div>
                </b-col>
                <b-col md="12">
                  <div class="subtitulo">
                    <label>Atividades: </label>
                  </div>
                </b-col>
                <b-col md="12">
                  <label>{{ vaga.atividades }} </label>
                </b-col>
                <b-col md="12">
                  <div class="subtitulo">
                    <label>Benefícios: </label>
                  </div>
                </b-col>
                <b-col md="12">
                  <label>{{ vaga.beneficios }} </label>
                </b-col>
                <b-col md="12">
                  <div class="subtitulo">
                    <label>Outros Benefícios : </label>
                  </div>
                </b-col>
                <b-col md="12">
                  <label>{{ vaga.outrosBeneficios }} </label>
                </b-col>
                <b-col md="12">
                  <div class="subtitulo">
                    <label>Observações: </label>
                  </div>
                </b-col>
                <b-col md="12">
                  <label>{{ vaga.observacao }} </label>
                </b-col>
                <b-col md="12">
                  <div class="visualizar-vaga-botao-candidatar"></div>
                </b-col>
              </b-row>
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
            Você precisa estar logado para se candidatar a vaga, gostaria de fazer login?
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
</template>

<script>
import { vagaService } from "@/service";
export default {
  name: "VagasDisponiveis",
  data() {
    return {
      vagasDisponiveis: [],
      empresa: {},
      perPage: 4,
      currentPage: 1,
      idVaga: null,
      vaga: {},
      show: false,
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
          console.log(error);
          this.showAlertDanger();
        });
    },

    visualizarVaga(vaga) {
      this.$bvModal.show("visualizarVaga");
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
          console.log(error);
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
  },
};
</script>

<style>
</style>