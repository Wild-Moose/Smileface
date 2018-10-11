# Smileface
for school fam
1.What did we learn
We learned how to code on the micro:bit and make dotted figures
2.Why is it interesting

var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var bodyH = bodyW/1;
var eyeSize = 20;
draw = function() {
    background(207, 254, 255);
    fill(240, 131, 36);
  
    
    triangle(250, 120, 200, 120, 160, 70);//ears
    triangle(125, 120, 200, 120, 150, 70);//ears
    //The kitten is afraid. It's ears are back, and it's tail is puffed out. If your kitten or cat shows these signs, leave him/her alone.
    
    fill (240, 131, 36);
    ellipse(140, 270, 100, 50);
  ellipse(bodyX, bodyY, 100, 108); // body
ellipse(bodyX, bodyY-70, bodyH, 100); // face
fill (252, 0, 235);
    triangle(195, 150, 210, 150, 190, 160);//nose
    fill (0, 255, 0);
    ellipse(220, 140, eyeSize, eyeSize);//eyes
    ellipse(160, 150, eyeSize, eyeSize);//eyes
    eyeSize+=0.01; //eyes won't get out of hand... too fast.
    };
