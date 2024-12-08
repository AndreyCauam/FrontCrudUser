<script setup lang="ts">
import type { Pessoa } from '@/helpers/types';
import { ref, watch } from 'vue';
import moment from 'moment';
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const emit = defineEmits([
    'submit',
    'close',
    'update:formData',
    'update:date'
])

const isValid = ref(false)

const rules = {
  nome: {required},
  email: {required, email},
  data_de_nascimento: {required}
}

const props = defineProps({
    formData:{
        type: null,
        required: true
    },
    date:{
        type: null,
        required: true
    }
})

const form = ref<Pessoa>(props.formData)
const dateFormat = ref<String | null>(props.date ? moment(props.date).format('YYYY-MM-DD') : null)

const v$ = useVuelidate(rules, form)

const alertIsValid = () => {
  isValid.value = true;
  setTimeout(() => {
    isValid.value = false;
  }, 1500);
}

const submitForm = () => {
  v$.value.$touch();
  if (v$.value.$invalid) {
    alertIsValid();
    return;
  }
  emit('submit')
}

watch(form, () => {
    emit('update:formData', form.value)
})

watch(dateFormat, () => {
    form.value.data_de_nascimento = moment(dateFormat.value)
    emit('update:formData', dateFormat.value)
})
</script>

<template>
    <div class="card p-4" :class="{ shake: isValid }">
        <form @submit.prevent="submitForm()" >
            <div class="row mb-2">
              <div class="col-12">
                <label for="exampleFormControlInput1" class="form-label">Nome</label>
                <input
                  id="form-nome"
                  v-model="form.nome"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': v$.nome.$error, 'is-valid': !v$.nome.$error && v$.nome.$model }"
                  name="nome"
                  placeholder="Digite um nome"
                  @blur="v$.nome.$touch()"
                />
                <div v-if="v$.nome.$error" class="invalid-feedback">
                  Campo obrigatório.
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="email" class="form-label">Email</label>
                <input
                  id="form-email"
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': v$.email.$error, 'is-valid': !v$.email.$error && v$.email.$model }"
                  name="email"
                  placeholder="Digite um email"
                  @blur="v$.email.$touch()"
                />
                <div v-if="v$.email.$error" class="invalid-feedback">
                  Insira um email válido.
                </div>
              </div>

              <div class="col-6">
                <label for="data-de-nascimento" class="form-label">Data de Nascimento</label>
                <input
                  id="form-data"
                  v-model="form.data_de_nascimento"
                  type="date"
                  class="form-control"
                  :class="{ 'is-invalid': v$.data_de_nascimento.$error, 'is-valid': !v$.data_de_nascimento.$error && v$.data_de_nascimento.$model }"
                  name="data-de-nascimento"
                  @blur="v$.data_de_nascimento.$touch()"
                />
                <div v-if="v$.data_de_nascimento.$error" class="invalid-feedback">
                  Insira uma data de nascimento válida.
                </div>
              </div>
            </div> 
            <div class="row mt-4">
              <div class="col-12 text-end">
                <button type="button" @click="emit('close')" id="back-home" class="btn btn-secondary me-2">Voltar</button>
                <button type="submit" class="btn btn-primary" id="submit-pessoa" >Salvar</button>
              </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
  .shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>