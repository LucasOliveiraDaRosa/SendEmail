import { Router } from "express";
import { SendMailController } from "./controllers/SendMailController";
import { SurveysController } from "./controllers/SurveysController";
import { userController } from "./controllers/UserController";

const router = Router();

const UserController = new userController();

const surveysController = new SurveysController();

const sendMailController = new SendMailController();


router.post("/users", UserController.create);

router.post("/surveys", surveysController.create);

router.get("/surveys", surveysController.show);

router.post("/sendMail", sendMailController.execute);

export { router };



