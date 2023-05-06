/** 
 * https://stackoverflow.com/questions/41883340/script-shape-color-change-in-after-effects
 */
function createBackgroundShape(comp) {

    if (comp instanceof CompItem) {
        var shapeLayer = comp.layers.addShape();
        var shapeGroup = shapeLayer.property("Contents").addProperty("ADBE Vector Group");

        shapeGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
        shapeGroup.property("Contents").addProperty("ADBE Vector Graphic - Stroke");
        shapeGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");

        var myRGBColor = [0, 255, 0, 255] / 255;

        shapeLayer.content("Group 1").content("Fill 1").color = myRGBColor;

        shapeLayer.content("Group 1").content("Stroke 1").color = myRGBColor;

    }

    return shapeLayer;
}


// Create One Composition if not exists
var numComps = app.project.items.length;
var compName = "Layer with Keyframe";
if (numComps == 0) {
    var comp = app.project.items.addComp(compName, 1920, 1080, 1, 10, 30);
}

// Create a new red rect shape layer
var shapeRectLayer = createBackgroundShape(comp);

// Set keyframes to change color and position
function randomColor() {
    // Color range is [0,1]
    return [Math.random(), Math.random(), Math.random()];
}

var keyframesData = [
    { 'time': 0, 'color': randomColor(), 'position': [0, 0] },
    { 'time': 1, 'color': randomColor(), 'position': [100, 100] },
    { 'time': 2, 'color': randomColor(), 'position': [200, 200] },
    { 'time': 3, 'color': randomColor(), 'position': [300, 300] },
    { 'time': 4, 'color': randomColor(), 'position': [400, 400] },
    { 'time': 5, 'color': randomColor(), 'position': [500, 500] },
    { 'time': 6, 'color': randomColor(), 'position': [600, 500] },
    { 'time': 7, 'color': randomColor(), 'position': [700, 400] },
    { 'time': 8, 'color': randomColor(), 'position': [800, 300] },
    { 'time': 9, 'color': randomColor(), 'position': [900, 200] },
    { 'time': 10, 'color': randomColor(), 'position': [1000, 100] },
    // Add more keyframes as needed
];


var fillProperty = shapeRectLayer.property("ADBE Root Vectors Group").property("ADBE Vector Group").property("ADBE Vectors Group").property("ADBE Vector Graphic - Fill").property("Color");
var positionProperty = shapeRectLayer.property("Position");

for (var i = 0; i < keyframesData.length; i++) {
    var keyframeData = keyframesData[i];
    var time = keyframeData.time;
    var color = keyframeData.color;
    var position = keyframeData.position;

    var colors = new Array(color[0], color[1], color[2])
    var positions = new Array(position[0], position[1])

    positionProperty.setValueAtTime(time, positions);
    fillProperty.setValueAtTime(time, colors);
}