function openImage(filename) {
    let img = document.getElementById('fullscreen-image');
    img.src = './slides/' + filename;
    
    let wrapper = document.getElementById('fullscreen-image-wrapper');
    wrapper.classList.remove('wrapper-hidden');
}

function closeWrapper() {
    let wrapper = document.getElementById('fullscreen-image-wrapper');
    wrapper.classList.add('wrapper-hidden');
}