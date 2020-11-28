<template>
  <div>
    <div class="section mt-5 containerImagem">
      <div class="container">
        <form class="col-md-12 ml-auto mr-auto">
          <div class="mt-5">
            <h2 class="title titulos">Usuários Interessados</h2>
          </div>
          <div md="12">
            <div>
              <b-overlay :show="show" rounded="sm">
                <b-row md="12">
                  <b-col md="12" v-if="interessadosVagas.length == 0">
                    <p class="text-center my-5">
                      Ainda não há candidatos para essa vaga.
                    </p>
                  </b-col>
                  <b-col
                    md="4"
                    v-for="(input, k) in interessadosVagas.slice(
                      (currentPage - 1) * perPage,
                      (currentPage - 1) * perPage + perPage
                    )"
                    :key="k"
                    class="my-4"
                  >
                    <b-card>
                      <template #header>
                        <div md="12">
                          <label>{{ input.informacoes.pessoais.nome }}</label>
                        </div>
                      </template>
                      <div md="12">
                        <b-card-text>
                          <b-row>
                            <b-col md="12">
                              <div>
                                <div class="subtitulo">
                                  <label>E-mail</label> <br />
                                </div>
                                <label class="item">{{
                                  input.informacoes.pessoais.email
                                }}</label>
                              </div>
                            </b-col>
                            <b-col md="6">
                              <div>
                                <div class="subtitulo">
                                  <label>Celular </label> <br />
                                </div>
                                <label class="item">{{
                                  input.informacoes.contato.celular
                                }}</label>
                              </div>
                            </b-col>
                            <b-col md="6">
                              <div>
                                <div class="subtitulo">
                                  <label>Cidade </label> <br />
                                </div>
                                <label class="item">{{
                                  input.informacoes.endereco.cidade
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
                            @click="candidatoInteressado(input)"
                            v-b-tooltip.hover
                            title="Visualizar a candidato."
                            ><b-icon icon="file-earmark-text"></b-icon
                          ></b-button>
                        </b-col>
                      </template>
                    </b-card>
                  </b-col>
                </b-row>
              </b-overlay>
              <b-pagination
                v-if="interessadosVagas.length > 0"
                v-model="currentPage"
                :per-page="perPage"
                :total-rows="interessadosVagas.length"
                align="center"
              ></b-pagination>
            </div>
          </div>
        </form>
      </div>
      <b-modal
        id="visualizarVaga"
        centered
        class="modalVisualizarVaga"
        size="lg"
        title="Visualizar Candidato"
      >
        <div class="container-visualizar-vaga">
          <b-row>
            <b-col md="12">
              <div class="titulo-vaga">
                <label class="item">{{ dadosPessoais.nome }}</label>
              </div>
            </b-col>
            <b-col md="4" class="noPaddingRight">
              <div>
                <div class="subtitulo"><label>CPF </label> <br /></div>
                <label class="item">{{ dadosPessoais.cpf }}</label>
              </div>
            </b-col>
            <b-col md="4" class="noPaddingLeft noPaddingRight">
              <div>
                <div class="subtitulo">
                  <label class="sub-titulo">Data de Nascimento </label> <br />
                </div>
                <label class="item" v-if="dadosPessoais.dataNasc != null">
                  {{ dadosPessoais.dataNasc }}</label
                >
                <label class="item" v-if="dadosPessoais.dataNasc == null"
                  >Não Descrito</label
                >
              </div>
            </b-col>
            <b-col md="4" class="noPaddingLeft">
              <div>
                <div class="subtitulo">
                  <label class="sub-titulo">E-mail </label> <br />
                </div>
                <label class="item" v-if="dadosPessoais.email != null"
                  >{{ dadosPessoais.email }}
                </label>
                <label class="item" v-if="dadosPessoais.email == null"
                  >Não Descrito</label
                >
              </div>
            </b-col>
            <b-col md="4" class="noPaddingRight">
              <div>
                <div class="subtitulo">
                  <label class="sub-titulo">Bairro </label> <br />
                </div>
                <label class="item" v-if="dadosEndereco.bairro != null"
                  >{{ dadosEndereco.bairro }}
                </label>
                <label class="item" v-if="dadosEndereco.bairro == null"
                  >Não Descrito</label
                >
              </div>
            </b-col>
            <b-col md="4" class="noPaddingLeft noPaddingRight">
              <div>
                <div class="subtitulo">
                  <label class="sub-titulo">Cidade </label> <br />
                </div>
                <label class="item" v-if="dadosEndereco.cidade != null"
                  >{{ dadosEndereco.cidade }}
                </label>
                <label class="item" v-if="dadosEndereco.cidade == null"
                  >Não Descrito</label
                >
              </div>
            </b-col>
            <b-col md="4" class="noPaddingLeft">
              <div>
                <div class="subtitulo">
                  <label class="sub-titulo">UF </label> <br />
                </div>
                <label class="item" v-if="dadosEndereco.uf != null"
                  >{{ dadosEndereco.uf }}
                </label>
                <label class="item" v-if="dadosEndereco.uf == null"
                  >Não Descrito</label
                >
              </div>
            </b-col>
            <b-col md="4" class="noPaddingRight mb-3">
              <div>
                <div class="subtitulo">
                  <label class="sub-titulo">Celular </label> <br />
                </div>
                <label class="item" v-if="dadosContato.celular != null"
                  >{{ dadosContato.celular }}
                </label>
                <label class="item" v-if="dadosContato.celular == null"
                  >Não Descrito</label
                >
              </div>
            </b-col>
            <b-col md="4" class="noPaddingLeft noPaddingRight mb-3">
              <div>
                <div class="subtitulo">
                  <label class="sub-titulo">Telefone Principal </label> <br />
                </div>
                <label
                  class="item"
                  v-if="dadosContato.telefonePrincipal != null"
                  >{{ dadosContato.telefonePrincipal }}
                </label>
                <label
                  class="item"
                  v-if="dadosContato.telefonePrincipal == null"
                  >Não Descrito</label
                >
              </div>
            </b-col>
            <b-col md="4" class="noPaddingLeft mb-3">
              <div>
                <div class="subtitulo">
                  <label class="sub-titulo">Recado </label> <br />
                </div>
                <label
                  class="item"
                  v-if="dadosContato.responsavelRecado != null"
                  >{{ dadosContato.responsavelRecado }}
                </label>
                <label
                  class="item"
                  v-if="dadosContato.responsavelRecado == null"
                  >Não Descrito</label
                >
              </div>
            </b-col>
            <div md="12" class="experiencia">
              <b-row>
                <b-col md="12">
                  <div class="subtitulo">
                    <label>Educação Atual</label>
                  </div>
                </b-col>
                <b-col md="12">
                  <label class="item"></label>
                </b-col>
                <b-col md="4" class="noPaddingRight">
                  <div>
                    <div class="subtitulo">
                      <label class="sub-titulo">Ano da Formatura </label>
                      <br />
                    </div>
                    <label
                      class="item"
                      v-if="dadosEducacaoAtual.anoFormatura != null"
                      >{{ dadosEducacaoAtual.anoFormatura }}
                    </label>
                    <label
                      class="item"
                      v-if="dadosEducacaoAtual.anoFormatura == null"
                      >Não Descrito</label
                    >
                  </div>
                </b-col>
                <b-col md="4" class="noPaddingLeft noPaddingRight">
                  <div>
                    <div class="subtitulo">
                      <label class="sub-titulo">Curso </label> <br />
                    </div>
                    <label
                      class="item"
                      v-if="dadosEducacaoAtual.cursosGrau != null"
                      >{{ dadosEducacaoAtual.cursosGrau }}
                    </label>
                    <label
                      class="item"
                      v-if="dadosEducacaoAtual.cursosGrau == null"
                      >Não Descrito</label
                    >
                  </div>
                </b-col>
                <b-col md="4" class="noPaddingLeft">
                  <div>
                    <div class="subtitulo">
                      <label class="sub-titulo">Instituição </label> <br />
                    </div>
                    <label
                      class="item"
                      v-if="dadosEducacaoAtual.instituicao != null"
                      >{{ dadosEducacaoAtual.instituicao }}
                    </label>
                    <label
                      class="item"
                      v-if="dadosEducacaoAtual.instituicao == null"
                      >Não Descrito</label
                    >
                  </div>
                </b-col>
                <b-col md="4" class="noPaddingRight">
                  <div>
                    <div class="subtitulo">
                      <label class="sub-titulo">Mês da Formatura </label>
                      <br />
                    </div>
                    <label
                      class="item"
                      v-if="dadosEducacaoAtual.mesFormatura != null"
                      >{{ dadosEducacaoAtual.mesFormatura }}
                    </label>
                    <label
                      class="item"
                      v-if="dadosEducacaoAtual.mesFormatura == null"
                      >Não Descrito</label
                    >
                  </div>
                </b-col>
                <b-col md="4" class="noPaddingLeft noPaddingRight">
                  <div>
                    <div class="subtitulo">
                      <label class="sub-titulo">Nível Ensino </label> <br />
                    </div>
                    <label
                      class="item"
                      v-if="dadosEducacaoAtual.nivelEnsino != null"
                      >{{ dadosEducacaoAtual.nivelEnsino }}
                    </label>
                    <label
                      class="item"
                      v-if="dadosEducacaoAtual.nivelEnsino == null"
                      >Não Descrito</label
                    >
                  </div>
                </b-col>
                <b-col md="4" class="noPaddingLeft">
                  <div>
                    <div class="subtitulo">
                      <label class="sub-titulo">Semestre </label> <br />
                    </div>
                    <label
                      class="item"
                      v-if="dadosEducacaoAtual.semestre != null"
                      >{{ dadosEducacaoAtual.semestre }}
                    </label>
                    <label
                      class="item"
                      v-if="dadosEducacaoAtual.semestre == null"
                      >Não Descrito</label
                    >
                  </div>
                </b-col>
              </b-row>
            </div>
            <div md="12" class="experiencia">
              <b-row>
                <b-col md="12">
                  <div class="subtitulo">
                    <label v-if="dadosExperienciaAtualBoolean == true"
                      >Experiência Atual</label
                    >
                    <label v-if="dadosExperienciaAtualBoolean == false"
                      >Experiência</label
                    >
                  </div>
                </b-col>
                <b-col md="12">
                  <label
                    v-if="dadosExperienciaAtualBoolean == true"
                    class="item"
                  ></label>
                  <label
                    v-if="dadosExperienciaAtualBoolean == false"
                    class="item"
                    >Candidato(a) sem experiência</label
                  >
                </b-col>
                <div></div>
                <b-col
                  md="6"
                  class="noPaddingRight"
                  v-if="dadosExperienciaAtualBoolean == true"
                >
                  <div>
                    <div class="subtitulo">
                      <label class="sub-titulo">Atividade Atual </label> <br />
                    </div>
                    <label
                      class="item"
                      v-if="dadosExperienciaAtual.atividadesAtual != null"
                      >{{ dadosExperienciaAtual.atividadesAtual }}
                    </label>
                    <label
                      class="item"
                      v-if="dadosExperienciaAtual.atividadesAtual == null"
                      >Não Descrito</label
                    >
                  </div>
                </b-col>
                <b-col
                  md="6"
                  class="noPaddingLeft"
                  v-if="dadosExperienciaAtualBoolean == true"
                >
                  <div>
                    <div class="subtitulo">
                      <label class="sub-titulo">Empresa Atual </label> <br />
                    </div>
                    <label
                      class="item"
                      v-if="dadosExperienciaAtual.empresaAtual != null"
                      >{{ dadosExperienciaAtual.empresaAtual }}
                    </label>
                    <label
                      class="item"
                      v-if="dadosExperienciaAtual.empresaAtual == null"
                      >Não Descrito</label
                    >
                  </div>
                </b-col>
                <b-col
                  md="6"
                  class="noPaddingRight"
                  v-if="dadosExperienciaAtualBoolean == true"
                >
                  <div>
                    <div class="subtitulo">
                      <label class="sub-titulo">Periodo Inicial Atual </label>
                      <br />
                    </div>
                    <label
                      class="item"
                      v-if="dadosExperienciaAtual.periodoInicialAtual != null"
                      >{{ dadosExperienciaAtual.periodoInicialAtual }}
                    </label>
                    <label
                      class="item"
                      v-if="dadosExperienciaAtual.periodoInicialAtual == null"
                      >Não Descrito</label
                    >
                  </div>
                </b-col>
                <b-col
                  md="6"
                  class="noPaddingLeft"
                  v-if="dadosExperienciaAtualBoolean == true"
                >
                  <div>
                    <div class="subtitulo">
                      <label class="sub-titulo">Periodo Final Atual </label>
                      <br />
                    </div>
                    <label
                      class="item"
                      v-if="dadosExperienciaAtual.periodoFinalAtual != null"
                      >{{ dadosExperienciaAtual.periodoFinalAtual }}
                    </label>
                    <label
                      class="item"
                      v-if="dadosExperienciaAtual.periodoFinalAtual == null"
                      >Ainda trabalhando</label
                    >
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-row>
        </div>

        <template #modal-footer>
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
  name: "candidatosInteressados",
  data() {
    return {
      interessadosVagas: [],
      fieldsInteressadosVagas: [
        {
          key: "actions",
          label: "Ações",
          thStyle: { width: "20% !important" },
        },
        { key: "informacoes.pessoais.nome", label: "Nome" },
        {
          key: "informacoes.educacao[0].cursosGrau",
          label: "Grau de Ensino",
          thStyle: { width: "35% !important" },
        },
      ],
      perPage: 6,
      currentPage: 6,
      errorMsg: null,
      infoMsg: null,
      idVaga: null,
      vaga: {},
      candidato: {},
      dadosPessoais: {},
      dadosContato: {},
      dadosEducacaoAtual: {},
      dadosEndereco: {},
      dadosExperienciaAtual: {},
      dadosExperienciaAtualBoolean: true,
      dadosExperienciaPenultima: {},
      dadosExperienciaPenultimaBoolean: true,
      dadosDisponibilidade: {},
      currentPage: 1,
      show: false,
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
    findCandidatosVaga(idVaga) {
      this.show = true;
      vagaService
        .vagaInteressados(idVaga)
        .then((vagas) => {
          this.interessadosVagas = vagas.data;
          console.log(this.interessadosVagas);
          this.show = false;
        })
        .catch((error) => {
          this.errorMsg = error;
          // this.errorMsg = "Erro ao criar a lista.";
          console.log(error);
          this.showAlertDanger();
        });
    },

    candidatoInteressado(vaga) {
      const row = this.interessadosVagas.filter((data) => data._id == vaga._id);
      if (row != null) {
        this.candidato = row[0];
        console.log(this.candidato);
        this.dadosPessoais = this.candidato.informacoes.pessoais;
        this.dadosDisponibilidade = this.candidato.informacoes.disponibilidade;
        this.dadosEndereco = this.candidato.informacoes.endereco;

        if (this.candidato.informacoes.experiencias[0]) {
          this.dadosExperienciaAtual = this.candidato.informacoes.experiencias[0];
        } else {
          this.dadosExperienciaAtualBoolean = false;
        }
        // this.dadosExperienciaAtualBoolean = false;

        // if (this.candidato.informacoes.experiencias[1]) {
        //   this.dadosExperienciaPenultima = this.candidato.informacoes.experiencias[1];
        // }else {
        //   this.dadosExperienciaPenultimaBoolean = false;
        // }
        this.dadosEducacaoAtual = this.candidato.informacoes.educacao[0];
        this.dadosContato = this.candidato.informacoes.contato;

        console.log("Dados Pessoais: ", this.dadosPessoais);
        console.log("Dados Disponibilidade: ", this.dadosDisponibilidade);
        console.log("Dados Endereco: ", this.dadosEndereco);
        console.log("Dados Experiência Atual: ", this.dadosExperienciaAtual);
        console.log(
          "Dados Experiência Penultima: ",
          this.dadosExperienciaPenultima
        );
        console.log("Dados Educação: ", this.dadosEducacaoAtual);
        console.log("Dados Contato: ", this.dadosContato);

        this.$bvModal.show("visualizarVaga");
      }
    },
    hideVisualizarVaga() {
      this.$bvModal.hide("visualizarVaga");
    },
  },

  mounted() {
    const idVaga = this.$route.params.id;
    console.log(idVaga);
    this.findCandidatosVaga(idVaga);
  },
  computed: {
    rows() {
      return this.interessadosVagas.length;
    },
  },
};
</script>

<style>
</style>