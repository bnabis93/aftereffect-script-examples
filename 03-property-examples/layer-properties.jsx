// Create the composition 
var compName = "Properties-example"
var comp = app.project.items.addComp(compName, 1920, 1080, 1, 10, 30)

// Create a solid layer
var solidLayer = comp.layers.addSolid([1, 0, 0], "Solid", 120, 120, 1)
var lightLayer = comp.layers.addLight("Light", [960, 540]);
alert("The solid layer's name is " + solidLayer.name) // PropertyBase.name
alert("Is solid layer selected? " + solidLayer.selected) // PropertyBase.selected")

// Get and set the value of opacity
alert("Before the set, The solid layer's opacity is " + solidLayer.opacity.value) // PropertyBase.opacity
var opacityProp = solidLayer.opacity; //Get the opacity property
opacityProp.setValue(50); //set opacity to 50%
alert("After the set, The solid layer's opacity is " + solidLayer.opacity.value)

// Get and set the value of position
alert("Before position value is " + solidLayer.position.value.toString());
solidLayer.position.setValue([500, 500]);
alert("After position value is " + solidLayer.position.value.toString());

// Get and set the value of scale
alert("Before scale value is " + solidLayer.scale.value.toString());
solidLayer.scale.setValue([360, 360]);
alert("After scale value is " + solidLayer.scale.value.toString());

// Set the color of the solid layer
alert("Before color value is " + solidLayer.source.mainSource.color.toString());
solidLayer.source.mainSource.color = [0, 1, 0];
alert("After color value is " + solidLayer.source.mainSource.color.toString());

// Rotate the solid layer
alert("Before rotation value is " + solidLayer.rotation.value.toString());
solidLayer.rotation.setValueAtTime(0, 0);
solidLayer.scale.setValueAtTime(5, [240, 240]);
solidLayer.rotation.setValueAtTime(5, 90);
lightLayer.color.setValueAtTime(5, [1, 0, 0]);

solidLayer.scale.setValueAtTime(10, [120, 120]);
solidLayer.rotation.setValueAtTime(10, 0);
lightLayer.color.setValueAtTime(5, [0, 0, 1]);