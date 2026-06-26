import arcjet,{tokenBucket,shield,detectBot} from "@arcjet/node";
import dotenv from "dotenv";

//init arcjet
export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ["ip.src"],
    rules : [
        //shield protects app from common attacks (SQL injection,XSS,CSRF attacks)
        shield(),
        detectBot({
            mode: "DRY_RUN",
            allow: ["CATEGORY:SEARCH_ENGINE"],
        }),
        //rate limiting
        tokenBucket({
            mode: process.env.NODE_ENV === "production" ? "LIVE" : "DRY_RUN",
            refillRate:5,
            interval:10,
            capacity:10

        })
    ]
});