var imageData = ['images/istockphoto-482858783-612x612.jpg', 'Images/img4.jpg', 'Images/img5.jpg', 'Images/img1.jpg'];
var index = 0;

function slideImg() {
    var mainImg = document.getElementById('mainImg');
    mainImg.setAttribute('src', imageData[index]);
    index++;
    if(index>=imageData.length){
        index = 0;
    }
}

setInterval(slideImg, 2000);