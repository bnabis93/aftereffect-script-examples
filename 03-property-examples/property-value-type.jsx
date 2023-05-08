// Create the composition 
var compName = "Properties-example"
var comp = app.project.items.addComp(compName, 1920, 1080, 1, 10, 30)

// Create a solid layer
var solidLayer = comp.layers.addSolid([1, 0, 0], "Solid", 120, 120, 1)

// Get and set the value of opacity
alert("Before the set, The solid layer's opacity is " + solidLayer.property("opacity").value) // PropertyBase.opacity
var opacityProp = solidLayer.property("opacity"); //Get the opacity property
opacityProp.setValue(50); //set opacity to 50%
alert("After the set, The solid layer's opacity is " + solidLayer.property("opacity").value)

// Get and set the value of position
alert("Before position value is " + solidLayer.property("position").value.toString());
solidLayer.position.setValue([500, 500]);
alert("After position value is " + solidLayer.property("position").value.toString());