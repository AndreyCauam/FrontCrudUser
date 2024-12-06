import { api } from '../api'
import type {Options, Pessoa} from '@/helpers/types'

export const createPessoa = async (data: Pessoa): Promise<Pessoa | undefined> => {
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

export const updatePessoa = async (id: number, data: Pessoa): Promise<Pessoa> => {
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

export const showPessoa = async (id: number): Promise<Pessoa | undefined> => {
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

export const getAllPessoas = async (option: Options): Promise<Pessoa[]> => {
    try {
        const res = await api.get(`/pessoas`, {params: option})
        return res.data
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Erro ao listas pessoas`);
        }
        throw new Error('Erro desconhecido ao listar pessoas.');
    }
}

export const deletePessoa = async (id: number): Promise<void> => {
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