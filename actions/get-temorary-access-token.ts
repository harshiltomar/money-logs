'use server'

import { currentUser } from "@clerk/nextjs/server"
// Initialize Schematic SDK
import { SchematicClient } from "@schematichq/schematic-typescript-node";
const apiKey = process.env.SCHEMATIC_API_KEY;
const client = new SchematicClient({ apiKey });

// Get a temporary access token
export async function getTemporaryAccessToken() {
    console.log("Getting Temporary access token");
    const user = await currentUser();

    if (!user) {
        console.log("No user found");
        return null;
    }

    console.log(`User found. Issuing temporary access token for user ${user.id}`);

    const resp = await client.accesstokens.issueTemporaryAccessToken({
        
        lookup: { userId: user.id }, // The lookup will vary depending on how you have configured your company keys
    });

    console.log(`Temporary access token issued for user ${user.id}. Token: ${resp.data?.token}`);

    return resp.data?.token;
}
