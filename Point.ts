class Point {
  private x: number;
  private y: number;
  private name?: string;

  constructor(x: number, y: number, name?: string) {
    this.x = x;
    this.y = y;
    this.name = name;
  }

  toString(): string {
    const name = this.name ?? "Point";
    return `(${name}: ${this.x}, ${this.y})`;
  }

  distance(other: Point): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const CENTER_POINT = new Point(0, 0, "Center");
const CALC_DISTANCE_FROM_CENTER = true;

const a = new Point(1, 1, "A");
const b = new Point(2, 2, "B");

const distance = a.distance(b);
console.log(`Distance between ${a} and ${b} is ${distance}`);

// also calculate distance from center
if (CALC_DISTANCE_FROM_CENTER) {
  const distanceFromCenter = a.distance(CENTER_POINT);
  console.log(
    `Distance between ${a} and ${CENTER_POINT} is ${distanceFromCenter}`,
  );
}
