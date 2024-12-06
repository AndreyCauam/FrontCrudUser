<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { usePessoaStore } from '@/stores/pessoa'
import type { Options } from '@/helpers/types';
import moment from 'moment';

const router = useRouter()
const pessoaStore = usePessoaStore()
const { pessoas } = storeToRefs(pessoaStore)

const options = reactive<Options>({ 
    search: null,
    limit: 10,
    offset: 0
})

onMounted(() => {
    pessoaStore.getAllPessoas(options)
})

</script>

<template>
  <div class="Container">
    <div class="row">
        <div class="col-12 text-end ">
            <button type="button" @click="router.push({name: 'CreatePessoa'})" class="btn btn-primary">Adicionar pessoa</button>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-12">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Data de Nascimento</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="pessoa in pessoas" :key="pessoa.id">
                        <th scope="row">{{pessoa.id}}</th>
                        <td>{{pessoa.nome}}</td>
                        <td>{{pessoa.email}}</td>
                        <td>{{moment(pessoa.data_de_nascimento).format('DD/MM/YYYY')}}</td>
                        <td>
                            <div class="d-flex gap-2">
                                <button type="button" @click="router.push({name: 'CreatePessoa'})" class="btn btn-primary"><i class="bi-pencil-square"></i></button>
                                <button type="button" @click="router.push({name: 'CreatePessoa'})" class="btn btn-danger"><i class="bi-trash"></i></button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>        
        </div>
    </div>
  </div>

</template>

<style scoped>

</style>
