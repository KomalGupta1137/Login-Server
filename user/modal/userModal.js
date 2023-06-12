const mysql = require("mysql");
const { connection } = require("../../config/config");

const createUser = async (email, password) => {
  try {
    const values = [email, password];
    await connection.query(
      "INSERT INTO users(email,pass) VALUES(?, ?)",
      values
    );
    return { email, password };
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const query = "SELECT * FROM users WHERE email=?";
     connection.query(query, [email], (error, results) => {
      if (error) {
        console.log(error);
      } else {
        if (results) {
          return results;
        }
      }
    });
  } catch (error) {
    throw error;
  }
};


module.exports = {
  createUser,
  getUserByEmail,
};
