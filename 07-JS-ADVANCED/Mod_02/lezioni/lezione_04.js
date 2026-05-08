/* Lezione 04 - I problemi delle callback */

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
    { id: 2, nome: "Lucia" },
    { id: 3, nome: "GIovanni" },
  ],
  1: [
    { id: 2, nome: "Marco" },
    { id: 3, nome: "Giuseppe" },
  ],
};

function login(username, password, callback) {
  setTimeout(() => {
    const user = users.find(
      (user) => user.name === username && user.password === password,
    );

    if (user) {
      callback(null, user);
    } else {
      callback("Invalid credentials!", null);
    }
  }, 1000);
}

function getFriends(id, callback) {
  setTimeout(() => {
    const userFriends = friends[id];

    if (userFriends) {
      callback(null, userFriends);
    } else {
      callback(`user with ID ${id} is lonely :/`, null);
    }
  });
}

login("mariorossi", "s3cr3t3", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Logged in");

    getFriends(data.id, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
  }
});
