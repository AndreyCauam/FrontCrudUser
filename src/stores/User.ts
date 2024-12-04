import { defineStore } from 'pinia';
import {
  createUser,
  updateUser,
  showUser,
  getAllUsers,
  deleteUser,
} from '@/Service/modules/user.service';
import type { User } from '@/Helpers/types';

export const useUser = defineStore({
  id: 'user',
  state: () => ({
    users: [] as User[],
    user: null as User | null,
  }),
  actions: {
    async createUser(data: User) {
      try {
        const newUser = await createUser(data);
        if (newUser) {
          this.users.push(newUser);
        }
      } catch (error) {
        console.error('Erro ao criar pessoa:', error);
      }
    },


    async updateUser(id: number, data: User) {
      try {
        const updatedUser = await updateUser(id, data);
        if (updatedUser) {
          const index = this.users.findIndex((user) => user.id === id);
          if (index !== -1) {
            this.users[index] = updatedUser;
          }
        }
      } catch (error) {
        console.error('Erro ao atualizar pessoa:', error);
      }
    },


    async showUser(id: number) {
      try {
        const user = await showUser(id);
        if (user) {
          this.user = user;
        }
      } catch (error) {
        console.error('Erro ao buscar pessoa:', error);
      }
    },

    async getAllUsers() {
      try {
        const users = await getAllUsers();
        if (users) {
          this.users = users;
        }
      } catch (error) {
        console.error('Erro ao buscar todos os pessoas:', error);
      }
    },

    async deleteUser(id: number) {
      try {
        await deleteUser(id);
        this.users = this.users.filter((user) => user.id !== id);
      } catch (error) {
        console.error('Erro ao deletar pessoa:', error);
      }
    },
  },
});
