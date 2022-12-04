window.onload = function() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    
    context.fillStyle = "blue"
    context.fillRect(0,0,window.innerWidth,window.innerHeight);

};