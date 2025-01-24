
const data = [
    {
        title: 'Discover',
        image: 'https://www.dgtechasia.com/wp-content/uploads/2024/09/video.jpg',
    },
    {
        title: 'Plan',
        image: 'https://www.dgtechasia.com/wp-content/uploads/2024/09/about-1.jpg',
    },
    {
        title: 'Execute',
        image: 'https://www.dgtechasia.com/wp-content/uploads/2024/09/9-scaled-1-2048x1536.jpg',
    },
    {
        title: 'Deliver',
        image: 'https://www.dgtechasia.com/wp-content/uploads/2024/09/C-01.jpg',
    },
    {
        title: 'Support',
        image: 'https://www.dgtechasia.com/wp-content/uploads/2024/09/video.jpg',
    }
]

export default function OurWorkingSection() {
    return (
        <section className="py-10 lg:py-24 overflow-hidden bg-gray-100">
            <div className="container mx-auto px-4 md:px-0">
                <div className="text-center">
                    <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Process</span>
                    <h1 className="text-3xl/tight text-black font-medium mt-3 whitespace-pre-line">
                        Our Working Process
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-10">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-4">
                            <div className="h-[250px] w-[250px] lg:h-[200px] lg:w-[200px] bg-white p-4 rounded-full flex flex-col items-center justify-center border border-primary border-dashed">
                                <img src={item.image} alt={item.title} className="h-[250px] w-[250px] lg:h-[200px] lg:w-[200px] object-cover rounded-full" />
                            </div>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}