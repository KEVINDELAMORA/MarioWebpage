'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'Itgmariogonzalez@gmail.com'
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-earth-light relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary-dark mb-4 uppercase tracking-wide">Contáctanos</h2>
                    <div className="h-1 w-24 bg-secondary mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-600">
                        Estamos listos para iniciar su próximo proyecto.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary">
                        <h3 className="text-2xl font-bold text-earth-dark mb-6">Información de Contacto</h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Teléfono</h4>
                                    <p className="text-gray-600 hover:text-secondary transition-colors">
                                        <a href="tel:3123024501">(312) 302 4501</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Correo Electrónico</h4>
                                    <p className="text-gray-600 hover:text-secondary transition-colors">
                                        <a href="mailto:Itgmariogonzalez@gmail.com">Itgmariogonzalez@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Ubicación</h4>
                                    <p className="text-gray-600">Zona Colima y alrededores</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-earth-dark p-8 rounded-lg shadow-lg text-white">
                        <h3 className="text-2xl font-bold mb-6">Envíenos un Mensaje</h3>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full rounded-md bg-white/10 border border-white/20 px-4 py-2 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
                                    placeholder="Su nombre"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Correo</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full rounded-md bg-white/10 border border-white/20 px-4 py-2 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
                                    placeholder="ejemplo@correo.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensaje</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full rounded-md bg-white/10 border border-white/20 px-4 py-2 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
                                    placeholder="¿En qué podemos ayudarle?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-md bg-secondary px-8 py-3 font-bold text-white transition-all hover:bg-secondary-hover hover:scale-105 shadow-lg uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="bg-green-500/20 border border-green-500 text-green-200 px-4 py-3 rounded">
                                    ¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded">
                                    Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctanos directamente por WhatsApp.
                                </div>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
