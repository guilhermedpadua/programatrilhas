// Em um jogo de RPG, o personagem do jogador possui pontos de vida (HP) que são reduzidos quando ele sofre danos dos inimigos. Seu personagem começa com 100 pontos de vida e sofre danos de 20 pontos em um ataque. Crie um algoritmo informando quantos pontos de vida restarão após três ataques?

const pontosDeVidaInicial = 100;
const danoPorAtaque = 20;
const numeroDeAtaques = 3;

const pontosDeVidaRestantes = pontosDeVidaInicial - (danoPorAtaque * numeroDeAtaques);

console.log("Após três ataques, restarão", pontosDeVidaRestantes, "pontos de vida.");
