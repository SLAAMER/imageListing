<template>
    <footer>
        <v-footer height="auto">
            <v-card class="flex" flat tile>
            <v-card-title class="secondary">
                <strong class="subheading">Follow Me in my social media!</strong>

                <v-spacer></v-spacer>

                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-3"
                    icon
                    >
                    <v-icon color="white" size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-title>

            <v-card-actions class="grey darken-3 justify-center">
                &copy;2019 — <strong>Imagine</strong>
            </v-card-actions>
            </v-card>
        </v-footer>
    </footer>
</template>
<script>
 export default {
    data () {
        return {
            icons: [
                'fab fa-facebook',
                'fab fa-twitter',
                'fab fa-google-plus',
                'fab fa-instagram'
            ]
        }
    }
  }
</script>