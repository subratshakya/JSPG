const age =22;
if(age>=18)
{
    console.log('yes you can vote');
}
else if(age>=20)
{
    console.log('Yes you can buy alcohol');
}
else{
    console.log('No, you cant vote');
}
//ternary Operator
age>=18?console.log('YES'):console.log('NO');
//switch case
const option=4;
switch(option){
    case 1:
        {
            console.log('Namaste');
        }
        break;
    case 2:
        {
            console.log('Hello');
        }
        break;
    case 3:
        {
            console.log('Bonjour!');
        }    
        break;
        default:console.log('Invalid Option');
}