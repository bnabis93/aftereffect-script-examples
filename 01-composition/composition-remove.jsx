// Remove the all compositions.
var currentNumComps = app.project.items.length
if (currentNumComps != 0) {
    // Remove the composition by iteratively

    // Note: The index of item is start from 1
    for (var i = currentNumComps; i >= 1; i--) {
        var comp = app.project.item(i)
        if (comp instanceof CompItem) {
            comp.remove()
        }
    }
}