/*
   Object that represents a project, a project contains items
*/

// Constructor
const ProjectObj = function(id, name)
{
   this.id    = id;
   this.name  = name || this.id;
   this.items = []; // Contains IDs, not the objects themselves
}

// Get project's ID
ProjectObj.prototype.getID = function()
{
   return this.id;
}

// Get project's name
ProjectObj.prototype.getName = function()
{
   return this.name;
}

// Set project's name
ProjectObj.prototype.setName = function (newName)
{
   this.name = newName;
}

// Get whether this project has any items
ProjectObj.prototype.isEmpty = function()
{
   return this.items.length <= 0;
}

// Get the list of items
ProjectObj.prototype.getItemList = function()
{
   return this.items;
}

// Add an item to the project's list of items
ProjectObj.prototype.addItem = function (newItemID)
{
   // Make sure the ID is valid
   if (newItem >= 0)
   {
      this.items.push(newItemID);
   }
}

// Check whether an item is in this project's list
ProjectObj.prototype.containsItem = function (itemID)
{
   // Make sure the ID is valid
   if (itemID < 0)
   {
      return false;
   }

   // Look for this item in the list and return whether it was found
   return this.items.indexOf(itemID) !== -1;
}

// Remove an item from the project's list
ProjectObj.prototype.removeItem = function (itemID)
{
   // Make sure the ID is valid
   if (itemID < 0)
   {
      return;
   }

   // Look for this item's index in the list
   let itemIndex = this.items.indexOf(itemID);

   // Remove this item if it was found in the list
   if (itemIndex !== -1)
   {
      this.items.splice(itemIndex, 1);
   }
}

// Export the module
module.exports.ProjectObj = ProjectObj;