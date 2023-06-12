const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModal = require("../modal/userModal");
const config = require('../../config/config')


const signup = async (req, res) => {
  try {
    const { email, pass } = req.body;
    const hashedPassword = await bcrypt.hash(pass,5);
    await userModal.createUser(email, hashedPassword);
    res.status(201).json({ message: "user registered successfully" });
  } catch (error) {
    console.error(error)
    res.status(500).json({error:'Internal server error'})
  }
};


const login = async (req, res) => {
  // try {
  //   const { email, pass } = req.body;
  //   const user = await userModal.getUserByEmail(email);

  //   if (!user) {
  //     return res.status(401).json({ error: "Email does not exist in our database" });
  //   }
  //   const passwordMatch = await bcrypt.compare(pass, user.pass);
  //   if (!passwordMatch) {
  //     return res.status(401).json({ error: "Invalid credentials" });
  //   }
  //   const token = jwt.sign({userId:users.id}, config.token)
  //   res.status(200).json({ token });
  // } 
  try{
    const email = req.body;
    const response = await userModal.getUserByEmail(email)
    console.log(response)
  }
  catch (error) {
    console.log(error);
    res.status(500).json({error:'Internal server error'})
  }
};

module.exports = { signup, login };
