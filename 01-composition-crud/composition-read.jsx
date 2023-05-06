// Read composition information from the active composition
var comp = app.project.activeItem

// Check the active item is a composition
if (comp instanceof CompItem) {
    // Get the composition information
    var compName = comp.name
    var compWidth = comp.width
    var compHeight = comp.height
    var compPixelAspect = comp.pixelAspect
    var compDuration = comp.duration
    var compFrameRate = comp.frameRate

    // Show the composition information
    alert("Composition Name: " + compName)
    alert("Composition Width: " + compWidth)
    alert("Composition Height: " + compHeight)
    alert("Composition Pixel Aspect Ratio: " + compPixelAspect)
    alert("Composition Duration: " + compDuration)
    alert("Composition Frame Rate: " + compFrameRate)
    alert("Composition Background Color: " + compBGColor)
}