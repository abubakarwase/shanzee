const express = require("express");
let router = express.Router();
const validateToy = require("../../middlewares/validateToy");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var { Toy } = require("../../models/toy");
//get toys
router.get("/", async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let toys = await Toy.find().skip(skipRecords).limit(perPage);
  return res.send(toys);
});
//get single toys
router.get("/:id", async (req, res) => {
  try {
    let toy = await Toy.findById(req.params.id);
    if (!toy) return res.status(400).send("Toy With given ID is not present"); //when id is not present id db
    return res.send(toy); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id", validateToy, async (req, res) => {
  let toy = await Toy.findById(req.params.id);
  toy.name = req.body.name;
  toy.price = req.body.price;
  await toy.save();
  return res.send(toy);
});
//update a record
router.delete("/:id", auth, admin, async (req, res) => {
  let toy = await Toy.findByIdAndDelete(req.params.id);
  return res.send(toy);
});
//Insert a record
router.post("/", validateToy, async (req, res) => {
  let toy = new Toy();
  toy.name = req.body.name;
  toy.price = req.body.price;
  await toy.save();
  return res.send(toy);
});
module.exports = router;
