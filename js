let palavra;

function setup() {
  createCanvas(400, 400);
  
  
  let palavras = ["Caminhante", "Caminho", "Caminha"];
  
  palavra = random(palavras);
}

function inicializaCores() {
  
  background("white");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function draw() {
  
  inicializaCores();

  let maximo = width;
  let minimo = 0;