const { User, Tweet } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const allUsers = await User.findAll();
  try {
    res.json(allUsers);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const userName = req.params.username;
    const user = await User.findOne({ where: { username: userName }, include: Tweet });

    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    // esta variable es un user sin el password
    const userWithoutPassword = {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      bio: user.bio,
      profilePic: user.profilePic,
      tweets: user.tweets,
    };

    res.json(userWithoutPassword);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred.");
  }
}

// Display the specified resource.
//
//   try {
//     const userId = req.params.id;
//     const user = await User.findByPk(userId, {
//       include: Tweet,
//     });
//     const tweet = await Tweet.findAll({ where: { userId: userId } });

//     if (!user) {
//       res.status(404).send("User not found");
//       return;
//     }

//     res.render("userID", { user, tweet });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).send("An error occurred.");
//   }
// }

// Store a newly created resource in storage.
async function store(req, res) {
  const { firstname, lastname, username, email, bio, profilePic } = req.body;
  try {
    const newUser = await User.create({
      firstname,
      lastname,
      username,
      password,
      email,
      bio,
      profilePic,
    });
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el usuario" });
  }
  console.log("se ha creado un nuevo usuario");
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
