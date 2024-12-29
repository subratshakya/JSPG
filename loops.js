// // //For loop
// // for(let i=1; i<= 10;i=i+1)
// // {
// //     console.log('Subrat'+i)
// // }
// let ip=0;
// let house=10;
// while(ip!=house)
// {
//     ip=ip+1;
//     console.log('Steps Taken'+ip)
// // }
// let ip=0;
// // let house=10;
// do{
//     ip=ip+1;
//     console.log('Steps'+ ip);
// }
// while(ip<=10)

//Game
let num=4;

let guess=0;
do{
    guess=parseInt(prompt("Guess a number"))
    if(guess==num)
    {
        alert('Winner');
        break;
    }
}
while(guess!=0)