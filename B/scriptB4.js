const carouselContainer = document.querySelector('.carousel_container');

let numberOfSlides = 0;
while (numberOfSlides <=0){
    numberOfSlides = parseInt(prompt("Enter the total number of slides: "));
    if (numberOfSlides <=0) {
        alert("Enter a value more than 0!");
    }
    else{}
}
let setNumber = 0;
let slidesInOneSet = 0;
while (slidesInOneSet <=0 || slidesInOneSet > numberOfSlides) {
    slidesInOneSet = parseInt(prompt("Enter the number of slides to be shown at a time: "));
    if (slidesInOneSet > numberOfSlides) {
        alert("Enter a value less than the total number of slides!")
    } 
    else if(slidesInOneSet <=0) {
        alert("Enter a value more than 0!");
    }
    else {}
}
let numberOfSet = parseInt(numberOfSlides / slidesInOneSet);
let slidesInLastSet = numberOfSlides % slidesInOneSet;

// -----Slide Dimensions-------
let slideWidth = 80 / slidesInOneSet;
if (slideWidth > 20) {
    slideWidth = 20;
}
const slideHeight = slideWidth * 1.4;
const fontSize = slideWidth * 0.6;

// -----Slide Dimensions End------


// -----Make Slides----------
const createEvent = () => {
    for (i = 0; i < numberOfSet; i++) {
        let carouselSet =document.createElement('div');
        carouselSet.className = "carousel_set";
        for(j = 0; j < slidesInOneSet; j++) {
            let slide = document.createElement('div');
            slide.className = "slide";
            slide.style.width = slideWidth + 'vw';
            slide.style.height = slideHeight + 'vw';
            slide.style.fontSize = fontSize + 'vw';
            slide.innerHTML = i*slidesInOneSet + j + 1;

            carouselSet.appendChild(slide);
        }
        carouselContainer.appendChild(carouselSet);
    }
    if (slidesInLastSet != 0){
            let carouselSet = document.createElement('div');
            carouselSet.className = "carousel_set";
            for (j = 0; j < slidesInLastSet; j++) {
                let slide = document.createElement('div');
                slide.className = "slide";
                slide.style.width = slideWidth + 'vw';
                slide.style.height = slideHeight + 'vw';
                slide.style.fontSize = fontSize + 'vw';
                slide.innerHTML = i*slidesInOneSet + j + 1;

                carouselSet.appendChild(slide);
            }
            carouselContainer.appendChild(carouselSet);
    }
    else{}
}



// -----Make Slides End ---------

// -----Make Dots------
const createDots = () => {
    const dotsContainer = document.querySelector('.nav');
    for (i = 0; i < numberOfSet; i++) {
        let dot = document.createElement('div');
        dot.className = "nav_btn";
        dot.id = i+1;
        dot.setAttribute('onclick', 'navigateEvent(this.id)');
        dotsContainer.appendChild(dot);
    }
    if (slidesInLastSet != 0) {
         let dot = document.createElement('div');
         dot.className = "nav_btn";
         dot.id = (i + 1);
         dot.setAttribute('onclick', 'navigateEvent(this.id)');
         dotsContainer.appendChild(dot);
     }
     else{}
}
// ------Make Dots End--------


const changeEventSet = () => {
    const limit = (slidesInLastSet == 0) ? numberOfSet : (numberOfSet + 1);
    if (setNumber < limit) {
        setNumber++;
        carouselContainer.style.transform = "translate(" + (-100 * (setNumber - 1)) + "%";
        for (dot of document.querySelectorAll('.nav_btn')) {
            dot.style.background = 'none';
        }
        setTimeout (() => {
            document.querySelectorAll('.nav > .nav_btn')[setNumber - 1].style.background = "#A5C9FF";
        }, 100);
    } else {
        setNumber = 0;
        changeEventSet();
    }
}


const navigateEvent = (dotIndex) => {
    if (setNumber != dotIndex) {
        setNumber = dotIndex - 1;
        changeEventSet();
        clearInterval(eventSetChangeInterval);

        eventSetChangeInterval = setInterval(changeEventSet, 5000);
        
    }
}


window.onload = () => {
    setTimeout(() => {
        changeEventSet();
        eventSetChangeInterval = setInterval(changeEventSet, 5000);
// --------------Set Interval for Set Change-------------
    }, 1);
    createEvent();
    createDots();
}

