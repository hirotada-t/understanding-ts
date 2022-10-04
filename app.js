// const person :{
//   name:string;
//   age:number;
// } = {
var person = {
    name: 'AAA',
    age: 30,
    hobbies: ['sports', 'cooking']
};
var activities;
activities = ['sports'];
/* (error)
activities = 'sports'
activities = ['sports',1]
 */
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
