/*
   Object that represents an item inside a project
*/

// Constructor
const ItemObj = function(id, parentID, name, type)
{
   this.id       = id;
   this.parentID = parentID;
   this.name     = name || this.id;
   this.type     = type || null;
}

// Get item's ID
ItemObj.prototype.getID = function()
{
   return this.id;
}

// Get item's parentID
ItemObj.prototype.getParentID = function()
{
   return this.parentID;
}

// Set item's parent ID
ItemObj.prototype.setParentID = function (newParentID)
{
   this.parentID = newParentID;
}

// Get item's name
ItemObj.prototype.getName = function()
{
   return this.name;
}

// Set item's name
ItemObj.prototype.setName = function (newName)
{
   this.name = newName;
}

// Get item's type
ItemObj.prototype.getType = function()
{
   return this.type;
}

// Set item's type
ItemObj.prototype.setType = function (newType)
{
   this.type = newType;
}

// Export the module
module.exports.ItemObj = ItemObj;