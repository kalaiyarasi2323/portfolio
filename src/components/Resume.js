import ResumeImg from '../assets/resume.jpg';

export default function Resume(){
    const config ={
        link: 'https://www.africau.edu/imgages/default/sample.pdf'
    }
    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
    <div className='py-20 md:w-1/2 flex justify-center'>
        <img className='w-[400px]' src={ResumeImg} />
    </div>
    <div className='md:w-1/2 flex justify-center text-white'>
        <div className='flex flex-col justify-center'>
        <h1 className='text-4xl border-b-4 border-[#0cf60cdd] mb-5 w-[140px] font-bold'>Resume</h1>
        <p className='pb-5'>you can view my resume <a className='btn' href={config.link}>Download</a></p>
        </div>
    </div>
    </section>

}