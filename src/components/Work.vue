<template>
    <div id="work" class="bg-grey">
        <v-container fluid>
            <v-row no-gutters class="mb-6">
                <h1 class="display-2 font-weight-thin mb-4 underline">things i've done</h1>
            </v-row>
            <v-row justify="center" align="center">
                <blockquote class="text-white mt-3 title font-weight-light blockquote pa-0">
                    some these projects have slightly changed since i was a part of them, but if you have any questions regarding these
                    front-facing examples, and how i was involved, be sure to drop me a line below!
                </blockquote>
            </v-row>
        </v-container>
        <v-container class="fill-height" fluid>
            <v-col cols="6">
                <v-card>
                    <v-hover v-slot:default="{ hover }">
                        <v-img
                            :src="id_image"
                            height="250"
                            contain
                            class="grey darken-4"
                        >
                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    @click="navigateToSite"
                                    :id="id_url"
                                    class="d-flex transition-fast-in-fast-out overlay-blue darken-2 v-card--reveal display-3 white--text"
                                    style="height: 100%;"
                                >
                                    <v-card-text :id="id_url">
                                        magento<br>laravel
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-img>
                    </v-hover>
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header class="title">interior define</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                a magento-hosted, e-commerce store that is truly pleasing from a visual standpoint.
                                custom modules make browsing the product catalog a breeze, while the added swatch
                                store section allows customers to effortlessly pick which fabric is their favorite before purchase.
                                order data is captured by the connected laravel application, and an equally pleasing admin
                                panel allows employees to access said data with ease.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card>
                    <v-hover v-slot:default="{ hover }">
                        <v-img
                            :src="gs_image"
                            height="250"
                            contain
                            class="grey darken-4"
                        >
                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    @click="navigateToSite"
                                    :id="gs_url"
                                    class="d-flex transition-fast-in-fast-out overlay-blue darken-2 v-card--reveal display-3 white--text"
                                    style="height: 100%;"
                                >
                                    <v-card-text :id="gs_url">
                                        shopify<br>laravel<br>common js
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-img>
                    </v-hover>
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header class="title">grunt style</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                using html, liquid, and common js, this shopify theme is truly a custom experience.
                                reduced-cost for first-time subscription products are handled via ajax to push the
                                otherwise hidden products into the cart, and loads of examples of interaction with
                                the laravel application are scattered throughout the site.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
            </v-col>
        </v-container>
        <v-container class="fill-height" fluid>
            <v-col cols="6">
                <v-card>
                    <v-hover v-slot:default="{ hover }">
                        <v-img
                            :src="mb_image"
                            height="250"
                            contain
                            @click="navigateToSite"
                            class="grey darken-4"
                        >
                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    :id="mb_url"
                                    class="d-flex transition-fast-in-fast-out overlay-blue darken-2 v-card--reveal display-3 white--text"
                                    style="height: 100%;"
                                >
                                    <v-card-text :id="mb_url">
                                        wordpress
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-img>
                    </v-hover>
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header class="title">merica bourbon</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                a simple brand information page that utilizes the google maps API for a store locator,
                                an instagram plugin for users to see their posts on the site by adding a custom tag
                                to them, and a custom 'press' page to post articles written about the brand.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card>
                    <v-hover v-slot:default="{ hover }">
                        <v-img
                            :src="ag_image"
                            height="250"
                            contain
                            class="grey darken-4"
                        >
                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    @click="navigateToSite"
                                    :id="ag_url"
                                    class="d-flex transition-fast-in-fast-out overlay-blue darken-2 v-card--reveal display-3 white--text"
                                    style="height: 100%;"
                                >
                                    <v-card-text :id="ag_url">
                                        drupal<br>express js
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-img>
                    </v-hover>
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header class="title">agweb</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                housing the nation's #1 site for agricultural content, is farm journal's top drupal
                                application. cron jobs pull content via API calls from the express js middleware application,
                                while keeping the site lightning-fast to make sure the user experience is top-notch.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
            </v-col>
        </v-container>
        <v-container class="fill-height" fluid>
            <v-col cols="6">
                <v-card>
                    <v-hover v-slot:default="{ hover }">
                            <v-img
                            :src="hh_image"
                            height="250"
                            contain
                            class="grey darken-4"
                        >
                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    @click="navigateToSite"
                                    :id="hh_url"
                                    class="d-flex transition-fast-in-fast-out overlay-blue darken-2 v-card--reveal display-3 white--text"
                                    style="height: 100%;"
                                >
                                    <v-card-text :id="hh_url">
                                        wordpress
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-img>
                    </v-hover>
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header class="title">harry helmet</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                written in the roots/bedrock wordpress boilerplate, this small site is full of custom
                                fields available from the admin panel. examples of said custom fields include:
                                testimonials (text and rating), footer copy, carousel images, hero headers/subtest,
                                and the hero promo bar.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
            </v-col>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Work",

        data: () => ({
            gs_image: `http://${window.location.host}/gs-monitor.png`,
            mb_image: `http://${window.location.host}/merica-bourbon-monitor.png`,
            id_image: `http://${window.location.host}/interior-define-monitor.png`,
            hh_image: `http://${window.location.host}/harry-helmet-monitor.png`,
            ag_image: `http://${window.location.host}/agweb-monitor.png`,
            gs_url: 'https://gruntstyle.com',
            mb_url: 'http://www.mericabourbon.com/',
            id_url: 'https://interiordefine.com',
            hh_url: 'https://harryhelmetvirginia.com/',
            ag_url: 'https://agweb.com'
        }),

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
</style>
