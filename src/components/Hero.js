import HeroImg from '../assets/hero.jpg';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: 'I\'m a full-stack developer and designer',
        social: {
            twitter: 'https://twitter.com',
            facebook: 'https://facebook.com',
            linkedin: 'https://linkedin.com'
        }
    };

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center items-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-white text-6xl font-hero-font mb-4'>
                    Hi, <br />
                    <span className='text-black'>I'm MS Kalaiyarasi</span>
                </h1>
                <p className='text-2xl text-white'>{config.subtitle}</p>

                <div className='flex py-10'>
                    <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
                    <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40} /></a>
                    <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
                </div>
            </div>

            <img className='md:w-1/4 mt-10 md:mt-0' src={HeroImg} alt="Hero" />
        </section>
    );
}
