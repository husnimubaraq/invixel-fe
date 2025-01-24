
const data = [
    {
        name: 'John Doe',
        position: 'CEO',
        image: 'https://themes.coderthemes.com/prompt_tr/assets/img-1-f7888c4b.jpg',
    },
    {
        name: 'Tammy Ward',
        position: 'CTO',
        image: 'https://themes.coderthemes.com/prompt_tr/assets/img-5-e7f4056f.jpg',
    },
    {
        name: 'Danette Payne',
        position: 'Product Development',
        image: 'https://themes.coderthemes.com/prompt_tr/assets/img-2-3bd8be1c.jpg',
    }
]

export default function OurTeamSection() {
    return (
        <section className="py-10 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-0">
                <div className="text-center">
                    <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Our Team</span>
                    <h1 className="text-3xl/tight text-black font-medium mt-3 whitespace-pre-line">
                        Meet Our Team
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-4">
                            <img src={item.image} alt={item.name} className="h-[250px] w-[250px] lg:h-[200px] lg:w-[200px] object-cover rounded-full" />
                            <h3 className="text-xl font-semibold">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}