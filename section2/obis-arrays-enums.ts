// const person :{
//   name:string;
//   age:number;
// } = {
  
// const person :{
//   name:string;
//   age:number;
//   hobbies:string[];
//   role:[number, string];
// } = {
//   name:'AAA',
//   age:30,
//   hobbies:['sports', 'cooking'],
//   role:[2,'author'] // Tuple型
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY, 
  AUTHOR,
}

const person = {
  name:'AAA',
  age:30,
  hobbies:['sports', 'cooking'],
  role:Role.ADMIN, // Enum型
};

let activities:string[];
activities = ['sports'];
/* (error)
activities = 'sports'
activities = ['sports',1]
 */

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("管理ユーザー");
}