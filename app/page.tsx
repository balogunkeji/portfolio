'use client';
import {Header} from "../components/pageLayout/header";
import {About, Experience, TechnicalSkills} from "../components/pageLayout/homePage";


export default function Home() {
  return (
      <main className="w-full h-full">
        <section className='video-container px-[4%]'>
            <Header/>
            <div className='w-full flex justify-center items-center mt-[10%]'>
                <div className='w-full flex flex-col '>
                    <div className={'flex items-center justify-start gap-[20px]'}>
                        <p className={'text-[5em] italic'}>I&#39;m a</p>
                        <h2 className={'cursor-target text-[9.5em]'}>FRONTEND</h2>
                    </div>
                    <div className={'flex items-center justify-end'}>
                        <h2 className={'cursor-target text-[9.5em]'}>ENGINEER</h2>
                    </div>
                </div>
            </div>
            </section>
            <About/>
            <TechnicalSkills />
            <Experience/>
          <section className={''}>
              <h1>

              </h1>
          </section>
      </main>
  );
}
