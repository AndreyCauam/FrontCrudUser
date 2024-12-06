<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue';
import { storeToRefs } from 'pinia';
import moment from 'moment';
import type { Pessoa } from '@/helpers/types';

import { usePessoaStore } from '@/stores/pessoa'
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useRouter } from "vue-router"

const form = reactive<Pessoa>({
  id: null,
  nome: null,
  email: null,
  data_de_nascimento: null,
})

const router = useRouter()
const pessoaStore = usePessoaStore()
const { pessoas } = storeToRefs(pessoaStore)

const handleSubmit = async () => {
  try {

    await pessoaStore.createPessoa(form);
    router.push({ name: 'HomeList' });

  } catch (error) {
    console.error('Erro ao salvar a pessoa:', error);
  }
};
</script>

<template>

  <div class="Container">
    <div class="row">
      <div class="col-6 d-flex align-items-center">
        <form @submit.prevent="handleSubmit">
          <div class="row mb-2">
            <div class="col-12">
              <label for="exampleFormControlInput1" class="form-label">Nome</label>
              <input v-model="form.nome" type="text" class="form-control" id="nome" name="nome" placeholder="Digite um nome">
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <label for="exampleFormControlInput1" class="form-label">Email</label>
              <input v-model="form.email" type="email" class="form-control" id="email" name="email" placeholder="Digite um email">
            </div>
            <div class="col-6">
              <label for="exampleFormControlInput1" class="form-label">Data de nascimento</label>
              <input v-model="form.data_de_nascimento" type="date" class="form-control" id="data-de-nascimento" name="data-de-nascimento" placeholder="">
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12 text-end">
              <button type="button" @click="router.push({name: 'HomeList'})" class="btn btn-secondary me-2">Voltar</button>
              <button type="submit" class="btn btn-primary" >Salvar</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-6 d-flex align-items-center">

      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
