// Actions methods
// GET "/"
// GET "/index"
const con = (req, res) => {
  res.render('convo/con');
};

// GET "/index"
const cons = (req, res) => {
res.render('convo/cons');
};

const conv = (req, res) => {
res.render('convo/conv');
};

// Controlador Home
export default {
  con,
  cons,
  conv,
};