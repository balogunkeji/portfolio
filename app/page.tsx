import {Header} from "../components/pageLayout/header";
import FancyButton from "../components/pageLayout/fancyBtn";

const works = [
    {
       h1: 'BRANE',
       img: ''
    },
    {
      h1: 'TAILORING HUB' ,
      img: 'TAILORING HUB',
    },
    {
        h1: 'FILMMAKERSMART',
        img: 'FILMMKERSMART' ,
    },
    {
        h1: 'RILTEE',
        img: 'RILTEE',
    },
    {

    },
]

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
          <section className='w-full flex justify-center flex-col gap-[40px] items-center px-[15%] py-[10%]'>
              <p className={'text-[28px] text-center'}>I&#39;m a
                  I’m a Frontend Engineer with 3 years of experience in JavaScript, specializing in writing and refactoring code and connecting RESTful APIs. Over the years, I’ve worked with frameworks such as React, and React-Native, and have gained experience with a variety of other stacks, which has allowed me to adapt to different project requirements.
                  Currently, I’m working at Consonance, where I continue to deepen my expertise in frontend technologies.
              </p>
              <div className="flex items-center justify-center gap-[20px] w-full">
                  <FancyButton text="Know more" variant="filled" />
                  <FancyButton text="Contact" variant="outline" />
              </div>
          </section>
          <section className={'stacks'}>

          </section>
          <section className={''}>
              <h1>

              </h1>
          </section>
      </main>
  );
}
