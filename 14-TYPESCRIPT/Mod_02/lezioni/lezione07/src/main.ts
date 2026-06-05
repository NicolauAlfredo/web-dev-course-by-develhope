type Street = string;
let a: Street = "Via Milano";

console.log(a);

type Hello = "Hello";
let b: Hello = "Hello";

console.log(b);

// t
type Weekday = "monday" | "tuesday" | "wednesday" | "thurday" | "friday";

let c: Weekday = "monday";
let d: Weekday = "hello"; // Error
