var text="The occupation of Japan was from start to finish an American operation General Douglans MacArthur sole supreme commander of the Allied Power was in charge The Americans had insufficient men to make a military government of Japan possible so t hey decided to act through the existing Japanese gobernment General Mac Arthur became except in name dictator of Japan He imposed his will on Japan Demilitarization was speedily carried out demobilization of the former imperial forces was complet ed by early 1946 Japan was extensively fire bomded during the second world war The stench of sewer gas rotting garbage and the acrid smell of ashes and scorched debris pervaded the air The Japanese people had to live in the damp and col d of the concrete buildings because they were the only ones left Little remained of the vulnerable wooden frame tile roof dwelling lived in by most Japanese When the first signs of winter set in the occupation forces immediately took over all the s team heated buildings The Japanese were out in the cold in the first post war winter fuel was very hard to find a family was considered lucky if they had a small barely glowing charcoal brazier to huddle around That next summer in random spots new ho uses were built each house was standardized at 216 square feet and required 2400 board feet of material in order to be built A master plan for a modernistic city had been drafted but it was cast aside because of the lack of time before the next winte r The thousands of people who lived in railroad stations and public parks needed housing All the Japanese heard was democracy from the Americans All they cared about was food General MacAruther asked the government to send food when they refus ed he sent another telegram that said Send me food or send me bullets American troops were forbidden to eat local food as to keep from cutting from cutting into the sparse local supply No food was was brought in expressly for the Japanese durning the first six months after the American presence there Herbert Hoover serving as chairman of a special presidential advisory committee recommended minimum imports to Japan of 870 000 tons of food to be distributed in different urban areas Fi sh the source of so much of the protein in the Japanese diet were no longer available in adequate quantities because the fishing fleet particularly the large vessels had been badly decimated by the war and because the U S S R closed off the fishing g rounds in the north The most important aspect of the democratization policy was the adoption of a new constitution and its supporting legislation When the Japanese government proved too confused or too reluctant to come up with a constitutional r eform that satisfied MacArthur he had his own staff draft a new constitution in February 1946 This with only minor changes was then adopted by the Japanese government in the form of an imperial amendment to the 1889 constitution and went into effect on May 3 1947 The new Constitution was a perfection of the British parliamentary form of government that the Japanese had been moving toward in the 1920s Supreme political power was assigned to the Diet Cabinets were made responsible to the Diet by having the prime minister elected by the lower house The House of Peers was replaced by an elected House of Councillors The judicial system was made as independent of executive interference as possible and a newly created supreme court was given the power to review the constitutionality of laws Local governments were given greatly increased powers The Emperor was reduced to being a symbol of the unity of the nation Japanese began to see him in person He went to hospitals schools mines industrial plants he broke ground for public buildings and snipped tape at the opening of gates and highways He was steered here and there shown things and kept muttering Ah so ah so People started to call him Ah so san Suddenly the puybli c began to take this shy ill at ease man to their hearts They saw in him something of their own conqured selves force to do what was alien to them In 1948 in a newspaper poll Emperior Hirohito was voted the most popular man in Japan Civil li berties were emphasized women were given full equality with men Article 13 and 19 in the new Constitution prohibits discrimination in political economic and social relations because of race creed sex social status or family origen This is one of the most explicitly progressive statements on human rights anywhere in law Gerneral Douglas MacArthur emerged as a radical feminist because he was convinced that the place of women in Japan must be brought to a level consistent with that of women in the western democracies So the Japanese women got their equal rights amendment long before a concerted effort was made to obtain one in America Compulsory education was extened to nine years efforts were made to make education more a traning in thinking than in rote memory and the school system above the six elementary grades was revised to conform to the American pattern This last mechanical change produced great confusion and dissatisfaction but became so entrenched that it could not be re vised even after the Americans departed Japan s agriculture was the quickest of national activities to recover because of land reform The Australians came up with the best plan It was basis was this There were to be no absentee landlards A p erson who actually worked the land could own up to 7 5 arcers Anyone living in a village near by could keep 2 5 acres Larger plots of land exceeding these limits were bought up by the government and sold on easy terms to former tenants Within two years 2 million tenants became landowners The American occupation immediately gained not only a large constituency for the new owners had a vested interest in preserving the change but also a psychological momentum for other changes they wanted to ini tiate The American labor policy in Japan had a double goal to encourage the growth of democratic unions while keeping them free of communists Union organization was used as a balance to the power of management To the surprise of the America n authorties this movement took a decidedly more radical turn In the desperate economic conditions of early postwar Japan there was little room for successful bargaining over wages and many labor unions instead made a bid to take over industry and o perate it in their own behalf Moreover large numbers of workers in Japan were government employees such as railroad workers and teachers whose wages were set not by management but by the government Direct political action therefore seemed more meani ngful to these people than wage bargaining The Japanese unions called for a general strike on February 1 1947 MacArthur warned the union leadership that he would not countenace a nationwide strike The strike leaders yieled to MacArthur s will The re after the political appeal of radical labor action appeared to wane The Americans wanted to disband the great Zaibatsu trust as a means of reducing Japan s war making potential There were about 15 Zaibatsu families such as Mitsui Mitsubishi Yasuda and Sumitomo The Zaibatsu controled the industry of Japan MacArthur s liaison men pressured the Diet into passing the Deconcentration Law in December 1947 In the eyes of most Japanese this law was designed to cripple Japanese business and i ndustry forever The first step in breaking up the Zaibatsu was to spread their ownership out among the people and to prevent the old owners from ever again exercising control The stocks of all the key holding companies were to be sold to the public Friends of the old Zaibatsu bought the stock In the long run the Zaibatsu were not exactly destroyed but a few were weakened and others underwent a considerable shuffle The initial period of the occupation from 1945 to 1948 was marked by reform the second phase was one of stabilization Greater attention was given to improvement of the economy Japan was a heavy expense to the United States The ordered breakup of the Zaibatsu was slowed down The union movement continued to grow to the ult imate benefit of the worker Unremitting pressure on employers brought swelling wages which meant the steady expansion of Japan domestic consumer market This market was a major reason for Japan s subsequent economic boom Another boom to the economy was the Korean War which proved to be a blessing in disguise Japan became the main staging area for military action in Korea and went on a war boom economy with out having to fight in or pay for a war The treaty of peace with Japan was signed at San Francisco in September 1951 by Japan the United States and forty seven other nations The Soviet Union refused to sign it The treaty went into effect in April 1952 officially terminating the United States military occupation and restoring full independence What is extraordinary in the Occupation and its aftermath was the insignificance of the unpleasant For the Japanese the nobility of American ideals and the essential benignity of the American presence assuaged much of the bitterness and anguish of defeat For the Americans the joys of promoting peace and democracy triumphed over the attendant fustrations and grievances Consequently the Occupation served to lay down a substantial capital of good will on which both America and Jap an would draw in the years ahead";
var canvas;
var textCanvas;
var textCtx;
var gl;

