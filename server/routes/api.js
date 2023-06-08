//importing Express Library
import  express from 'express';
//creating a Router Instance
const {Router} = express;

const router = Router();

//Creating the route
router.get('/author', (req, res)=>{ 
    //Responding to the client using res object
    res.json({
        "name": "Leonardo Flavio",
        "lasname": "Gonzalez Reyes  ",
        "age": "23 years"
    });
});//function(req, res)

//Exporting the router

export default router;
