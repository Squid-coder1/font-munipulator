function setup() {
    video =createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet =ml5.poseNet(video,modelLoaded);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console,log(results);
        leftWristX=results[0].pose.rightWrist.X;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);

console.log("leftWristX=" + leftWristX+"rightWristX="+rightWristX+"difference="+difference);  
    }
}

function draw() {
    background('#969A97');
    textSize(32);
    fill();
    text('FONT',50 ,500);
    stroke('#F9011');
}

