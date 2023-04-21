import Hero from '@/components/Hero';
import { Metadata } from 'next';
import React from 'react';

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
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          취뽀하고 싶은 예비 개발자데스
          <br />올 해 생일 전까지 취뽀 가능할까요?
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
          React, Vue, Node
          <br />
          Git, Clean Code
          <br />
          VS Code, IntelliJ, MongoDB
        </p>
      </section>
    </>
  );
}
