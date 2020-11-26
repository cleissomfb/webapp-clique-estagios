import Vue from 'vue'
import VueRouter from 'vue-router'
// Rota de Autenticação
import { isSignedInEmp, signOutEmp } from '../authEmp'
import { isSignedInUser, signOutUser } from '../authUser'

// View da pasta Página Inicial
import PaginaInicial from '../views/paginaInicial/PaginaInicial.vue'

// View da pasta Usuário
import Usuario from '../views/usuario/Usuario.vue'
import CadastroUsuario from '../views/usuario/CadastroUsuario.vue'
import RecuperarSenhaUsuario from '../views/usuario/RecuperarSenhaUsuario.vue'
import HomeUsuario from '../views/usuario/HomeUsuario.vue'
import PerfilUsuario from '../views/usuario/PerfilUsuario.vue'
import VisualizarVagas from '../views/usuario/VisualizarVagas.vue'
import VagasSelecionadas from '../views/usuario/VagasSelecionadas.vue'

// View da pasta Empresa
import Empresa from '../views/empresa/Empresa.vue'
import CadastroEmpresa from '../views/empresa/CadastroEmpresa.vue'
import RecuperarSenhaEmpresa from '../views/empresa/RecuperarSenhaEmpresa.vue'
import HomeEmpresa from '../views/empresa/HomeEmpresa.vue'
import PerfilEmpresa from '../views/empresa/PerfilEmpresa.vue'
import CadastrarVaga from '../views/empresa/CadastrarVaga.vue'
import vagasCadastradas from '../views/empresa/VagasCadastradas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PaginaInicial',
    components: { default: PaginaInicial }
  },
  {
    path: '/cadastroEmpresa',
    name: 'CadastroEmpresa',
    components: { default: CadastroEmpresa }
  },
  {
    path: '/recuperarSenhaEmpresa',
    name: 'RecuperarSenhaEmpresa',
    components: { default: RecuperarSenhaEmpresa }
  },
  {
    path: '/cadastroUsuario',
    name: 'CadastroUsuario',
    components: { default: CadastroUsuario }
  },
  {
    path: '/recuperarSenhaUsuario',
    name: 'RecuperarSenhaUsuario',
    components: { default: RecuperarSenhaUsuario }
  },
  {
    path: '/empresa',
    name: 'Empresa',
    components: { default: Empresa },
    children: [
      {
        path: 'homeEmpresa',
        components: { empresaView: HomeEmpresa }
      },
      {
        path: 'perfilEmpresa',
        components: { empresaView: PerfilEmpresa }
      },
      {
        path: 'cadastrarVaga',
        components: { empresaView: CadastrarVaga }
      },
      {
        path: 'editarVaga/:id',
        components: { empresaView: CadastrarVaga }
      },
      {
        path: 'vagasCadastradas',
        components: { empresaView: vagasCadastradas }
      },
    ],
    beforeEnter(_, __, next) { // Impede usuários não assinados
      if (isSignedInEmp()) { // de acessar a página Home.
        next()
        return
      }
      next('/')
    }
  },
  {
    path: '/usuario',
    name: 'Usuario',
    components: { default: Usuario },
    children: [
      {
        path: 'homeUsuario',
        components: { usuarioView: HomeUsuario }
      },
      {
        path: 'perfilUsuario',
        components: { usuarioView: PerfilUsuario }
      },
      {
        path: 'visualizarVagas',
        components: { usuarioView: VisualizarVagas }
      },
      {
        path: 'vagasSelecionadas',
        components: { usuarioView: VagasSelecionadas }
      }
    ],
    beforeEnter(_, __, next) { // Impede usuários não assinados
      if (isSignedInUser()) { // de acessar a página Home.
        next()
        return
      }
      next('/')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
