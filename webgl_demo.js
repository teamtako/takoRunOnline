//type stuff
var lvl1 = "beluga whale populations are exposed to a variety of stressors and threats including pollution heavy metals chemicals trash shipping energy exploration commercial fishing extreme weather events strandings subsistence harvesting and other types of human disturbance such as underwater noise The Cook Inlet population faces additional threats because of its proximity to the most densely populated area of Alaska during the summer season";
var spacesInList = 1;
var activeWords = []; //all words(objects with words accosited to them) that are on the screen at any given time
var activeWord=""; //The word that you are currently typing
var wordDone=true; //if the current word is typed and a new one needs to be chosen
var words=[];
var wordAt=0;
var color="green";
//type stuff


var startShaking;
var isShaking;
var canvas;
var textCanvas;
var textCtx;
var gl;

var light;
var camera;

var states = {
    TITLE: 0,
    GAME: 1, 
    GAME_OVER: 2,
    PAUSE: 3
}

var currentState = states.TITLE;

var playerMesh;
var meshes = [];
var asteroids = [];
var speeds = [];
var rocketMesh;
var rocketMeshes = [];
var trashMeshes = [];

var asteroid1;
var asteroid2;
var asteroid3;
var asteroid4;
var asteroid5;
var asteroid6;

var stopvar;
var verticalVelocity = 0;
var gravity = 1;
var jumping = false;
var cubeSpeed = 10;

var startTime = 0;
var endTime = 0;
var deltaTime = 0;

var mouseX;
var mouseY;

var mvmtSpeed = 0.01;

var score = 5;

var speed = 0.1;
var destZ = 0;
var destY = 0;

var octopus;
var animatedMeshes = [];
var bubbleEmitter;
var particleEmitters = [];

const KEY_0 = 48;
const KEY_1 = 49;
const KEY_2 = 50;
const KEY_3 = 51;
const KEY_4 = 52;
const KEY_5 = 53;
const KEY_6 = 54;
const KEY_7 = 55;
const KEY_8 = 56;
const KEY_9 = 57;
const KEY_A = 65;
const KEY_B = 66;
const KEY_C = 67;
const KEY_D = 68;
const KEY_E = 69;
const KEY_F = 70;
const KEY_G = 71;
const KEY_H = 72;
const KEY_I = 73;
const KEY_J = 74;
const KEY_K = 75;
const KEY_L = 76;
const KEY_M = 77;
const KEY_N = 78;
const KEY_O = 79;
const KEY_P = 80;
const KEY_Q = 81;
const KEY_R = 82;
const KEY_S = 83;
const KEY_T = 84;
const KEY_U = 85;
const KEY_V = 86;
const KEY_W = 87;
const KEY_X = 88;
const KEY_Y = 89;
const KEY_Z = 90;
const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_SPACE = 32;
var logo;

