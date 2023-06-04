// Actions methods
// GET "/user/login"
const login = (req, res) => {
  res.render('user/login');
};

// GET "/user/logout"
const logout = (req, res) => {
res.send("👷‍♂️ Under Construction : GET /user/logout 🚧")
};

// GET "/user/register"
const register = (req, res) => {
res.render('user/register');
};

// Controlador user
export default {
  //Estos son los Accion Methods
  login,
  logout,
  register
};