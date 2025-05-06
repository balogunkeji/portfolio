import {Header} from "../components/pageLayout/header";

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
              <div className={'flex items-center justify-center gap-[20px] w-full'}>
                  <div
                      className={'relative inline-flex items-center justify-center group w-full max-w-[300px] h-[60px] bg-[#fff] rounded-[24px] px-[16px]'}>
                      <div className={'flex transition-opacity duration-300 group-hover:opacity-0 text-center text-[#000] items-center justify-between w-full'}>
                          <span>Know more</span>
                          <svg className="btn-arrow" xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 24 24" fill="none">
                              <path d="M1.5 22.0833L22.0833 1.5M22.0833 1.5V21.26M22.0833 1.5H2.32333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                      </div>
                      <div className={' px-[16px] absolute inset-0 opacity-0 text-[#000] group-hover:opacity-100 transition-transform duration-300 group-hover:-translate-y-1/4 flex justify-between items-center w-full'}>
                          <span>Know more</span>
                          <svg className="btn-arrow" xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 24 24" fill="none">
                              <path d="M1.5 22.0833L22.0833 1.5M22.0833 1.5V21.26M22.0833 1.5H2.32333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                      </div>

                  </div>
                  <div className={'relative inline-flex items-center justify-center group w-full max-w-[300px] h-[60px] bg-transparent border border-[#fff] rounded-[24px] px-[16px]'}>
                      <div className={'flex justify-between items-center w-full'}>
                          <span>Contact</span>
                          <svg className="btn-arrow" xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 24 24" fill="none">
                              <path d="M1.5 22.0833L22.0833 1.5M22.0833 1.5V21.26M22.0833 1.5H2.32333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                      </div>
                  </div>
              </div>
          </section>
      </main>
  );
}
