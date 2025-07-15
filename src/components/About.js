import AboutImg from '../assets/about.jpg';

export default function About(){
    const config = {
        line1: 'I am Kalaiyarasi, a Computer Science Engineering student passionate about full stack development',
        line2: 'I enjoy building user-friendly web apps using HTML, CSS, Javascript, React,and backend tools like Node.js and MySQL',
        line3: 'I am eager to learn, grow, and create innovative tech solutions'

    }
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
    <div className='py-20 md:w-1/2 flex justify-center'>
        <img className='w-1/2 h-auto' src={AboutImg} />
    </div>
    <div className='md:w-1/2 flex justify-center text-white'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl border-b-4 border-[#0cf60cdd] mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
        
        </div>
    </div>
    </section>

}