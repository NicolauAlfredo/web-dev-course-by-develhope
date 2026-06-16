class Point {
  constructor(
    public x: number,
    public y: number,
  ) {}

  distance(other: Point) {
    return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
  }
}

class ColorePoint extends Point {
  constructor(
    public x: number,
    public y: number,
    public color: string,
  ) {
    super(x, y);
  }
}

const p1 = new ColorePoint(0, 2, "blue");
const p2 = new Point(1, 4);

console.log(p1.distance(p2));
