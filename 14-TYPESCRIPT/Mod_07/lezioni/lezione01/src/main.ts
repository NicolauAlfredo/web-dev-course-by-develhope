enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function checkDirection(direction: Direction) {
  switch (direction) {
    case Direction.Up:
      console.log("Going UP");
      break;
    case Direction.Down:
      console.log("Going DOWN");
      break;
    case Direction.Left:
      console.log("Going LEFT");
      break;
    case Direction.Right:
      console.log("RIGHT");
      break;
    default:
      console.log("Invalid!!");
      break;
  }
}

const myDirection: Direction = Direction.Right;

console.log(checkDirection(myDirection));

enum OrderStatus {
  Pending,
  InProgress,
  Shipped,
  Completed,
  Cancelled,
}

type Order = {
  id: number;
  date: Date;
  status: OrderStatus;
};

const order1: Order = {
  id: 1,
  date: new Date(),
  status: OrderStatus.Completed,
};

console.log(order1);
