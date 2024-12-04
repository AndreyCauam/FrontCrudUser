import { api } from '../api'
import type {User} from '@/Helpers/types'

export const createUser = async (data: User): Promise<User | undefined> => {
    try {
        const res = await api.post(`/pessoa`, data)
        return res.data
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Erro ao criar pessoa: ${error.message}`);
        }
        throw new Error('Erro desconhecido ao criar pessoa.');
    }
}

export const updateUser = async (id: number, data: User): Promise<User> => {
    try {
        const res = await api.patch(`/pessoa/${id}`, data)
        return res.data
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Erro ao atualizar pessoa: ${error.message}`);
        }
        throw new Error('Erro desconhecido ao atualizar pessoa.');
    }
}

export const showUser = async (id: number): Promise<User | undefined> => {
    try {
        const res = await api.get(`/pessoa/show/${id}`)
        return res.data
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Erro ao mostrar pessoa: ${error.message}`);
        }
        throw new Error('Erro desconhecido ao mostrar pessoa.');
    }
}

export const getAllUsers = async (): Promise<User[]> => {
    try {
        const res = await api.post(`/pessoas`)
        return res.data
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Erro ao listas pessoas`);
        }
        throw new Error('Erro desconhecido ao listar pessoas.');
    }
}

export const deleteUser = async (id: number): Promise<void> => {
    try {
        const res = await api.delete(`/pessoa/${id}`)
        return res.data
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Erro ao deletar pessoa`);
        }
        throw new Error('Erro desconhecido ao deletar pessoa.');
    }
}