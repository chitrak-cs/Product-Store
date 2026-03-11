import arcjet,{tokenBucket,shield,detectBot} from "@arcjet/node";
import dotenv from "dotenv";

//init arcjet
export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ["ip.src"],
    rules : [
        //shield protects app from common attacks (SQL injection,XSS,CSRF attacks)
        shield({mode: process
            .env.NODE_ENV === "production" ? "LIVE" : "DRY_RUN"}),
        detectBot({
            mode: process.env.NODE_ENV === "production" ? "DRY_RUN" : "DRY_RUN", // Keep DRY_RUN for now to avoid blocking legitimate requests
            //block all bots except search engines
            //full list of bots https://arcjet.com/bot-list
            allow:["CATEGORY:SEARCH_ENGINE",
                "CATEGORY:BROWSER", // Allow browser requests
                "USER_AGENT:PostmanRuntime", //allow postman
                "USER_AGENT:axios", //allow axios requests
                "USER_AGENT:fetch", //allow fetch requests
                "USER_AGENT:node-fetch", //allow node-fetch requests
                "USER_AGENT:Mozilla", //allow browser requests
                "USER_AGENT:Chrome", //allow Chrome
                "USER_AGENT:Firefox", //allow Firefox
                "USER_AGENT:Safari" //allow Safari
            ]
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