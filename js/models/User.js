class User {
    constructor(Name = "",PassWord = "",Pfp = "",Account){
        this.name = Name
        this.password = PassWord
        this.pfp = Pfp
        this.account = Account
    }
}

class Account {
    constructor(Saldo = 0) {
        this.saldo - Saldo
        this.historico = []
    }

    Depositar(valor) {
        this.saldo += valor
    }

    Sacar(valor) {
        this.saldo -= valor
        this.historico.push(`${Data}`)
    }

    Consultar() {
        return {
            "saldo": this.saldo,
            "Historico": this.historico
        }
    }

}