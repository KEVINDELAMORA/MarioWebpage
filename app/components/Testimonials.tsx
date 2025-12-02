export default function Testimonials() {
    const testimonials = [
        {
            name: "Carlos Rodríguez",
            role: "Director de Construcción, Constructora del Pacífico",
            content: "El trabajo del Ing. González fue excepcional. Los levantamientos topográficos fueron precisos y entregados a tiempo, lo que nos permitió avanzar sin contratiempos en nuestro proyecto.",
            rating: 5
        },
        {
            name: "Ana María Gutiérrez",
            role: "Propietaria de Terreno",
            content: "Contraté el servicio de deslinde para mi propiedad y quedé muy satisfecha. El ingeniero explicó todo el proceso claramente y resolvió todas mis dudas. Muy profesional.",
            rating: 5
        },
        {
            name: "Roberto Sánchez",
            role: "Ingeniero Civil",
            content: "Hemos trabajado con Servicios Topográficos MG en varios proyectos de infraestructura. Su experiencia y precisión son invaluables. Los recomiendo ampliamente.",
            rating: 5
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-earth-light to-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary-dark mb-4 uppercase tracking-wide">
                        Lo que Dicen Nuestros Clientes
                    </h2>
                    <div className="h-1 w-24 bg-secondary mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-600">
                        La confianza de nuestros clientes es nuestro mayor logro.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-secondary hover:shadow-xl transition-shadow"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-5 h-5 text-secondary"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>

                            {/* Author */}
                            <div className="border-t pt-4">
                                <p className="font-bold text-earth-dark">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
