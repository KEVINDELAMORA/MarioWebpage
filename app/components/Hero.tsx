import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-earth-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/surveyor-highway.jpg"
          alt="Ingeniero Topógrafo en campo"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-earth-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/logo-mg.jpg"
            alt="Servicios Topográficos MG"
            width={200}
            height={200}
            className="rounded-full border-4 border-secondary shadow-2xl"
          />
        </div>

        <h1 className="mb-2 text-5xl font-bold uppercase tracking-wider text-white md:text-7xl drop-shadow-lg">
          <span className="text-secondary">Ingeniero Topógrafo</span><br />
          <span className="text-primary-light">Geomático</span>
        </h1>

        <p className="mb-2 text-2xl font-bold text-white md:text-3xl uppercase tracking-wide">
          Servicios Topográficos MG
        </p>

        <p className="mb-8 max-w-2xl text-lg font-light text-gray-200 md:text-xl">
          Soluciones topográficas integrales para construcción, infraestructura y desarrollo urbano.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-md bg-secondary px-8 py-4 text-lg font-bold text-white transition-all hover:bg-secondary-hover hover:scale-105 shadow-lg uppercase tracking-wide"
          >
            Cotizar Proyecto
          </a>
          <a
            href="#services"
            className="rounded-md border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white uppercase tracking-wide"
          >
            Nuestros Servicios
          </a>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-earth-dark to-transparent" />
    </section>
  );
}
