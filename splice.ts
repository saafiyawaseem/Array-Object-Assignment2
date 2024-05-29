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
           "SPLICE"
    
    const names=["aliya", "asiya","farheen","romana","ayesha","uzma"] 
    names.splice(1.1)
    console.log(names)
    names.splice(1,0)
    console.log(names)
    names.splice(1,0,"anila")
    console.log(names)
    names.splice(2,1)
    console.log(names)
    names.splice(1,3)
    console.log(names)
    names.splice(3,1,"ujala","fatima","javeriya")
    console.log(names)
    const city=["karachi","lahore","islamabad","quetta","hyderabad"]
    city.splice(0,1)
    console.log(city)
    city.splice(3,1,)
    console.log(city)
    city.splice(0,1)
    const days=["Monday","wednesday","friday","saturday"]
   days.splice(1,0,"tuesday")
  console.log(days)
  days.splice(3,0,"thursday")
  console.log(days)
  days.splice(6,0,"sunday")
  console.log(days)
  days.splice(0,1,"My")
  console.log(days)
  days.splice(1,1," IT class")
  console.log(days)
  days.splice(2,1,"will be next")
  console.log(days)
  days.splice(4,1,"InshahALLAH")
  console.log(days)
  days.splice(5,1,"i will be ")
  console.log(days)
  days.splice(6,1,"attand")
  console.log(days)
        "SLICE"
 //Inside the slice (startingNumber,endingNumber) hota he.it return in result.
 let animals=["ant","lion","tiger","wolf","elephant","horse","camel","goat"]
  const animals1 = animals.slice(1,5)
   console.log(animals1)
  let number=[6,5,7,8,9,4,3,1,2]
  const number2=number.slice(1,4)
  console.log(number2)
  const cars=["Civic","Cultus","mehran","Land crosur","Corolla"]
  let cars1=cars.slice(2,5)
  console.log(cars1)
  let computer=["livano","hp","dell","latitude","fujitsu"]
  const computer1=computer.slice(2,4)
  console.log(computer1)
  let invitation=["mamma","bhai","api","bajjo" ,"bhai jaan","chacho","badey pappa","badi ammi"]
   const invitation1=invitation.slice(3,6)
   console.log(invitation1)
   const countries=["dubai","farance","paris","srilanka"]
   let countries1= countries.slice(1,3)
   console.log(countries1)
      //TUPPLES
      //if i want that fixed element like three or four Element.
      // just like you have to fixe this Array.
     // type fruits=[string:string:string]
      const fruits=["apple","banana","peach","guava","melon"]
      console.log(fruits)
     // type dinner=[string:string:string:string]    
      const dinner= ["biryani","broast","chicken kadahi","malai boti","chinies chowmin","turkish kabab"]
       let dinner1=dinner.slice(1,4)
       console.log(dinner)
      // type month=[string:string:string:string]
       const month=["january","february","march","april","may","june"]
       console.log(month)
       const time=["morning","evening","night","noon"]
       let time1 = time.slice(0,2)
       console.log(time1)
       //NESTED ARRAY:Type casting.
       const multiarray=[1,2,[3,4,5]]
       console.log(multiarray)
       console.log(multiarray[0])
       const countries2=["Pakistan","Iran",["saudia"]]
       console.log(countries2[2])
       let daysNumber=[1,2,3,4,5,6,7,[100,200,300]]
       console.log(daysNumber[7][1])
       





      
    
                  
             

  









