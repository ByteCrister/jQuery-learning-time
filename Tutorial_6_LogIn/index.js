
/******* val() ********/

$('#logIn').click(function () {

    let p1 = $('#p1').val();
    let p2 = $('#p2').val();

    if (p1 != '' && p2 != '') {
        if (p1 === p2) {
            alert('Logged In successfully')
        } else {
            alert('Password did not matched')
        }
    } else {
        alert('Enter all password')
    }

})