import Image from 'next/image';
import ProfileImage from '../../public/images/wonny2.jpeg';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='text-center '>
      <Image
        className='mx-auto rounded-full'
        src={ProfileImage}
        alt='Picture of avatar'
        width={250}
        height={250}
        priority
      />
      <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm Wonny"}</h2>
      <h3 className='text-xl font-semibold'>Full-stack Engineer</h3>
      <p>결과를 만들어내기 위한 끈기와 완주력을 갖춘 개발자</p>
      <Link href='/contact'>
        <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>
          Contact Me
        </button>
      </Link>
    </section>
  );
}
