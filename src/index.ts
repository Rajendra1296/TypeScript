console.log("Hello world");

let age: number = 20; //This  process of assign is called annotation
if (age < 50) {
  age += 80;
}
console.log(age);
let sales: number;
let course = "it will default  assign it as string";

let array: number[] = [1, 2, 3];
// for declaring an empty array

let empty: number[] = [];

//for declaring an special data type
let user: [number, string] = [1, "string"];
user.push(1);
//tuples are usefull when we have mostly 2 values
//enums

enum Size {
  Small = 1,
  Medium,
  Large,
} // no here ts by default set the value as 2&3 for remaining
let data: Size = Size.Medium;
console.log(data);

//object
let employee: { readonly id: number; name?: string } = { id: 1 };
// here ? gives the flexibility of being optional like the value can or cannot be present
//readonly gives the   ability to make the id fixed without overwriting it

//
let employee2: {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  retire: (date: Date) => {
    console.log(date);
  },
};
///

//advanceTS
let employee1: {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  retire: (date: Date) => {
    console.log(date);
  },
};

//here we are not maintaining DRY principle
//type abs
type Employee = {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
};

let emp: Employee = {
  id: 1,
  retire: (date: Date) => {
    console.log(date);
  },
};

//union type //narowwing
function kgTOLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}
kgTOLbs(40);
console.log(kgTOLbs("900kg"));
console.log(kgTOLbs(50));

//intersection
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

//literal type

type Quantity = 50 | 100;
let quantity: Quantity = 100;

type metric = "cm" | "meters";

//nullish type

function convert(name: string | null | undefined) {
  if (name) return name.toUpperCase();
  else return console.log("plz check again");
}

// convert("Rajendra");
console.log(convert("Rajendra"));
