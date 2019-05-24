<template>
  <div class="gallery">
    <v-container fluid class="pt-0 px-0">
      <v-parallax :src="parImgSrc">
        <v-layout align-center justify-center>
          <h1 class="display-2 font-weight-medium">Gallery</h1>
        </v-layout>
      </v-parallax>
      <v-layout row wrap class="px-5 mx-5" >
        <v-flex xs12 sm12 md12 lg12  v-for="i in images" :key="i.id" d-flex @click="parImgSrc = i.download_url">
          <v-card flat tile class="d-flex">
            <v-img :src="i.download_url">

              <template v-slot:placeholder>
                <v-layout
                  fill-height
                  align-center
                  justify-center
                  ma-0
                >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      imgSrcApi: 'https://picsum.photos/v2/list',
      parImgSrc: 'https://picsum.photos/id/1021/2048/1206',
      images:[]
    }
  },
  mounted () {
    this.axios.get(this.imgSrcApi).then((response) => {
      // eslint-disable-next-line
      console.log(response)
      this.images = response.data

    })
  }
};
</script>
