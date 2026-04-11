function getLongStringKeys(obj) {
  const result = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string' && obj[key].length > 5) {
      result.push(key);
    }
  }
  return result;
}

const person = {
  name: "Alexander",
  age: 30,
  city: "Rome",
  job: "Software Engineer",
  country: "Angola",
  id: 42
};

const longStringKeys = getLongStringKeys(person);
console.log(longStringKeys);  
