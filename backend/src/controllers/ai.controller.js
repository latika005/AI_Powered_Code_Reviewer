import {main} from "../services/ai.service.js";

export async function getResponse(req, res){
    try{
        const prompt = req.query.prompt;

        if(!prompt){
            return res.status(400).json({error : "Prompt is required "});
        }

        const response = await main(prompt);

        return res.status(200).json({ response });
    }catch(error){
        console.log(error);
        res.status(500).json({ error : "AI service failed "});
    }
}