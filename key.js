function gerarSenha(comprimento) {
  let caracteres =
    'ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuwxyz123456789!#$%&*()'
  let senha = ''

  const teste = 0

  for (let i = 0; i < comprimento; i++) {
    let randomIndex = Math.floor(Math.random() * caracteres.length)
    senha += caracteres[randomIndex]
  }
  return senha
}

console.log(gerarSenha(6))
