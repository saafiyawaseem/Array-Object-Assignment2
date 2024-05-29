var people = {
    friend: []
};
var friend1 = {
    firstName: "MUSKAAN",
    lastName: "WASEEM",
    id: 123,
};
var friend2 = {
    firstName: "JAVERIYA",
    lastName: "WASEEM",
    id: 456,
};
var friend3 = {
    firstName: "AHMED",
    lastName: "RAZA",
    id: 789,
};
people.friend.push(friend1, friend2, friend3);
console.log(people);
//Modify the Array:  
//  use methods like Split() , join() , push() , pop(),shift(), and unshift()to;
//split elements into character arrays(optional).
//Rearrange characters or element in the desired order (modify original array or create temporary arrays).
//output : usejoin() to combineelements back into a single string:I am a student of "GIAIC".
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 2);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray[1] = "am";
scrambledArray[2] = "a";
scrambledArray[3] = "student";
scrambledArray[4] = "of";
scrambledArray[5] = "GIAIC";
console.log(scrambledArray.join());
Q: 3;
var product = {
    name: "Realme Mobil",
    inventory: {
        modle: "c 51",
        cost: 40000,
        quentity: 200,
    }
};
var product1 = {
    name: "Infinix",
    inventory: {
        modle: "HOt 30",
        cost: 50000,
        quentity: 100,
    }
};
var product2 = {
    name: "Honor",
    inventory: {
        modle: "x5 plus",
        cost: 24100,
        quentity: 150,
    }
};
var inventory = {
    product: [product, product1, product2]
};
console.log("quentity of third product:", inventory.product[2].inventory);
var product3 = {
    name: "oppo",
    inventory: {
        modle: "A 18",
        cost: 35000,
        quentity: 200,
    }
};
inventory.product.push(product3);
console.log("inventory of first product", inventory.product[0].inventory);
console.log("name of second product", inventory.product[1].name);
console.log("quentity of fourth product", inventory.product[3].inventory);
var student = [
    {
        name: "saafiya Waseem",
        isSenior: false,
        isAssignDone: true,
    },
    {
        name: "javeriya",
        isSenior: true,
        isAssignDone: true,
    },
    {
        name: "mehreen",
        isSenior: false,
        isAssignDone: true,
    },
    {
        name: "muskaan",
        isSenior: true,
        isAssignDone: true,
    },
    {
        name: "mahi",
        isSenior: false,
        isAssignDone: true,
    },
];
console.log(student);
var findSenior = function (student) {
    return student.filter(function (student) { return student.isSenior && student.isAssignDone === true; });
};
console.log(findSenior(student));
var removeStudents = function (student) {
    return student.filter(function (student) { return student.isAssignDone === false; });
};
console.log(removeStudents(student));
