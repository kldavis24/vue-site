<template>
    <div id="work" class="bg-grey">
        <v-container fluid>
            <v-row no-gutters class="mb-6">
                <h1 class="display-2 font-weight-thin mb-4 underline">things i've done</h1>
            </v-row>
            <v-row justify="center" align="center">
                <blockquote class="text-white mt-3 title text-center font-weight-light blockquote pa-0">
                    some these projects have slightly changed since i was a part of them, but if you have any questions regarding these
                    front-facing examples, and how i was involved, be sure to drop me a line below!
                </blockquote>
            </v-row>
        </v-container>

        <div class="hidden-md-and-down">
            <v-container fluid>
                <ul :style="gridStyle" class="card-list">
                    <li v-for="example in examples" class="card-item">
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
                                                <div :id="example.url" v-for="recipe in example.recipes">{{ recipe }}</div>
                                            </v-card-text>
                                        </div>
                                    </v-expand-transition>
                                </v-img>
                            </v-hover>
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-header class="title">{{ example.title }}</v-expansion-panel-header>
                                    <v-expansion-panel-content>{{ example.description }}</v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-card>
                    </li>
                </ul>
            </v-container>
        </div>

        <MobileWork class="hidden-md-and-up" :examples="examples" />
    </div>
</template>

<script>
    import MobileWork from "./MobileWork";
    export default {
        name: "Work",

        components: {
            MobileWork
        },

        mounted() {},

        data: () => ({
            examples: [
                {
                    title: 'interior define',
                    image: require('../assets/interior-define-monitor.png'),
                    url: 'https://interiordefine.com',
                    description: 'a magento-hosted, e-commerce store that is truly pleasing from a visual standpoint.\n' +
                        'custom modules make browsing the product catalog a breeze, while the added swatch\n' +
                        'store section allows customers to effortlessly pick which fabric is their favorite before purchase.\n' +
                        'order data is captured by the connected laravel application, and an equally pleasing admin\n' +
                        'panel allows employees to access said data with ease.',
                    recipes: [
                        'magento',
                        'laravel'
                    ]
                },
                {
                    title: 'grunt style',
                    image: require('../assets/gs-monitor.png'),
                    url: 'https://gruntstyle.com',
                    description: 'using html, liquid, and common js, this shopify theme is truly a custom experience.\n' +
                        'reduced-cost for first-time subscription products are handled via ajax to push the\n' +
                        'otherwise hidden products into the cart, and loads of examples of interaction with\n' +
                        'the laravel application are scattered throughout the site.',
                    recipes: [
                        'shopify',
                        'common js',
                        'laravel'
                    ]
                },
                {
                    title: 'merica bourbon',
                    image: require('../assets/merica-bourbon-monitor.png'),
                    url: 'http://www.mericabourbon.com',
                    description: 'a simple brand information page that utilizes the google maps API for a store locator,\n' +
                        'an instagram plugin for users to see their posts on the site by adding a custom tag\n' +
                        'to them, and a custom \'press\' page to post articles written about the brand.',
                    recipes: [
                        'wordpress'
                    ]
                },
                {
                    title: 'agweb',
                    image: require('../assets/agweb-monitor.png'),
                    url: 'https://agweb.com',
                    description: 'housing the nation\'s #1 site for agricultural content, is farm journal\'s top drupal\n' +
                        'application. cron jobs pull content via API calls from the express js middleware application,\n' +
                        'while keeping the site lightning-fast to make sure the user experience is top-notch.',
                    recipes: [
                        'drupal',
                        'express js'
                    ]
                },
                {
                    title: 'harry helmet',
                    image: require('../assets/harry-helmet-monitor.png'),
                    url: 'https://harryhelmetvirginia.com',
                    description: 'written in the roots/bedrock wordpress boilerplate, this small site is full of custom\n' +
                        'fields available from the admin panel. examples of said custom fields include:\n' +
                        'testimonials (text and rating), footer copy, carousel images, hero headers/subtest,\n' +
                        'and the hero promo bar.',
                    recipes: [
                        'wordpress'
                    ]
                },
            ],
            numberOfColumns: 2,
        }),

        computed: {
            gridStyle() {
                return {
                    gridTemplateColumns: `repeat(${this.numberOfColumns}, minmax(100px, 1fr))`
                }
            },
        },

        methods: {
            navigateToSite(event) {
                let url = event.target.id

                window.open(url, '_blank')
            }
        }
    }
</script>

<style scoped>
    .card-list {
        display: grid;
        grid-gap: 1em;
    }
    ul {
        list-style-type: none;
        padding-left: 0 !important;
    }
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
    .v-card__text {
        color: #fff;
        font-size: 1.5rem;
        font-weight: bold;
        text-shadow: 2px 2px #000;
        line-height: 35px;
    }
</style>
