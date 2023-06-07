// Importando biblioteca de validacion
import * as Yup from 'yup';

// Creando un esquema de validación para el proyecto
const userSchema = Yup.object().shape({
    name: Yup.string().required('Se requiere un Correo'),
    password: Yup.string().min(6).required('Se requiere ingresar password de al menos 6 caracteres')
});

// Creando el extractor de datos de la petición
const getUser = (req) => {
    // Extrayendo datos de la petición
    const {correo} = req.body;
    // Regresando el objeto proyecto
    return {
        correo,
        password
    };
  };

  export default {
    userSchema,
    getUser,
  };