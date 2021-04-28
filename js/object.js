let user = {};
user. name = "John";
user. surname = "Smith";
user. name = "Pete";
delete user. name;


const user = {
    name: "John"
};
user. name = "Pete"
// Работает))


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  let sum = salaries.John + salaries.Ann + salaries.Pete;
  // console.log(sum);  390


let bN = Boolean(Number('10')) + 1;
// console.log(bN, typeof bN); 2 number

let sN = 'sub' + Number(false);
// console.log(sN, typeof sN); sub0 string

let num = 16  * '   91   ';
// console.log(num); 1456

let tr = true-70;
// console.log(tr); -69

let Ns = Number(1 + String(1)) + 1;
// console.log(Ns, typeof Ns); 12 number


 