import Image from 'next/image';

const services = [
    {
        title: "Trazo y Nivelación",
        description: "Establecimiento preciso de ejes y niveles para obras civiles y edificaciones.",
        icon: "/images/level-road.jpg"
    },
    {
        title: "Deslinde de Terrenos",
        description: "Definición jurídica y física de los límites de su propiedad con alta precisión.",
        icon: "/images/surveyor-field.jpg"
    },
    {
        title: "Levantamientos Topográficos",
        description: "Mapas detallados de terrenos urbanos y rurales para proyectos de arquitectura e ingeniería.",
        icon: "/images/total-station-closeup.jpg"
    },
    {
        title: "Puntos de Control",
        description: "Establecimiento de redes geodésicas y puntos de control GPS de alta precisión.",
        icon: "/images/surveyor-highway.jpg"
    },
    {
        title: "Vuelos Fotogramétricos",
        description: "Mapeo aéreo con drones para grandes extensiones y modelos digitales de terreno.",
        icon: "/images/dron-1.jpg"
    },
    {
        title: "Puntos GNSS",
        description: "Mediciones satelitales de alta precisión para proyectos que requieren coordenadas exactas.",
        icon: "/images/gnss-equipment.jpg"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-20 px-4 bg-earth-light">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary-dark mb-4 uppercase tracking-wide">Nuestros Servicios</h2>
                    <div className="h-1 w-24 bg-secondary mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Soluciones técnicas avanzadas para garantizar la precisión de su proyecto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border-b-4 border-secondary hover:shadow-xl transition-shadow group">
                            <div className="h-48 relative overflow-hidden">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-earth-dark mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
