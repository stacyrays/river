import { testimonials } from "./data"

export async function GET() {
    return Response.json(testimonials);
}

export async function POST(request: Request) {
    const testimonial = await request.json();
    const newTestimonial = {
        id: testimonials.length + 1,
        name: testimonial.name,
        text: testimonial.text
    };
    testimonials.push(newTestimonial);
    return new Response(JSON.stringify(newTestimonial), {
        headers: {
            "Content-Type": "application/json", 
        },
        status: 201
    })
}