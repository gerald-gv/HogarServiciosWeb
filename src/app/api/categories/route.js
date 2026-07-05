import { supabase } from "@/supabase/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {

    const { data: category, error } = await supabase.from("category").select("*");

    if (error) {
        console.error("Error al jalar los datos", error.message)
        return NextResponse.json(
            { error: "Error interno del servidor" },
            { status: 500 }
        )
    }

    //console.log(category);

    return new Response(JSON.stringify(category), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });
}