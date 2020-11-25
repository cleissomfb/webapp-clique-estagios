<template>
  <div>
    <div class="section mt-5 containerImagem">
      <div class="container">
        <form class="col-md-12 ml-auto mr-auto">
          <div class="mt-5">
            <h2 class="title titulos">Visualizar Vagas</h2>
          </div>
          <div class="mt-5 tamanhoFixo">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              align="center"
            ></b-pagination>
            <b-table
              responsive
              :fields="fieldsVagasDisponiveis"
              :items="vagasDisponiveis"
              :show-empty="true"
              :total-rows="rows"
              :per-page="perPage"
              :current-page="currentPage"
              empty-text="Não há Vagas."
            >
              <template v-slot:cell(actions)="row" style="width: 555px">
                <b-button
                  small
                  class="mr-1"
                  variant="info"
                  @click="visualizarVaga(row.item)"
                  v-b-tooltip.hover
                  title="Visualizar a vaga"
                  ><b-icon icon="file-earmark-text"></b-icon
                ></b-button>
              </template>
            </b-table>
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
        </div>
        <template #modal-footer>
          <b-button
            size="md"
            pill
            class="float-right btn-editado"
            @click="candadatarVaga"
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
    </div>
  </div>
</template>

<script>
import { vagaService } from "@/service";
export default {
  name: "VisualizarVagas",
  data() {
    return {
      vagasDisponiveis: [],
      fieldsVagasDisponiveis: [
        {
          key: "actions",
          label: "Ações",
          thStyle: { width: "20% !important" },
        },
        { key: "titulo", label: "Titulo" },
        {
          key: "atividades",
          label: "Atividade",
          thStyle: { width: "25% !important" },
        },
      ],
      empresa: {},
      perPage: 5,
      currentPage: 1,
      errorMsg: null,
      infoMsg: null,
      idVaga: null,
      vaga: {},
      currentPage: 1,
    };
  },
  methods: {
    showAlertSuccess(append = false) {
      this.toastCount++;
      this.$bvToast.toast(this.infoMsg, {
        title: "Sucesso",
        autoHideDelay: 5000,
        appendToast: append,
        variant: "success",
        solid: true,
        toaster: "b-toaster-bottom-right",
      });
    },
    showAlertDanger(append = false) {
      this.toastCount++;
      this.$bvToast.toast(this.errorMsg, {
        title: "Error",
        autoHideDelay: 5000,
        appendToast: append,
        variant: "danger",
        solid: true,
        toaster: "b-toaster-bottom-right",
      });
    },
    findVagas() {
      vagaService
        .findVaga()
        .then((vagas) => {
          this.vagasDisponiveis = vagas.data;
          console.log(this.vagasDisponiveis);
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
      vagaService
        .findVagaSearch(vaga._id)
        .then((vaga) => {
          this.vaga = vaga.data;
        })
        .catch((error) => {
          this.errorMsg = error;
          // this.errorMsg = "Erro ao criar a lista.";
          console.log(error);
          this.showAlertDanger();
        });
    },
    hideVisualizarVaga() {
      this.$bvModal.hide("visualizarVaga");
    },
    candidatarVaga() {
      
    }
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