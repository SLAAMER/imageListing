<template>
    <div class="single-image">
        <v-container>
            <v-layout row wrap>
                <v-flex xs6 sm6 md3 lg3 xl3>
                    <v-overflow-btn
                    :items="dropdown_font"
                    label="Overflow Btn"
                    target="#dropdown-example"
                    ></v-overflow-btn>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs6 sm6 md3 lg3 xl3>
                    <v-overflow-btn
                    :items="dropdown_icon"
                    segmented
                    label="Overflow Btn"
                    target="#dropdown-example"
                    ></v-overflow-btn>
                </v-flex>
            </v-layout>
            <v-card flat>
                <v-layout row wrap>
                    <v-flex>
                        <v-img :src="imageSrc"></v-img>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>
    </div>
</template>
<script>
export default {
    data(){
        return {
            imageSrc:"https://picsum.photos/500/800",
            dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
            dropdown_icon: [
                { text: 'list', callback: () => console.log('list') },
                { text: 'favorite', callback: () => console.log('favorite') },
                { text: 'delete', callback: () => console.log('delete') }
            ],
        }
    }
}
</script>