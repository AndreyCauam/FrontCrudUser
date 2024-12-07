<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import type { Pessoa } from '@/helpers/types';
import CardForm from '@/components/CardForm.vue';
import gsap from 'gsap';

import { usePessoaStore } from '@/stores/pessoa'
import { useRouter, useRoute } from "vue-router"
import { toast } from 'vue3-toastify';


const form = reactive<Pessoa>({
  id: null,
  nome: null,
  email: null,
  data_de_nascimento: null,
})

const router = useRouter()
const route = useRoute()
const pessoaStore = usePessoaStore()
const { pessoa } = storeToRefs(pessoaStore)

const loading = ref(false)

const handleSubmit = async () => {
  try {
    if (route.params.id) {
      await pessoaStore.updatePessoa(Number(route.params.id), form)
      toast('Pessoa atualizada com sucesso')
      router.push({ name: 'HomeList' })
    }else{
      await pessoaStore.createPessoa(form);
      toast('Pessoa cadastrada com sucesso')
      router.push({ name: 'HomeList' })
    }

  } catch (error) {
    console.error('Erro ao salvar a pessoa:', error);
  }
};

watch(pessoa,(newValue) => {
  Object.assign(form, newValue)
})

watch(
  () =>form.nome,(newValue) => {
  if(newValue){
    gsap.to('#nome', {
      duration: 1,
      textDecoration: "line-through",
      delay: 1 * 0.2, 
    });
  }else{
    gsap.to('#nome', {
      duration: 1,
      textDecoration: "none",
      delay: 1 * 0.2, 
    });
  }
})

watch(
  () =>form.email,(newValue) => {
  if(newValue){
    gsap.to('#email', {
      duration: 2,
      textDecoration: "line-through",
      delay: 2 * 0.2, 
    });
  }else{
    gsap.to('#email', {
      duration: 1,
      textDecoration: "none",
      delay: 1 * 0.2, 
    });
  }
})

watch(
  () =>form.data_de_nascimento,(newValue) => {
  if(newValue){
    gsap.to('#data_de_nascimento', {
      duration: 2,
      textDecoration: "line-through",
      delay: 2 * 0.2, 
    });
  }else{
    gsap.to('#data_de_nascimento', {
      duration: 1,
      textDecoration: "none",
      delay: 1 * 0.2, 
    });
  }
})

onMounted( async () => {
  try {
    if(route.params.id){
      loading.value = true
      await pessoaStore.showPessoa(Number(route.params.id))
      loading.value = false
    }
  } catch (error) {
    return error
  }
})
</script>

<template>
  <div class="Container">
    <div class="row">
      <div class="col-6 d-flex align-items-center">
        <CardForm v-if="!loading" v-model:formData="form" v-model:date="form.data_de_nascimento" @submit="handleSubmit" @close="router.go(-1)"/>
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
      <div class="col-6 d-flex align-items-center">
        <div class="clipboard">
          <div class="sheet">
                <div>
                    <h3>Cadastro de pessoa</h3>
                </div>
                <ol>
                    <li id="nome">Nome</li>
                    <li id="email">Email</li>
                    <li id="data_de_nascimento">Data de nascimento</li>
                </ol>
            </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.clipboard{
    width: 100%;
    height: 600px;
    background: #784008;
    border-radius: 20px;
    padding: 20px;
}
.sheet{
    color: #000;
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 40px;
}
</style>