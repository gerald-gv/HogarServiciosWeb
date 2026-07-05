import { NextResponse } from "next/server";

console.log("Middleware cargado");

export function middleware(req) {    

    const apiKey = req.headers.get("x-api-key");

    console.log("Header recibido:", apiKey);
    console.log("ENV:", process.env.API_KEY);

    if (apiKey !== process.env.API_KEY) {
        return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};