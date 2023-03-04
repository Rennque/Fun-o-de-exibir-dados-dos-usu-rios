function user() {
    let nomes = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
    let frutas = ["Banana", "Morango", "Maçã", "Uva", "Pêra", "Laranja"];
    frutas.reverse();
  
    let user = [];
  
    for (i = 0; i < nomes.length; i++) {
      user.push(nomes[i] + "-" + frutas[i]);
    }
    console.log(user);
  }
  user();