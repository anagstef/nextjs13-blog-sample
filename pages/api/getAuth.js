import { getAuth } from "@clerk/nextjs/server";

export default async function handler(req, res) {
 const { userId, getToken } = getAuth(req);
 const token = await getToken();
 return res.status(200).json({token})
};