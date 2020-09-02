/*var score =prompt("what is your grade");
if(score == 0 || score < 44){
    alert("you have failed,try again next year");
}else if(score == 49 || score <= 59){
    alert("you try,just work harder next time");
}else if(score == 65 || score <= 80){
    alert("wow nice work");
}else if(score == 100 || score >100){
    alert("meet me in the office")
}
*/

var today =new Date();

var hrs = today.getHours();

var greet;

if (hrs<12)

        greet = "Good Morning";
    else if(hrs >=12 && hrs <=17)
        greet = "Good Afternoon";
    else if(hrs >=17 && hrs <=24)
        greet = "Good Evening"

        alert(greet + "Mr mohy")

    
    

