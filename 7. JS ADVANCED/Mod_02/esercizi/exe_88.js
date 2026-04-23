const persons = [
  { id: 1, firstName: "Mario", lastName: "Rossi", age: 25 },
  { id: 2, firstName: "Maria", lastName: "Verdi", age: 32 },
  { id: 3, firstName: "Giovanni", lastName: "Rossi", age: 35 },
];

const jobs = [
  { id: 1, jobTitle: "CEO" },
  { id: 2, jobTitle: "Project Manager" },
  { id: 3, jobTitle: "Developer" },
];

const fetchPersonById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find((p) => p.id === id);

      if (person) {
        resolve(person);
      } else {
        reject(new Error(`No person with id ${id}`));
      }
    }, 3000);
  });
};

const fetchJobById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find((j) => j.id === id);

      if (job) {
        resolve(job);
      } else {
        reject(new Error(`No job with id ${id}`));
      }
    }, 2000);
  });
};

function printPersonAndJob(person, job) {
  console.log(
    `Person: ${person.firstName} ${person.lastName}, age ${person.age}`
  );
  console.log(`Job: ${job.jobTitle}`);
}

const id = 2;

Promise.all([fetchPersonById(id), fetchJobById(id)])
  .then(([person, job]) => {
    printPersonAndJob(person, job);
  })
  .catch((err) => {
    console.error(`Error: ${err.message}`);
  });