const Facilities = () => {
    const facilities = [
        {
            title: "Biblioteca",
            description: "Acervo diversificado para estimular o amor pela leitura.",
            image: "/images/library.jpg",
            color: "bg-blue-500"
        },
        {
            title: "Sala de Informática",
            description: "Tecnologia moderna para o aprendizado digital.",
            image: "/images/computer_lab.jpg",
            color: "bg-green-500"
        },
        {
            title: "Playground",
            description: "Espaço amplo e seguro para recreação e socialização.",
            image: "/images/playground.jpg",
            color: "bg-yellow-500"
        },
        {
            title: "Sala de Ciências",
            description: "Laboratório prático para despertar a curiosidade científica.",
            image: "/images/science_lab.jpg",
            color: "bg-red-500"
        }
    ];

    return (
        <section id="estrutura" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <span className="text-secondary font-bold uppercase tracking-wider text-sm">Nossa Estrutura</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Um ambiente completo para o <span className="text-primary">desenvolvimento</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Oferecemos espaços pensados para potencializar o aprendizado e o bem-estar dos nossos alunos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {facilities.map((item, index) => (
                        <div
                            key={index}
                            className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                        >
                            {/* Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-primary/90 group-hover:via-primary/40 transition-colors duration-500" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;
