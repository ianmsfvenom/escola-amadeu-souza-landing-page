const About = () => {
    return (
        <section id="sobre" className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative group animate-fade-in-left">
                        <div className="absolute -inset-4 bg-secondary/20 rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-300" />
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/purpose.jpg"
                                alt="Alunos estudando na Escola Amadeu Souza"
                                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-medium">Incentivo à leitura e aprendizado contínuo</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2 space-y-6 animate-fade-in-right">
                        <div className="flex items-center gap-2">
                            <span className="w-12 h-1 bg-secondary rounded-full" />
                            <span className="text-secondary font-bold uppercase tracking-wider text-sm">Nossa Proposta</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Fundamental 1 <br />
                            <span className="text-primary">Do 1º ao 5º Ano</span>
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Na Escola Amadeu Souza, dedicamo-nos a construir uma base sólida para o futuro do seu filho.
                            Nossa metodologia foca não apenas no desenvolvimento acadêmico, mas também na formação de valores e caráter.
                        </p>

                        <ul className="space-y-4 pt-4">
                            {[
                                'Professores qualificados e dedicados',
                                'Ensino personalizado e acolhedor',
                                'Ambiente seguro e estimulante',
                                'Formação cristã e ética'
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium group">
                                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
