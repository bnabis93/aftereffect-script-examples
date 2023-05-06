// Find the composition by name
var compName = "My Comp"
var targetComp = compName + "3"
var numComps = app.project.items.length
for (var i = 1; i <= numComps; i++) {
    var comp = app.project.item(i)
    if (comp.name == targetComp) {
        alert("Find the target composition name at " + i.toString())
        break
    }
}