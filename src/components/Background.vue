<template>
    <div id="background" class="bg-grey">
        <v-container fluid>
            <v-row no-gutters>
                <h1 class="display-2 font-weight-thin mb-4 underline">hey</h1>
            </v-row>
        </v-container>
        <div class="bg-grey no-shadow">
            <v-window class="no-shadow" v-model="onboarding">
                <v-window-item v-for="n in career" :key="`card-${n.key}`">
                    <v-row class="fill-height" tag="v-card-text">
                        <v-container>
                            <blockquote class="headline mt-3 blockquote pa-0">{{ n.title }}</blockquote>
                            <blockquote class="subheading mt-3 blockquote pa-0">{{ n.content }}</blockquote>
                            <blockquote v-if="n.content2" class="subheading mt-3 blockquote pa-0">{{ n.content2 }}</blockquote>
                        </v-container>
                    </v-row>
                </v-window-item>
            </v-window>

            <v-card-actions class="justify-space-between">
                <v-btn text @click="prev">
                    <v-icon class="cool-blue">mdi-chevron-left</v-icon>
                </v-btn>
                <v-item-group
                    v-model="onboarding"
                    class="text-center"
                    mandatory
                >
                    <v-item
                        v-for="n in length"
                        :key="`btn-${n}`"
                        v-slot:default="{ active, toggle }"
                    >
                        <v-btn
                            :input-value="active"
                            icon
                            @click="toggle"
                        >
                            <v-icon class="cool-blue">mdi-record</v-icon>
                        </v-btn>
                    </v-item>
                </v-item-group>
                <v-btn text @click="next">
                    <v-icon class="cool-blue">mdi-chevron-right</v-icon>
                </v-btn>
            </v-card-actions>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Background",

        mounted() {},

        data: () => ({
            length: 3,
            onboarding: 0,
            career: [
                {
                    key: 0,
                    title: 'i\'m kevin - i\'m a developer',
                    content: 'my first professional development experience came from an e-commerce retail company named grunt style. i began exclusively\n' +
                        'doing front-end work on their shopify web store, and quickly gained many more responsibilities by spearheading\n' +
                        'projects on the store\'s bridge application, written in laravel. some of these projects included:\n' +
                        'a front-facing, third-party application API integration for subscription customers, extending the\n' +
                        'store\'s theme capabilities by interacting with the shopify API, and a limited-use, free shirt program (driven by email address)\n' +
                        'for customers who purchased a partner\'s product. throughout my time at grunt style, i had the pleasure\n' +
                        'of working with a great team, and i grew exponentially as a full-stack developer.' },
                {
                    key: 1,
                    title: 'moving on',
                    content: 'in august of 2018, i left grunt style to pursue an opportunity at another e-commerce company called interior define.\n' +
                        'the interior define team has a web store hosted by magento, and a back-end and bridge application also written in laravel. this\n' +
                        'application utilizes the laravel backpack admin panel package, and keeps records of each sales order, with separate customer\n' +
                        'information, and product sections by piece. the app\'s CRUD actions also communicate back to magento for quick order/customer/product\n' +
                        'revisions by the customer service team. the application also serves as a bridge to push order data to netsuite,\n' +
                        'and the shipping ERP system.',
                    content2: 'during my time at interior define, i was tasked with creating another back-end application using laravel and backpack.\n' +
                        'this application was to be used as a master data storage to fuel the website\'s swatch store portion via an API.\n' +
                        'swatches were initially uploaded via CSV, and CRUD actions on a swatch would integrate with magento, and\n' +
                        'the S3 bucket which housed all of the swatch images. using horizon and a lightning-fast job queue, the swatch\n' +
                        'data would be saved locally, the image would be created/updated, resized three separate times in S3, and would\n' +
                        'instantly be available by magento via an API call. other API endpoints on this project included: getting\n' +
                        'swatch(es) by id/title/family/color/material'
                },
                {
                    key: 2,
                    title: 'currently',
                    content: 'at the end of march 2019, i joined a media company called farm journal. maintaining multiple drupal sites\n' +
                        'housing agricultural content, many of my daily tasks are making sure modules are updated properly,\n' +
                        'creating custom modules for editorial requests, third-party application integrations with the sites,\n' +
                        'and continuously working on the master drupal site, which pushes content out to each necessary location.',
                    content2: 'we have also created an API written in laravel, which uses the laravel nova admin panel. this API is\n' +
                        'to serve as the backbone of all our application integration, with an application front-end written\n' +
                        'exclusively in vue. passport is handling all of the endpoints that require oauth2 authentication,\n' +
                        'and horizon is used for a quick and easy job queue management. the application currently sends automated\n' +
                        'emails and SMS by template via the JSON data submitted to the endpoints. vue components are incorporated\n' +
                        'as nova resources to send a single email/SMS to any customer who may have been missed in the JSON. the API\n' +
                        'documentation also provides thorough details of each endpoint, what the necessary headers are, how the\n' +
                        'JSON data needs to be formatted, and code examples for command line, php, and javascript.'
                }
            ]
        }),

        methods: {
            next () {
                this.onboarding = this.onboarding + 1 === this.length
                    ? 0
                    : this.onboarding + 1
            },

            prev () {
                this.onboarding = this.onboarding - 1 < 0
                    ? this.length - 1
                    : this.onboarding - 1
            },
        }
    }
</script>

<style scoped>
    .headline, .subheading {
        color: #fff;
    }
    .no-shadow {
        background-color: #7a7a7a !important;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }
</style>
