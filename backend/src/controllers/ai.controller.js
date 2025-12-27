import {main} from "../services/ai.service.js";

export async function getReview(req, res){
    try{
        const {code} = req.body;

        if(!code){
            return res.status(400).json({error : "Code is required "});
        }

        const response = await main(code);

        return res.status(200).json({ response });
    }catch(error){
        console.log(error);
        res.status(500).json({ error : "AI service failed "});
    }
}