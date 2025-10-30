import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import Email from "@/emails/EmailContacto";
import { headers } from "next/headers";

export async function POST(req) {
    try {
        const headersList = await headers();
        const token = headersList.get("Josue");

        if (!(token === process.env.SI)) {
            return NextResponse.json({ error: "No autorizado" }, { status: 401 })
        }
        
        const { name, email, message } = await req.json()

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Faltan Campos" }, { status: 400 }
            )
        }

        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Hemos recibido su mensaje - IEoDomotics',
            react: <Email name={name} message={message} />
        })

        if (error) {
            return NextResponse.json(
                { error: "Sucedio un error interno: ", error }, { status: 500 }
            )
        }

        return NextResponse.json(
            { reporte: "El Email se envio correctamente" }, { status: 200 }
        )

    } catch (err) {
        console.error("Error general", err)
        return NextResponse.json(
            { reporte: "Error al enviar el correo: ", err }, { status: 500 }
        )
    }


}