var light;
var camera;

var fishyMesh;
var playerMesh;
var meshes = [];

var txtArr;

var shakeAmount;
var startShaking;
var isShaking;
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

var isDead = false;
var score = 0;
var mainMenu = true;

var difficulty;

var speed = 0.1;
var destZ = 0;
var destY = 0;

var paused= false;

var cX=-5;
var cY=2;
var cZ=0;

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

window.onload = function () {
    startShaking = false;
    isShaking = false;
   
    
    window.addEventListener("keyup", keyUp);
    window.addEventListener("keydown", keyDown);
     window.addEventListener("mousemove", mouseMove);
     window.addEventListener("mousedown", mouseDown);
     window.addEventListener("mouseup", mouseUp);

    txtArr = text.split(" ");
    
    for (var i = 0; i < txtArr.length; ++i) {
        console.log('value at index [' + i + '] is: [' + txtArr[i] + ']');
      }

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
    //gl.enable(gl.CULL_FACE);
    gl.clearColor(0.5, 0.7, 1.0, 1.0);
    gl.enable(gl.DEPTH_TEST);

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
        20, 21, 22, 22, 23, 20]; 
        camera = new Camera(); 
        camera.setPerspectiveProjection(70.0, canvas.width / canvas.height, 0.001, 1000.0); 
        camera.position = new Vector3(100, 100, 100); 
        camera.orientation = new Quaternion(0, 1, 0, 1); 
        camera.updateView(0);
    initTexturedMeshRenderer();
    initSkyboxRenderer();

    loadSkyboxFaceImage(SeaSkybox[0], 256, 256, "+x");
    loadSkyboxFaceImage(SeaSkybox[3], 256, 256, "+z");
    loadSkyboxFaceImage(SeaSkybox[2], 256, 256, "-x");
    loadSkyboxFaceImage(SeaSkybox[3], 256, 256, "-z");
    loadSkyboxFaceImage(SeaSkybox[4], 256, 256, "-y");
    loadSkyboxFaceImage(SeaSkybox[5], 256, 256, "+y");

    fishyMesh = createTexturedMesh(vertices, indices);
    //fishyMesh.textureID = generateGLTexture2D(monkeyPixels, 1024, 1024);
    fishyMesh.orientation.rotate(new Vector3(0, 1, 0), -Math.PI);
    fishyMesh.position.y = 2;
    let verts = [];
    let inds = [];
    generateUnitCubeVerticesIndexedWithNormalsTexCoords(verts, inds);
    //this.playerMesh = createTexturedMesh(verts, inds);
    playerMesh = createTexturedMesh(missileData[0], missileData[1]);
    fishyMesh = createTexturedMesh(asteroidData[0],asteroidData[1])
    playerMesh.orientation.rotate(new Vector3(0, 1, 0), -Math.PI);
    meshes = [fishyMesh, playerMesh];

    startTime = new Date().getTime();


    fishyMesh.position.x -= (.1);
    difficulty = 1;
    setInterval(updateFrame, 1);
    stopvar = setInterval(updateFrame, 1);

}

