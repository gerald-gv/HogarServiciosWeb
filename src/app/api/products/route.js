import { supabase } from "@/supabase/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
    
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