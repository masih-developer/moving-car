const $ = document;
const absoluteBg = $.querySelector(".absolute-bg");
const carBgWrapper = $.querySelector(".car-bg");
const carBgImg = $.querySelector(".car-bg img");

let [isMoving, isRunnigCar, isTurnoffLightCar] = Array(3).fill(false);

window.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        if (!isRunnigCar) {
            carBgWrapper.style.animationPlayState = "running";
            absoluteBg.style.animationPlayState = "running";
            isRunnigCar = true;
        } else {
            carBgWrapper.style.animationPlayState = "paused";
            absoluteBg.style.animationPlayState = "paused";
            isRunnigCar = false;
        }
    } else if (e.key === " ") {
        if (!isTurnoffLightCar) {
            carBgImg.src = "assets/images/Img_03.png";
            isTurnoffLightCar = true;
        } else {
            carBgImg.src = "assets/images/Img_04.png";
            isTurnoffLightCar = false;
        }
    }
});
