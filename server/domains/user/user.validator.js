// Importando biblioteca de validacion
import * as Yup from 'yup';

// Creando un esquema de validación para el proyecto
const userSchema = Yup.object().shape({
    correo: Yup.string().required('Se requiere un Correo')
});

// Creando el extractor de datos de la petición
const getUser = (req) => {
    // Extrayendo datos de la petición
    const {correo} = req.body;
    // Regresando el objeto proyecto
    return {
        correo,
    };
  };

  export default {
    userSchema,
    getUser,
  };