import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const prompt = await Prompt.findById(params.Id).populate('creator');
        if(!prompt) return new Response("Prompt not found", { status: 404 })
        
        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}

export const PATCH = async (requset, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectToDB();

        const existingPrompt = await Prompt.findById(params.id);
        if(!existingPrompt) return new Response("Not found bruh", { status: 404 })

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();
        
        return new Response(JSON.stringify(existingPrompt), { status: 200 })
    } catch (error) {
        return new Response("Deezam, faild to update the prompt bruh", { status: 500 })
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        await Prompt.findByIdAndRemove(parmas.id);

        return new Response("prompt deleted successfully! its outa ther!", { status: 200 })
    } catch (error) {
        return new Response("something went wrong", { status: 500 })
    }
}
