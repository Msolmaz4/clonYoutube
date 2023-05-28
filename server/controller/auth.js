const mongoose = require("mongoose");
const Users = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  //console.log(req.body)

  try {
    const { name, email, password } = req.body;

    if (!checkEmail(email)) return res.send("email ist leer");
    if (!password) return res.send("paaword ist leer");
    const newwUser = await new Users({
      password: bcrypt.hashSync(password, 8),
      email: email,
      name: name,
    });

    newwUser.save();
    res.status(200).json({
      succed: "true",
    });
  } catch (error) {
    console.log(error);
  }

  function checkEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!reg.test(email)) return false;
    return true;
  }
};

//passwordu gondermemeyiyi unutma

exports.signin = async (req, res) => {
  //console.log(req.body)

  try {
   // const { email, password } = req.body;

    const emailControl = await Users.findOne({email: req.body.email });
    if (!emailControl) return res.send("email ist falsch");
    if (!req.body.password) return res.send("paaword ist leer");

    const passwordCon = bcrypt.compare(req.body.password, emailControl.password);
    if (!passwordCon) return res.send("explosin");

    const token = jwt.sign(
      {
        email,
        id: emailControl._id
      },
      process.env.AUTH_KEY
    );

    //burada password gondermeyiy bu yuzden
    // emailControl.password = null

  const { password,...others} =emailControl._doc
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        succed: "true",
        data: others
      });
  } catch (error) {
    console.log(error);
  }
};

{
  /* 
burada ben kontrol  null esitledigimde normalde calisiyor ama kontrollde hata verir bu 
cookie kullanarak cerezlerde calistirmak 
sonra cookie yerini degistirdim hata ordana kalkti

emailControl.password = null
res.status(202).json({
    succed:'true',
    token,
    data:emailControl
})*/
}