var imageIndex = 0;
var images = [];

function openImage(filename) {
    let img = document.getElementById('fullscreen-image');
    img.src = './slides/' + filename;
    
    imageIndex = images.indexOf(filename);

    let wrapper = document.getElementById('fullscreen-image-wrapper');
    wrapper.classList.remove('wrapper-hidden');
}

function closeWrapper() {
    let wrapper = document.getElementById('fullscreen-image-wrapper');
    wrapper.classList.add('wrapper-hidden');
}

function nextImage() {
    if (imageIndex >= images.length){
        imageIndex = 0;
    } else {
        imageIndex++;
    }
    let img = document.getElementById('fullscreen-image');
    img.src = './slides/' + images[imageIndex];
}

function previousImage() {
    if (imageIndex <= 0){
        imageIndex = images.length - 1; // sprawdzić czy ok
    } else {
        imageIndex--;
    }
    let img = document.getElementById('fullscreen-image');
    img.src = './slides/' + images[imageIndex];
}