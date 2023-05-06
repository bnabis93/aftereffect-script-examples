// Read layer information
var comp = app.project.activeItem

// Select the layer by name
var solidLayer = comp.layers.byName("Solid Layer")
var textLayer = comp.layers.byName("Text Layer")
var cameraLayer = comp.layers.byName("Camera Layer")
var lightLayer = comp.layers.byName("Light Layer")

// Read solid layer information
var solidLayerName = solidLayer.name
var solidLayerWidth = solidLayer.width
var solidLayerHeight = solidLayer.height
var solidLayerPixelAspect = solidLayer.pixelAspect
var solidLayerDuration = solidLayer.duration
alert("Solid Layer Name: " + solidLayerName)
alert("Solid Layer Width: " + solidLayerWidth)
alert("Solid Layer Height: " + solidLayerHeight)
alert("Solid Layer Pixel Aspect Ratio: " + solidLayerPixelAspect)
alert("Solid Layer Duration: " + solidLayerDuration)

// Read text layer information
var textLayerName = textLayer.name
var textLayerWidth = textLayer.width
var textLayerHeight = textLayer.height
alert("Text Layer Name: " + textLayerName)
alert("Text Layer Width: " + textLayerWidth)
alert("Text Layer Height: " + textLayerHeight)

// Read camera layer information
var cameraLayerName = cameraLayer.name
var cameraLayerWidth = cameraLayer.width
var cameraLayerHeight = cameraLayer.height
alert("Camera Layer Name: " + cameraLayerName)
alert("Camera Layer Width: " + cameraLayerWidth)
alert("Camera Layer Height: " + cameraLayerHeight)

// Read light layer information
var lightLayerName = lightLayer.name
var lightLayerWidth = lightLayer.width
var lightLayerHeight = lightLayer.height
alert("Light Layer Name: " + lightLayerName)
alert("Light Layer Width: " + lightLayerWidth)
alert("Light Layer Height: " + lightLayerHeight)
