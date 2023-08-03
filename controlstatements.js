var hour = new Date().getHours();
var greeting;
if(hour > 12 && hour < 16){
    greeting = "Good Afternoon"
    console.log(greeting);
}
else if(hour > 16){
    greeting = "Good Evening"
    console.log(greeting);
}
// else if(hour > 22 && hour < 24){
//     greeting = "Good Night"
//     console.log(greeting);

// }
else
    greeting = "Good Morning"
    console.log(greeting);