window.onload = function () {
    startShaking = false;
    isShaking = false;
    logo = document.getElementById("logoImageID");

    window.addEventListener("keyup", keyUp); 
    window.addEventListener("keydown", keyDown);
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    canvas = document.getElementById("canvasID");
    gl = canvas.getContext("webgl2");
    textCanvas = document.getElementById("textCanvasID");
    textCtx = textCanvas.getContext("2d");

    textCanvas.style.position = "absolute";
    textCanvas.style.left = "0px";
    textCanvas.style.top = "0px";
    textCanvas.width = window.innerWidth * 0.95;
    textCanvas.height = window.innerHeight * 0.95;

    canvas.width = window.innerWidth * 0.95;
    canvas.height = window.innerHeight * 0.95;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.enable(gl.CULL_FACE);
    gl.clearColor(0.5, 0.7, 1.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    handleType();
    let vertices = [
        -0.5, -0.5, 0.5, 0, 0, 1, 0.0, 1.0,
        -0.5, 0.5, 0.5, 0, 0, 1, 0.0, 0.0,
        0.5, 0.5, 0.5, 0, 0, 1, 1.0, 0.0,
        0.5, -0.5, 0.5, 0, 0, 1, 1.0, 1.0,

        0.5, -0.5, -0.5, 0, 0, -1, 0.0, 1.0,
        0.5, 0.5, -0.5, 0, 0, -1, 0.0, 0.0,
        -0.5, 0.5, -0.5, 0, 0, -1, 1.0, 0.0,
        -0.5, -0.5, -0.5, 0, 0, -1, 1.0, 1.0,

        0.5, -0.5, 0.5, 1, 0, 0, 0.0, 1.0,
        0.5, 0.5, 0.5, 1, 0, 0, 0.0, 0.0,
        0.5, 0.5, -0.5, 1, 0, 0, 1.0, 0.0,
        0.5, -0.5, -0.5, 1, 0, 0, 1.0, 1.0,

        -0.5, -0.5, -0.5, -1, 0, 0, 0.0, 1.0,
        -0.5, 0.5, -0.5, -1, 0, 0, 0.0, 0.0,
        -0.5, 0.5, 0.5, -1, 0, 0, 1.0, 0.0,
        -0.5, -0.5, 0.5, -1, 0, 0, 1.0, 1.0,

        -0.5, 0.5, 0.5, 0, 1, 0, 0.0, 1.0,
        -0.5, 0.5, -0.5, 0, 1, 0, 0.0, 0.0,
        0.5, 0.5, -0.5, 0, 1, 0, 1.0, 0.0,
        0.5, 0.5, 0.5, 0, 1, 0, 1.0, 1.0,

        -0.5, -0.5, -0.5, 0, -1, 0, 0.0, 1.0,
        -0.5, -0.5, 0.5, 0, -1, 0, 0.0, 0.0,
        0.5, -0.5, 0.5, 0, -1, 0, 1.0, 0.0,
        0.5, -0.5, -0.5, 0, -1, 0, 1.0, 1.0,
    ];
    indices = [
        0, 1, 2, 2, 3, 0,
        4, 5, 6, 6, 7, 4,
        8, 9, 10, 10, 11, 8,
        12, 13, 14, 14, 15, 12,
        16, 17, 18, 18, 19, 16,
        20, 21, 22, 22, 23, 20
    ]; 
    
    camera = new Camera(); 
    camera.setPerspectiveProjection(70.0, canvas.width / canvas.height, 0.001, 1000.0); 
    camera.position = new Vector3(-5, 2, 0); 
    camera.orientation = new Quaternion(0, 1, 0, 1); 
    camera.updateView(0);
    
    initAnimatedTexturedMeshRenderer();
    initParticleRenderer();
    initTexturedMeshRenderer();
    initSkyboxRenderer();


    loadSkyboxFaceImage(SeaSkybox[0], 256, 256, "+x");
    loadSkyboxFaceImage(SeaSkybox[3], 256, 256, "+z");
    loadSkyboxFaceImage(SeaSkybox[2], 256, 256, "-x");
    loadSkyboxFaceImage(SeaSkybox[3], 256, 256, "-z");
    loadSkyboxFaceImage(SeaSkybox[4], 256, 256, "-y");
    loadSkyboxFaceImage(SeaSkybox[5], 256, 256, "+y");

    trashMeshes = [createTexturedMesh(bottleData2[0],bottleData2[1]), createTexturedMesh(straw[0],straw[1]), createTexturedMesh(bag[0],bag[1])];

    asteroids = [trashMeshes[Math.floor(Math.random()*trashMeshes.length)]];

    speeds = [Math.random()*0.01];
  
    rocketMesh = createTexturedMesh(rocketData[0], rocketData[1]);
    rocketMesh.scale.scale(1);
    rocketMesh.orientation.rotate(new Vector3(-1 ,0,0), -Math.PI);
    

    for(i = 0; i < asteroids.length; i++){
        var fishyMesh = asteroids[i];
        // fishyMesh.textureID = generateGLTexture2D(monkeyPixels, 1024, 1024);
        fishyMesh.scale = new Vector3(0.7,0.7,0.7);
        fishyMesh.orientation.rotate(new Vector3(0, 1, 0), -Math.PI);
        fishyMesh.position.y = 2;
        fishyMesh.position.x -= (.1);
    }   

    //Get # of words in word list
    var i = 0, strLength = lvl1.length;
    for(i; i < strLength; i++) {
        if(lvl1.charAt(i) == ' ')
        {
            spacesInList++;
        }
    }
    console.log(spacesInList);



    
    // let verts = [];
    // let inds = [];
    // generateUnitCubeVerticesIndexedWithNormalsTexCoords(verts, inds); // generates unit cube vertices that is indexed with normal texture coordinates
    //this.playerMesh = createTexturedMesh(verts, inds);
    playerMesh = createTexturedMesh(missileData[0], missileData[1]);
    playerMesh.orientation.rotate(new Vector3(0, 1, 0), -Math.PI);
    //meshes = [playerMesh];

    /*********************ANIMATED OCTOPUS***********************************/
    octopus = createAnimatedTexturedMesh(octopusMeshData[0], octopusMeshData[1]);
    octopus.textureID = generateGLTexture2D(octopusFlesh, 1024, 1024, "linear");
    octopus.animations["idle"] = buildAnimation(octopusAnimation["idle"]);
    octopus.currentAnimation = octopus.animations["idle"];
    octopus.orientation.rotate(new Vector3(0, 0, 1), Math.PI);
    octopus.orientation.rotate(new Vector3(0, 1, 0), Math.PI);
    octopus.position = new Vector3(14, -5, 0);
    animatedMeshes = [octopus];
    /*********************----ANIMATED OCTOPUS----***********************************/

    /*********************PARTICLES***********************************/
    bubbleEmitter = new ParticleEmitter();
    bubbleEmitter.repeat = true;
    for(let i = 0; i < 8; i++){
        bubbleEmitter.positions.push(new Vector3(octopus.position.x, octopus.position.y, octopus.position.z));
        let sc = Math.random() * 0.5;
        bubbleEmitter.scales.push(new Vector3(sc, sc, sc));
        bubbleEmitter.orientations.push(new Quaternion());
        bubbleEmitter.velocities.push(new Vector3(0, 1, 0));
        bubbleEmitter.durations.push(20);
        bubbleEmitter.startDelays.push(Math.random() + (i * 3));
    }
    bubbleEmitter.updateFunction = function(pEmtr, deltaTime){
        for(let i = 0; i < pEmtr.positions.length; i++){
            if(pEmtr.totalTime > pEmtr.startDelays[i]){
                pEmtr.positions[i].add(Vector3.scale(pEmtr.velocities[i], deltaTime));
                pEmtr.positions[i].z += Math.sin(pEmtr.totalTime + pEmtr.startDelays[i]) * deltaTime;
                pEmtr.durations[i] -= deltaTime;
                pEmtr.scales[i].add(Vector3.scale(new Vector3(deltaTime, deltaTime, deltaTime), 0.05));
                if(pEmtr.durations[i] <= 0){
                    pEmtr.positions[i].x = octopus.position.x;
                    pEmtr.positions[i].y = octopus.position.y;
                    pEmtr.positions[i].z = octopus.position.z;
                    let sc = Math.random() * 0.5;
                    bubbleEmitter.scales[i].x = sc;
                    bubbleEmitter.scales[i].y = sc;
                    bubbleEmitter.scales[i].z = sc;
                    pEmtr.durations[i] = 20;
                }
            }
        }
    };

    bubbleEmitter.textureID = generateGLTexture2D(bubbleTexture, 64, 64, "linear");
    particleEmitters.push(bubbleEmitter);
    /*********************----PARTICLES----***********************************/
    startTime = new Date().getTime();

    setInterval(updateFrame, 1);
    stopvar = setInterval(updateFrame, 1);

}

//start type

//initiates texts and the words in them into arrays
function handleType(){
     
     words = lvl1.split(" ");

}
function removeChar(){
    if(words[wordAt].length==1){
      
        wordAt = Math.floor(Math.random() * spacesInList);
          
        score++;
        for(var i = 0; i < asteroids.length; i++){
            asteroids[i] = trashMeshes[Math.floor(Math.random()*trashMeshes.length)];
            asteroids[i].position.x = 120;
        }
        speeds[0] = 0.01;
        fishyMesh.position.z = (Math.random() - .5) * 16;
        fishyMesh.position.y = (Math.random() * 16)-10;
    }else{
        words[wordAt]= words[wordAt].substring(1, words[wordAt].length);;
    }
}
//when a key is typed checks if it is the correct next letter and if there is no word selected pickes a word with the correct first char
function validType(code){
    if(code==getKeyCode(words[wordAt].charAt(0))){
        color="white";
        removeChar();
        activeWords[i]=activeWord;
        wordDone=false;
       }else{
        color="red";
    }
}


//get next word for the astriod when it spawns
function getWord(){
    var word=words[wordAt];
    return word.toString();
}

function getKeyCode(char) {
    var keyCode = char.charCodeAt(0);
    if(keyCode > 90) {  // 90 is keyCode for 'z'
      return keyCode - 32;
    }
    return keyCode;
  }

  //end type

function mouseMove(evt) {
    mouseX = evt.x;
    mouseY = evt.y;
    destZ = (((mouseX / canvas.width) * 8) - 4);
    destY = (((mouseY / canvas.height) * -8) + 6);
}
function mouseDown(evt) {
   /* rocketMeshes.push(new TexturedMesh(rocketMesh));
        rocketMeshes[rocketMeshes.length - 1].position = new Vector3(playerMesh.position.x,playerMesh.position.y,playerMesh.position.z);
        rocketMeshes[rocketMeshes.length - 1].orientation = Quaternion.rotationToQuaternion(new Vector3(1,0,-.1),1);

        rocketMeshes.push(new TexturedMesh(rocketMesh));
        rocketMeshes[rocketMeshes.length - 1].position = new Vector3(playerMesh.position.x,playerMesh.position.y,playerMesh.position.z);
        rocketMeshes[rocketMeshes.length - 1].orientation = Quaternion.rotationToQuaternion(new Vector3(1,0,.1),1);

        rocketMeshes.push(new TexturedMesh(rocketMesh));
        rocketMeshes[rocketMeshes.length - 1].position = new Vector3(playerMesh.position.x,playerMesh.position.y,playerMesh.position.z);
        rocketMeshes[rocketMeshes.length - 1].orientation = Quaternion.rotationToQuaternion(new Vector3(1,0,0),1); */
}
function mouseUp(evt) {
    speed = 0.1;
}
var an = true;
function keyDown(event) {
    switch (event.keyCode) {
        case KEY_SPACE:
            if(currentState == states.TITLE){
                currentState = states.GAME;
            }
            for(i = 0; i < asteroids.length; i++){
                asteroids[i].position.x = 120;
                
            }
            break;

        default:
           // removeChar();
            validType(event.keyCode);
            
    }
}

function gameState(){
    if (startShaking == true) {
        if (shakeAmount > 0) {
            isShaking = true;
            shakeAmount--;
        } else {
            isShaking = false;
            startShaking = false;
        }
    } else {
        isShaking = false;
    }
    distIntoArray = 0;
    rocketMeshes.forEach(element => {
        element.position.add(new Vector3(20 * deltaTime * ((element.orientation.x) / Math.PI),20 * deltaTime * ((element.orientation.y) / Math.PI),20 * deltaTime * ((element.orientation.z) / Math.PI)));
       
       if (element.position.x > 60)
        {
          rocketMeshes.splice(distIntoArray,1);
          element = null;
        }
        distIntoArray++;
      });

    for(i = 0; i < asteroids.length; i++){
    var fishyMesh = asteroids[i];
    if (fishyMesh.position.x <= -7) {
        score--;
        // fishyMesh.scale = new Vector3(Math.floor((Math.random()*2)+1),Math.floor((Math.random()*2)+1),Math.floor((Math.random()*2)+1));
        asteroids[i] = trashMeshes[Math.floor(Math.random()*trashMeshes.length)];
        fishyMesh.position.x = 120;
        fishyMesh.orientation.rotate(new Vector3(Math.random() * 360, Math.random() * 360, Math.random() * 360), 1 * deltaTime);
        fishyMesh.position.z = (Math.random() - .5) * 16;
        fishyMesh.position.y = (Math.random() * 16)-10;
    } else {
        fishyMesh.position.x -= 0.1 + ((score-5)/100);
    }

    fishyMesh.orientation.rotate(new Vector3(0, 0, 1), 1 * deltaTime);
    }

    if (isShaking == false) {
        camera.updateView(deltaTime);
        camera.position = new Vector3(-5, 2, 0); camera.orientation = new Quaternion(0, 1, 0, 1); camera.updateView(0);
    } else {
        camera.lookAt(Vector3.add(playerMesh.position, new Vector3(-10, Math.random() * (playerMesh.position.z * 2 - fishyMesh.position.z), Math.random() * (playerMesh.position.y * 2 - fishyMesh.position.y))), playerMesh.position, new Vector3(0, 1, 0));
    }
    
    let lightPos = new Vector3(4, 4, 4);
    renderSkybox(camera.projectionMatrix, camera.orientation);
    renderTexturedMeshes(meshes, camera, lightPos);
    renderTexturedMeshes(asteroids, camera, lightPos);
    renderTexturedMeshes(rocketMeshes, camera, lightPos);
    renderAnimatedTexturedMeshes(animatedMeshes, camera, lightPos, deltaTime);
    updateParticles(particleEmitters, deltaTime);
    renderParticles(particleEmitters, camera, deltaTime);
    

    textCtx.font = "30px Arial";
    
    textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);

    textCtx.fillStyle = color;
    
    var closestTrash = asteroids[0];

    for(j = 0; j < asteroids.length; j++){
        if(closestTrash.position.x > asteroids[j].position.x){
            closestTrash = asteroids[j];
        }                
    }

    textCtx.fillStyle = "#000000";
    textCtx.fillRect(window.innerWidth/2-10-(getWord().length*10), 30, getWord().length*21, 50);
    textCtx.strokeStyle = "#ffffff";
    textCtx.beginPath();
    textCtx.lineWidth = "5";
    textCtx.rect(window.innerWidth/2-10-(getWord().length*10), 30, getWord().length*21, 50);
    textCtx.stroke();
    textCtx.fillStyle = "#ffffff";
    if(getWord().length<=1){
        textCtx.fillText(getWord()+"", window.innerWidth/2-(getWord().length*10)-7, 65);
    }else{
        textCtx.fillText(getWord()+"", window.innerWidth/2-(getWord().length*10), 65);
    }
    textCtx.font = "30px Arial";
    textCtx.fillText("Score: " + score, 100, 100);
    
    //checkIntersection(fishyMesh, playerMesh);

    endTime = new Date().getTime();
    deltaTime = (endTime - startTime) / 1000.0;
    startTime = endTime;

}

