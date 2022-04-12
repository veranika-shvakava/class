const carcass = document.getElementById('carcass');
const colors = document.getElementById('colors');
const figures = document.getElementById('figures');

const canvas = document.createElement('canvas');
carcass.append(canvas);

// circle
// const getRadians = (degrees) => (Math.PI / 180) * degrees;

// ctx.arc(60, 60, 50, 0, getRadians(360));
// ctx.fill();
// ctx.stroke();

class Figure {
  constructor(one, two, three, four, five, six) {
    this.one = one;
    this.two = two;
    this.three = three;
    this.four = four;
    this.five = five;
    this.six = six;
    this.ctx = canvas.getContext('2d');
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(10, 10);
    this.ctx.lineTo(this.one, this.two);
    this.ctx.lineTo(this.three, this.four);
    this.ctx.lineTo(this.five, this.six);
    this.ctx.fillStyle = 'red';
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.stroke();
  }

  clear() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  changeColor() {
    for (let i = 0; i < colors.length; i++) {
      const color = colors[i];

      if (color.selected) {
        if (color.value === 'red') {
          this.ctx.fillStyle = 'red';
          this.ctx.fill();
        } else if (color.value === 'blue') {
          this.ctx.fillStyle = 'blue';
          this.ctx.fill();
        } else if (color.value === 'yellow') {
          this.ctx.fillStyle = 'yellow';
          this.ctx.fill();
        }
      }
    }
  }

  changeFigure() {
    for (let i = 0; i < figures.length; i++) {
      const figure = figures[i];

      if (figure.selected) {
        if (figure.value === 'square') {
          square.draw();
        } else if (figure.value === 'triangle') {
          triangle.draw();
        }
      }
    }
  }
}

class Square extends Figure {
  constructor(one, two, three, four, five, six) {
    super(one, two, three, four, five, six);
  }
}

class Triangle extends Figure {
  constructor(one, two, three, four, five, six) {
    super(one, two, three, four, five, six);
  }
}

const square = new Square(100, 10, 100, 100, 10, 100);
const triangle = new Triangle(100, 100, 190, 10, 10, 10);

const newFigures = { square, triangle };

square.draw();
colors.addEventListener('click', () => {
  for (const figure in newFigures) {
    switch (figure) {
      case 'square':
        square.changeColor();
      case 'triangle':
        triangle.changeColor();
      default:
        square.changeColor();
    }
  }
});

figures.addEventListener('click', () => {
  for (const figure in newFigures) {
    switch (figure) {
      case 'square':
        triangle.clear();
        square.changeFigure();
      case 'triangle':
        canvas.clear();
        triangle.changeFigure();
      default:
        square.draw();
    }
  }
});
