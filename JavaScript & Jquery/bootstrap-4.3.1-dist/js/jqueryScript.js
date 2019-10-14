/*
$('#heading1').text('This is from jquery')*/

$('#btn').click(function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    $('#fullName').text(firstName+" "+lastName);
    $('#fullName2').val(firstName+" "+lastName);
})

$('#firstName').keyup(function () {
    var firstName = $('#firstName').val();
    $('#f1').text(firstName);
})

$('#lastName').keyup(function () {
    var lastName = $('#lastName').val();
    $('#f2').text(lastName);
})

$('#firstName, #lastName').keyup(function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    $('#f3').text(firstName+" "+lastName                                                        );
})