function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: 1, name: 'John' };
      console.log('Dati utente recuperati');
      resolve(user);
    }, 1000);
  });
}

function fetchUserPosts(userId, userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ['Post 1', 'Post 2', 'Post 3'];
      console.log(`Post recuperati per ${userName}`);
      resolve({ userName, posts });
    }, 1000);
  });
}

// Catena di Promise
fetchUserData()
  .then(user => {
    console.log(`Utente: ${user.name}`);
    return fetchUserPosts(user.id, user.name);
  })
  .then(result => {
    console.log('Titoli dei post:');
    result.posts.forEach(post => console.log(post));
  })
  .catch(error => {
    console.error('Errore:', error);
  });