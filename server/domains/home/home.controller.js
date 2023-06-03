// Actions methods
// GET "/"
// GET "/index"
const home = (req, res) => {
  res.render('home/homeview');
};

// GET "/index"
const about = (req, res) => {
res.render('home/about');
};

const convo = (req, res) => {
res.render('home/convo');
};

// Controlador Home
export default {
  home,
  about,
  convo,
};