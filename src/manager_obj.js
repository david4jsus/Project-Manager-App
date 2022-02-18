/*
   Singleton main manager object, will manage lists of project objects and item objects
*/

// Dependencies
const {ItemObj}    = require ('./item_obj');
const {ProjectObj} = require ('./project_obj');

// Constructor
const Manager = function()
{
   this.itemList    = [];
   this.projectList = [];
}

// Get whether there are any items
Manager.prototype.isItemListEmpty = function()
{
   return this.itemList.length <= 0;
}

// Add an item to the list
Manager.prototype.addItem = function (newItem)
{
   this.itemList.push(newItem);
}

// Create and add a new item
Manager.prototype.createItem = function (parentID, name, type)
{
   // Make sure the parentID is valid
   if (!this.containsProject(parentID))
   {
      return -1;
   }

   // Create the new item's ID
   newItemID = Date.now();

   // Create and add the new item
   this.addItem(new ItemObj(newItemID, parentID, name, type));

   // Return the new item's ID
   return newItemID;
}

// Get an item
Manager.prototype.getItem = function (itemID)
{
   // Make sure the ID is valid
   if (itemID < 0)
   {
      return null;
   }

   // Look through the list and find an item with the same ID
   let item = this.itemList.find(element => element.getID() === itemID);

   // Return the item if found
   return item === undefined ? null : item;
}

// Remove an item
Manager.prototype.removeItem = function (itemID)
{
   // Make sure ID is valid
   if (itemID < 0)
   {
      return;
   }

   // Get the item to remove
   let item = this.getItem (itemID);

   // Proceed if the item was found
   if (!item)
   {
      return;
   }

   // Get the item's parent project
   let parentProject = this.getProject(item.getParentID());

   // Proceed if the parent project was found
   if (!parentProject)
   {
      return;
   }

   // Remove the item from the project's list
   parentProject.removeItem(itemID);

   // Remove the item from the list
   this.itemList.splice(this.itemList.findIndex(element => element.getID() === itemID), 1);
}

// Get whether there are any projects
Manager.prototype.isProjectListEmpty = function()
{
   return this.projectList.length <= 0;
}

// Add a project to the list
Manager.prototype.addProject = function (newProject)
{
   this.projectList.push(newProject);
}

// Create and add a new project
Manager.prototype.createProject = function (name)
{
   // Create the new projects's ID
   newProjectID = Date.now();

   // Create and add the new project
   this.addProject(new ProjectObj(newProjectID, name));

   // Return the new project's ID
   return newProjectID;
}

// Check whether a project is in the list
Manager.prototype.containsProject = function (projectID)
{
   // Make sure the ID is valid
   if (projectID < 0)
   {
      return false;
   }

   // Look for this project in the list and return whether it was found
   return this.projectList.indexOf(projectID) !== -1;
}

// Get a project
Manager.prototype.getProject = function (projectID)
{
   // Make sure the ID is valid
   if (projectID < 0)
   {
      return null;
   }

   // Look through the list and find a project with the same ID
   let project = this.projectList.find(element => element.getID() === projectID);

   // Return the project if found
   return project === undefined ? null : project;
}

// Remove a project
Manager.prototype.removeProject = function (projectID)
{
   // Make sure ID is valid
   if (projectID < 0)
   {
      return;
   }

   // Get the project to remove
   let project = this.getProject (projectID);

   // Proceed if the item was found
   if (!project)
   {
      return;
   }

   // Remove all items in this project
   project.getItemList.forEach(item =>
   {
      this.itemList.splice(this.itemList.findIndex(element => element.getID() === item.getID()), 1);
   });

   // Remove the project from the list
   this.itemList.splice(this.projectList.findIndex(element => element.getID() === projectID), 1);
}

// Export the module
module.exports.Manager = Manager;