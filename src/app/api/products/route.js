import { supabase } from "@/supabase/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
    const headersList = await headers();
    const token = headersList.get("Josue");

    if (!(token=== process.env.SI)){
        return NextResponse.json({ error: "No autorizado"}, { status: 401 })
    }
    
    //const supabase = await client();
    // if (!supabase.ok) {
    //     console.error("Sucedio un error al jalar los datos")
    // }
    
    const { data: products, error } = await supabase.from("product").select("*");
    
    if(error){
        console.error("Error al jalar los datos", error.message)
        return NextResponse.json(
            {error: "Error interno del servidor"},
            {status: 500}
        )
    }
    return new Response(JSON.stringify(products), {
        status: 200,
        headers: { "Content-Type": "application/json"}
    });
}