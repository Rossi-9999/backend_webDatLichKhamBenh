import db from "../models/index";
import crudService from "../services/crudService";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log(data);
    return res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (error) {
    console.log(error);
  }
};
let getCrudPage = async (req, res) => {
  return res.render("crudpage.ejs");
};
let postCrud = async (req, res) => {
  await crudService.createNewUser(req.body);
  console.log(req.body);

  return res.send("post crud from server");
};
let getCrud = async (req, res) => {
  let data = await crudService.getAllUsers();
  console.log("AllUser", data);
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};
module.exports = {
  getHomePage: getHomePage,
  getCrudPage: getCrudPage,
  postCrud: postCrud,
  getCrud: getCrud,
};
