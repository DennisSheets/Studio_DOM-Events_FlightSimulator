window.addEventListener("load", () => {
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const miles = 10000;

    const takeoff = document.getElementById("takeoff");
    const land = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");

    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");

    let marginRight = 0;
    let marginTop = 330;
    let fuel = 100
    const move = 10;
    const rocket = document.getElementById("rocket");
    rocket.style.marginTop =  ` ${marginTop}px`;



    takeoff.addEventListener("click", () => {
        if(Number(spaceShuttleHeight.innerHTML)  === 0) {
            confirmTakeOff = confirm("Confirm that the shuttle is ready for takeoff.");
            if(confirmTakeOff){
                marginTop -= move;
                rocket.style.marginTop = ` ${marginTop}px`;
                flightStatus.innerHTML = "Shuttle in Flight";
                shuttleBackground.className = "shuttleBackgroundSpace";
                console.log(spaceShuttleHeight);
                spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + miles; 
            }
        }else {
            alert("Look out the window, you've already launched!!!");
        }
    });

     land.addEventListener("click", () => {
        if(Number(spaceShuttleHeight.innerHTML)  !== 0) { 
            alert("The shuttle is landing. Landing gear engaged.");
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.className = "shuttleBackgroundLaunch";
            spaceShuttleHeight.innerHTML = 0;
            marginRight = 0;
            marginTop = 330;
            rocket.style.marginTop =  ` ${marginTop}px`;
            rocket.style.marginRight = ` ${marginRight}px`;
        }else {
            alert("Are you really qualified to be here? You're still on the ground!");
        }                   
     });

     missionAbort.addEventListener("click", () => {
        confirmAbort = confirm("Confirm that you want to abort the mission.");
        if(confirmAbort){
            flightStatus.innerHTML = "Mission Aborted";
            shuttleBackground.className = "shuttleBackground";
            spaceShuttleHeight.innerHTML = 0; 
            }
     });


    function moveUp() { 
        if(marginTop > 0) {
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + miles;
            marginTop -= move;
            rocket.style.marginTop = ` ${marginTop}px`;
            console.log(`marginTop: ${marginTop} marginRight: ${marginRight}`)
        }else{
            alert("You've already reached the end of the Universe")
        }        
     };

     function moveDown() { 
        if(marginTop < 330) {
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - miles;
            marginTop += move;
            rocket.style.marginTop = ` ${marginTop}px`;
            console.log(`marginTop: ${marginTop} marginRight: ${marginRight}`)  
        }else{
            alert("If you keep hitting that button, you're going straight to hell.")
        }    
    };

    function moveLeft() { 
        if(marginRight < 350) {
            marginRight += move;
            rocket.style.marginRight = ` ${marginRight}px`; 
            console.log(`marginTop: ${marginTop} marginRight: ${marginRight}`) 
        }else{
            alert("Hey stop that! You almost left!")
        }        
    };

    function  moveRight(){ 
        if(marginRight > -350) {        
            marginRight -= move;
            rocket.style.marginRight = ` ${marginRight}px`; 
            console.log(`marginTop: ${marginTop} marginRight: ${marginRight}`) 
        }else{
            alert("Any further to the right and you'll find yourself in the Donald's lap.")
        }       
    };

    // document.addEventListener("keydown", function(event) {
    //     if (event.key == 37) {
    //         moveLeft
    //     }if (event.key == 38) {
    //         moveUp
    //     }if (event.key == 39) {
    //         moveRight
    //     }if (event.key == 40) {
    //         console.log("moveDown-if/else 40")
    //         moveDown
    //     }
    // });

    
     document.onkeyup = function(event) { // still not working right. deprecated keyCode
        switch (event.keyCode) {
            case 37:
                //alert('Left key pressed'); 
                console.log("moveLeft-switch")
                moveLeft();
                break;
            case 38:
                //alert('Up key pressed');
                console.log("moveUp-switch")              
                moveUp();
                break;
            case 39:
                //alert('Right key pressed');
                console.log("moveRight-switch")
                moveRight();
                break;
            case 40:
                //alert('Down key pressed');
                console.log("moveDown-switch")
                moveDown();
                break;
        }
    };

    // moved the annonymous function out of the event listener so that I could
    // call them in the switch for using the arrow keys.
    
    up.addEventListener("click", moveUp);
    down.addEventListener("click", moveDown);
    left.addEventListener("click", moveLeft);
    right.addEventListener("click", moveRight);

 });



