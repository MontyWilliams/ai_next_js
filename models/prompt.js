import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Gotta enter a prompt Bruh'],
    },
    tag: {
        type: String,
        required: [true, 'Gotta enter a tag Bruh']
    }
})
