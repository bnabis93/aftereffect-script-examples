//If composition is empty, create a new one
var numComps = app.project.items.length;
if (numComps == 0) {
    var compName = "Compoistion for layer example";
    app.project.items.addComp(compName, 1920, 1080, 1, 10, 30);
    var comp = app.project.item(1);
} else {
    // Select first composition
    var comp = app.project.item(1);
}

// Create a new solid layer
var solidLayer = comp.layers.addSolid([0.5, 0.5, 0.5], "Solid Layer", 1920, 1080, 1);

// Create a new text layer
var textLayer = comp.layers.addText("Text Layer");

// Create a new camera layer
var cameraLayer = comp.layers.addCamera("Camera Layer", [960, 540]);

// Create a new light layer
var lightLayer = comp.layers.addLight("Light Layer", [960, 540]);

// Create a new shape layer
var shapeLayer = comp.layers.addShape();
