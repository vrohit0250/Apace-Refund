import User from '../../../models/user';

import dbConnect from '../../../utils/dbconnection'
export default async function handler(req,res){
    const { method } = req;

    dbConnect();

    if(method == "GET"){
            try{

                const users  = await User.find();
                res.status(200).json(users);

            }catch(err){
                res.status(500).json(err);
            }
    }

    if(method == "POST"){
        try{
            const user  = await User.create(req.body);
            res.status(201).json(user);

        }catch(err){
            res.status(500).json(err);
        }


    }
}