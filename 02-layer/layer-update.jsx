// Update the layer using AVLayer object
var comp = app.project.activeItem;

// Update a solid layer
var solidLayer = comp.layers.byName("Solid Layer")
solidLayer.source.mainSource.color = [1.0, 0.0, 0.0];
solidLayer.name = "Updated Red Solid Layer";
solidLayer.opacity = 50;
solidLayer.stretch = 50;
solidLayer.inPoint = 50;
solidLayer.outPoint = 50;
solidLayer.startTime = 50;

// Update a text layer
var textLayer = comp.layers.byName("Text Layer")
textLayer.name = "Updated Blue Text Layer";
textLayer.opacity = 50;
textLayer.stretch = 50;
textLayer.inPoint = 50;
textLayer.outPoint = 50;
textLayer.startTime = 50;


