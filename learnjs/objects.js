//import { defaultMaxListeners } from "node:events"


// let objectname = {

// //key : values
// }


let employee = {

    firstname : "hanu",
    lastname : "s",
    gender : "male",
    place : "bng",
    parents : { fathername: "sivanna", mothername : "brunda"}

}

//properties

console.log(employee.firstname)
console.log(employee['gender'])
console.log(employee.parents.fathername)
console.log(employee.parents.mothername)

//update value

//update modiify values

employee['firstname'] = "raju"
console.log(employee.firstname)

//role

employee['role'] = "qa lead"

console.log(employee.role) //it throws error undefined why means there is no data 

//delete properties 

delete employee.place
console.log(employee.place)

//=======================================================

//looping

jobtitle = {

    title1 : "sdet",
    title2 : "accounting",
    title3 : "account executive",

}

for(let title in jobtitles){

    console.log("Loops starts")

    console.log(jobtitles[title])

    console.log("Loop ends here")
}