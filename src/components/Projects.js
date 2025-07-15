import websiteImg1 from '../assets/ecommerce-website.jpg';
import websiteImg2 from '../assets/food-ecommerce.png';
import websiteImg3 from '../assets/website-blog.jpg';

export default function Projects() {
    const config = {
        projects: [

            {
                image: websiteImg1,
                description: 'An Ecommerce website built with MERN stack',
                link: 'https//github.com/jvlcode/jvlcart'
            },
            {
                image: websiteImg2,
                description: 'Food Ecommerce website like Swiggy, built with Angular & .NET',
                link: 'https//github.com/jvlcode/food'
            },
            {
                image: websiteImg3,
                description: 'Basic blog website built with Next.js and MongoDB',
                link: 'https//github.com/jvlcode/blog'
            }
        ]
    };

    return (
        <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id="project">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-[#198319dd] mb-5 w-[140px] font-bold">Projects</h1>
                    <p>
                        These are some of my best projects. I have built these with React, MERN, and vanilla CSS.
                        Check them out.
                    </p>
                </div>
            </div>

            <div className="w-full">
                <div className="flex flex-col md:flex-row px-10 gap-5">
                    {config.projects.map((project) => (
                        <div className="relative">
                            <img className='h-[200px] w-[500px]' src={project.image} alt="Project" />
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                    <div className='flex justify-center'>
                                        <a className='btn' target='blank' href={project.link}>view project</a>
                                    </div>
                            </div>
                        </div>
                        
                    ))}
                </div>
            </div>
        </section>
    );
}
