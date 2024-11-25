const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.
however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"
if they are in their teens, then tell them they need to "grow up to 19" before they can drink
if they are between 19 to 50, then "drink away"
if they are over 50, then warn them about their "health"
if they are over 70, then ALSO warn them about their "life"
*/

//determine a proper parameter variable name

//PLANNING
//Make variable name: Age
//Age<13 too young must leave
//Age>=13 && age<19 too young grow up must leave
//Age>=19 && age<=50 drink away
//age>50 maybe don't drink take care of health
//age>70 maybe don't drink take care of health and life
//code question asking for age(number) on ID
//test

function CheckDrinkingAge(Age){
  if (Age < 13){
    console.log("You are too young, you must leave");
} 

else if (Age >= 13 && Age < 19){
    console.log("You are too young, you must leave. Grow up to 19");
} 

else if (Age >= 19 && Age <= 50){
    console.log("Drink away");
} 

else if (Age > 50){
  console.log("Drink away, but take care of your health");
} 

else if (Age > 70){
  console.log("Drink away, but take care of your health and life");
} }

//determine a proper question to ask and the proper variable name for user input
// function StartApp(){
  readline.question("Please tell me the number of your age on your ID.", age => {
    CheckDrinkingAge(Number(age));

    // if(age !== "exit"){
    //   StartApp();
    // }  else {
      readline.close();
    // }
  });
// }
  //call your function here
  // StartApp();

//Comment from Daniel. Well done. only one function() is required!