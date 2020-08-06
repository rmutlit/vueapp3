<template>
  <div>
    <v-app>
      <v-navigation-drawer app>
        <p>navigation drwwer</p>
      </v-navigation-drawer>

      <v-app-bar app>
        <p>app ber</p>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <router-view></router-view> 
        </v-container>
      </v-main>
          
      <v-footer app>
        <p>footer</p>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "RMUTL",
    };
  },
};
</script>

<style>
</style>