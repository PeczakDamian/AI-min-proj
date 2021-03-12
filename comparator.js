var init = () => {
    let brd = document.querySelector('.brd');
    compare(brd);
    let url = window.location;
    console.log(url);
    let opt1 = document.getElementById('opt1');
    let opt2 = document.getElementById('opt2');
    opt1.addEventListener('change', function () {imgPath1.value = opt1.value;}, false);
    opt2.addEventListener('change', function () {imgPath2.value = opt2.value;}, false);
    document.getElementById('rst').addEventListener('click', function() {window.location = url});
}

var compare = (img) => {
    let x;
    let w = img.offsetWidth;
    let h = img.offsetHeight;
    let rdy;

    img.style.width = (w / 2) + 'px';

    let slider = document.createElement('div');
    slider.innerHTML = '<b><></b>';
    slider.setAttribute('class', 'slider');
    img.parentNode.appendChild(slider);

    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + 'px';
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + 'px';

    slider.addEventListener('mousedown', function () {
        rdy = true
    }, false);
    document.addEventListener('mouseup', function () {
        rdy = false;
    }, false);

    document.addEventListener('mousemove', function (e) {
        if (rdy == true) {
            x = foo(e);
            if (x < w && x > 0) {
                bar(img, slider, x);
            } else x = w;
        }
    }, false);
}

var foo = (e) => {
    let wth = document.body.clientWidth;
    let we = document.querySelector('.comp').clientWidth;
    let x;
    if (wth >= we) {
        x = e.clientX - (wth - we) / 2;
    } else console.log("Powiększ obszar, aby móc porównac zdjęcie");
    return x;
}

var bar = (img, slider, x) => {
    img.style.width = x + 'px';
    slider.style.left = x - (slider.offsetWidth / 2) + 'px';
}

let imgPath1 = document.querySelector('#imgPath1');
let imgPath2 = document.querySelector('#imgPath2');

var manualComp = () => {
    let img1 = document.querySelector('#img1');
    let img2 = document.querySelector('#img2');
    if (imgPath1.value != 0 && imgPath2.value != 0 && imgPath1.value != imgPath2.value) {
        img1.src = imgPath2.value;
        img2.src = imgPath1.value;
    }
}
document.querySelector('#btn').addEventListener('click', manualComp, false)
window.addEventListener('load', init, false);
