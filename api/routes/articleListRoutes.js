'use strict';
module.exports = function(app) {
  var articleList = require('../controllers/eventListController');
  var userHandlers = require('../controllers/userController');

  // articleList Routes
  app
  .route("/events")
  .get(articleList.listAllEvents)
  .post(articleList.createNewEvent);

  app
  .route("/tasks")
  .get(articleList.listAllTasks)
  .post(articleList.createNewTask);

  app
  .route("/tasksColour")
  .get(articleList.listAllTasksColour)
  .post(articleList.createNewTask);

  app
  .route("/tasks/delete")
  .get(articleList.deleteTask)

  app
  .route("/event/:eventid")
  .get(articleList.readArticle)
  .patch(articleList.updateArticle)

  app
  .route("/lists")
  .get(articleList.listAllLists)

  app
  .route("/task/:eventid")
  .get(articleList.readTask)
  .post(articleList.updateTask)

  app
  .route("/taskColour/:eventid")
  .get(articleList.readTask)
  .post(articleList.updateTaskColour)

  app
  .route("/gps")
  .get(articleList.listAllGPS)
  .post(articleList.createNewGPS);

  app
  .route("/blocks")
  .get(articleList.listAllBlocks)
  

  // app
  // .route("/gps/:eventid")
  // .get(articleList.readArticle)
  // .patch(articleList.updateArticle)

//   .delete(articleList.deleteArticle);

//   app
//   .route("/articles/by/:tag")
//   .get(articleList.listTagArticles);

//   app
//   .route("/auth/register")
//   .post(userHandlers.register);

//   app
//   .route("/auth/sign_in")
//   .post(userHandlers.signIn);

};