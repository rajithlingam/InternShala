import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";
import Channel from "../models/Channel.js";
import Video from "../models/Video.js";
import Comment from "../models/Comment.js";
import bcrypt from "bcryptjs";

dotenv.config();

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  await Promise.all([
    User.deleteMany({}),
    Channel.deleteMany({}),
    Video.deleteMany({}),
    Comment.deleteMany({}),
  ]);

  const passwordHash = await bcrypt.hash("Password123!", 10);
  const user = await User.create({
    username: "JohnDoe",
    email: "john@example.com",
    passwordHash,
    avatar: "https://example.com/avatar/johndoe.png",
  });
  const channel = await Channel.create({
    channelName: "Code with John",
    owner: user._id,
    description: "Coding tutorials and tech reviews by John Doe.",
    channelBanner: "https://example.com/banners/john_banner.png",
    subscribers: 5200,
  });

  const sampleVideos = [
    {
      title: "Master JavaScript in 30 Minutes",
      description: "The fastest way to ramp up your JS skills.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnailUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/500px-JavaScript-logo.png",
      categories: [
        "Programming",
        "Education",
        "JavaScript",
        "Frontend",
        "Tutorial",
        "Popular",
      ],
    },
    {
      title: "Express.js Crash Course 2025",
      description: "Build production APIs with Express and Mongo.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      thumbnailUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      categories: [
        "Programming",
        "Backend",
        "Node",
        "Express",
        "Tutorial",
        "New",
      ],
    },
    {
      title: "React Course",
      description: "React Basic Course",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      thumbnailUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
      categories: [
        "Programming",
        "React",
        "Frontend",
        "Education",
        "Advanced",
        "Popular",
      ],
    },
  ];

  const videos = await Promise.all(
    sampleVideos.map((v) =>
      Video.create({
        ...v,
        channel: channel._id,
        uploader: user._id,
        views: 15200,
        likes: 1023,
        dislikes: 45,
      })
    )
  );

  await Comment.create({
    video: videos[0]._id,
    user: user._id,
    text: "Great video! Very helpful.",
  });

  console.log("Seeded ✔");
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
