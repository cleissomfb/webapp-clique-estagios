<template>
  <div class="section mt-5 mb-5 containerImagem">
    <div class="container">
      <b-overlay :show="show" rounded="sm">
        <form class="col-md-12 ml-auto mr-auto">
          <div class="mt-5">
            <h2
              class="title titulos"
              v-if="vaga._id == null || vaga._id == undefined"
            >
              Cadastro de Vaga
            </h2>
            <h2
              class="title titulos"
              v-if="vaga._id != null || vaga._id != undefined"
            >
              Editar Vaga
            </h2>
          </div>
          <b-row class="mt-5">
            <b-col md="12">
              <b-form-group id="titulo" label="Título:" label-for="titulo">
                <b-form-input
                  id="titulo"
                  v-model="vaga.titulo"
                  type="text"
                  :class="{
                    'is-invalid': submitted && $v.vaga.titulo.$error,
                  }"
                ></b-form-input>
                <span
                  class="text-danger text-center"
                  v-if="submitted && !$v.vaga.titulo.required"
                >
                  Digite o Título.
                </span>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                id="nroVagas"
                label="Nº de Vagas:"
                label-for="nroVagas"
              >
                <b-form-input
                  id="nroVagas"
                  v-model="vaga.numeroVagas"
                  type="text"
                  :class="{
                    'is-invalid': submitted && $v.vaga.numeroVagas.$error,
                  }"
                ></b-form-input>
                <span
                  class="text-danger text-center"
                  v-if="submitted && !$v.vaga.numeroVagas.required"
                >
                  Digite o Número de Vagas.
                </span>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                id="remuneracao"
                label="Remuneração:"
                label-for="remuneracao"
              >
                <b-form-input
                  id="remuneracao"
                  v-model="vaga.remuneracao"
                  type="text"
                  :class="{
                    'is-invalid': submitted && $v.vaga.remuneracao.$error,
                  }"
                ></b-form-input>
                <span
                  class="text-danger text-center"
                  v-if="submitted && !$v.vaga.remuneracao.required"
                >
                  Digite a Remuneração.
                </span>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group
                id="possibilidadeEfetivacao"
                label="Possibilidade de Efetivação:"
                label-for="possibilidadeEfetivacao"
              >
                <b-form-select
                  class="mb-3"
                  v-model="vaga.possibilidadeEfetivacao"
                  :class="{
                    'is-invalid':
                      submitted && $v.vaga.possibilidadeEfetivacao.$error,
                  }"
                >
                  <b-form-select-option :value="null" selected
                    >Selecione a Possibilidade de
                    Efetivação</b-form-select-option
                  >
                  <b-form-select-option value="sim">Sim</b-form-select-option>
                  <b-form-select-option value="nao">Não</b-form-select-option>
                </b-form-select>
                <span
                  class="text-danger text-center"
                  v-if="submitted && !$v.vaga.possibilidadeEfetivacao.required"
                >
                  Digite a Possibilidade de Efetivação.
                </span>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group id="horario" label="Horário:" label-for="horario">
                <b-form-input
                  id="horario"
                  v-model="vaga.horario"
                  type="text"
                  :class="{
                    'is-invalid': submitted && $v.vaga.horario.$error,
                  }"
                ></b-form-input>
                <span
                  class="text-danger text-center"
                  v-if="submitted && !$v.vaga.horario.required"
                >
                  Digite o Horário.
                </span>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                id="cargaHoraria"
                label="Carga Horária:"
                label-for="cargaHoraria"
              >
                <b-form-input
                  id="cargaHoraria"
                  v-model="vaga.cargaHoraria"
                  type="text"
                  :class="{
                    'is-invalid': submitted && $v.vaga.cargaHoraria.$error,
                  }"
                ></b-form-input>
                <span
                  class="text-danger text-center"
                  v-if="submitted && !$v.vaga.cargaHoraria.required"
                >
                  Digite a Carga Horária.
                </span>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                id="requisitos"
                label="Requisitos:"
                label-for="requisitos"
              >
                <b-form-input
                  id="requisitos"
                  v-model="vaga.requisitos"
                  type="text"
                  :class="{
                    'is-invalid': submitted && $v.vaga.requisitos.$error,
                  }"
                ></b-form-input>
                <span
                  class="text-danger text-center"
                  v-if="submitted && !$v.vaga.requisitos.required"
                >
                  Digite os Requisitos.
                </span>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                id="semestre"
                label="Semestre Mínimo:"
                label-for="semestre"
              >
                <b-form-input
                  id="semestre"
                  v-model="vaga.semestreMinimo"
                  type="text"
                  :class="{
                    'is-invalid': submitted && $v.vaga.semestreMinimo.$error,
                  }"
                ></b-form-input>
                <span
                  class="text-danger text-center"
                  v-if="submitted && !$v.vaga.semestreMinimo.required"
                >
                  Digite o Semestre Mínimo.
                </span>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                id="atividades"
                label="Atividades:"
                label-for="atividades"
              >
                <b-form-textarea
                  id="atividades"
                  v-model="vaga.atividades"
                  :class="{
                    'is-invalid': submitted && $v.vaga.atividades.$error,
                  }"
                ></b-form-textarea>
                <span
                  class="text-danger text-center"
                  v-if="submitted && !$v.vaga.atividades.required"
                >
                  Digite a Atividade.
                </span>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                id="beneficios"
                label="Benefícios:"
                label-for="beneficios"
              >
                <b-form-textarea
                  id="beneficios"
                  v-model="vaga.beneficios"
                  :class="{
                    'is-invalid': submitted && $v.vaga.beneficios.$error,
                  }"
                ></b-form-textarea>
                <span
                  class="text-danger text-center"
                  v-if="submitted && !$v.vaga.beneficios.required"
                >
                  Digite os Benefícios.
                </span>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                id="outrosBeneficios"
                label="Outros Benefícios:"
                label-for="outrosBeneficios"
              >
                <b-form-textarea
                  id="outrosBeneficios"
                  v-model="vaga.outrosBeneficios"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                id="observacao"
                label="Observação:"
                label-for="observacao"
              >
                <b-form-textarea
                  id="observacao"
                  v-model="vaga.observacao"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
          <b-col md="12">
            <div style="text-align: center" class="my-3">
              <b-button pill class="btn-editado" @click="saveVaga"
                ><b-icon icon="check" class="mr-1"></b-icon>Cadastrar</b-button
              >
              <b-button
                pill
                class="btn-editado ml-2"
                @click="$bvModal.show('cancelar')"
                ><b-icon icon="x" class="mr-1"></b-icon>Cancelar</b-button
              >
            </div>
          </b-col>
        </form>
      </b-overlay>
      <b-modal id="cancelar" centered class="mt-5" title="Ops, atenção!">
        <p class="my-2">
          Você realmente deseja cancelar o cadastro dessa vaga?
        </p>
        <template #modal-footer>
          <b-button
            size="md"
            pill
            class="float-right btn-editado mr-2"
            @click="cancelarVaga"
            ><b-icon icon="check" class="mr-1"></b-icon>
            Sim
          </b-button>
          <b-button
            size="md"
            pill
            class="float-right btn-editado"
            @click="hideConfirmacaoVaga"
            ><b-icon icon="x" class="mr-1"></b-icon>
            Não
          </b-button>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { vagaService } from "@/service";
