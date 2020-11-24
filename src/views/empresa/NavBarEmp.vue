<template>
  <div>
  <b-navbar class="navbar">
    <b-navbar-brand v-b-toggle.sidebar-no-header href="#"><ion-icon class="menu-sidebar" name="reorder-four-outline"></ion-icon></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/empresa/homeEmpresa">Home</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <!-- <em>User</em> -->
            <b-icon-three-dots-vertical style="color: white;"/>
          </template>
          <b-dropdown-item @click="logout">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { signOutEmp } from "@/authEmp";

export default {
  name: "NavbarEmp",
  data() {
    return {

    }
  },
  methods: {
    logout(){
       signOutEmp();
       this.$router.push("/");
    },
  }
};
</script>

<style scoped>
</style>
