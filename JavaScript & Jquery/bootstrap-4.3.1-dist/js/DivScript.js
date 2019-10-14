$('#btn').click(function () {
    $('.my-div').hide()
})

$('#btn2').click(function () {
    $('.my-div').show()
})

$('#btn3').click(function () {
    $('.my-div').toggle()
})

$('#slideShow div:gt(0)').hide();
setInterval(function () {
    $('#slideShow div:gt(0)')
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end
        .appendTo('#slideshow');

}, timeout=3000)