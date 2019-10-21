<template>
    <div id="contact" class="black">
        <v-container fluid>
            <v-row no-gutters class="mb-6">
                <h1 class="display-2 font-weight-thin mb-4 underline">get in touch</h1>
            </v-row>
            <v-row justify="center" align="center">
                <div v-if="seen" id="alert-box" class="w-one-quarter mb-6 mt-6" role="alert">
                    <div v-bind:class="['text-white font-bold rounded-t px-4 py-2', alert.header]">
                        {{ alert.title }}
                    </div>
                    <div v-bind:class="['border border-t-0 rounded-b px-4 py-3', alert.body]">
                        <p>{{ alert.message }}</p>
                        <div v-if="errors">
                            <ul v-for="error in errors">
                                <li>{{ error }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </v-row>
            <v-form v-model="valid" class="contact" id="contact-form">
                <v-container>
                    <v-row justify="center" align="center">
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="user_name"
                                name="user_name"
                                :rules="nameRules"
                                :counter="30"
                                label="name"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field
                                v-model="user_email"
                                name="user_email"
                                :rules="emailRules"
                                label="email"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col cols="12" md="4">
                            <v-textarea
                                v-model="message"
                                name="message"
                                :rules="messageRules"
                                label="message"
                                required
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-btn class="mr-4" v-on:click="submit">send</v-btn>
                    </v-row>
                </v-container>
            </v-form>
        </v-container>
        <v-container>
            <v-row justify="center" align="center">
                <v-icon @click="navigateToPage" id="https://github.com/kldavis24" class="xxl cool-blue">mdi-github-circle</v-icon>
                <v-icon @click="navigateToPage" id="https://www.linkedin.com/in/kevin-davis-6345a710a/" class="xxl cool-blue">mdi-linkedin-box</v-icon>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        mounted() {},

        data: () => ({
            valid: false,
            errors: [],
            seen: false,
            alert: [
                { header: '' },
                { body: '' },
                { title: '' },
                { message: '' },
            ],
            user_name: '',
            nameRules: [
                v => !!v || 'name is required',
                v => v.length <= 30 || 'name must be less than 30 characters',
            ],
            user_email: '',
            emailRules: [
                v => !!v || 'email is required',
                v => /.+@.+/.test(v) || 'email must be valid',
            ],
            message: '',
            messageRules: [
                v => !!v || 'message is required',
            ]
        }),

        methods: {
            submit(e) {
                e.preventDefault()

                this.errors = []
                this.validateForm(this.user_name, this.user_email, this.message)
            },

            validateForm(name, email) {
                let form = document.getElementById('contact-form')

                if (!this.user_name) {
                    this.errors.push('name is required');
                } else if (!this.validateName((name))) {
                    this.errors.push('name must be less than 30 characters');
                }

                if (!this.user_email) {
                    this.errors.push('email is required');
                } else if (!this.validateEmail(email)) {
                    this.errors.push('email must be valid');
                }

                if (!this.message) {
                    this.errors.push('message is required')
                }

                if (!this.errors.length) {
                    emailjs.sendForm('contact_service', 'contact_form', form)
                    this.fillAlertArray('bg-green-500', 'thanks!', 'border-green-400 bg-black text-green-500', 'i\'ll be sure to reach out to you')
                } else {
                    this.fillAlertArray('bg-red-500', 'whoops, you done goofed...', 'border-red-400 bg-black text-red-500', null)
                }
            },

            validateEmail(email) {
                let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                return regex.test(email)
            },

            validateName(name) {
                return name.length <= 30;
            },

            navigateToPage(event) {
                let target = event.target

                window.open(`${target.id}`, '_blank')
            },

            fillAlertArray(header, title, body, message) {
                this.alert.header = header
                this.alert.title = title
                this.alert.body = body
                this.alert.message = message
                this.seen = true
            },
        },
    }
</script>

<style>
    .contact-form {
        background: #fff;
    }
    .contact label, .contact input, .contact :before, .contact textarea {
        color: #fff !important;
    }
    .contact label, .contact textarea, .contact input {
        padding-left: 10px !important;
    }
    input, textarea {
        border: 1px solid #39B1FF !important;
    }
    .v-application .primary--text {
        color: #fff !important;
    }
    .v-counter {
        color: #39B1FF !important;
    }
    .contact button {
        background: #000 !important;
        color: #39B1FF !important;
        border: 1px solid #39B1FF !important;
    }
    @media screen and (max-width: 500px) {
        #alert-box {
            width: 75%;
        }
    }
</style>
