import storeInfo from '../../../models/storeinfo';

import dbConnect from '../../../utils/dbconnection'
export default async function handler(req,res){

    const { method } = req;

    dbConnect();

    if(method == "GET"){
            try{

                const stores  = await storeInfo.find();
                res.status(200).json(stores);

            }catch(err){
                res.status(500).json(err);
            }
    }

    if(method == "POST"){
        try{
            const store  = await storeInfo.create(req.body);
            res.status(201).json(store);

        }catch(err){
            res.status(500).json(err);
        }


    }
}