const app = () => {
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video = documnet.querySelector(".vid-container video");


    //* Sounds
    const sounds = document.querySelectorAll(".sound-picker button");
    //* Time Display
    const timeDisplay = document.querySelector(".time-display");
    //Get length of play circle
    const outlineLength = outline.getTotalLenght();
    //* Duration
    let fakeDuration = 600;

    outline.getElementsByClassName.strokeDasharray = outlineLength;
    outline.getElementsByClassName.strokeDashoffset = outlineLength;

    // play sounds
    play.addEventListener('click', () => {
        song.play();
        });

    //function to play sounds
    


};

app();