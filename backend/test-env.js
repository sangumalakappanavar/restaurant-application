/*import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

console.log("MONGO_URI =", process.env.MONGO_URI);*/
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("backend/config.env") });

console.log("MONGO_URI =", process.env.MONGO_URI);

