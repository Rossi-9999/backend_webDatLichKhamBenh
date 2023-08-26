import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();
let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/crud", homeController.getCrudPage);
  router.post("/post-crud", homeController.postCrud);
  router.get("/get-crud", homeController.getCrud);
  router.get("/edit-crud", homeController.getEditCrud);
  router.post("/put-crud", homeController.putCrud);
  router.get("/delete-crud", homeController.deleteCrud);
  return app.use("/", router);
};
module.exports = initWebRoutes;
