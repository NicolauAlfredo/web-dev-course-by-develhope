type APIResponse<T> = {
  status: number;
  data: T;
};

type User = { name: string; age: number };

const response = await get<APIResponse<User>>("/api/user");
const user = response.data;

type Pair<T, K> = [T, K];

const myPair: Pair<Number, string> = [27, "Nicolau"];
console.log(myPair);
