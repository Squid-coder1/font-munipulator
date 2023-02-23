function setup() {
    video =createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.posititon(560,150);

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
    }
}

function draw() {
    background('#969A97');
}