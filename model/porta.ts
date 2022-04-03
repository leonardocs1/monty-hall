export default class PortaModel {
  #numero: number
  #temPresente: boolean
  #selecionada: boolean
  #aberta: boolean

  constructor(numero: number, temPresente = false, selecionada = false, aberta = false) {
    this.#numero = numero
    this.#temPresente = temPresente
    this.#selecionada = selecionada
    this.#aberta = aberta
  }

  get numero() {
    return this.#numero
  }

  get tempresente() {
    return this.#temPresente
  }

  get selecionada() {
    return this.#selecionada
  }

  get aberta() {
    return this.#aberta
  }

  desselecionar() {
    const selecionada = false
    return new PortaModel(this.numero, this.tempresente, selecionada, this.aberta)
  }

  alternarSelecao() {
    const selecionada = !this.selecionada
    return new PortaModel(this.numero, this.tempresente, selecionada, this.aberta)
  }

  abrir() {
    const aberta = true
    return new PortaModel(this.numero, this.tempresente, this.selecionada, aberta)
  }
}
