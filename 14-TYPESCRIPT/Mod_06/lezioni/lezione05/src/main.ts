interface Collectable<T> {
  add(item: T): void;
  get(): T[];
}

class Collection<T> implements Collectable<T> {
  add(item: T): void {}

  get(): T[] {}
}

const numbers = new Collection<Number>();
