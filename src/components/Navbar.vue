<template>
  <nav>
    <v-toolbar app color="primary" dark>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <span>Imagine</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Home", route: "/" },
        { icon: "collections", text: "Gallery", route: "/gallery" },
        { icon: "image", text: "Single Image", route: "/singleImage" },
        { icon: "account_circle", text: "Account", route: "/account" }
      ]
    };
  }
};
</script>
