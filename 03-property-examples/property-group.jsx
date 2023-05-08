// Create the composition 
var compName = "Properties-example"
var comp = app.project.items.addComp(compName, 1920, 1080, 1, 10, 30)

// Create a solid layer
var solidLayer = comp.layers.addSolid([1, 0, 0], "Solid", 120, 120, 1)

// Traverse the properties of the solid layer
alert("Solid layer's number of position properties : ", solidLayer.property("position").numProperties)