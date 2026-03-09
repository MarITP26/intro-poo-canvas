const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

/* const window_height = window.innerHeight;
const window_width = window.innerWidth; */

canvasOOP.height = "200"; //window_height;
canvasOOP.width = "300"; //window_width;

canvasRandom.height = "200";
canvasRandom.width = "300";

canvasMultiple.height = "200";
canvasMultiple.width = "300";

canvasOOP.style.background = "#ff8";
canvasRandom.style.background = "#e6f7f6";
canvasMultiple.style.background = "#fcfb97";

class Circle {
  //Carga los valores predeterminados del objeto
  constructor(x, y, radius, color, text, backcolor, textColor
  
  ) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
     this.textColor = textColor;

  }

  //Método para renderizar el objeto
  draw(context) {
    //Rellena el objeto
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.backcolor;
    context.fill();

    //Dibuja la línea del objeto
    context.lineWidth = 5;
    context.strokeStyle = this.color;
    context.stroke();

    //Dibuja el texto al centro del objeto
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 20px cursive";
    context.fillStyle = this.textColor;
    context.fillText(this.text, this.posX, this.posY);

    context.closePath();
  }
}
// funcion para aleatorio 
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + "," + g + "," + b + ")";
}
/*let randomX = Math.random() * canvasRandom.width;
let randomY = Math.random() * canvasRandom.height;
let randomRadius = Math.floor(Math.random() * 100 + 30);
*/

let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 50, "rgb(66, 120,5 )", "Tec", "rgb(255, 255, 255)", "blue");
miCirculo.draw(ctx);

/*let miCirculoRandom = new Circle(randomX, randomY, randomRadius, "green", "Tec", "rgb(83, 186, 52)", "rgb(0,0,0)");
miCirculoRandom.draw(ctxRandom); */

let maxRadius = Math.min(canvasRandom.width, canvasRandom.height) / 2;
let randomRadius = Math.floor(Math.random() * (maxRadius - 30)) + 30;

let randomX = Math.random() * (canvasRandom.width - 2 * randomRadius) + randomRadius;
let randomY = Math.random() * (canvasRandom.height - 2 * randomRadius) + randomRadius;

let miCirculoRandom = new Circle(
    randomX,
    randomY,
    randomRadius,
    "green",
    "Tec",
    "rgb(83, 186, 52)",
    "rgb(0,0,0)"
);

miCirculoRandom.draw(ctxRandom);

let MaxCircles = 50;
let arrayCircle = [];

for (let i = 0; i < MaxCircles; i++) {

  let randomRadius = Math.floor(Math.random() * 10 + 20);

  let randomX = Math.random() * (canvasRandom.width - 2 * randomRadius) + randomRadius;
  let randomY = Math.random() * (canvasRandom.height - 2 * randomRadius) + randomRadius;

  let strokeColor = randomColor(); // contorno aleatorio
  let fillColor = randomColor();   // relleno aleatorio

  let miCirculoMultiple = new Circle(
    randomX,
    randomY,
    randomRadius,
    strokeColor,
    i + 1,
    fillColor,
    "rgb(0,0,0)"
  );

  arrayCircle.push(miCirculoMultiple);
  arrayCircle[i].draw(ctxMultiple);
}
