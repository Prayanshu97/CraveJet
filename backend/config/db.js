import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://prayanshu07:z93dT8IKrJuVVvTK@cluster0.jbcivk5.mongodb.net/food-del').then(() => {
        console.log("DB connected")
    })
}

