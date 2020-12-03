<template>
  <div>
    <div>
      <div class="section mt-5 mb-3 containerImagem">
        <div class="container">
          <form class="col-md-12 ml-auto mr-auto">
            <div class="mt-5">
              <h2 class="title titulos">Cadastro de Candidato</h2>
            </div>
            <b-row class="mt-5">
              <b-col md="4">
                <b-form-group id="cpf" label="CPF:" label-for="cpf">
                  <b-form-input
                    id="cpf"
                    type="text"
                    v-mask="maskCpf"
                    :class="{
                      'is-invalid':
                        submitted && $v.usuario.informacoes.pessoais.cpf.$error,
                    }"
                    v-model="usuario.informacoes.pessoais.cpf"
                  ></b-form-input>
                  <div
                    class="text-danger text-center"
                    v-if="
                      submitted && !$v.usuario.informacoes.pessoais.cpf.required
                    "
                  >
                    Digite o CPF.
                  </div>
                </b-form-group>
              </b-col>
              <b-col md="4" v-if="usuario.length >= 0">
                <b-form-group id="senha" label="Senha:" label-for="senha">
                  <b-form-input
                    id="senha"
                    :class="{
                      'is-invalid': submitted && $v.usuario.senha.$error,
                    }"
                    v-model="usuario.senha"
                    type="password"
                  ></b-form-input>
                  <div
                    class="text-danger text-center"
                    v-if="submitted && !$v.usuario.senha.required"
                  >
                    Digite a senha.
                  </div>
                  <div
                    class="text-danger text-center"
                    v-if="!$v.usuario.senha.minLength"
                  >
                    Senha tem que ter mais que 4 caracteres.
                  </div>
                </b-form-group>
              </b-col>
              <b-col md="4" v-if="usuario.length >= 0">
                <b-form-group
                  id="confirmarSenha"
                  label="Confirmar Senha:"
                  label-for="confirmar senha"
                >
                  <b-form-input
                    id="confirmarSenha"
                    type="password"
                    :class="{
                      'is-invalid':
                        submitted && $v.usuario.confirmarSenha.$error,
                    }"
                    v-model="usuario.confirmarSenha"
                  ></b-form-input>
                  <div
                    class="text-danger text-center"
                    v-if="submitted && !$v.usuario.confirmarSenha.required"
                  >
                    Digite a confirmação da senha.
                  </div>
                  <div
                    class="text-danger text-center"
                    v-if="!$v.usuario.confirmarSenha.sameAsPassword"
                  >
                    Senhas diferentes, tente novamente.
                  </div>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="12">
                <h5 class="subtitulosMin">Dados do Usuário</h5>
              </b-col>
              <b-col md="6">
                <b-form-group id="nome" label="Nome:" label-for="nome">
                  <b-form-input
                    id="nome"
                    type="text"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.usuario.informacoes.pessoais.nome.$error,
                    }"
                    v-model="usuario.informacoes.pessoais.nome"
                  ></b-form-input>
                  <div
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.usuario.informacoes.pessoais.nome.required
                    "
                  >
                    Digite o nome.
                  </div>
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group id="sexo" label="Sexo:" label-for="sexo">
                  <b-form-select
                    v-model="usuario.informacoes.pessoais.sexo"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.usuario.informacoes.pessoais.sexo.$error,
                    }"
                  >
                    <template #first>
                      <b-form-select-option :value="null" disabled
                        >Selecione o sexo</b-form-select-option
                      >
                    </template>
                    <b-form-select-option value="F"
                      >Feminino</b-form-select-option
                    >
                    <b-form-select-option value="M"
                      >Masculino</b-form-select-option
                    >
                    <b-form-select-option value="O"
                      >Outros</b-form-select-option
                    >
                  </b-form-select>
                  <div
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.usuario.informacoes.pessoais.sexo.required
                    "
                  >
                    Selecione o sexo.
                  </div>
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group
                  id="dataNascimento"
                  label="Data Nascimento:"
                  label-for="Data Nascimento"
                >
                  <b-form-input
                    id="dataNascimento"
                    v-model="usuario.informacoes.pessoais.dataNasc"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.usuario.informacoes.pessoais.dataNasc.$error,
                    }"
                    type="date"
                  ></b-form-input>
                  <div
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.usuario.informacoes.pessoais.dataNasc.required
                    "
                  >
                    Digite a data de nascimento.
                  </div>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="estadoCivil"
                  label="Estado Civil:"
                  label-for="estadoCivil"
                >
                  <b-form-select
                    v-model="usuario.informacoes.pessoais.estadoCivil"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.usuario.informacoes.pessoais.estadoCivil.$error,
                    }"
                  >
                    <template #first>
                      <b-form-select-option :value="null" disabled
                        >Selecione o estadoCivil</b-form-select-option
                      >
                    </template>
                    <b-form-select-option value="solteiro"
                      >Solteiro(a)</b-form-select-option
                    >
                    <b-form-select-option value="casado"
                      >Casado(a)</b-form-select-option
                    >
                    <b-form-select-option value="viuva"
                      >Viúvo(a)</b-form-select-option
                    >
                    <b-form-select-option value="divorciada"
                      >Divorciado(a)</b-form-select-option
                    >
                  </b-form-select>
                  <div
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.usuario.informacoes.pessoais.estadoCivil.required
                    "
                  >
                    Selecione o estado civil.
                  </div>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group id="email" label="E-mail:" label-for="email">
                  <b-form-input
                    id="email"
                    v-model="usuario.informacoes.pessoais.email"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.usuario.informacoes.pessoais.email.$error,
                    }"
                    type="text"
                  ></b-form-input>
                  <span
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.usuario.informacoes.pessoais.email.required
                    "
                  >
                    Digite o e-mail.
                  </span>
                  <span
                    class="text-danger text-center"
                    v-if="!$v.usuario.informacoes.pessoais.email.email"
                    >E-mail é inválido</span
                  >
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group id="rg" label="RG:" label-for="rg">
                  <b-form-input
                    id="rg"
                    type="number"
                    :class="{
                      'is-invalid':
                        submitted && $v.usuario.informacoes.pessoais.rg.$error,
                    }"
                    v-mask="maskRg"
                    v-model="usuario.informacoes.pessoais.rg"
                  ></b-form-input>
                  <span
                    class="text-danger text-center"
                    v-if="
                      submitted && !$v.usuario.informacoes.pessoais.rg.required
                    "
                  >
                    Digite o RG.
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
                    :class="{ 'is-invalid': submitted && $v.cep.$error }"
                    @keyup="searchCep()"
                    v-model="cep"
                    v-mask="maskCep"
                  ></b-form-input>
                  <div
                    class="text-danger text-center"
                    v-if="submitted && !$v.cep.required"
                  >
                    Digite o CEP.
                  </div>
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
                    v-model="usuario.informacoes.endereco.rua"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group id="bairro" label="Bairro:" label-for="bairro">
                  <b-form-input
                    id="bairro"
                    type="text"
                    readonly
                    v-model="usuario.informacoes.endereco.bairro"
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
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.usuario.informacoes.endereco.complemento.$error,
                    }"
                    v-model="usuario.informacoes.endereco.complemento"
                  ></b-form-input>
                  <div
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.usuario.informacoes.endereco.complemento.required
                    "
                  >
                    Digite o complemento.
                  </div>
                </b-form-group>
              </b-col>
              <b-col md="2">
                <b-form-group id="numero" label="Número:" label-for="numero">
                  <b-form-input
                    id="numero"
                    type="number"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.usuario.informacoes.endereco.numero.$error,
                    }"
                    v-model="usuario.informacoes.endereco.numero"
                  ></b-form-input>
                  <div
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.usuario.informacoes.endereco.numero.required
                    "
                  >
                    Digite o número.
                  </div>
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group id="cidade" label="Cidade:" label-for="cidade">
                  <b-form-input
                    id="cidade"
                    type="text"
                    readonly
                    v-model="usuario.informacoes.endereco.cidade"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="2">
                <b-form-group id="uf" label="UF:" label-for="uf">
                  <b-form-input
                    id="numero"
                    type="text"
                    readonly
                    v-model="usuario.informacoes.endereco.uf"
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
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.usuario.informacoes.contato.telefonePrincipal.$error,
                    }"
                    v-model="usuario.informacoes.contato.telefonePrincipal"
                  ></b-form-input>
                  <div
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.usuario.informacoes.contato.telefonePrincipal.required
                    "
                  >
                    Digite um telefone.
                  </div>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="telefone2"
                  v-mask="maskTele"
                  label="Telefone Auxiliar :"
                  label-for="telefone Auxiliar"
                >
                  <b-form-input
                    id="telefone2"
                    v-mask="maskTele"
                    type="text"
                    v-model="usuario.informacoes.contato.telefoneAuxiliar"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group id="celular" label="Celular:" label-for="celular">
                  <b-form-input
                    id="celular"
                    v-mask="maskCelular"
                    type="text"
                    v-model="usuario.informacoes.contato.celular"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="responsavelRecado"
                  label="Responsável Recado:"
                  label-for="responsavel Recado"
                >
                  <b-form-input
                    id="responsavelRecado"
                    type="text"
                    :class="{
                      'is-invalid':
                        submitted &&
                        $v.usuario.informacoes.contato.responsavelRecado.$error,
                    }"
                    v-model="usuario.informacoes.contato.responsavelRecado"
                  ></b-form-input>
                  <div
                    class="text-danger text-center"
                    v-if="
                      submitted &&
                      !$v.usuario.informacoes.contato.responsavelRecado.required
                    "
                  >
                    Digite responsavel pelo recado.
                  </div>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
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
                    v-model="usuario.informacoes.redesSociais.facebook"
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
                    v-model="usuario.informacoes.redesSociais.instagram"
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
                    v-model="usuario.informacoes.redesSociais.linkedin"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group id="twitter" label="Twitter:" label-for="twitter">
                  <b-form-input
                    id="twitter"
                    type="text"
                    v-model="usuario.informacoes.redesSociais.twitter"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group id="github" label="Github:" label-for="github">
                  <b-form-input
                    id="github"
                    type="text"
                    v-model="usuario.informacoes.redesSociais.github"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col
                md="6"
                v-for="(input, k) in usuario.informacoes.redesSociais.outras"
                :key="k"
              >
                <b-row>
                  <b-col md="9" cols="7">
                    <b-form-group
                      id="outraRedeSocial"
                      label="Outra Rede Social:"
                      label-for="outraRedeSocial"
                    >
                      <b-form-input
                        id="outraRedeSocial"
                        type="text"
                        v-model="input.valor"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col class="mt-4" md="3" cols="5">
                    <div class="correcao-buttons">
                      <b-button
                        class="bg-button"
                        v-show="
                          k ==
                          usuario.informacoes.redesSociais.outras.length - 1
                        "
                        @click="addOutraRedeSocial(k)"
                      >
                        <b-icon
                          icon="plus"
                          aria-hidden="true"
                        ></b-icon> </b-button
                      ><b-button
                        class="ml-1 bg-danger"
                        v-show="
                          k ||
                          (!k &&
                            usuario.informacoes.redesSociais.outras.length >= 1)
                        "
                        @click="removeOutraRedeSocial(k)"
                      >
                        <b-icon icon="x" aria-hidden="true"></b-icon>
                      </b-button>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12">
                <h5 class="subtitulosMin">Habilidades</h5>
              </b-col>
              <b-col md="12">
                <b-form-checkbox-group
                  v-model="selectedHabilidades"
                  id="habilidades"
                >
                  <b-row>
                    <b-col md="6">
                      <b-form-checkbox value="AutoConfiança"
                        >AutoConfiança</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Boa Comunicação"
                        >Boa Comunicação</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Capacidade de Adaptação"
                        >Capacidade de Adaptação</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Capacidade de Liderança"
                        >Capacidade de Liderança</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Compreensão Interpessoal"
                        >Compreensão Interpessoal</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Criatividade e Inovação"
                        >Criatividade e Inovação</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Espíriro de Equipe"
                        >Espíriro de Equipe</b-form-checkbox
                      ><br />
                    </b-col>

                    <b-col md="6">
                      <b-form-checkbox value="Flexibilidade"
                        >Flexibilidade</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Gerenciamento do Tempo"
                        >Gerenciamento do Tempo</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Iniciativa"
                        >Iniciativa</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Inteligência Emocional"
                        >Inteligência Emocional</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Persuação"
                        >Persuação</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Resolução de Problemas"
                        >Resolução de Problemas</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Visão de Negócio"
                        >Visão de Negócio</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Visão no Cliente"
                        >Visão no Cliente</b-form-checkbox
                      ><br />
                    </b-col>
                  </b-row>
                </b-form-checkbox-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12">
                <h5 class="subtitulosMin">Educação</h5>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="nivelEnsino"
                  label="Nível de Ensino:"
                  label-for="nivel de ensino"
                >
                  <b-form-select
                    @change="verificacaoCamposEducacao()"
                    v-model="selectedNivelEnsino"
                    :options="optionsNivelEnsino"
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="instituicaoEnsino"
                  label="Instituição de Ensino:"
                  label-for="instituição de ensino"
                >
                  <b-form-input
                    id="instituicaoEnsino"
                    type="text"
                    v-model="instituicaoEnsino"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="cursoGrau"
                  label="Curso/Grau:"
                  label-for="curso/grau"
                >
                  <b-form-input
                    id="cursoGrau"
                    type="text"
                    v-model="cursoGrau"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="2" v-if="verificaCamposEdu == true">
                <b-form-group
                  id="mesFormatura"
                  label="Mês da Formatura:"
                  label-for="mês formatura"
                >
                  <b-form-select
                    v-model="selectedMesFormatura"
                    :options="optionsMesFormatura"
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="2" v-if="verificaCamposEdu == true">
                <b-form-group
                  id="mesFormatura"
                  label="Ano da Formatura:"
                  label-for="ano formatura"
                >
                  <b-form-select
                    v-model="selectedAnoFormatura"
                    :options="optionsAnoFormatura"
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="4" v-if="verificaCamposEdu == true">
                <b-form-group
                  id="numeroMatricula"
                  label="Número da Matrícula:"
                  label-for="numero matricula"
                >
                  <b-form-input
                    id="numeroMatricula"
                    type="text"
                    v-model="numeroMatricula"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="semestre"
                  label="Semestre:"
                  label-for="nsemestre"
                >
                  <b-form-input
                    id="semestre"
                    type="text"
                    v-model="semestre"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-checkbox
                  id="formaçaoAnterior"
                  v-model="formacaoAnterior"
                  name="formação anterior"
                  class="subTitulos"
                >
                  Incluir Formação Anterior
                </b-form-checkbox>
              </b-col>
            </b-row>
            <hr v-if="formacaoAnterior == true" />
            <b-row v-if="formacaoAnterior == true">
              <b-col md="4">
                <b-form-group
                  id="nivelEnsino"
                  label="Nível de Ensino:"
                  label-for="nivel de ensino"
                >
                  <b-form-select
                    @change="verificacaoCamposEducacaoFormAnterior()"
                    v-model="selectedNivelEnsinoForAnterior"
                    :options="optionsNivelEnsinoForAnterior"
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="instituicaoEnsino"
                  label="Instituição de Ensino:"
                  label-for="instituição de ensino"
                >
                  <b-form-input
                    id="instituicaoEnsino"
                    type="text"
                    v-model="instituicaoEnsinoForAnterior"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="cursoGrau"
                  label="Curso/Grau:"
                  label-for="curso/grau"
                >
                  <b-form-input
                    id="cursoGrau"
                    type="text"
                    v-model="cursoGrauForAnterior"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="2" v-if="verificaCamposEduForAnterior == true">
                <b-form-group
                  id="mesFormatura"
                  label="Mês da Formatura:"
                  label-for="mês formatura"
                >
                  <b-form-select
                    v-model="selectedMesFormaturaForAnterior"
                    :options="optionsMesFormaturaForAnterior"
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="2" v-if="verificaCamposEduForAnterior == true">
                <b-form-group
                  id="mesFormatura"
                  label="Ano da Formatura:"
                  label-for="ano formatura"
                >
                  <b-form-select
                    v-model="selectedAnoFormaturaForAnterior"
                    :options="optionsAnoFormaturaForAnterior"
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="4" v-if="verificaCamposEduForAnterior == true">
                <b-form-group
                  id="numeroMatricula"
                  label="Número da Matrícula:"
                  label-for="numero matricula"
                >
                  <b-form-input
                    id="numeroMatricula"
                    type="text"
                    v-model="numeroMatriculaForAnterior"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="semestre"
                  label="Semestre:"
                  label-for="nsemestre"
                >
                  <b-form-input
                    id="semestre"
                    type="text"
                    v-model="semestreForAnterior"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12">
                <h5 class="subtitulosMin">Disponibilidade de Estágio</h5>
              </b-col>
              <b-col md="12" class="my-4">
                <b-form-checkbox-group
                  id="turnoEstagio"
                  v-model="selectedTurnoEstagio"
                  name="turnoEstagio"
                >
                  <b-row>
                    <b-col md="12"
                      ><b-form-checkbox value="manha">Manhã</b-form-checkbox>
                      <b-form-checkbox value="tarde">Tarde</b-form-checkbox
                      ><b-form-checkbox value="noite"
                        >Noite</b-form-checkbox
                      ></b-col
                    >
                  </b-row>
                  <div class="text-danger" v-if="submitStatus">
                    Digite a disponibilidade.
                  </div>
                </b-form-checkbox-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12">
                <h5 class="subtitulosMin">Experiências</h5>
              </b-col>
              <b-col md="12">
                <div class="my-3">
                  <b-form-checkbox
                    id="primeiraExperiencia"
                    v-model="primeiraExperiencia"
                    name="primeira Experienciar"
                    class="subTitulos"
                  >
                    Primeira Experiência?
                  </b-form-checkbox>
                </div>
              </b-col>
            </b-row>
            <b-row v-if="primeiraExperiencia == false">
              <b-col md="12">
                <h5 class="subTitulos">Atual ou último emprego</h5>
              </b-col>
              <b-col md="4">
                <b-form-group id="empresa" label="Empresa:" label-for="empresa">
                  <b-form-input
                    id="empresa"
                    type="text"
                    v-model="experienciaAtual.empresaAtual"
                  ></b-form-input>
                </b-form-group>
              </b-col>

              <b-col md="4">
                <b-form-group
                  id="periodoIncial"
                  label="Periodo Inicial:"
                  label-for="periodo incial"
                >
                  <b-form-input
                    id="periodoIncial"
                    type="date"
                    v-model="experienciaAtual.periodoInicialAtual"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="periodoFinal"
                  label="Periodo Final:"
                  label-for="periodo final"
                >
                  <b-form-input
                    id="periodoFinal"
                    type="date"
                    v-model="experienciaAtual.periodoFinalAtual"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  id="atividades"
                  label="Atívidades:"
                  label-for="atividades"
                >
                  <b-form-textarea
                    id="atividades"
                    v-model="experienciaAtual.atividadesAtual"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>
            <hr v-if="primeiraExperiencia == false" />
            <b-row v-if="primeiraExperiencia == false">
              <b-col md="12">
                <h5 class="subTitulos">Penúltimo Emprego</h5>
              </b-col>
              <b-col md="4">
                <b-form-group id="empresa" label="Empresa:" label-for="empresa">
                  <b-form-input
                    id="empresa"
                    type="text"
                    v-model="experienciaPenultima.empresaPenultima"
                  ></b-form-input>
                </b-form-group>
              </b-col>

              <b-col md="4">
                <b-form-group
                  id="periodoIncial"
                  label="Periodo Inicial:"
                  label-for="periodo incial"
                >
                  <b-form-input
                    id="periodoIncial"
                    type="date"
                    v-model="experienciaPenultima.periodoInicialPenultima"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="periodoFinal"
                  label="Periodo Final:"
                  label-for="periodo final"
                >
                  <b-form-input
                    id="periodoFinal"
                    type="date"
                    v-model="experienciaPenultima.periodoFinalPenultima"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  id="atividades"
                  label="Atívidades:"
                  label-for="atividades"
                >
                  <b-form-textarea
                    id="atividades"
                    v-model="experienciaPenultima.atividadesPenultima"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="12">
                <div>
                  <b-form-checkbox
                    v-if="primeiraExperiencia == false"
                    class="my-3 subTitulos"
                    id="vivenciaExperiencia"
                    v-model="vivenciaAnterior"
                    name="vivência Experienciar"
                  >
                    Incluir Vivências Anteriores?
                  </b-form-checkbox>
                </div>
              </b-col>
            </b-row>
            <b-row
              v-if="vivenciaAnterior == true && primeiraExperiencia == false"
            >
              <b-col md="12">
                <h5 class="subTitulos">1 - Vivência Anterior</h5>
              </b-col>
              <b-col md="4">
                <b-form-group id="empresa" label="Empresa:" label-for="empresa">
                  <b-form-input
                    id="empresa"
                    type="text"
                    v-model="
                      experienciaVivenciaAnterior1.empresaVivenciaAnterior
                    "
                  ></b-form-input>
                </b-form-group>
              </b-col>

              <b-col md="4">
                <b-form-group
                  id="periodoIncial"
                  label="Periodo Inicial:"
                  label-for="periodo incial"
                >
                  <b-form-input
                    id="periodoIncial"
                    type="date"
                    v-model="
                      experienciaVivenciaAnterior1.periodoInicialVivenciaAnterior
                    "
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="periodoFinal"
                  label="Periodo Final:"
                  label-for="periodo final"
                >
                  <b-form-input
                    id="periodoFinal"
                    type="date"
                    v-model="
                      experienciaVivenciaAnterior1.periodoFinalVivenciaAnterior
                    "
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  id="atividades"
                  label="Atívidades:"
                  label-for="atividades"
                >
                  <b-form-textarea
                    id="atividades"
                    v-model="
                      experienciaVivenciaAnterior1.atividadesVivenciaAnterior
                    "
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>
            <hr
              v-if="vivenciaAnterior == true && primeiraExperiencia == false"
            />
            <b-row
              v-if="vivenciaAnterior == true && primeiraExperiencia == false"
            >
              <b-col md="12">
                <h5 class="subTitulos">2 - Vivência Anterior</h5>
              </b-col>
              <b-col md="4">
                <b-form-group id="empresa" label="Empresa:" label-for="empresa">
                  <b-form-input
                    id="empresa"
                    type="text"
                    v-model="
                      experienciaVivenciaAnterior2.empresaVivenciaAnterior
                    "
                  ></b-form-input>
                </b-form-group>
              </b-col>

              <b-col md="4">
                <b-form-group
                  id="periodoIncial"
                  label="Periodo Inicial:"
                  label-for="periodo incial"
                >
                  <b-form-input
                    id="periodoIncial"
                    type="date"
                    v-model="
                      experienciaVivenciaAnterior2.periodoInicialVivenciaAnterior
                    "
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="periodoFinal"
                  label="Periodo Final:"
                  label-for="periodo final"
                >
                  <b-form-input
                    id="periodoFinal"
                    type="date"
                    v-model="
                      experienciaVivenciaAnterior2.periodoFinalVivenciaAnterior
                    "
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  id="atividades"
                  label="Atívidades:"
                  label-for="atividades"
                >
                  <b-form-textarea
                    id="atividades"
                    v-model="
                      experienciaVivenciaAnterior2.atividadesVivenciaAnterior
                    "
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12">
                <h5 class="subtitulosMin">Conhecimentos</h5>
              </b-col>
              <b-col md="12" class="mt-4">
                <h5 class="subTitulos">Idiomas</h5>
              </b-col>
              <!-- <b-col md="12">
              <b-form-checkbox-group
                v-model="selectedIdiomas"
                :options="optionsIdiomas"
                class="mb-3"
                value-field="item"
                text-field="name"
              ></b-form-checkbox-group>
            </b-col> -->
              <b-col md="12">
                <b-form-checkbox-group
                  id="conhecimentoIdiomas"
                  v-model="selectedIdiomas"
                  name="conhecimentoIdiomas"
                >
                  <b-row>
                    <b-col md="6"
                      ><b-form-checkbox value="EspanholFluente"
                        >Espanhol Fluente</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="EspanholIntermediario"
                        >Espanhol Intermediário</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="EspanholBasico"
                        >Espanhol Básico</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="NaoFaloEspanhol"
                        >Não falo Espanhol</b-form-checkbox
                      ><br />
                    </b-col>
                    <b-col md="6">
                      <b-form-checkbox value="InglesFluente"
                        >Ingles Fluente</b-form-checkbox
                      >
                      <br />
                      <b-form-checkbox value="InglesIntermediario"
                        >Ingles Intermediário</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="InglesBasico"
                        >Ingles Básico</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="NaoFaloIngles"
                        >Não falo Ingles</b-form-checkbox
                      >
                      <br
                    /></b-col>
                  </b-row>
                </b-form-checkbox-group>
              </b-col>
              <hr />
              <b-col md="12" class="mt-4">
                <h5 class="subTitulos">Informática</h5>
              </b-col>
              <b-col md="12">
                <b-form-checkbox-group
                  v-model="selectedInformatica"
                  class="mb-3"
                >
                  <b-row>
                    <b-col md="4"
                      ><b-form-checkbox value="Word">Word</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Excel">Excel</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Internet"
                        >Internet</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Dreamweaver"
                        >Dreamweaver</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Access">Access</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Corel Draw"
                        >Corel Draw</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Photoshop"
                        >Photoshop</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="HTML">HTML</b-form-checkbox><br />
                      <b-form-checkbox value="Autocad 2D"
                        >Autocad 2D</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Page Maker"
                        >Page Maker</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Freehand"
                        >Freehand</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Flash">Flash</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Visual Basic"
                        >Visual Basic</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Java">Java</b-form-checkbox><br />
                      <b-form-checkbox value="Web Design"
                        >Web Design</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Hardware"
                        >Hardware</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Delphi">Delphi</b-form-checkbox
                      ><br />
                    </b-col>
                    <b-col md="4">
                      <b-form-checkbox value="SQL">SQL</b-form-checkbox><br />
                      <b-form-checkbox value="Redes">Redes</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Manutenção de PCs"
                        >Manutenção de PCs</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Linux">Linux</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Banco de Dados"
                        >Banco de Dados</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="NaoFaloIngles"
                        >Linux</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="ASP">ASP</b-form-checkbox><br />
                      <b-form-checkbox value="Oracle">Oracle</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Acrobat Reader"
                        >Acrobat Reader</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="PHP">PHP</b-form-checkbox><br />
                      <b-form-checkbox value="illustrator"
                        >illustrator</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Indesign"
                        >Indesign</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Premiere"
                        >Premiere</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="After Effects"
                        >After Effects</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Fireworks"
                        >Fireworks</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Promob">Promob</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Sketchup"
                        >Sketchup</b-form-checkbox
                      ><br />
                    </b-col>
                    <b-col md="4">
                      <b-form-checkbox value="CSS">CSS</b-form-checkbox><br />
                      <b-form-checkbox value="Vectorworks"
                        >Vectorworks</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Formz">Formz</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Render V –Ray"
                        >Render V –Ray</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="3D studio"
                        >3D studio</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Linguagem C"
                        >Linguagem C</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Linguagem C++"
                        >Linguagem C++</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Linguagem C#"
                        >Linguagem C#</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Autocad 3D"
                        >Autocad 3D</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Revit">Revit</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="MySQL">MySQL</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="JQuery">JQuery</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Parallax"
                        >Parallax</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Bootstrap"
                        >Bootstrap</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Archicad"
                        >Archicad</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Javascript"
                        >Javascript</b-form-checkbox
                      ><br />
                    </b-col>
                  </b-row>
                </b-form-checkbox-group>
              </b-col>
              <hr />

              <b-col md="12" class="mt-4">
                <h5 class="subTitulos">Outros</h5>
              </b-col>
              <b-col md="12">
                <b-form-checkbox-group v-model="selectedOutros">
                  <b-row>
                    <b-col md="6"
                      ><b-form-checkbox value="Carro">Carro</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="CNH A">CNH A</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="CNH AB">CNH AB</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="CNH B">CNH B</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="COREN">COREN</b-form-checkbox
                      ><br />
                    </b-col>
                    <b-col md="6">
                      <b-form-checkbox value="Digitação"
                        >Digitação</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Inglês Técnico"
                        >Inglês Técnico</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Moto">Moto</b-form-checkbox><br />
                      <b-form-checkbox value="OAB">OAB</b-form-checkbox><br />
                      <b-form-checkbox value="Qualidade Total"
                        >Qualidade Total</b-form-checkbox
                      ><br />
                      <b-form-checkbox value="Recreação"
                        >Recreação</b-form-checkbox
                      ><br />
                    </b-col>
                  </b-row>
                </b-form-checkbox-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12">
                <h5 class="subtitulosMin">Portfólio</h5>
              </b-col>
              <b-col md="6">
                <b-form-group
                  id="postfolio"
                  label="Portfólio:"
                  label-for="postfolio"
                >
                  <b-form-input
                    id="postfolio"
                    type="text"
                    v-model="usuario.informacoes.portfolio"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-col md="12">
              <div style="text-align: center" class="my-5">
                <b-button pill class="btn-editado" @click="saveCandidato"
                  ><b-icon icon="check" class="mr-1"></b-icon
                  >Cadastrar</b-button
                >
                <b-button
                  pill
                  class="btn-editado ml-2"
                  @click="$bvModal.show('cancelarPerfilUsuario')"
                  ><b-icon icon="x" class="mr-1"></b-icon>Cancelar</b-button
                >
              </div>
            </b-col>
          </form>
        </div>
        <b-modal
          id="cancelarPerfilUsuario"
          centered
          class="mt-5"
          title="Ops, atenção!"
        >
          <p class="my-2">
            Você realmente deseja cancelar essa edição do perfil do usuário?
          </p>
          <template #modal-footer>
            <b-button
              size="md"
              pill
              class="float-right btn-editado mr-2"
              @click="cancelarPerfilUsuario"
              ><b-icon icon="check" class="mr-1"></b-icon>
              Sair
            </b-button>
            <b-button
              size="md"
              pill
              class="float-right btn-editado"
              @click="hideConfirmacaoUsuario"
              ><b-icon icon="x" class="mr-1"></b-icon>
              Cancelar
            </b-button>
          </template>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarPaginaInicial from "../paginaInicial/NavbarPaginaInicial";
