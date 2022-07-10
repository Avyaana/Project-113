function preload () {

}

function setup () {
    canvas= createCanvas(640, 480);
    canvas.position(210, 350);
    video= createCapture(VIDEO);
    video.hide();

    tint_color= "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    beginShape(TESS);
    vertex(20, 20);
    vertex(80, 20);
    vertex(80, 40);
    vertex(40, 40);
    vertex(40, 60);
    vertex(80, 60);
    vertex(80, 80);
    vertex(20, 80);
    endShape(CLOSE);
    
    beginShape(TESS);
vertex(40, 40);
vertex(100, 40);
vertex(100, 60);
vertex(60, 60);
vertex(60, 80);
vertex(100, 80);
vertex(100, 100);
vertex(40, 100);
endShape(CLOSE);

beginShape(TESS);
vertex(60, 60);
vertex(120, 60);
vertex(120, 80);
vertex(80, 80);
vertex(80, 100);
vertex(120, 100);
vertex(120, 120);
vertex(60, 120);
endShape(CLOSE);

   
}
function take_snapshot (){
    save('image.png');

}

function filter_tint() {
    tint_color= document.getElementById("colorName").value;
}
    