function checkIntersection(m1, m2) {
    dist = Vector3.sub(m1.position, m2.position);
    if (Vector3.length(dist) < 1) {
        m1.verts
        gl.clearColor(1, 0, 0, 1);
        isDead = true;

        console.log("should Be dead");

    } else {
        gl.clearColor(0.5, 0.7, 1.0, 1.0);

    }
}

function updateFrame() {
    if(startShaking = true){
        if(shakeAmount > 0) {
            isShaking = true;
            shakeAmount--;
        } else {
            isShaking = false;
            startShaking = false;
        }
    } else {
        isShaking = false;
    }
    difficulty = 0.5; 
    if(paused){
        
        textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);

        textCtx.font = "100px Arial";
        textCtx.fillStyle = "white";
        textCtx.fillText("Paused", textCanvas.width/2, textCanvas.height/2);

        textCtx.font = "50px Arial";
        textCtx.fillText("resume", textCanvas.width/2, textCanvas.height/2+50);
        textCtx.fillText("Donate", textCanvas.width/2, textCanvas.height/2+100);
        textCtx.fillText("Siko Mode", textCanvas.width/2, textCanvas.height/2+150);

        document.getElementByTagName("*").cursor = "auto";
        
    }else if(isDead){

    }
    else{
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.clear(gl.DEPTH_BUFFER_BIT);
    if (playerMesh.position.z > destZ) {  //playerMesh is missile mesh
        cZ -= mvmtSpeed;
    } else if (playerMesh.position.z < destZ) {
        playerMesh.position.z += mvmtSpeed;
        cZ += mvmtSpeed;

    }
    if (playerMesh.position.y > destY) {
        playerMesh.position.y -= mvmtSpeed;
        cY-= mvmtSpeed;

    } else if (playerMesh.position.y < destY) {
        playerMesh.position.y += mvmtSpeed;
        cY += mvmtSpeed;
    }

    camera.position = new Vector3(cX, cY, cZ);


    playerMesh.position.z = ((mouseX / canvas.width) * 8) - 4;
    playerMesh.position.y = ((mouseY / canvas.height) * -8) + 6;

    if (fishyMesh.position.x <= -7) {
        fishyMesh.position.x = 80 / (difficulty);
        fishyMesh.orientation.rotate(new Vector3(Math.random() * 360, Math.random() * 360, Math.random() * 360), 1 * deltaTime);
        fishyMesh.position.z = (Math.random() - .5) * 8;
        fishyMesh.position.y = Math.random() * 3;
        console.log("" + fishyMesh.position.y);
    } else {
        fishyMesh.position.x -= (.1 * difficulty);
        if (difficulty < 3) {
            difficulty += .001;
        } else {
            fishyMesh.position.y += (playerMesh.position.y - fishyMesh.position.y) * .01;
            fishyMesh.position.z += (playerMesh.position.z - fishyMesh.position.z) * .01;
        }

    }
    fishyMesh.orientation.rotate(new Vector3(0, 0, 1), 1 * deltaTime);


    if (fishyMesh.position.x <= -7) { //fishyMesh is asteroid mesh 
        fishyMesh.position.x = 20;
    } else {
        fishyMesh.position.x -= speed;
    }
    fishyMesh.orientation.rotate(new Vector3(0, 0, 1), 1 * deltaTime);
    
     //camera.lookAt(Vector3.add(playerMesh.position, Vector3.sub(playerMesh.position,fishyMesh.position)),fishyMesh.position,new Vector3(0,1,0));
    if(isShaking == false){camera.lookAt(Vector3.add(playerMesh.position, new Vector3(-10, playerMesh.position.z*2 - fishyMesh.position.z,playerMesh.position.y*2 - fishyMesh.position.y )),playerMesh.position,new Vector3(0,1,0));
    } else {
        camera.lookAt(Vector3.add(playerMesh.position, new Vector3(-10, Math.random() * (playerMesh.position.z*2 - fishyMesh.position.z),Math.random() * (playerMesh.position.y*2 - fishyMesh.position.y))),playerMesh.position,new Vector3(0,1,0));
    }
    
    console.log(camera.position)
    //camera.updateView(deltaTime);
    renderTexturedMeshes(meshes, camera, new Vector3(4, 4, 4));
    renderSkybox(camera.projectionMatrix, camera.orientation);

   

    textCtx.font = "30px Arial";
    textCtx.fillStyle = "white";
    textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
    if (mainMenu) {
        textCtx.font = "100px Arial";
        textCtx.fillText("Press Space to Start Epic Game", 150, 200);
        difficulty = 1;
    } else {
        if (isDead) {
            
            textCtx.font = "100px Arial";
            textCtx.fillText("You're Dead! Press S to restart", 170, 200);
            clearInterval(stopvar);
            difficulty = 1;
        } else {
            textCtx.fillText("Score: " + score, 100, 100);
            textCtx.font = "30px Arial";
            textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
            textCtx.fillText("Score: " + score, 100, 100);
            score += deltaTime;
            checkIntersection(fishyMesh, playerMesh);
        }
    }
    endTime = new Date().getTime();
    deltaTime = (endTime - startTime) / 1000.0;
    startTime = endTime;
    }
}
function keyUp(event) {
    console.log(camera.position);
    console.log(camera.orientation);

    switch (event.keyCode) {
        case KEY_S: {
            console.log("press works");
            if (isDead == true) {
                gl.clearColor(0.5, 0.7, 1.0, 1.0);
                playerMesh.position.z = ((mouseX / canvas.width) * 2) + -1;
                fishyMesh.position.x = 22;
                playerMesh.position.y = ((mouseY / canvas.height) * -2) + 3;
                score = 0;
                startTime = new Date().getTime();
                stopvar = setInterval(updateFrame, 1);
            }
            isDead = false;
            console.log("respawned")
        }

    }
}

function mouseMove(evt) {
    mouseX = evt.x;
    mouseY = evt.y;
    destZ = (((mouseX / canvas.width) * 8) - 4);
    destY = (((mouseY / canvas.height) * -8) + 6);
}
function killNear() {
    for(i = 0; i < asteroids.length; i++){
        asteroids[i].position.x = 20;
    }
}
function mouseDown(evt) {
    speed = 0.2;

    console.log("down");
}
function mouseUp(evt) {
    speed = 0.1;

    console.log("up");
}
var an = true;
function shake(shakeAmount1) {
 startShaking = true;
 shakeAmount = shakeAmount1;
}
function keyDown(event) {
    switch (event.keyCode) {
        case KEY_SPACE:
        score = 0;    
        mainMenu = !mainMenu;
            isDead = false;
            fishyMesh.position.x = 20;
            break;

        case KEY_P:
            console.log("paused")
            paused=!paused;
            if(paused){

            }else{
                document.getElementById("p2").style.color = "blue";
            }
            break;
    }
}
