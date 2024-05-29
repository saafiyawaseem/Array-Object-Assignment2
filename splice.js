/*we learnt in this class
1:
 splice. if delete or add anything (IN MID) then we use Splice.there are three perameter insid the()brasis;
                    (  a   ,   b  ,    c )
                       |       |       |
                    start     delete   add
                    number    item     str[]
                     index    count
2:
SLICE;

3:
 Tupple. Limited of  Element insid Array.
4:
 MultiArray./ NestedArray.  [ [] ]
5:
 Union type/ pipe sign:     &&  | Union sign are opposits another.*/
"SPLICE";
var names = ["aliya", "asiya", "farheen", "romana", "ayesha", "uzma"];
names.splice(1.1);
console.log(names);
names.splice(1, 0);
console.log(names);
names.splice(1, 0, "anila");
console.log(names);
names.splice(2, 1);
console.log(names);
names.splice(1, 3);
console.log(names);
names.splice(3, 1, "ujala", "fatima", "javeriya");
console.log(names);
var city = ["karachi", "lahore", "islamabad", "quetta", "hyderabad"];
city.splice(0, 1);
console.log(city);
city.splice(3, 1);
console.log(city);
city.splice(0, 1);
var days = ["Monday", "wednesday", "friday", "saturday"];
days.splice(1, 0, "tuesday");
console.log(days);
days.splice(3, 0, "thursday");
console.log(days);
days.splice(6, 0, "sunday");
console.log(days);
days.splice(0, 1, "My");
console.log(days);
days.splice(1, 1, " IT class");
console.log(days);
days.splice(2, 1, "will be next");
console.log(days);
days.splice(4, 1, "InshahALLAH");
console.log(days);
days.splice(5, 1, "i will be ");
console.log(days);
days.splice(6, 1, "attand");
console.log(days);
"SLICE";
//Inside the slice (startingNumber,endingNumber) hota he.it return in result.
var animals = ["ant", "lion", "tiger", "wolf", "elephant", "horse", "camel", "goat"];
var animals1 = animals.slice(1, 5);
console.log(animals1);
var number = [6, 5, 7, 8, 9, 4, 3, 1, 2];
var number2 = number.slice(1, 4);
console.log(number2);
var cars = ["Civic", "Cultus", "mehran", "Land crosur", "Corolla"];
var cars1 = cars.slice(2, 5);
console.log(cars1);
var computer = ["livano", "hp", "dell", "latitude", "fujitsu"];
var computer1 = computer.slice(2, 4);
console.log(computer1);
var invitation = ["mamma", "bhai", "api", "bajjo", "bhai jaan", "chacho", "badey pappa", "badi ammi"];
var invitation1 = invitation.slice(3, 6);
console.log(invitation1);
var countries = ["dubai", "farance", "paris", "srilanka"];
var countries1 = countries.slice(1, 3);
console.log(countries1);
//TUPPLES
//if i want that fixed element like three or four Element.
// just like you have to fixe this Array.
// type fruits=[string:string:string]
var fruits = ["apple", "banana", "peach", "guava", "melon"];
console.log(fruits);
// type dinner=[string:string:string:string]    
var dinner = ["biryani", "broast", "chicken kadahi", "malai boti", "chinies chowmin", "turkish kabab"];
var dinner1 = dinner.slice(1, 4);
console.log(dinner);
// type month=[string:string:string:string]
var month = ["january", "february", "march", "april", "may", "june"];
console.log(month);
var time = ["morning", "evening", "night", "noon"];
var time1 = time.slice(0, 2);
console.log(time1);
//NESTED ARRAY:Type casting.
var multiarray = [1, 2, [3, 4, 5]];
console.log(multiarray);
console.log(multiarray[0]);
var countries2 = ["Pakistan", "Iran", ["saudia"]];
console.log(countries2[2]);
var daysNumber = [1, 2, 3, 4, 5, 6, 7, [100, 200, 300]];
console.log(daysNumber[7][1]);
