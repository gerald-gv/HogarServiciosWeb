import { client } from "@/supabase/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
    const headersList = await headers();
    const token = headersList.get("Josue");

    if (!(token=== process.env.SI)){
        return NextResponse.json({ error: "No autorizado"}, { status: 401 })
    }
    const supabase = await client();
    if (!supabase.ok) {
        console.error("Sucedio un error al jalar los datos")
    }
    const { data: category, error } = await supabase.from("category").select("*");
    console.log(category);
    
    return new Response(JSON.stringify(category), {
        status: 200,
        headers: { "Content-Type": "application/json"}
    });
}