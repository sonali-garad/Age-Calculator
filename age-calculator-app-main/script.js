let logo = document.querySelector('.logo');
logo.addEventListener('click',display);
let dayInput = document.querySelector('.day-ip');
let monthInput = document.querySelector('.month-ip');
let yearInput = document.querySelector('.year-ip');
let requiredDay= document.querySelector('.day-required');
let requiredMonth= document.querySelector('.month-required');
let requiredYear = document.querySelector('.year-required');
let day1 = document.querySelector('.day-1');
 console.log(day1);
 let month1 = document.querySelector('.month-1');
 let year1 = document.querySelector('.year-1');

function display()
{

 //DECLARATION AND EXTACT PART    
 
 let dayValue =dayInput.value.trim();
 let mothhValue =monthInput.value.trim();
 let yearValue=yearInput.value.trim();
 

if (dayValue === "")
{
    requiredDay.textContent="Filed Required";
    requiredDay.style.color='red';
}
if ( mothhValue==="")
{
    requiredMonth.textContent="Field Required"
    requiredMonth.style.color='red';

}
if(yearValue==="")
{
    requiredYear.textContent="Field Required";
    requiredYear.style.color='red';
}


if (dayValue >31)
{
    requiredDay.innerText ="Must be a valid day "
    requiredDay.style.color='red';
    requiredDay.style.wordWrap='break-word';
}

if ( mothhValue > 12)
{
    requiredMonth.innerText="Must a valid month";
    requiredMonth.style.color ='red';
    requiredMonth.style.wordWrap='break-word';
}
 let  date= new Date();
 let currentYear = date.getFullYear();
console.log(currentYear);
if (yearValue > currentYear)
{
    requiredYear.innerText="Must a valid year";
    requiredYear.style.color='red';
}

let displayDay = date.getDate();
console.log('current day is '+displayDay);
let displayMonth = date.getMonth();
console.log('current month is '+(displayMonth+1));
let displayYear = date.getFullYear();

let d1 ;
let m1;
let y1 ;

//CALCULATION PARTT====
if (dayValue <=31 && mothhValue <=12 && yearValue<=currentYear &&dayValue !="" && mothhValue!="" && yearValue!="")
{

//  let day1 = document.querySelector('.day-1');
//  console.log(day1);
//  let month1 = document.querySelector('.month-1');
//  let year1 = document.querySelector('.year-1');
y1= displayYear-yearValue-1;
console.log('current year '+y1);
m1 = Math.abs(12-mothhValue)+displayMonth+1;
d1= Math.abs(displayDay - dayValue);
console.log('After calculation day :'+d1);
console.log('After calculation day :'+m1);
console.log('After calculation day :'+y1);


day1.innerText=d1;
month1.innerText=m1;
year1.innerText=y1;
}
}
let reset = document.querySelector('.btn-reset');
reset.addEventListener('click', function reset()
{
dayInput.value='';
monthInput.value='';
yearInput.value='';
requiredDay.innerText='';
requiredMonth.innerText='';
requiredYear.innerText='';
console.log('i am good ');
day1.innerHTML=`<span>- - </span>`;
month1.innerHTML=`<span> - - </span>`;
year1.innerHTML=`<span>- - </span>`;

})
//SETTING DYNAMIC REQUIRED FIELD 
// dayInput.setCustomValidity('');

// dayInput.setAttribute('required','true');
// monthInput.setAttribute()

// if (dayValue==="" || mothhValue==="" || yearValue==="")
// {
//     console.log('please enter value ');
//     dayInput.setCustomValidity('This is a required field  ');
//     dayInput.reportValidity();
//     monthInput.setCustomValidity('This is the required field');
//     monthInput.reportValidity();
//     yearInput.setCustomValidity('please enter year ');
//     // yearInput.reportValidity();
// }
//  console.log('Day '+dayValue);
//  console.log('Month '+mothhValue);
//  console.log('Year '+yearValue);
