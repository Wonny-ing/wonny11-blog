import Hero from '@/components/Hero';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import ProfileImage from 'public/images/wonny2.jpeg';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Wonny 커리어 소개',
};

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
        <div>
          <Image
            className='mx-auto rounded-full'
            src={ProfileImage}
            alt='Picture of avatar'
            width={250}
            height={250}
            priority
          />
        </div>
        <div>
          <h2 className={TITLE_CLASS}>Who Am I?</h2>
          <p>
            반갑습니다.
            <br />
            저는 홍혜원입니다.
          </p>
          <h2 className={TITLE_CLASS}>Career</h2>
          <p>
            컴퓨터과학과 졸업
            <br />
            웹기획자 인턴
            <br />
            패캠 프론트엔드 과정 3기
          </p>
          <h2 className={TITLE_CLASS}>Skills</h2>
          <p>
            React, JavaScript, TypeScript
            <br />
            Git, Clean Code
          </p>
        </div>
      </section>
    </>
  );
}
