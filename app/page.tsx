import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-earth-light text-earth-dark">
      <Hero />
      <Services />
      <About />
      <Contact />

      {/* Footer */}
      <footer className="bg-earth-dark text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Configuración Topográfica - Ing. Mario Humberto Gonzalez Dimas
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Zona Colima | (312) 302 4501 | Itgmariogonzalez@gmail.com
          </p>
        </div>
      </footer>
    </main>
  );
}
