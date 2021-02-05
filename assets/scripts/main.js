function audioSelectF() {
    if(audioSelect.elements[0].checked){
        document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
        document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
    }
    else if(audioSelect.elements[1].checked){
        document.getElementById("sound-image").src = "./assets/media/images/car.svg";
        document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
    }
    else{
        document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
        document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
    }

}

function changeVolumeByInput() {
    volumeSlider.value = volumeNum.value;
    document.getElementById("horn-sound").volume = volumeSlider.value/100;
    volume = volumeSlider.value;

    document.getElementById("honk-btn").disabled = false;

    if(volume >= 67 && volume <= 100){
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-3.svg";
    }
    else if(volume <= 66 && volume >= 34){
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-2.svg";
    }
    else if(volume > 0){
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-1.svg";
    }
    else{
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }
}

function changeVolumeBySlide() {
    volumeNum.value = volumeSlider.value;
    document.getElementById("horn-sound").volume = volumeSlider.value/100;
    volume = volumeNum.value;

    document.getElementById("honk-btn").disabled = false;

    if(volume >= 67 && volume <= 100){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(volume >= 34 && volume <= 66){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(volume >= 0 && volume <= 33){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
    }
    else{
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }
}

var audioSelect = document.getElementById("audio-selection");
audioSelect.addEventListener("change", audioSelectF, false);

var volumeNum = document.getElementById("volume-number");
volumeNum.addEventListener("change", changeVolumeByInput, false);

var volumeSlider = document.getElementById("volume-slider");
volumeSlider.addEventListener("change", changeVolumeBySlide, false);

document.getElementById("honk-btn").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("horn-sound").play();
})

