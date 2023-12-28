import mongoose from "mongoose";

const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    nim:{
        type: Number,
        required: true
    },
    nomerhp:{
        type: Number,
        required: true
    },
    alamat:{
        type: String,
        required: true
    },
    kota:{
        type: String,
        required: true
    },
    instagram:{
        type: String,
        required: true
    },
    zip:{
        type: Number,
        required: true
    }
});

export default mongoose.model('Users', User);