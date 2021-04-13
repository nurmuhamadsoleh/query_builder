const express = require("express");
const home = express.Router();
const { getAllSiswa, storeAbsen } = require("../models/absenSiswaModel");

home.get("/", (req, res) => {
    getAllSiswa().then((result) => {
      // res.json(result);
    res.render("home", { data: result });
    });
  });
  home.post("/absen", (req, res) => {
    let nama = req.body.nama;
    let email = req.body.email;
    let telepon = req.body.telepon;
    let batch = req.body.batch;
    storeAbsen({
      nama: nama,
      email: email,
      telepon: telepon,
      batch: batch,
    }).then((result) => {
      res.redirect("/");
    });
  });

module.exports = home;