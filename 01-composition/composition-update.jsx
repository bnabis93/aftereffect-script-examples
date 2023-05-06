// Update active composition background color [0,0,0] to [1.0,1.0,1.0]
var comp = app.project.activeItem
if (comp instanceof CompItem) {
    comp.bgColor = [1.0, 1.0, 1.0]
}