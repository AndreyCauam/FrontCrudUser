export interface Pessoa {
    id?: Number | null;
    nome: String | null;
    email: String | null;
    data_de_nascimento: Date | null;
}

export interface Notification {
    title: String;
    message: String;
    type: String;
}

export interface Options {
    search: String | null;
    limit: Number;
    offset: Number;
}