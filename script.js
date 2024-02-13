var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
//var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("verificationButton");

let click_verify = function(){
    button.style.display = 'none';
    window.location.replace("questions.html");
    console.log("Verified!");

}

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight, opacity) {
    context.globalAlpha = opacity;
    for (var i = 0; i < lines.length; i++) {
        context.fillText(lines[i], x, y + (i * lineHeight));
    }
    context.globalAlpha = 1; // Reset global alpha
}


function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); // Adjust font size based on screen width
    var lineHeight = fontSize * 2 ; // Adjust line height based on font size

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    

    // glow effect
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    var textX = canvas.width / 2; 
    var textY = canvas.height/ 2; 

    if(frameNumber < 300){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        var textLines = ["Σήμερα δεν ξέρω αν γνωρίζεις αλλά "," είναι η ημέρα του Αγιού Βαλεντίνου"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);
        opacity = opacity + 0.01;
    }
    //fades out the text by decreasing the opacity
    if(frameNumber >= 300 && frameNumber < 600){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        var textLines = ["Σήμερα δεν ξέρω αν γνωρίζεις αλλά "," είναι η ημέρα του Αγιού Βαλεντίνου"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);
        opacity = opacity - 0.01;
    }

    //needs this if statement to reset the opacity before next statement on canvas
    if(frameNumber == 600){
        opacity = 0;
    }
    if(frameNumber > 600 && frameNumber < 900){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        var textLines = ["Δυστυχώς δεν ήμαστε μαζί για να "," την γιορτάσουμε έτσι όπως πρέπει "," ΑΛΛΑ"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 900 && frameNumber < 1200){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        
        var textLines = ["Δυστυχώς δεν ήμαστε μαζί για να "," την γιορτάσουμε έτσι όπως πρέπει "," ΑΛΛΑ"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);

        opacity = opacity - 0.01;
    }

    if(frameNumber == 1200){
        opacity = 0;
    }
    if(frameNumber > 1200 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        var textLines = ["θα ήθελα με τον δικό μου τρόπο να σου πώ "," όλα όσα θα σου έλεγα από κοντά"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1500 && frameNumber < 1800){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        var textLines = ["θα ήθελα με τον δικό μου τρόπο να σου πώ "," όλα όσα θα σου έλεγα από κοντά"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1800){
        opacity = 0;
    }
    if(frameNumber > 1800 && frameNumber < 2100){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        var textLines = ["Αρχικά ευχαριστώ που είσαι στην ζωή μου "," και την κάνεις κάθε μέρα ποιο 'χαμογελαστή'"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2100 && frameNumber < 2400){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        
        var textLines = ["Αρχικά ευχαριστώ που είσαι στην ζωή μου "," και την κάνεις κάθε μέρα ποιο 'χαμογελαστή'"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2400){
        opacity = 0;
    }
    if(frameNumber > 2400 && frameNumber < 2700){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        var textLines = ["που με ανέχεσαι και με αγαπάς "," έτσι ακριβώς όπως είμαι"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2700 && frameNumber < 3000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        var textLines = ["που με ανέχεσαι και με αγαπάς "," έτσι ακριβώς όπως είμαι"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);
        
        opacity = opacity - 0.01;
    }

    if(frameNumber == 3000){
        opacity = 0;
    }
    if(frameNumber > 3000 && frameNumber < 3300){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        var textLines = ["που κάνεις πολλές φόρες πίσω γιατί "," ξέρεις τι πεισματάρεις είμαι "," που με δέχεσαι με όλες τις ατέλειες μου"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);

        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 3300 && frameNumber < 3600){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        var textLines = ["που κάνεις πολλές φόρες πίσω γιατί "," ξέρεις τι πεισματάρεις είμαι "," που με δέχεσαι με όλες τις ατέλειες μου"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);

        opacity = opacity - 0.01;
    }

    if(frameNumber == 3600){
        opacity = 0;
    }
    if(frameNumber > 3600 && frameNumber < 3900){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        var textLines = ["Για όλα αύτα και ακόμα "," περισσότερα, θα ήθελα να σου πω "," ένα πολύ μεγάλο"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);

        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 3900 && frameNumber < 4200){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        var textLines = ["Για όλα αύτα και ακόμα "," περισσότερα, θα ήθελα να σου πω "," ένα πολύ μεγάλο"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);

        opacity = opacity + 0.01;
    }
    if(frameNumber == 4200){
        opacity = 0;
    }
    //new1

    if(frameNumber > 4200 && frameNumber < 4500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        var textLines = ["ΕΥΧΑΡΙΣΤΩ ΓΙΑ ΟΛΑ "," ΣΕ ΑΓΑΠΩ ΟΣΟ ΤΙΠΟΤΑ ΑΛΛΟ "," ΣΤΟΝ ΚΟΣΜΟ "," ΣΤΟΝ ΓΑΛΑΞΙΑ "," ΣΤΟ ΣΥΜΠΑΝ ΟΛΟΚΛΗΡΟ"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);
        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 4500 && frameNumber < 4800){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

      var textLines = ["ΕΥΧΑΡΙΣΤΩ ΓΙΑ ΟΛΑ "," ΣΕ ΑΓΑΠΩ ΟΣΟ ΤΙΠΟΤΑ ΑΛΛΟ "," ΣΤΟΝ ΚΟΣΜΟ "," ΣΤΟΝ ΓΑΛΑΞΙΑ "," ΣΤΟ ΣΥΜΠΑΝ ΟΛΟΚΛΗΡΟ"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);
        opacity = opacity - 0.01;
    }
    if(frameNumber == 4800){
        opacity = 0;
    }
    //new 2

    if(frameNumber > 4800 && frameNumber < 5100){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

      var textLines = ["Τώρα θα ήθελα να σε ρωτήσω κάτι "," που έχει πολύ μεγαλή σημασία "," η απάντηση που θα δώσεις"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);
        opacity = opacity + 0.01;

    }
    
    if(frameNumber >= 5100 && frameNumber < 5400){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        var textLines = ["Τώρα θα ήθελα να σε ρωτήσω κάτι "," που έχει πολύ μεγαλή σημασία "," η απάντηση που θα δώσεις"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);
        opacity = opacity - 0.01;
    }
    if(frameNumber == 5400){
        opacity = 0;
    }
    //new 3

    if(frameNumber > 5400 && frameNumber < 5700){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        var textLines = ["Αλλά πρίν κάνω την ερώτηση θα πρέπει "," να επαληθεύσουμε την ταυτότητα σου"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);
        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 5700 && frameNumber < 6000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity })`;
       
        var textLines = ["Αλλά πρίν κάνω την ερώτηση θα πρέπει "," να επαληθεύσουμε την ταυτότητα σου"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);
       
        opacity = opacity - 0.01;
    }
    if(frameNumber == 6000){
        opacity = 0;
    }
    //new 4

    if(frameNumber > 6000 && frameNumber < 6600){ 
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        var textLines = ["Διότι θα μπορούσε να ειναι άλλο άτομο "," πίσω απο την οθόνη για αυτόν τον λόγο "," θα απαντήσεις σε κάποιες ερώτησεις όπου μόνο "," η πραγματική ΙΩΑΝΝΑ θα μπορούσε να απαντήσει"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);

        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 6600 && frameNumber < 7200){ 
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
       
        var textLines = ["Διότι θα μπορούσε να ειναι άλλο άτομο "," πίσω απο την οθόνη για αυτόν τον λόγο "," θα απαντήσεις σε κάποιες ερώτησεις όπου μόνο "," η πραγματική ΙΩΑΝΝΑ θα μπορούσε να απαντήσει"];
        drawTextWithLineBreaks(textLines, textX, textY, fontSize, lineHeight, opacity);

        opacity = opacity - 0.01;
    }
    if(frameNumber == 7200){
        opacity = 0;
    }
    //new5

    if(frameNumber >= 7200 && frameNumber < 99999){ 
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.fillText("ΑΣ ΞΕΚΙΝΉΣΟΥΜΕ", canvas.width/2, (canvas.height/2 + 120));
        thirdOpacity = thirdOpacity + 0.01;

        button.style.display = "block";
    }   

     // Reset the shadow effect after drawing the text
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);