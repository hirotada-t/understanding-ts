// const person :{
//   name:string;
//   age:number;
// } = {
const person :{
  name:string;
  age:number;
  hobbies:string[];
  role:[number, string];
} = {
  name:'AAA',
  age:30,
  hobbies:['sports', 'cooking'],
  role:[2,'author']
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