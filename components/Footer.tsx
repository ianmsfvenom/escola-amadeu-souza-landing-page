const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">Escola Amadeu Souza</h3>
                        <p className="text-gray-400 italic">"Ensinando a criança o caminho em que deve andar"</p>
                    </div>

                    <div className="flex gap-8">
                        <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a>
                        <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a>
                        <a href="#estrutura" className="text-gray-400 hover:text-white transition-colors">Estrutura</a>
                        <a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Escola Amadeu Souza. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
