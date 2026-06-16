function identity<T>(value: T): T {
  return value;
}

let a = identity(5);
console.log(a);

let b = identity("Hello, World!");
console.log(b);

function pair<T, K>(first: T, second: K): [T, K] {
  return [first, second];
}

const tupla = pair(3, "string");
console.log(tupla);

type User = {
  name: string;
  email: string;
};

function get<T>(url: string): Promise<T> {
  return fetch(url).then((r) => r.json());
}

const user = await get<User>("https://my.api.com/users/2");
