    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var btn4 = document.getElementById('btn4');
    btn1.onclick = function () {
        document.getElementById('div1').style.backgroundColor = 'red';
        document.getElementById('div1').style.borderRadius = '0%';
    }
    btn2.onclick = function () {
        document.getElementById('div1').style.backgroundColor = 'green';
        document.getElementById('div1').style.borderRadius = '50%';
    }
    btn3.onclick = function () {
        document.getElementById('div1').style.backgroundColor = 'blue';
        document.getElementById('div1').style.fontFamily = 'Arial'
        document.getElementById('div1').style.fontSize = '40px'

    }
    btn4.onclick = function () {
        //document.getElementById('div1').style.transform = 'rotate(45deg)'
        document.getElementById('div1').style.transition = 'all 2s'
        document.getElementById('div1').style.margin = '100px';
        document.getElementById('div1').style.backgroundColor = 'orange';

    }

