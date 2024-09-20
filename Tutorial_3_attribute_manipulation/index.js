

// let attributeValue = document.querySelector('a').getAttribute('href');
// console.log(attributeValue);


/************ attr() ************/
let variable1 = $('a').attr('href');
console.log(variable1);


/************ removeAttr() ************/
$('a').removeAttr('href');




/************* setting the attribute by attr() **************/

// document.querySelector('a').setAttribute('href', ' https://google.com')
$('a').attr('href', 'https://google.com');


