import { Schema, model } from "mongoose";

const userScema = new Schema({
    email: {
        type: String,
        required: true,
        minLength: 10,
    },
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 20,
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
    }
});

const User = model('User', userScema);

export default User;