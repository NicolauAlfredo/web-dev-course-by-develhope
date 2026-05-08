/* Lezione 07 - Async/Await */
const users = [
  {
    id: 1,
    name: "Mario",
    surname: "Rossi",
    username: "mariorossi",
    password: "s3cr3t3",
  },
  {
    id: 2,
    name: "Alessandro",
    surname: "Verdi",
    username: "aleverdi",
    password: "pr1v4t3",
  },
];

const friends = {
  1: [
    { id: 2, nome: "Marco" },
    { id: 3, nome: "Giuseppe" },
  ],
};

function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        (user) => user.username === username && user.password === password,
      );

      if (user) {
        resolve(user);
      } else {
        reject("Invalid credentials!");
      }
    }, 1000);
  });
}

function getFriends(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userFriends = friends[id];

      if (userFriends) {
        resolve(userFriends);
      } else {
        reject(`User with ID ${id} is lonely :/`);
      }
    }, 2000);
  });
}

async function loginAndFetchFriends() {
  try {
    const data = await login("mariorossi", "s3cr3t3");
    const friends = await getFriends(data.id);

    console.log(friends);
  } catch (error) {
    console.log(error);
  }
}

loginAndFetchFriends();
