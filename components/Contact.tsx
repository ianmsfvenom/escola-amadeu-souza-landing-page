const Contact = () => {
    return (
        <section id="contato" className="py-20 bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

                    {/* Contact Info */}
                    <div className="w-full md:w-1/3 p-8 md:p-12 space-y-8 bg-gray-50">
                        <div>
                            <h3 className="text-3xl font-bold text-primary mb-2">Fale Conosco</h3>
                            <p className="text-gray-600">Estamos prontos para atender você e sua família.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Endereço</h4>
                                    <p className="text-gray-600">Rua Jaime Janssen Muller, 54</p>
                                    <p className="text-gray-600">Térreo e 1º andar</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Telefone & Whatsapp</h4>
                                    <p className="text-gray-600 font-semibold text-lg">+55 71 9991-0402</p>
                                    <p className="text-sm text-gray-500">Direção: Rosinha Elias Souza</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/557199910402"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:shadow-lg transform hover:-translate-y-1"
                        >
                            Chamar no WhatsApp
                        </a>
                    </div>

                    {/* Map */}
                    <div className="w-full md:w-2/3 h-[450px] md:h-auto bg-gray-200 relative">
                        <iframe
                            src="https://maps.google.com/maps?q=Rua%20Jaime%20Janssen%20Muller%2C%2054%2C%20Salvador%2C%20BA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full border-0"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
