import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";

export class UserController{
    constructor(
        private userBusiness:UserBusiness
    ){}

    public signup = async (req:Request, res:Response) => {
        try {
            const input ={
                name: req.body.name,
                adress:req.body.adress,
                email:req.body.email,
                phone:req.body.phone,
                birth_date:req.body.birth_date,
                login:req.body.login,
                password:req.body.password,
                profile_pic:req.body.profile_pic
            }
            const response= await this.userBusiness.signup(input)
            res.status(201).send(response)

        } catch (error) {
            if(error instanceof BaseError){
                return res.status(error.statusCode).send({message:error.message})
            }
            res.status(500).send({message: "Erro Inesperado"})
        }
    }
    public login = async (req:Request, res:Response) => {
        try {
            const input ={
                login:req.body.login,
                password:req.body.password
            }
            const response = await this.userBusiness.login(input)
            res.status(201).send(response)

        } catch (error) {
             if(error instanceof BaseError){
                return res.status(error.statusCode).send({message:error.message})
            }
            res.status(500).send({message: "Erro Inesperado"})
        }
    }
}