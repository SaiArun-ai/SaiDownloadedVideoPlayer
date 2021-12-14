var hand;
function Decide(){
    hand = document.getElementById("Hand").value;
    hand = hand.toLowerCase();
    if(hand == "left"){
        document.getElementById("Lemma").style = "display:none;";
        document.getElementById("Main").style = "display:contents;";
        window.alert("We have navigated to the main segment");
        document.getElementById("note").innerHTML = "NOTE - Move your " + hand + " wrist left and right for going to the previous and next songs.";
    }else if(hand == "right"){
        document.getElementById("Lemma").style = "display:none;";
        document.getElementById("Main").style = "display:contents;";
        document.getElementById("note").innerHTML = "NOTE - Move your " + hand + " wrist left and right for going to the previous and next songs.";
        window.alert("We have navigated to the main segment");
    }else{
        console.error("Please type which hand you prefer to use");
        window.alert("Please type which hand you prefer to use");
    }
}
function Back(){
    hand = "";
    document.getElementById("Lemma").style = "display:contents;";
    document.getElementById("Main").style = "display:none;";
    window.alert("We have moved to the hand-decider segment");
}
var song = "";
var leftX;
var leftY;
var rightX;
var rightY;
var leftC;
var rightC;
function preset(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(500,500);
    canvas.position(525,150);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,pose);
    poseNet.on("pose",gotPoses);
}
function pose(){
    console.log("I Work");
}
function Play(){
    console.log("Works");
    song.play();
    song.rate(1);
    song.setVolume(1);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        LeftC = results[0].pose.keypoints[9].score;
        leftX = results[0].pose.leftWrist.x;
        leftY = results[0].pose.leftWrist.y;
        rightX = results[0].pose.rightWrist.x;
        rightY = results[0].pose.rightWrist.y;
        rightC = results[0].pose.keypoints[10].score;
    }
}
function draw(){
    image(video,0,0,500,500);
    if(hand == left){
        if(leftX<250){
            fill("#C9AE5D");
        stroke("#C9AE5D");
        circle(leftX,leftY,40);
        document.getElementById("Previous").innerHTML = "Song Name : Harry Potter";
        song.play("music.mp3");
        }else{
            fill("#C9AE5D");
        stroke("#C9AE5D");
        circle(leftX,leftY,40);
        document.getElementById("Previous").innerHTML = "Song Name : Harry Potter";
        song.play("music.mp3");
        }
    }else if(hand == right){
        if(rightX<250){
            fill("#C9AE5D");
        stroke("#C9AE5D");
        circle(rightX,rightY,40);
        document.getElementById("Previous").innerHTML = "Song Name : Harry Potter";
        song.play("music.mp3");
        }else{
            fill("#C9AE5D");
        stroke("#C9AE5D");
        circle(rightX,rightY,40);
        document.getElementById("Previous").innerHTML = "Song Name : Harry Potter";
        song.play("music.mp3");
        }
    }
}
