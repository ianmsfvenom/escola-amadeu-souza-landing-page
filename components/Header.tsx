import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <img
                            src="/images/logo.png"
                            alt="Logo Escola Amadeu Souza"
                            className="w-12 h-12 object-contain"
                        />
                        <span className="text-xl font-bold text-primary tracking-tight">
                            Escola Amadeu Souza
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {['Início', 'Sobre', 'Estrutura', 'Contato'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                                className="text-gray-600 hover:text-primary font-medium transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all hover:after:w-full"
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href="#contato"
                            className="px-6 py-2.5 bg-primary text-white font-medium rounded-full hover:bg-secondary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Matricule-se
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-primary"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="w-6 flex flex-col gap-1.5">
                            <span className={`block w-full h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block w-full h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-full h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg transition-all duration-300 origin-top ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'}`}>
                <nav className="flex flex-col p-4 gap-4">
                    {['Início', 'Sobre', 'Estrutura', 'Contato'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                            className="text-gray-600 hover:text-primary font-medium py-2 border-b border-gray-50"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="#contato"
                        className="w-full text-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Matricule-se
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
