<template>
    <v-card class="pt-4 pr-4 pl-4 mb-5">
        <h4 class="ml-4">
            <span v-html="convertCode"></span>
        </h4>
        <v-layout row justify-center>
            <v-text-field
                    :disabled="checked!=null"
                    type="number"
                    style="max-width:160px;"
                    v-model="answer"
                    :label="$lang.string.answer"
            ></v-text-field>
            <v-btn class="mbtn" :disabled="!answer" v-if="checked==null" @click.native="check()" primary large>
                {{$lang.string.check}}
            </v-btn>
            <v-btn v-else-if="checked" dark small fab class="success elevation-0">
                <v-icon>done</v-icon>
            </v-btn>
            <v-btn dark small fab class="error elevation-0" v-else>
                <v-icon>close</v-icon>
            </v-btn>
            <transition name="bounce">
                <h6 v-if="checked==false" class="pa-2">
                    {{$lang.string.correctAnswer}}
                    <b>{{getValue}}</b>
                </h6>
            </transition>
        </v-layout>

    </v-card>
</template>

<script>
    let s = 0, i = 0;
    export default {
        props: ['items'],
        data() {
            return {
                answer: null,
                checked: null,
            }
        },
        computed: {
            getValue() {
                return eval(this.items);
            },
            convertCode() {
                let string = this.items;
                let commands = ['while', 'do', 'begin', 'end;'];
                string = string.substr(0, string.length - 2);
                string = string.trim();
                string = string.replace(/;/g, ';<br/>');
                string = string.replace(/=/g, ':=');
                string = string.replace(/\(/g, ' ');
                string = string.replace(/\)/g, ' do</br>');
                string = string.replace(/{/g, 'begin</br>');
                string = string.replace(/}/g, 'end;</br>');

                for (let command of commands)
                    string = string.replace(command, `<span class="font700 blue--text">${command}</span>`);
                return string;
            }
        },
        methods: {
            check() {
                this.checked = this.answer == this.getValue;
                this.$parent.$emit('setResult', this.checked);
            }
        }
    }
</script>