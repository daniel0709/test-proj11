var weight = [35,38,42,45,43,34,36,41,48,32];

function setup() {
  createCanvas(400,400);
  
var soma = 0

  for(i = 0, i<weight.length, i++) {
  soma = soma + weight[i]
  }
  var media = soma / weight.length
  console.log(media)
 }

function draw() 
{
  background(30);
}

 

