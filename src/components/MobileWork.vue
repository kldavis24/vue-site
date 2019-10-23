<template>
    <v-container fluid>
        <v-row v-for="example in examples" :key="example.index">
            <v-col cols="12">
                <v-card>
                    <v-hover v-slot:default="{ hover }">
                        <v-img
                            :src="example.image"
                            height="250"
                            contain
                            class="grey darken-4"
                        >
                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    @click="navigateToSite"
                                    :id="example.url"
                                    class="d-flex transition-fast-in-fast-out overlay-blue darken-2 v-card--reveal display-3 white--text"
                                    style="height: 100%;"
                                >
                                    <v-card-text :id="example.url">
                                        <div :id="example.url" v-for="recipe in example.recipes" :key="recipe.index">{{ recipe }}</div>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-img>
                    </v-hover>
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header class="title">{{ example.title }}</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                {{ example.description }}
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Work",

        mounted() {},

        computed: {},

        props: [
            'examples'
        ],

        data: () => ({}),

        methods: {
            navigateToSite(event) {
                let url = event.target.id

                window.open(url, '_blank')
            }
        }
    }
</script>

<style scoped>
    .overlay-blue {
        background-color: rgba(57, 177, 255, 0.53) !important;
    }
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        position: absolute;
        width: 100%;
    }
    .v-image:hover {
        cursor: pointer;
    }
    @media screen and (max-width: 500px) {
        .v-card__text {
            text-align: center;
            color: #fff;
            font-size: 2rem;
            font-weight: bold;
            text-shadow: 2px 2px #000;
            line-height: 35px;
        }
    }
</style>
