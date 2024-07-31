"use strict";
console.log("Hello world");
let age = 20;
if (age < 50) {
    age += 80;
}
console.log(age);
let sales;
let course = "it will default  assign it as string";
let array = [1, 2, 3];
let empty = [];
let user = [1, "string"];
user.push(1);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let data = Size.Medium;
console.log(data);
let employee = { id: 1 };
let employee2 = {
    id: 1,
    retire: (date) => {
        console.log(date);
    },
};
let employee1 = {
    id: 1,
    retire: (date) => {
        console.log(date);
    },
};
let emp = {
    id: 1,
    retire: (date) => {
        console.log(date);
    },
};
function kgTOLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgTOLbs(40);
console.log(kgTOLbs("900kg"));
console.log(kgTOLbs(50));
let quantity = 100;
function convert(name) {
    if (name)
        return name.toUpperCase();
    else
        return console.log("plz check again");
}
console.log(convert("Rajendra"));
//# sourceMappingURL=index.js.map