
import HeroAnimation from './HeroAnimation';

const Hero = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Animation */}
            <HeroAnimation />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 mix-blend-multiply z-0" />

            {/* Content */}
            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-4xl mx-auto text-center text-white space-y-8">
                    <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-sm font-medium tracking-wider mb-4 animate-fade-in-up">
                        EDUCAÇÃO DE EXCELÊNCIA
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight animate-fade-in-up delay-100">
                        Ensinando a criança o caminho em que <span className="text-green-400">deve andar</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        Formando o futuro com valores, educação de qualidade e um ambiente acolhedor para o seu filho.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up delay-300">
                        <a
                            href="#contato"
                            className="px-8 py-4 bg-secondary hover:bg-green-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-w-[200px]"
                        >
                            Agendar Visita
                        </a>
                        <a
                            href="#estrutura"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full hover:-translate-y-1 transition-all duration-300 min-w-[200px]"
                        >
                            Conhecer Estrutura
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
                <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
