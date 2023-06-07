// Actions methods
// GET "/"
// GET "/index"
const convocatorias = (req, res) => {
  res.render('convo/convocatorias');
};

// GET "/index"
const cons = (req, res) => {
res.render('convo/cons');
};

const convocatoria = (req, res) => {
res.render('convo/convocatoria');
};

const convo = (req, res) => {
  res.render('convo/convo');
  };
// Controlador Home
export default {
  convocatorias,
  cons,
  convocatoria,
  convo,
};