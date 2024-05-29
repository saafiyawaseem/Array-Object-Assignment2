Q:1//Create a program that manages a simple friend list.
 //1:Definean object named people containing an emptyarray called friends.
 //2:Create the separate objects, each representing a friend, with properties like firstName,
 //lastName, and optionaly id.
 //3:Add these friend objects to the friends array within the people object.
//4:Output the entire people object to the console, displaying your information and your
 //friend List.
type Friends={
    firstName:string,
    lastName:string,
    id:number,
}
const people={
   friend :[] as Friends[]
}
const friend1={
    firstName:"MUSKAAN",
    lastName:"WASEEM",
    id:123,

}
let friend2={
    firstName:"JAVERIYA",
    lastName:"WASEEM",
    id:456,     
}
const friend3={
    firstName:"AHMED",
    lastName:"RAZA",
    id:789,
}
people.friend. push(friend1,friend2,friend3)
console.log(people)
  //Modify the Array:  
//  use methods like Split() , join() , push() , pop(),shift(), and unshift()to;
//split elements into character arrays(optional).
//Rearrange characters or element in the desired order (modify original array or create temporary arrays).
//output : usejoin() to combineelements back into a single string:I am a student of "GIAIC".

const scrambledArray=["student","of",true,123,"am","a","GIAIC","I"];
scrambledArray.splice(2,2)
scrambledArray.pop()
scrambledArray.unshift("I");
scrambledArray[1]="am";
scrambledArray[2]="a";
scrambledArray[3]="student";
scrambledArray[4]="of";
scrambledArray[5]="GIAIC";
console.log(scrambledArray.join());
Q:3
 /* Impliment data structures in Typescript to represent and manage product Information.
  create a program to represent a product catalog using an array and perform basic queries.
  1: Define an array named inventory to store product Information.
  2:create three separate objects, each representing aProduct,with propertieslike name,modle, cost, and quentity. 
  3:Add these product objects to the inventory array using an appropriate array method.
  4:Access and log the quentity property of a specific Product(third product)in the inventory array,
  5:Explore addingand accessing more Elements within the imventory array to understand how to manage 
  product Data.*/
  type Products={
    name:string,
    inventory:{
    modle:string,
    cost:number,
    quentity:number,
}
}
 let product:Products={
       name:"Realme Mobil",
       inventory:{
        modle:"c 51",
        cost:40000,
        quentity:200,
       }
 }

let product1:Products={
       name:"Infinix",
       inventory:{
        modle:"HOt 30",
        cost:50000,
        quentity:100,
       }
}
let product2:Products = {
     name:"Honor",
     inventory:{
        modle:"x5 plus",
        cost:24100,
        quentity:150,
     }
}
let inventory={
    product:[product,product1,product2] 
}
    console.log("quentity of third product:",inventory.product[2].inventory)
const product3:Products={
     name:"oppo",
     inventory:{
        modle:"A 18",
        cost:35000,
        quentity:200,
     }
} 
inventory.product.push(product3);
console.log("inventory of first product",inventory.product[0].inventory)
console.log("name of second product",inventory.product[1].name)
console.log("quentity of fourth product", inventory.product[3].inventory)

//Q:41:Student Data:
               /* the provided code defines an interface named student that describes student information like name,
               senior status (true/false), and whether they have completed
               their assignments (t/f).
               Imagine this as a template.Think for organizing student details.
  2:Student list:
                 An array named Students storesinformation about several students using Tostudent template.
                 Think of this array as your class list!
   3:FIND  SENIOR STUDENTS WITH ASSIGNMENT(Optional):
                        The code (not shown here) has a function that might be helpful?
   4:CLASS LIST UPDATE:
                     Imagin you need update your class list!The code (not shown here) might have 
                     a function that removes students who have not completed theirassignments
                     (assuming only senior are responsible).
                     Can you think of any reasons why this might be useful(consider limitation)?*/
      
    interface Students{
         name:string,
         isSenior:boolean,
         isAssignDone:boolean,
    }  
      let student : Students[] =[
        {
          name:"saafiya Waseem",
          isSenior:false,
          isAssignDone:true,
      },

     {
          name:"javeriya",
          isSenior:true,
          isAssignDone:true,
     },

     {
          name:"mehreen",
          isSenior:false,
          isAssignDone:true,
     },
    {
          name:"muskaan",
          isSenior:true,
          isAssignDone:true,
    },
    {
          name:"mahi",
          isSenior:false,
          isAssignDone:true,
    },
    ]
       console.log(student)
     const  findSenior =(student:Students[]) =>{
        return student.filter(student=>student.isSenior && student.isAssignDone === true)
     } 
     console.log(findSenior (student));
     const removeStudents=(student:Students[])=>{
        return student.filter(student=>student.isAssignDone===false)
     }
     console.log(removeStudents(student))

     


      

                     