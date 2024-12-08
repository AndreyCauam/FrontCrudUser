<script setup lang="ts">
import { handleError, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { usePessoaStore } from '@/stores/pessoa'
import type { Options, Pessoa } from '@/helpers/types';
import ModalConfirm from '@/components/ModalConfirm.vue';
import moment from 'moment';
import { toast } from 'vue3-toastify';

const router = useRouter()
const pessoaStore = usePessoaStore()
const { pessoas } = storeToRefs(pessoaStore)
const dataModal = ref<Pessoa | null>(null)
const loading = ref(false)

const options = reactive<Options>({ 
    search: null,
    limit: 10,
    offset: 0
})

const deletePessoa = (pessoa: Pessoa) => {
    modalVisible.value = true;
    dataModal.value = pessoa
}

const confirmDelete = async (id: Number) => {
    try {
        loading.value = true
        await pessoaStore.deletePessoa(id)
        toast('Pessoa deletada com sucesso')
        modalVisible.value = false;
        dataModal.value = null
        loading.value = false  
    } catch (error) {
        return error
    }
}

let modalVisible= ref(false);

onMounted(() => {
    pessoaStore.getAllPessoas(options)
})

</script>

<template>
  <div class="Container">
    <div class="row">
        <div class="col-12 text-end ">
            <button type="button" @click="router.push({name: 'CreatePessoa'})" id="add-pessoa" class="btn btn-primary">Adicionar pessoa</button>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <table class="table" v-if="!loading">
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
                                        <button type="button" @click="router.push({name: 'UpdatePessoa', params:{id:pessoa.id}})" id="edit-pessoa" class="btn btn-primary"><i class="bi-pencil-square"></i></button>
                                        <button type="button" @click="deletePessoa(pessoa)" id="delete-pessoa" class="btn btn-danger"><i class="bi-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-else>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-6"></span>
                        </p>
                    </div>
                </div>
            </div>
            <ModalConfirm :show="modalVisible">
                <template #body>Tem certeza que seja delete {{dataModal?.nome}}? Essa ação não poderá ser revertida.</template>
                <template #footer>
                    <button class="btn btn-primary" id="delete-confirm" @click="confirmDelete(dataModal?.id)">Tenho certeza que quero deletar {{dataModal?.nome}}</button>
                </template>
            </ModalConfirm>   
        </div>
    </div>
  </div>

</template>

<style scoped>

</style>
