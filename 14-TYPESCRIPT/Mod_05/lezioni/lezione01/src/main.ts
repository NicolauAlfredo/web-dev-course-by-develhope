class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distance(other: Point) {
    return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
  }
}

class ColorePoint extends Point {
  color: string;

  constructor(x: number, y: number, color: string) {
    super(x, y);
    this.color = color;
  }
}

const p1 = new Point(1, 2);
const p2 = new Point(1, 4);

console.log(p1.distance(p2));
