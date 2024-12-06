import { defineStore } from 'pinia';
import {
  createPessoa,
  updatePessoa,
  showPessoa,
  getAllPessoas,
  deletePessoa,
} from '@/service/modules/pessoa.service';
import type { Options, Pessoa } from '@/helpers/types';

export const usePessoaStore = defineStore({
  id: 'pessoa',
  state: () => ({
    pessoas: [] as Pessoa[],
    pessoa: null as Pessoa | null,
  }),
  actions: {
    async createPessoa(data: Pessoa) {
      try {
        const newPessoa = await createPessoa(data);
        if (newPessoa) {
          this.pessoas.push(newPessoa);
        }
      } catch (error) {
        console.error('Erro ao criar pessoa:', error);
      }
    },


    async updatePessoa(id: number, data: Pessoa) {
      try {
        const updatedPessoa = await updatePessoa(id, data);
        if (updatedPessoa) {
          const index = this.pessoas.findIndex((pessoa) => pessoa.id === id);
          if (index !== -1) {
            this.pessoas[index] = updatedPessoa;
          }
        }
      } catch (error) {
        console.error('Erro ao atualizar pessoa:', error);
      }
    },


    async showPessoa(id: number) {
      try {
        const pessoa = await showPessoa(id);
        if (pessoa) {
          this.pessoa = pessoa;
        }
      } catch (error) {
        console.error('Erro ao buscar pessoa:', error);
      }
    },

    async getAllPessoas(options: Options) {
      try {
        const {pessoas} = await getAllPessoas(options);
       
        this.pessoas = pessoas;
        
      } catch (error) {
        console.error('Erro ao buscar todos os pessoas:', error);
      }
    },

    async deletePessoa(id: number) {
      try {
        await deletePessoa(id);
        this.pessoas = this.pessoas.filter((pessoa) => pessoa.id !== id);
      } catch (error) {
        console.error('Erro ao deletar pessoa:', error);
      }
    },
  },
});