function gameOverState(){
    gl.clearColor(1.0,0.0,0.0,1.0);
    textCtx.fillStyle = "white";
    textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
    textCtx.font = "100px Arial";
    textCtx.fillText("You're Dead! Press S to restart", 170, 200);
    clearInterval(stopvar);
    menuItems=["play","donate","credits"];
    score = 5;
}
function shake(shakeAmount1) {
    startShaking = true;
    shakeAmount = shakeAmount1;
}
function titleState(){
    gl.clearColor(0.5, 0.7, 1.0, 1.0);
    textCtx.fillStyle = "white";
    textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
    textCtx.drawImage(logo, (canvas.width-(canvas.width*0.5))/2, 0, canvas.width*0.5, (canvas.width*0.5)/2.2623771);
    textCtx.font = "100px Arial";
    textCtx.fillText("Press Space to Start Epic Game", 150, 200);
}

function pauseState(){

}

function updateFrame() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.clear(gl.DEPTH_BUFFER_BIT);

    if(score <= 0){
        currentState = states.GAME_OVER;
    }

    if(currentState == states.GAME){
        gameState();
    } else if(currentState == states.GAME_OVER){
        gameOverState();
    } else if(currentState == states.TITLE){
        titleState();
    } else if(currentState == states.PAUSE){
        pauseState();
    }

}

function keyUp(event) {

    switch (event.keyCode) {
        case KEY_S: {
            if (currentState == states.GAME_OVER) {
                score = 5;
                currentState = states.TITLE;
            }
        }

    }
}
