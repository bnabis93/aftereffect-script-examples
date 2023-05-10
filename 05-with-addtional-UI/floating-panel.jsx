// https://github.com/NTProductions/ae-beginner-tutorial-2022/blob/main/AE%20Scripting%20For%20Beginners.jsx


var window = new Window("palette", "My Script", undefined);
window.orientation = "column";

// Add tab
var tab = window.add("tabbedpanel", undefined, "")
var tab1 = tab.add("tab", undefined, "Tab 1");
var tab2 = tab.add("tab", undefined, "Tab 2");

// Sub panel in tab1 vertically
var subPanel = tab1.add("panel", undefined, "Sub Panel");
subPanel.orientation = "column";
subPanel.alignChildren = "left";
subPanel.alignment = "left";


// Sub tab in tab2
var subTab2 = tab2.add("tabbedpanel", undefined, "")
var subTab21 = subTab2.add("tab", undefined, "Sub Tab 1");
var subTab22 = subTab2.add("tab", undefined, "Sub Tab 2");

// Add button in sub panel
var buttonGroup = subPanel.add("group", undefined, "Button Group");
buttonGroup.orientation = "column";
var button1 = buttonGroup.add("button", undefined, "Button 1");
var button2 = buttonGroup.add("button", undefined, "Button 2");
var button3 = buttonGroup.add("button", undefined, "Button 3");
var button4 = buttonGroup.add("button", undefined, "Button 4");

// Tab2
var text = tab2.add("statictext", undefined, "Some Example Text");

var dropdown = tab2.add("dropdownlist", undefined, ["Item 1", "Item 2", "Item 3"]);
dropdown.size = [150, 25];
dropdown.selection = 0;
dropdown.add("item", "Item 4");

var boxesPanel = tab2.add("panel", undefined, "Boxes");
boxesPanel.orientation = "row";
var radio = boxesPanel.add("radiobutton", undefined, "Radio Text");
var checkbox = boxesPanel.add("checkbox", undefined, "Checkbox Text");
var slider = tab2.add("slider", undefined, "");

button1.onClick = function () {
    alert("Button 1 Clicked");
}

button2.onClick = function () {
    alert("Button 2 Clicked");
}

window.center();
window.show();

