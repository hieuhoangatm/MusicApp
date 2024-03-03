import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
    {
        title: String,
        avatar: String,
        description: String,
        status: String,
        slug: String,
        delete: {
            type: Boolean,
            default: false,
        },
        deleteFrom: Date,
    },
    {
        timestamps: true,
    }
);

const Topic = mongoose.model("Topic", topicSchema,"topics");

export default Topic;