
import type { APIRoute } from "astro";
import prisma from "../../../lib/prisma";



export async function GET () {

    try {
        
        const response = await prisma.news.findMany()

        console.log(response);

        return new Response(JSON.stringify(response), {
            status: 200,
            headers: {
                "Content-Type" : "application/json"
            }
        })
    } catch {
        return new Response(JSON.stringify({error: "Error al obtener las noticias"}), {
            status: 500,
        })
    }

}