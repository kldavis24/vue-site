<template>
    <div class="terminal-container">
        <div class="terminal">
            <p class="mb-0">
                <span class="machine-name">devTeamLead@sick-ubuntu-machine</span>
                <span class="path"> ~ $ </span>
                <vue-typer
                    :text="['npm install dynamite-developer']"
                    :repeat="0"
                    initial-action="typing"
                    :type-delay="70"
                    :pre-type-delay="1000"
                    caret-animation="blink"
                ></vue-typer>
            </p>
            <p v-if="packagesVisible" class="mb-0">
                + kevin-davis@2.2.0
            </p>
            <p v-if="packagesVisible" class="mb-0">
                added 1 packages from 3 contributors and audited 24391 packages in 6.125s
            </p>
            <p v-if="packagesVisible">
                found <span class="machine-name">0</span> vulernabilities
            </p>
            <p v-if="commandEnd" class="mb-0">
                Dynamite developer successfully found. Happy hacking!
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        mounted() {
            this.runCommandLine();
        },
        data() {
            return {
                packagesVisible: false,
                commandEnd: false
            };
        },
        methods: {
            runCommandLine() {
                let self = this;

                setTimeout(function() {
                    self.packagesVisible = true;
                }, 6000);

                setTimeout(function() {
                    self.commandEnd = true;
                }, 8000);
            }
        }
    };
</script>

<style>
    .vue-typer .custom.char.typed {
        color: #fff;
    }
    .vue-typer .custom.caret {
        color: #fff;
    }
    .vue-typer .custom.caret.typing {
        background-color: #fff;
    }
    .terminal {
        background: #000;
        margin-left: 25%;
        margin-right: 25%;
        color: #fff;
        padding: 2rem;
        font-family: monospace;
        border: 1px solid #fff;
        border-radius: 10px;
        position: relative;
        top: 35%;
    }
    .machine-name {
        color: #70ff3a;
    }
    .path {
        color: #4462ff;
    }
    .terminal-container {
        background: #000;
        height: 100vh;
        width: 100%;
    }
</style>

