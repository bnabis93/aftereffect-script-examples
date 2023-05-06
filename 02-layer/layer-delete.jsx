var comp = app.project.activeItem;

// Delete select layer in the active document
var targetLayer = comp.layer("Light Layer");
targetLayer.remove();
alert("Light Layer deleted");

// Delete all layers in the active document
var numLayers = comp.layers.length;
for (var i = numLayers; i >= 1; i--) {
    comp.layer(i).remove();
}