import { required } from "vuelidate/lib/validators";

export default {
  name: "CadastrarVaga",
  data() {
    return {
      submitted: false,
      empresa: {},
      idVagaExiste: true,
      errorMsg: null,
      infoMsg: null,
      show: false,
      vaga: {
        titulo: "",
        atividades: "",
        ramo: "",
        cidade: "",
        bairro: "",
        onibusProximos: "",
        pontoReferencia: "",
        numeroVagas: "",
        remuneracao: "",
        possibilidadeEfetivacao: "",
        horario: "",
        cargaHoraria: "",
        requisitos: "",
        semestreMinimo: "",
        beneficios: "",
        outrosBeneficios: "",
        observacao: "",
      },
    };
  },
  validations: {
    vaga: {
      titulo: {
        required,
      },
      atividades: {
        required,
      },
      numeroVagas: {
        required,
      },
      remuneracao: {
        required,
      },
      possibilidadeEfetivacao: {
        required,
      },
      horario: {
        required,
      },
      cargaHoraria: {
        required,
      },
      requisitos: {
        required,
      },
      semestreMinimo: {
        required,
      },
      beneficios: {
        required,
      },
    },
  },
  methods: {
    saveVaga() {
      this.show = true;
      this.submitted = true;
      // console.log(this.$v.$invalid);
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.show = false;
        this.errorMsg = "Algum campo não foi preenchido, volte ao topo.";
        this.showAlertDanger();
        return;
      }
      // console.log(this.idVagaExiste);

      if (this.idVagaExiste == false) {
        vagaService
          .saveVaga(this.vaga)
          .then(() => {
            this.infoMsg = "Vaga cadastrada com sucesso!";
            this.show = false;
            this.showAlertSuccess();
            this.$router.push("/empresa/homeEmpresa");
            window.scrollTo(0, 0);
          })
          .catch((error) => {
            // this.errorMsg = error;
            this.errorMsg = "Erro ao cadastrar a vaga.";
            this.show = false;
            // console.log(error);
            this.showAlertDanger();
          });
        // console.log(this.vaga);
      }
      if (this.idVagaExiste == true) {
        vagaService
          .editVaga(this.vaga)
          .then(() => {
            this.infoMsg = "Vaga editada com sucesso!";
            this.show = false;
            this.showAlertSuccess();
            this.$router.push("/empresa/vagasCadastradas");
            window.scrollTo(0, 0);
          })
          .catch((error) => {
            // this.errorMsg = error;
            this.errorMsg = "Erro ao editar a vaga.";
            // console.log(error);
            this.show = false;
            this.showAlertDanger();
          });
        // console.log(this.vaga);
      }
    },

    // Geral da tela
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

    cancelarVaga() {
      if (this.idVagaExiste == true) {
        this.$router.push("/empresa/vagasCadastradas");
        window.scrollTo(0, 0);
      } else {
        this.$router.push("/empresa/homeEmpresa");
        window.scrollTo(0, 0);
      }
    },

    hideConfirmacaoVaga() {
      this.$bvModal.hide("cancelar");
    },
  },
  mounted() {
    this.show = true;
    const idVaga = this.$route.params.id;
    // console.log(idVaga);

    if (idVaga) {
      this.idVagaExiste = true;
      vagaService.findVagaSearch;
      vagaService
        .findVagaSearch(idVaga)
        .then((vaga) => {
          this.vaga = vaga.data;
          this.show = false;
        })
        .catch((error) => {
          // this.errorMsg = error;
          this.errorMsg = "Erro ao buscar a vaga no servidor.";
          this.show = false;
          // console.log(error);
          this.showAlertDanger();
        });
      // console.log(this.idVagaExiste);
    } else {
      this.idVagaExiste = false;

      this.empresa = JSON.parse(localStorage.getItem("empresa"));
      // console.log(this.empresa);

      if (this.empresa.informacoes.endereco.cidade) {
        this.vaga.cidade = this.empresa.informacoes.endereco.cidade;
      }
      if (this.empresa.informacoes.endereco.bairro) {
        this.vaga.bairro = this.empresa.informacoes.endereco.bairro;
      }
      if (this.empresa.informacoes.outros.onibusPerto) {
        this.vaga.onibusProximos = this.empresa.informacoes.outros.onibusPerto;
      }
      if (this.empresa.informacoes.outros.pontosRef) {
        this.vaga.pontoReferencia = this.empresa.informacoes.outros.pontosRef;
      }
      if (this.empresa.informacoes.principais.ramo) {
        this.vaga.ramo = this.empresa.informacoes.principais.ramo;
      }
      // console.log(this.idVagaExiste);
      this.show = false;
    }
  },
};
</script>

<style>
</style>