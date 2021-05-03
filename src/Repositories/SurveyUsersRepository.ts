import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/SurveysUser";

@EntityRepository(SurveyUser)
class SurveyUsersRepository extends Repository<SurveyUser>  {

}

export { SurveyUsersRepository }