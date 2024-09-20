
/* Methods */
/* 
text()
html()
append()
prepend()
after()
before()
*/

// document.querySelector('h1').textContent = 'This is a text by core js'
// $('h1').text('This text written by JQuery')

/**************Write directly in Html from Js using text() *************/
$('.my-div h1').text('inside heading changed')
$('.out').text('Outside heading changed')
$('#p2, #p3, #p4').text('Same text saved')

/*************** For adding html styles use html() **************/
$('#p1').html('<b><i>Italic text</i></b>')


/***************** By append we add text in end ******************/
$('#h1').html('<i>Hi, </i>')
$('#h1').append('append bye')


/***************** By prepend we add text at first ******************/
$('#h2').html('<i> Hi, </i>')
$('#h2').prepend('append bye')


/***************** By before we can add element before any element **********/
let element1 = $('<h1> </h1>').text('Before id h3')           /*********Creating element**********/
$('#h3').before(element1);

/***************** By after we can add element after any element **********/
let element2 = $('<h1></h1>').html('<del><i> After Id h3</i></del>')//Creating element
$('#h3').after(element2);



