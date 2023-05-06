var numComps = app.project.items.length

// If composition is empty, create a new one
var compName = "My Comp"
var initNumComps = 5
if (numComps == 0) {
    // Create the composition by iteratively
    for (var i = 1; i <= initNumComps; i++) {
        app.project.items.addComp(compName + i.toString(), 1920, 1080, 1, 10, 30)
    }
}