interface Positionable {
  x: number;
  y: number;

  distance(other: Positionable): number;
}

interface Sizeable {
  w: number;
  h: number;

  getArea(): Number;
}

interface Mesurable extends Positionable, Sizeable {}

class Point implements Positionable {
  constructor(
    public x: number,
    public y: number,
  ) {}

  distance(other: Positionable): number {
    return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
  }
}

class Rectangle implements Mesurable {
  constructor(
    public x: number,
    public y: number,
    public w: number,
    public h: number,
  ) {}

  distance(other: Positionable): number {
    return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
  }

  getArea() {
    return this.w * this.h;
  }
}

const p1 = new Point(2, 3);
console.log(p1);

const p2 = new Point(3, 3);
console.log(p1);

const r1 = new Rectangle(2, 2, 2, 2);
console.log(r1);
