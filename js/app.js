// console.log('Katalog warsztatów uruchomiony');
// console.log("loremipsum");
// console.log(127);
// console.log(true);
// console.log("127");

const seat = 12;
let title= 'Kurs JavaScript';
let enrolled = 2;
let slogan;
let course;
let leanguage = (seat <= 12) ? 'Javascript' : 'naprawa płota przy pomocą młotka';


console.log(typeof seat);
console.log(typeof title);
console.log(typeof slogan);
console.log(typeof course);
function PokazIlosc()
{
    console.log(`${title}: wolne ${seat-enrolled } z ${seat}`);

}

switch(seat)
{
    case 0:
        {
            title = "Nikogo w JS";
            break;
        }
    default:
        {
            title = "Kurs w przygowowaniu ";
            break;
        }
}

if(seat==12)
{
    console.log(PokazIlosc());
    
}


