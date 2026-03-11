import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import { sql } from "./config/db.js";
import { aj } from "./lib/arcjet.js";
import path from "path";

dotenv.config();

const app=express();
const PORT=process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.json());
app.use(cors());
app.use(helmet({
    contentSecurityPolicy: false
}));//security middleware
app.use(morgan("dev")); //logs all requests

//apply arcjet rate-limit to all routes
app.use(async (req,res,next) =>{
    try {
        const decision = await aj.protect(req,{
            requested:1 //each request consumes 1 token
        })

        if (decision.isDenied()){
            if(decision.reason.isRateLimit()){
                res.status(429).json({
                    error:"Too many requests, please try again later"
                });
            }else if (decision.reason.isBot()){
                res.status(403).json({
                    error: "Bot access denied"
                });
            }else{
                res.status(403).json({
                    error: "Forbidden"
                });
            }
            return;
        }

        //check for spoofed bots
        if (decision.results.some((result) => result.reason.isBot() && result.reason.isSpoofed())){
            res.status(403).json({error: "Spoofed bot detected"});
        }
        next()
    } catch (error) {
        console.log("Arcjet error", error);
    next(error);
    }
})

if (process.env.NODE_ENV==="production"){
    //serve react app static files (CSS, JS, images, etc.)
    app.use(express.static(path.join(__dirname,'frontend','dist')));
}

app.use("/api/products",productRoutes);

if (process.env.NODE_ENV==="production"){
    // Handle client-side routing - send index.html for all non-API routes
    app.use((req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
    });
}

async function initDB(){
    try {
        await sql`
           CREATE TABLE IF NOT EXISTS products (
           id SERIAL PRIMARY KEY,
           name VARCHAR(255) NOT NULL,
           image VARCHAR(255) NOT NULL,
           price DECIMAL(10,2) NOT NULL,
           created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
           );
        `
        console.log("Database initialised succesfully")
    } catch (error) {
        console.log("Error initDB",error);
    }
}

initDB().then(() =>{
    app.listen(PORT, ()=>{
    console.log("Server is running on port " + PORT);
})
})
