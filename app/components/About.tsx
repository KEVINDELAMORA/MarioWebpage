import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-earth-dark text-white relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top-right" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Image Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl border-4 border-primary">
                            <Image
                                src="/images/surveyor-field.jpg" // Using the field image as it looks professional and rugged
                                alt="Ing. Mario Humberto Gonzalez Dimas"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                                <p className="text-secondary font-bold text-xl">Ing. Mario Humberto Gonzalez Dimas</p>
                                <p className="text-gray-300">Egresado de la Universidad de Colima</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-wide">
                            Experiencia y <span className="text-secondary">Compromiso</span>
                        </h2>
                        <div className="h-1 w-24 bg-primary mb-8"></div>

                        <div className="space-y-6 text-lg text-gray-300 font-light">
                            <p>
                                En <strong className="text-white">Servicios Topográficos MG</strong>, combinamos la precisión técnica con la experiencia en campo para ofrecer resultados confiables en cada proyecto.
                            </p>
                            <p>
                                Liderado por el <strong>Ing. Mario Humberto Gonzalez Dimas</strong>, nuestro equipo está capacitado para enfrentar los retos más exigentes en topografía, desde levantamientos de predios hasta vuelos fotogramétricos avanzados.
                            </p>
                            <p>
                                Nuestra misión es proporcionar datos exactos que sirvan como la base sólida para el desarrollo de infraestructura y obras civiles en la zona de Colima y sus alrededores.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-6">
                            <div className="p-4 bg-white/10 rounded-lg border-l-4 border-secondary">
                                <h4 className="text-2xl font-bold text-white">5+</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Años de Experiencia</p>
                            </div>
                            <div className="p-4 bg-white/10 rounded-lg border-l-4 border-primary">
                                <h4 className="text-2xl font-bold text-white">100%</h4>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Precisión Garantizada</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
