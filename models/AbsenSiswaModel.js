//import connection
const db = require("./connection");

//mendapatkan semua data siswa
const getAllSiswa = async () => {
  return await db
    .from("siswa")
    .select("*")
    .then((rows) => {
      return rows;
    });
};
// Menambhkan Absen
const storeAbsen = async (data) => {
    return await db
      .from("siswa")
      .insert({
        nama: data.nama,
        email: data.email,
        telepon: data.telepon,
        batch: data.batch,
      })
      .then((rows) => {
        return rows;
      })
      .catch((err) => console.log(err));
  };

//export semua function
module.exports = { getAllSiswa };
module.exports = { getAllSiswa, storeAbsen };