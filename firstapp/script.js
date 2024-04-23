//constante
const SALARIO_ATE_20 = 1000
const SALARIO_ACIMA_20 = 2000

//input
anoNascimento = parseInt(prompt("Informe o seu ano de nascimento"))
nome = prompt("informe o seu nome")
salarioBase = parseFloat(prompt("informe o seu salario base"))
gratificacao = parseFloat(prompt("informe a gratificação"))
bonus = parseFloat(prompt("informe o bônus"))
desconto = parseFloat(prompt("informe o desconto"))

salarioLiquido = 0
adicional = 0

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento

//TODO: tratarmos na proxima aula
//ate 20 anos (inlcusive): 1000 SALARIO_ATE_10
//acima de 20 anos: 2000 SALARIO_ACIMA_20ADICIONAL = SALARIO_ATE_20

salarioLiquido = salarioBase + gratificacao + bonus - desconto + adicional

//output
mensagem = "Sou " + nome +", tenho " + idade + " anos e ganho R$" + salarioLiquido 
alert(mensagem)




