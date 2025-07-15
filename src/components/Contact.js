import ResumeImg from '../assets/resume.jpg';

export default function Contact(){
    const config ={
        email : 'mskalaiyarasi3@gmail.com',
        phone: '8015288177'
    }
    return <section id='contact' className='flex flex-col  bg-primary px-5 py-32'>
        <div className='flex flex-col items-center text-white'>
       
            <h1 className='text-4xl border-b-4 border-[#11970ff1] mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
            <p className='pb-2' ><span className='font-bold'>Email :</span>{config.email}</p>
            <p className='pb-2'><span className='font-bold'>phone :</span>{config.phone}</p>
        </div>
    </section>

}

