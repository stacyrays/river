import { testimonials } from "../data";

export async function GET(
    _request: Request,
    { params }: { params: {id: string}}
) {
    const testimonial = testimonials.find(test => test.id === parseInt(params.id))
    return Response.json(testimonial);
}