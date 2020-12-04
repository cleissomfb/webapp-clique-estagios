<template>
  <div>
    <NavbarPaginaInicial />
    <div class="section mt-5 mb-5 containerImagem">
      <div class="container">
        <b-overlay :show="show" rounded="sm">
          <form class="col-md-12 ml-auto mr-auto">
            <div class="mt-5">
              <h2 class="title titulos">Cadastro de Empresa</h2>
            </div>
            <b-row class="mt-5">
              <b-col md="4">
                <b-form-group id="cnpj" label="CNPJ:" label-for="cnpj">
                  <b-form-input
                    id="cnpj"
                    type="text"
                    v-model="empresa.informacoes.principais.cnpj"
                    v-mask="maskCnpj"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.empresa.informacoes.principais.cnpj.$error,
                    }"
                  ></b-form-input>
                  <span
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.empresa.informacoes.principais.cnpj.required
                    "
                  >
                    Digite o CNPJ.
                  </span>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group id="senha" label="Senha:" label-for="senha">
                  <b-form-input
                    id="senha"
                    v-model="empresa.senha"
                    type="password"
                    :class="{
                      'is-invalid': submitted && $v.empresa.senha.$error,
                    }"
                  ></b-form-input>
                  <span
                    class="text-danger text-center"
                    v-if="submitted && !$v.empresa.senha.required"
                  >
                    Digite a senha.<br />
                  </span>
                  <span
                    class="text-danger text-center"
                    v-if="!$v.empresa.senha.minLength"
                  >
                    Senha tem que ter mais que 4 caracteres.
                  </span>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="confirmarSenha"
                  label="Confirmar Senha:"
                  label-for="confirmar senha"
                >
                  <b-form-input
                    id="confirmarSenha"
                    type="password"
                    v-model="empresa.confirmarSenha"
                    :class="{
                      'is-invalid':
                        submitted && $v.empresa.confirmarSenha.$error,
                    }"
                  ></b-form-input>
                  <span
                    class="text-danger text-center"
                    v-if="submitted && !$v.empresa.confirmarSenha.required"
                  >
                    Digite a confirmação da senha.<br />
                  </span>
                  <span
                    class="text-danger text-center"
                    v-if="!$v.empresa.confirmarSenha.sameAsPassword"
                  >
                    Senhas diferentes, tente novamente.
                  </span>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12"
                ><h5 class="subtitulosMin">Dados da Empresa</h5></b-col
              >
              <b-col md="6">
                <b-form-group
                  id="razaoSocial"
                  label="Razão Social:"
                  label-for="razao Social"
                >
                  <b-form-input
                    id="razaoSocial"
                    v-model="empresa.informacoes.principais.razaoSocial"
                    type="text"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.empresa.informacoes.principais.razaoSocial.$error,
                    }"
                  ></b-form-input>
                  <span
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.empresa.informacoes.principais.razaoSocial.required
                    "
                  >
                    Digite a Razão Social.
                  </span>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  id="nomeFantasia"
                  label="Nome Fantasia:"
                  label-for="nome fantasia"
                >
                  <b-form-input
                    id="nomeFantasia"
                    type="text"
                    v-model="empresa.informacoes.principais.nomeFantasia"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.empresa.informacoes.principais.nomeFantasia.$error,
                    }"
                  ></b-form-input>
                  <span
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.empresa.informacoes.principais.nomeFantasia.required
                    "
                  >
                    Digite o Nome Fantasia.
                  </span>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="dataFundacao"
                  label="Data Fundação:"
                  label-for="Data Fundação"
                >
                  <b-form-input
                    id="dataFundacao"
                    type="date"
                    v-model="empresa.informacoes.principais.dataFundacao"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.empresa.informacoes.principais.dataFundacao.$error,
                    }"
                  ></b-form-input>
                  <span
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.empresa.informacoes.principais.dataFundacao.required
                    "
                  >
                    Digite a Data de Fundação.
                  </span>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="inscricaoEstadual"
                  label="Inscrição Estadual:"
                  label-for="Inscrição Estadual"
                >
                  <b-form-input
                    id="inscricaoEstadual"
                    type="text"
                    v-mask="maskIe"
                    v-model="empresa.informacoes.principais.ie"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.empresa.informacoes.principais.ie.$error,
                    }"
                  ></b-form-input>
                  <span
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.empresa.informacoes.principais.ie.required
                    "
                  >
                    Digite a IE.
                  </span>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group id="email" label="E-mail:" label-for="email">
                  <b-form-input
                    id="email"
                    v-model="empresa.email"
                    type="text"
                    :class="{
                      'is-invalid': submitted && $v.empresa.email.$error,
                    }"
                  ></b-form-input>
                  <span
                    class="text-danger text-center"
                    v-if="submitted && !$v.empresa.email.required"
                  >
                    Digite o E-mail.
                  </span>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group id="ramo" label="Ramo:" label-for="Ramo">
                  <b-form-input
                    id="ramo"
                    type="text"
                    v-model="empresa.informacoes.principais.ramo"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.empresa.informacoes.principais.ramo.$error,
                    }"
                  ></b-form-input>
                  <span
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.empresa.informacoes.principais.ramo.required
                    "
                  >
                    Digite o Ramo.
                  </span>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  id="nroFuncionarios"
                  label="Número de Funcionários:"
                  label-for="nroFuncionarios"
                >
                  <b-form-input
                    id="nroFuncionarios"
                    type="text"
                    v-model="empresa.informacoes.outros.numeroFuncionarios"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.empresa.informacoes.outros.numeroFuncionarios.$error,
                    }"
                  ></b-form-input>
                  <span
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.empresa.informacoes.outros.numeroFuncionarios.required
                    "
                  >
                    Digite o Nº de Funcionários.
                  </span>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row class="mt-3">
              <b-col md="12">
                <h5 class="subtitulosMin">Endereço</h5>
              </b-col>
              <b-col md="2">
                <b-form-group id="cep" label="CEP:" label-for="cep">
                  <b-form-input
                    id="cep"
                    type="text"
                    @keyup="searchCep()"
                    v-model="cep"
                    v-mask="maskCep"
                    :class="{ 'is-invalid': submitted && $v.cep.$error }"
                  ></b-form-input>
                  <span
                    class="text-danger text-center"
                    v-if="submitted && !$v.cep.required"
                  >
                    Digite o CEP.
                  </span>
                </b-form-group>
              </b-col>
              <b-col md="7">
                <b-form-group
                  id="endereco"
                  label="Endereço:"
                  label-for="endereco"
                >
                  <b-form-input
                    id="endereco"
                    type="text"
                    readonly
                    v-model="empresa.informacoes.endereco.rua"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group id="bairro" label="Bairro:" label-for="bairro">
                  <b-form-input
                    id="bairro"
                    type="text"
                    v-model="empresa.informacoes.endereco.bairro"
                    readonly
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="5">
                <b-form-group
                  id="complemento"
                  label="Complemento:"
                  label-for="complemento"
                >
                  <b-form-input
                    id="complemento"
                    type="text"
                    v-model="empresa.informacoes.endereco.complemento"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.empresa.informacoes.endereco.complemento.$error,
                    }"
                  ></b-form-input>
                  <span
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.empresa.informacoes.endereco.complemento.required
                    "
                  >
                    Digite o Complemento.
                  </span>
                </b-form-group>
              </b-col>
              <b-col md="2">
                <b-form-group id="numero" label="Número:" label-for="numero">
                  <b-form-input
                    id="numero"
                    type="text"
                    v-model="empresa.informacoes.endereco.numero"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.empresa.informacoes.endereco.numero.$error,
                    }"
                  ></b-form-input>
                  <span
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.empresa.informacoes.endereco.numero.required
                    "
                  >
                    Digite o número.
                  </span>
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group id="cidade" label="Cidade:" label-for="cidade">
                  <b-form-input
                    id="cidade"
                    type="text"
                    v-model="empresa.informacoes.endereco.cidade"
                    readonly
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="2">
                <b-form-group id="uf" label="UF:" label-for="uf">
                  <b-form-input
                    id="uf"
                    type="text"
                    v-model="empresa.informacoes.endereco.uf"
                    readonly
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12">
                <h5 class="subtitulosMin">Contato</h5>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="telefone1"
                  label="Telefone Principal:"
                  label-for="telefone principal"
                >
                  <b-form-input
                    id="telefone1"
                    type="text"
                    v-mask="maskTele"
                    v-model="empresa.informacoes.contato.telefonePrincipal"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.empresa.informacoes.contato.telefonePrincipal.$error,
                    }"
                  ></b-form-input>
                  <span
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.empresa.informacoes.contato.telefonePrincipal.required
                    "
                  >
                    Digite um telefone.
                  </span>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="telefone2"
                  label="Telefone Auxiliar :"
                  label-for="telefone Auxiliar"
                >
                  <b-form-input
                    id="telefone2"
                    type="text"
                    v-mask="maskTele"
                    v-model="empresa.informacoes.contato.telefoneAuxiliar"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group id="celular" label="Celular:" label-for="celular">
                  <b-form-input
                    id="celular"
                    v-mask="maskCelular"
                    type="text"
                    v-model="empresa.informacoes.contato.celular"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="responsavel"
                  label="Responsável:"
                  label-for="responsavel"
                >
                  <b-form-input
                    id="responsavel"
                    type="text"
                    v-model="empresa.informacoes.contato.responsavel"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.empresa.informacoes.contato.responsavel.$error,
                    }"
                  ></b-form-input>
                  <span
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.empresa.informacoes.contato.responsavel.required
                    "
                  >
                    Digite o Responsavel.
                  </span>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="substituto"
                  label="Substituto:"
                  label-for="substituto"
                >
                  <b-form-input
                    id="substituto"
                    type="text"
                    v-model="empresa.informacoes.contato.substituto"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group id="site" label="Site:" label-for="site">
                  <b-form-input
                    id="site"
                    type="text"
                    v-model="empresa.informacoes.contato.site"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row class="mt-5">
              <b-col md="12">
                <h5 class="subtitulosMin">Redes Sociais</h5>
              </b-col>
              <b-col md="6">
                <b-form-group
                  id="facebook"
                  label="Facebook:"
                  label-for="facebook"
                >
                  <b-form-input
                    id="facebook"
                    type="text"
                    v-model="empresa.informacoes.redesSociais.facebook"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  id="instagram"
                  label="Instagram:"
                  label-for="instagram"
                >
                  <b-form-input
                    id="instagram"
                    type="text"
                    v-model="empresa.informacoes.redesSociais.instagram"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  id="linkedin"
                  label="Linkedin:"
                  label-for="linkedin"
                >
                  <b-form-input
                    id="linkedin"
                    type="text"
                    v-model="empresa.informacoes.redesSociais.linkedin"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group id="twitter" label="Twitter:" label-for="twitter">
                  <b-form-input
                    id="twitter"
                    type="text"
                    v-model="empresa.informacoes.redesSociais.twitter"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group id="github" label="Github:" label-for="github">
                  <b-form-input
                    id="github"
                    type="text"
                    v-model="empresa.informacoes.redesSociais.github"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  id="outraRedeSocial"
                  label="Outra Rede Social:"
                  label-for="outraRedeSocial"
                >
                  <b-form-input
                    id="outraRedeSocial"
                    type="text"
                    v-model="empresa.informacoes.redesSociais.outras"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row class="mt-5">
              <b-col md="12">
                <h5 class="subtitulosMin">Outros</h5>
              </b-col>
              <b-col md="6">
                <b-form-group
                  id="comentarios"
                  label="Comentários:"
                  label-for="comentarios"
                >
                  <b-form-textarea
                    v-model="empresa.informacoes.outros.comentarios"
                    id="comentarios"
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  id="portoRederencia"
                  label="Ponto de Refência:"
                  label-for="portoRederencia"
                >
                  <b-form-textarea
                    v-model="empresa.informacoes.outros.pontosRef"
                    id="portoRederencia"
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  id="onibusPerto"
                  label="Ônibus Perto:"
                  label-for="onibusPerto"
                >
                  <b-form-textarea
                    id="onibusPerto"
                    v-model="empresa.informacoes.outros.onibusPerto"
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>
            <b-col md="12">
              <div style="text-align: center" class="my-3">
                <b-button pill class="btn-editado" @click="saveEmpresa"
                  ><b-icon icon="check" class="mr-1"></b-icon
                  >Cadastrar</b-button
                >
                <b-button
                  pill
                  class="btn-editado ml-2"
                  @click="$bvModal.show('cancelarCadastroEmpresa')"
                  ><b-icon icon="x" class="mr-1"></b-icon>Cancelar</b-button
                >
              </div>
            </b-col>
          </form>
        </b-overlay>
      </div>
      <b-modal
        id="cancelarCadastroEmpresa"
        centered
        class="mt-5"
        title="Ops, atenção!"
      >
        <p class="my-2">
          Você realmente deseja cancelar essa edição do perfil da empresa?
        </p>
        <template #modal-footer>
          <b-button
            size="md"
            pill
            class="float-right btn-editado mr-2"
            @click="cancelarEmpresa"
            ><b-icon icon="check" class="mr-1"></b-icon>
            Sair
          </b-button>
          <b-button
            size="md"
            pill
            class="float-right btn-editado"
            @click="hideConfirmacaoEmpresa"
            ><b-icon icon="x" class="mr-1"></b-icon>
            Cancelar
          </b-button>
        </template>
      </b-modal>
      <b-modal id="modalCep" centered class="mt-5" title="Ops, atenção!">
        <p class="my-2">
          O CEP não foi digitado corretamente, tente novamente!
        </p>
        <template #modal-footer>
          <b-button
            size="md"
            pill
            class="float-right btn-editado"
            @click="hideCep"
            ><b-icon icon="check" class="mr-1"></b-icon>
            OK
          </b-button>
        </template>
      </b-modal>
    </div>
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
import NavbarPaginaInicial from "../paginaInicial/NavbarPaginaInicial";
import Contato from "../paginaInicial/Contato";
import Footer from "../paginaInicial/Footer";
import { buscarCepService, empresaService } from "@/service";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { btnTop } from "@/assets/js";

