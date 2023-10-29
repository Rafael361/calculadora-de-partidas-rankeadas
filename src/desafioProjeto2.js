// Desafio de Projeto 02 (Formação: Lógica de Programação) - Calculadora de Partidas Rankeadas
// Developer: Rafael Lucas
// Data: 29/10/2023

let saldo = saldoVitorias(60, 20)
let nivelHeroi = nivelCalculado(saldo)
console.log(`O herói tem saldo de ${saldo} e está no nível ${nivelHeroi}`)

function saldoVitorias(vitorias, derrotas){
     return vitorias - derrotas
}

function nivelCalculado(saldo){
    let nivel = "não registrado"
    if (saldo >= 0 && saldo <= 10){
		nivel = "Ferro"
	}else if (saldo >= 11 && saldo <= 20){
		nivel = "Bronze"
	}else if (saldo >= 21 && saldo <= 50){
        nivel = "Prata"
    }else if (saldo >= 51 && saldo <= 80){
        nivel = "Ouro"
    }else if (saldo >= 81 && saldo <= 90){
        nivel = "Diamante"
    }else if (saldo >= 91 && saldo <= 100){
        nivel = "Lendário"
    }else if (saldo >= 101){
        nivel = "Imortal"
    }
    return nivel
}


