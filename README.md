# FullStackToDo
ToDoApp using React and Node

Libraries used : 
 For Frontend : 
  I've used React as it is quite performant, and for simple styling I've used react-bootstrap
 For Backend :
  I've used a simple nodejs app which makes use of express for setting up a simple server
  
Data Structure : 
  For the sake of this project, I've used an object to store data.
  Structure : {
    pending : {}
    finished : {}
  }
  
  The point for using object is, lookups are fast(constant time), and Since I am using Integers as keys for storing items, the sequence of the tasks(Both Finished and Pending) will be displayed in the order in which they were added to the Pending Tasks list

Deployment Architecture: 
 I chose heroku for deployment, as I found it quite simple to use.
 The scripts for running the app is both written in the package.json file in the root folder.
 The build command will create a prod build of Frontend resources[Inside TodoFrontend folder], which will be served via express server and all the API calls are written in express too[Inside backend folder]
 Github : https://github.com/guptavashisht24/FullStackToDo
 This app is deployed on : 
  https://tododemofullstack.herokuapp.com/
  [Please click on the Add Task button to Enter Tasks]



