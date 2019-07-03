export class Todo {
    id: number;
    texto: string;
    completado: boolean;

    constructor(texto: string) {
        this.texto = texto.charAt(0).toLocaleLowerCase() + texto.slice(1);
        this.completado = false;
        this.id = Math.random();
    }
}
