const { Tweet } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    
    const { content } = req.body;

    // si lo envian vacio 
    if (!content) {
      return res.status(400).json({ error: 'Tweet content is required' });
    }

    // Lo meto en la Base de Datos
    const newTweet = await Tweet.create({ content });

    // Respond with the created tweet in JSON format
    res.json(newTweet);
  } catch (error) {
    console.error(error);
    res.json({ error: 'Internal Server Error' });
  }
  console.log("se ha creado un tweet")
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