import { buscarCepService, usuarioService } from "@/service";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "NovoUsuario",
  components: {
    NavbarPaginaInicial,
  },
  data() {
    return {
      maskCpf: "###.###.###-##",
      maskRg: "##########",
      maskCep: "##.###-###",
      maskData: "##/##/####",
      maskTele: "(##) ####-####",
      maskCelular: "(##) # ####-####",

      submitStatus: null,
      submitted: false,

      // Card de empresa
      selectedSexo: [],
      optionsSexo: [
        { value: null, text: "Selecione o sexo" },
        { value: 1, text: "Feminino" },
        { value: 2, text: "Masculino" },
        { value: 3, text: "Outros" },
      ],

      // Card de Endereço
      cep: "",
      data: {},

      // Card de Habilidades
      selectedHabilidades: [],

      // Card Educação
      selectedNivelEnsino: [],
      optionsNivelEnsino: [
        { value: null, text: "Selecione o nível de ensino" },
        { value: 1, text: "Ensino Médio e Supletivo" },
        { value: 2, text: "Cursos (Técnicos e Profissionalizantes)" },
        { value: 3, text: "Ensino Superior" },
      ],
      instituicaoEnsino: "",
      cursoGrau: "",
      selectedMesFormatura: [],
      optionsMesFormatura: [
        { value: null, text: "Selecione o mês..." },
        { value: "janeiro", text: "Janeiro" },
        { value: "fevereiro", text: "Fevereiro" },
        { value: "marco", text: "Março" },
        { value: "abril", text: "Abril" },
        { value: "maio", text: "Maio" },
        { value: "junho", text: "Junho" },
        { value: "julho", text: "Julho" },
        { value: "agosto", text: "Agosto" },
        { value: "setembro", text: "Setembro" },
        { value: "outubro", text: "Outubro" },
        { value: "novembro", text: "Novembro" },
        { value: "dezembro", text: "Dezembro" },
      ],
      selectedAnoFormatura: [],
      optionsAnoFormatura: [
        { value: null, text: "Selecione o ano..." },
        { value: 2018, text: "2018" },
        { value: 2019, text: "2019" },
        { value: 2020, text: "2020" },
        { value: 2021, text: "2021" },
        { value: 2022, text: "2022" },
        { value: 2023, text: "2023" },
        { value: 2024, text: "2024" },
        { value: 2025, text: "2025" },
        { value: 2026, text: "2026" },
        { value: 2027, text: "2027" },
        { value: 2028, text: "2028" },
        { value: 2029, text: "2029" },
      ],
      numeroMatricula: "",
      semestre: "",
      verificaCamposEdu: false,
      formacaoAnterior: false,

      selectedNivelEnsinoForAnterior: [],
      optionsNivelEnsinoForAnterior: [
        { value: null, text: "Selecione o nível de ensino" },
        { value: 1, text: "Ensino Médio e Supletivo" },
        { value: 2, text: "Cursos (Técnicos e Profissionalizantes)" },
        { value: 3, text: "Ensino Superior" },
      ],
      instituicaoEnsinoForAnterior: "",
      cursoGrauForAnterior: "",
      selectedMesFormaturaForAnterior: [],
      optionsMesFormaturaForAnterior: [
        { value: null, text: "Selecione o mês..." },
        { value: "janeiro", text: "Janeiro" },
        { value: "fevereiro", text: "Fevereiro" },
        { value: "marco", text: "Março" },
        { value: "abril", text: "Abril" },
        { value: "maio", text: "Maio" },
        { value: "junho", text: "Junho" },
        { value: "julho", text: "Julho" },
        { value: "agosto", text: "Agosto" },
        { value: "setembro", text: "Setembro" },
        { value: "outubro", text: "Outubro" },
        { value: "novembro", text: "Novembro" },
        { value: "dezembro", text: "Dezembro" },
      ],
      selectedAnoFormaturaForAnterior: [],
      optionsAnoFormaturaForAnterior: [
        { value: null, text: "Selecione o ano..." },
        { value: 2018, text: "2018" },
        { value: 2019, text: "2019" },
        { value: 2020, text: "2020" },
        { value: 2021, text: "2021" },
        { value: 2022, text: "2022" },
        { value: 2023, text: "2023" },
        { value: 2024, text: "2024" },
        { value: 2025, text: "2025" },
        { value: 2026, text: "2026" },
        { value: 2027, text: "2027" },
        { value: 2028, text: "2028" },
        { value: 2029, text: "2029" },
      ],
      numeroMatriculaForAnterior: "",
      semestreForAnterior: "",
      verificaCamposEduForAnterior: false,

      // Card de Disponibilidade para Estágio
      selectedTurnoEstagio: [],

      // Card de Experiência
      primeiraExperiencia: false,
      vivenciaAnterior: false,
      experienciaAtual: {
        empresaAtual: "",
        periodoIncialAtual: "",
        periodoFinalAtual: "",
        atividadesAtual: "",
      },
      experienciaPenultima: {
        empresaPenultima: "",
        periodoIncialPenultima: "",
        periodoFinalPenultima: "",
        atividadesPenultima: "",
      },
      experienciaVivenciaAnterior1: {
        empresaVivenciaAnterior: "",
        periodoIncialVivenciaAnterior: "",
        periodoFinalVivenciaAnterior: "",
        atividadesVivenciaAnterior: "",
      },
      experienciaVivenciaAnterior2: {
        empresaVivenciaAnterior: "",
        periodoIncialVivenciaAnterior: "",
        periodoFinalVivenciaAnterior: "",
        atividadesVivenciaAnterior: "",
      },

      // Card de conhecimento
      selectedIdiomas: [],
      selectedInformatica: [],
      selectedOutros: [],

      usuario: {
        usuario: "",
        senha: "",
        email: "",
        confirmarSenha: "",
        informacoes: {
          pessoais: {
            nome: "",
            sexo: "",
            estadoCivil: "",
            dataNasc: "",
            rg: "",
            cpf: "",
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
            telefoneAuxiliar: "",
            responsavelRecado: "",
          },
          redesSociais: {
            facebook: "",
            instagram: "",
            linkedin: "",
            twitter: "",
            github: "",
            outras: [
              {
                valor: "",
              },
            ],
          },
          habilidades: [],
          educacao: [],
          disponibilidade: [],
          experiencias: [],
          conhecimentos: {
            idiomas: [],
            informatica: [],
            outros: [],
          },
          portfolio: "",
        },
      },
    };
  },
  validations: {
    cep: {
      required,
    },
    usuario: {
      informacoes: {
        pessoais: {
          cpf: {
            required,
          },
          nome: {
            required,
          },
          sexo: {
            required,
          },
          estadoCivil: {
            required,
          },
          dataNasc: {
            required,
          },
          rg: {
            required,
          },
          email: {
            required,
            email,
          },
        },
        endereco: {
          numero: {
            required,
          },
          complemento: {
            required,
          },
        },
        contato: {
          telefonePrincipal: {
            required,
          },
          responsavelRecado: {
            required,
          },
        },
      },
    },
  },
  methods: {
    searchCep() {
      const parsed = this.cep
        .normalize("NFD")
        .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");
      if (parsed.length == 8) {
        buscarCepService.buscarCep(parsed).then((response) => {
          this.data = response.data;
          // console.log(response.data)
          this.usuario.informacoes.endereco.cep = this.data.cep;
          this.usuario.informacoes.endereco.rua = this.data.logradouro;
          this.usuario.informacoes.endereco.uf = this.data.uf;
          this.usuario.informacoes.endereco.cidade = this.data.localidade;
          this.usuario.informacoes.endereco.bairro = this.data.bairro;
        });
      }
    },
    saveCandidato() {
      // Validação e avisos de campos vazios ao usuário
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      this.usuario.informacoes.habilidades = this.selectedHabilidades;

      this.usuario.informacoes.educacao.push({
        nivelEnsino: this.selectedNivelEnsino,
        instituicao: this.instituicaoEnsino,
        cursosGrau: this.cursoGrau,
        mesFormatura: this.selectedMesFormatura,
        anoFormatura: this.selectedAnoFormatura,
        numeroMatricula: this.numeroMatricula,
        semestre: this.semestre,
      });

      if (this.formacaoAnterior == true) {
        this.usuario.informacoes.educacao.push({
          nivelEnsino: this.selectedNivelEnsinoForAnterior,
          instituicao: this.instituicaoEnsinoForAnterior,
          cursosGrau: this.cursoGrauForAnterior,
          mesFormatura: this.selectedMesFormaturaForAnterior,
          anoFormatura: this.selectedAnoFormaturaForAnterior,
          numeroMatricula: this.numeroMatriculaForAnterior,
          semestre: this.semestreForAnterior,
        });
      }

      this.usuario.informacoes.disponibilidade = this.selectedTurnoEstagio;

      if (this.primeiraExperiencia == false) {
        if (
          this.experienciaAtual != null ||
          this.experienciaAtual != undefined
        ) {
          this.usuario.informacoes.experiencias.push(this.experienciaAtual);
        }
        if (
          this.experienciaPenultima != null ||
          this.experienciaPenultima != undefined
        ) {
          this.usuario.informacoes.experiencias.push(this.experienciaPenultima);
        }
      }

      if (this.vivenciaAnterior == true) {
        if (
          this.experienciaVivenciaAnterior1 != null ||
          this.experienciaVivenciaAnterior1 != undefined
        ) {
          this.usuario.informacoes.experiencias.push(
            this.experienciaVivenciaAnterior1
          );
        }
        if (
          this.experienciaVivenciaAnterior2 != null ||
          this.experienciaVivenciaAnterior2 != undefined
        ) {
          this.usuario.informacoes.experiencias.push(
            this.experienciaVivenciaAnterior2
          );
        }
      }

      this.usuario.informacoes.conhecimentos.idiomas = this.selectedIdiomas;

      this.usuario.informacoes.conhecimentos.informatica = this.selectedInformatica;

      this.usuario.informacoes.conhecimentos.outros = this.selectedOutros;

      console.log("Candidato: ", this.usuario);

      usuarioService
        .editUsuario(this.usuario)
        .then(() => {
          this.infoMsg = "Candidato editado com sucesso!";
          this.showAlertSuccess();
          this.$router.push("/usuario");
          localStorage.setItem("usuario", JSON.stringify(this.usuario));
        })
        .catch((error) => {
          // this.errorMsg = error;
          this.errorMsg = "Erro ao editar o perfil do candidato.";
          // console.log(error);
          this.showAlertDanger();
        });
    },
    addOutraRedeSocial(index) {
      this.usuario.informacoes.redesSociais.outras.push({ valor: "" });
    },
    removeOutraRedeSocial(index) {
      this.usuario.informacoes.redesSociais.outras.splice(index, 1);
    },
    verificacaoCamposEducacao() {
      if (this.selectedNivelEnsino === 1 || this.selectedNivelEnsino === null) {
        this.verificaCamposEdu = false;
        return this.verificaCamposEdu;
      }
      this.verificaCamposEdu = true;
      return this.verificaCamposEdu;
    },
    verificacaoCamposEducacaoFormAnterior() {
      if (
        this.selectedNivelEnsinoForAnterior === 1 ||
        this.selectedNivelEnsinoForAnterior === null
      ) {
        this.verificaCamposEduForAnterior = false;
        return this.verificaCamposEduForAnterior;
      }
      this.verificaCamposEduForAnterior = true;
      return this.verificaCamposEduForAnterior;
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
    cancelarPerfilUsuario() {
      this.$router.push("/usuario/homeUsuario");
    },

    hideConfirmacaoUsuario() {
      this.$bvModal.hide("cancelarPerfilUsuario");
    },
  },
  mounted() {
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    // console.log(this.usuario);

    if (this.usuario.informacoes.endereco.cep) {
      this.cep = this.usuario.informacoes.endereco.cep;
    }

    // Checkbox
    if (this.usuario.informacoes.habilidades.length > 0) {
      this.selectedHabilidades = this.usuario.informacoes.habilidades;
    }
    if (this.usuario.informacoes.disponibilidade.length > 0) {
      this.selectedTurnoEstagio = this.usuario.informacoes.disponibilidade;
    }
    if (this.usuario.informacoes.conhecimentos.idiomas.length > 0) {
      this.selectedIdiomas = this.usuario.informacoes.conhecimentos.idiomas;
    }
    if (this.usuario.informacoes.conhecimentos.informatica.length > 0) {
      this.selectedInformatica = this.usuario.informacoes.conhecimentos.informatica;
    }
    if (this.usuario.informacoes.conhecimentos.outros.length > 0) {
      this.selectedOutros = this.usuario.informacoes.conhecimentos.outros;
    }

    // Educação
    if (this.usuario.informacoes.educacao.length > 0) {
      for (let i = 0; i <= this.usuario.informacoes.educacao.length; i++) {
        const educacao = this.usuario.informacoes.educacao[i];

        if (i == 0) {
          this.selectedNivelEnsino = educacao.nivelEnsino;
          this.instituicaoEnsino = educacao.instituicao;
          this.cursoGrau = educacao.cursosGrau;
          this.selectedMesFormatura = educacao.mesFormatura;
          this.selectedAnoFormatura = educacao.anoFormatura;
          this.numeroMatricula = educacao.numeroMatricula;
          this.semestre = educacao.semestre;
        }

        if (i == 1) {
          this.formacaoAnterior = true;
          this.selectedNivelEnsinoForAnterior = educacao.nivelEnsino;
          this.instituicaoEnsinoForAnterior = educacao.instituicao;
          this.cursoGrauForAnterior = educacao.cursosGrau;
          this.selectedMesFormaturaForAnterior = educacao.mesFormatura;
          this.selectedAnoFormaturaForAnterior = educacao.anoFormatura;
          this.numeroMatriculaForAnterior = educacao.numeroMatricula;
          this.semestreForAnterior = educacao.semestre;
        }
      }
    }

    // Experieências
    // console.log(this.usuario.informacoes.experiencias);
    if (this.usuario.informacoes.experiencias.length > 0) {
      for (let i = 0; i <= this.usuario.informacoes.experiencias.length; i++) {
        const experiencia = this.usuario.informacoes.experiencias[i];

        if (i == 0) {
          this.experienciaAtual = experiencia;
        }
        if (i == 1) {
          this.experienciaPenultima = experiencia;
        }
        if (i == 2) {
          this.vivenciaAnterior = true;
          this.experienciaVivenciaAnterior1 = experiencia;
        }
        if (i == 3) {
          this.experienciaVivenciaAnterior2 = experiencia;
        }
      }
    } else {
      this.primeiraExperiencia = true;
    }
  },
};
</script>

<style>
</style>