export default {
  name: "NovaEmpresa",
  components: {
    NavbarPaginaInicial,
    Contato,
    Footer,
  },
  data() {
    return {
      cep: "",
      data: {},

      submitted: false,

      maskCnpj: "##.###.###/####-##",
      maskIe: "###/#######",
      maskCep: "##.###-###",
      maskData: "##/##/####",
      maskTele: "(##) ####-####",
      maskCelular: "(##) # ####-####",

      errorMsg: null,
      infoMsg: null,
      toastCount: 0,
      errors: [],
      alertError: false,
      show: false,

      empresa: {
        senha: "",
        email: "",
        confirmarSenha: "",
        informacoes: {
          principais: {
            razaoSocial: "",
            nomeFantasia: "",
            dataFundacao: "",
            ie: "",
            ramo: "",
            cnpj: "",
          },
          endereco: {
            cep: "",
            rua: "",
            numero: "",
            complemento: "",
            uf: "",
            cidade: "",
            bairro: "",
          },
          contato: {
            celular: "",
            telefonePrincipal: "",
            telefonaAuxiliar: "",
            responsavel: "",
            substituto: "",
          },
          redesSociais: {
            facebook: "",
            instagram: "",
            linkedin: "",
            twitter: "",
            github: "",
            outras: "",
          },
          outros: {
            numeroFuncionarios: "",
            comentarios: "",
            pontosRef: "",
            onibusPerto: "",
          },
        },
      },
    };
  },
  validations: {
    cep: {
      required,
    },
    empresa: {
      senha: {
        required,
        minLength: minLength(4),
      },
      email: {
        required,
        email,
      },
      confirmarSenha: {
        required,
        sameAsPassword: sameAs("senha"),
      },
      informacoes: {
        principais: {
          razaoSocial: {
            required,
          },
          nomeFantasia: {
            required,
          },
          dataFundacao: {
            required,
          },
          ie: {
            required,
          },
          ramo: {
            required,
          },
          cnpj: {
            required,
          },
        },
        endereco: {
          rua: {
            required,
          },
          numero: {
            required,
          },
          complemento: {
            required,
          },
          uf: {
            required,
          },
          cidade: {
            required,
          },
          bairro: {
            required,
          },
        },
        contato: {
          telefonePrincipal: {
            required,
          },
          responsavel: {
            required,
          },
        },
        outros: {
          numeroFuncionarios: {
            required,
          },
        },
      },
    },
  },
  methods: {
    backToTop() {
      btnTop.backToTop();
    },
    searchCep() {
      const parsed = this.cep
        .normalize("NFD")
        .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");
      if (parsed.length == 8) {
        this.show = true;
        buscarCepService
          .buscarCep(parsed)
          .then((response) => {
            this.data = response.data;
            // console.log(response.data)
            this.empresa.informacoes.endereco.cep = this.data.code;
            this.empresa.informacoes.endereco.rua = this.data.address;
            this.empresa.informacoes.endereco.uf = this.data.state;
            this.empresa.informacoes.endereco.cidade = this.data.city;
            this.empresa.informacoes.endereco.bairro = this.data.district;
            this.show = false;
            console.log(this.data);
            if ( this.data.status == '404') {
              this.$bvModal.show("modalCep");
            }
          })
          .catch((error) => {
            console.log(error);
            this.show = false;
            this.$bvModal.show("modalCep");
          });
      }
    },
    saveEmpresa() {
      this.show = true;
      this.submitted = true;
      console.log(this.$v.$invalid);
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.errorMsg = "Algum campo não foi preenchido, volte ao topo.";
        this.showAlertDanger();
        this.show = false;
        return;
      }
      console.log(this.empresa);
      empresaService
        .saveEmpresa(this.empresa)
        .then(() => {
          this.infoMsg = "Empresa cadastrada com sucesso!";
          this.show = false;
          this.showAlertSuccess();
          this.$router.push("/");
        })
        .catch((error) => {
          // this.errorMsg = error;
          this.errorMsg = "Erro ao cadastrar a empresa.";
          console.log(error);
          this.show = false;
          this.showAlertDanger();
        });
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
    cancelarEmpresa() {
      this.$router.push("/");
    },

    hideConfirmacaoEmpresa() {
      this.$bvModal.hide("cancelarCadastroEmpresa");
    },

    hideCep() {
      this.$bvModal.hide("modalCep");
    },
  },
};
</script>

<style>
</style>