// Actions methods
// GET "/"
// GET "/index"
const inicio = (req, res) => {
  res.render('form/inicio');
};

// GET "/index"
const alternativa = (req, res) => {
res.render('form/alternativa');
};

const segunda = (req, res) => {
res.render('form/segunda');
};

// Controlador Home
export default {
  inicio,
  alternativa,
  segunda,
};