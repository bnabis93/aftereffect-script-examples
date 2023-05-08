# Properties example

## PropertyBase object
https://ae-scripting.docsforadobe.dev/properties/propertybase.html#
- PropertyBase is the base class for both Property and PropertyGroup
- You can ignore the propertySpec part of the official documentation.
    - e.g. `app.project.item(index).layer(index).name` is equal to `app.project.item(index).layer(index).propertySpec.name`

## Property object
https://ae-scripting.docsforadobe.dev/properties/property.html
- The Property object contains `value`, `keyframe`, and `expression informatio`n about a particular AE property of a layer.
- Property is a subclass of PropertyBase.

### Property.propertyValueType
- The type of value stored in the named property.
-  The PropertyValueType enumeration has one value for each type of data that can be stored in or retrieved from a property.
    - Kind of enum of property

## PropertyGroup object
https://ae-scripting.docsforadobe.dev/properties/propertygroup.html
- The PropertyGroup object represents a group of properties.
- PropertyGroup can `contain Property objects` and `other PropertyGroup objects`. 
- parent-child hierarchy, with a Layer object at the top (root) down to a single Property object,