// https://github.com/NTProductions/ae-beginner-tutorial-2022/blob/main/AE%20Scripting%20For%20Beginners.jsx


var window = new Window("palette", "My Script", undefined);
window.orientation = "column";


var text = window.add("statictext", undefined, "Some Example Text");


var buttonGroup = window.add("group", undefined, "Button Group");
buttonGroup.orientation = "row";
var button1 = buttonGroup.add("button", undefined, "Button 1");
var button2 = buttonGroup.add("button", undefined, "Button 2");


var dropdown = window.add("dropdownlist", undefined, ["Item 1", "Item 2", "Item 3"]);
dropdown.size = [150, 25];
dropdown.selection = 0;
dropdown.add("item", "Item 4");


var boxesPanel = window.add("panel", undefined, "Boxes");
boxesPanel.orientation = "row";


var radio = boxesPanel.add("radiobutton", undefined, "Radio Text");
var checkbox = boxesPanel.add("checkbox", undefined, "Checkbox Text");
var slider = window.add("slider", undefined, "");


button1.onClick = function () {
    alert("Button 1 Clicked");
}

button2.onClick = function () {
    alert("Button 2 Clicked");
}

window.center();
window.show();

