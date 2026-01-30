function gerarSenha(comprimento) {
  let caracteres =
    "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuwxyz123456789!#$%&*()";
  let senha = "";

  for (let i = 0; i < comprimento; i++) {
    let randomIndex = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[randomIndex];
  }
  return senha;
}

console.log(gerarSenha(6));
