/*    mainImg.getAttribute('width');
    mainImg.setAttribute('src', 'img4.jpg')*/
var mainImg = document.getElementById('mainImg');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
img1.onclick = function () {
    var changeImg = img1.getAttribute('src');
    mainImg.setAttribute('src', changeImg);
}
img2.onclick = function () {
    var changeImg = img2.getAttribute('src');
    mainImg.setAttribute('src', changeImg);
}
img3.onclick = function () {
    var changeImg = img3.getAttribute('src');
    mainImg.setAttribute('src', changeImg);
}
img4.onclick = function () {
    var changeImg = img4.getAttribute('src');
    mainImg.setAttribute('src', changeImg);
}
