<template>
  <div>
    <b-navbar class="navbar">
      <b-navbar-brand v-b-toggle.sidebar-no-header href="#"
        ><ion-icon class="menu-sidebar" name="reorder-four-outline"></ion-icon
      ></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            ><router-link to="/usuario/homeUsuario"
              >Home</router-link
            ></b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content >
              <b-icon-three-dots-vertical style="color: white" />
            </template>
            <b-dropdown-item @click="logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { signOutUser } from "@/authUser";

export default {
  name: "NavbarUser",
  data() {
    return {};
  },
  methods: {
    logout() {
      signOutUser();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>
