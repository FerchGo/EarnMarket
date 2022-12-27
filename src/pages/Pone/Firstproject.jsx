import React from 'react'
import imgge from '../../assets/imgs/coverbaner.jpg';
import imgge2 from '../../assets/imgs/react-ecommerce-tutorial.webp';

const Firstproject = () => {
  return (
    <React.Fragment>
      <article className='nextra-body relative pb-8 w-full max-w-full flex min-w-0 pr-[calc(env(safe-area-inset-right)-1.5rem)] nextra-body-typesetting-default'>
           <main className='changeame mx-auto max-w-4xl px-6 md:px-8 pt-4 z-10 min-w-0 w-full'>
             <div className='nextra-breadcrumb text-sm font-normal flex mt-2.5 text-gray-500 transition-colors cursor-default overflow-hidden'>
               <div className='transition-colors hover:text-gray-900 dark:hover:text-gray-200 text-ellipsis whitespace-nowrap overflow-hidden min-w-[24px]'>
                 All Articles
               </div>
               <span className='mx-2 select-none'>/</span>
               <div className='transition-colors hover:text-gray-900 dark:hover:text-gray-200 text-gray-600 dark:text-gray-400 active'>
                 Introduction
               </div>
             </div>
           <h1>Why an Ecommerce?</h1>
             <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={imgge} alt="img" className="will-change animate-pulse" height="500" width="800"/>
               </div>
             </div>
             <h2>
               <span className="subheading-anchor" id="Summary"></span>
               <a href="#Summary" className="anchor text-current no-underline no-outline">Summary<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             The ecommerce is one of the most common React web application a developer can be asked to build. Here is why knowing how to properly craft an ecommerce application from the ground up can be considered a crucial skill. Over the last few years, several libraries have been built to help developers reach this goal effortlessly. 
             Specifically, Snipcart is the solution you are looking for. Not only does it allow you to set up an ecommerce in a few minutes, but it is also a secure, reliable, and advanced solution.
             Read this article instead, if you want to build a <code>Next.js</code> ecommerce.
             </p>
             <br></br>
           <h1>Test your ecommerce website now</h1>
             <h2>
               <span className="subheading-anchor" id="Suggestion"></span>
               <a href="#Suggestion" className="anchor text-current no-underline no-outline">Suggestion<span className="anchor-icon" aria-hidden="true">#</span></a>
             </h2>
             <p>
             If you don't want to read the whole article and just want to get started, you can install this project on your <code>DatoCMS</code> account right away, by clicking on the button. This action will:
             <li>Clone a GitHub repo with a fully working example of a simple ecommerce, written in <code>React</code> and <code>Typescript.</code></li>
             <li>Copy our DatoCMS template project to your DatoCMS account.</li>
             <li>Deploy on <code>Vercel</code> or <code>Netlify</code> your newly created ecommerce.</li>
             </p>
            <div className="w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
               <div className="w-auto grid grid-cols-1">
                 <img src={imgge2} alt="img" className="will-change animate-bounce" height="100" width="400"/>
               </div>
             </div>
             <div className='mt-16'></div>
             <div
               className='nextra-navigation-links pt-8 mb-8 border-t dark:border-neutral-800 flex flex-row items-center justify-between'
             >
               <div className='flex-1 min-w-0'></div>
               <div className='flex-1 min-w-0 text-right'>
                 <a
                   className='w-full text-lg font-medium p-4 -m-4 no-underline transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-primary-500 hover:text-primary-500 inline-flex items-center justify-end rounded ml-2'
                   title='Earn Market'
                   href='/Secondproject'
                   >⏱ Earn Market <svg
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                     height='24'
                     className='transform inline flex-shrink-0 ml-1'
                   >
                     <path
                       stroke-linecap='round'
                       stroke-linejoin='round'
                       stroke-width='2'
                       d='M9 5l7 7-7 7'
                     ></path></svg></a>
               </div>
             </div>
           </main>
           <div className='nextra-toc w-64 hidden xl:block text-sm px-4'>
             <div
               className='nextra-toc-content overflow-y-auto pr-4 -mr-4 sticky max-h-[calc(100vh-4rem-env(safe-area-inset-bottom))] top-16 pt-8'
             >
               <ul>
                 <p className='font-semibold tracking-tight mb-4'>
                   On This Page
                 </p>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Summary'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Summary</a>
                 </li>
                 <li className='scroll-py-6 scroll-my-6'>
                   <a
                     href='#Suggestion'
                     className='no-underline inline-block font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                     >Suggestion</a>
                 </li>
               </ul>
               <div className='nextra-toc-meta border-t mt-8 pt-8 shadow-[0_-12px_16px_white] dark:shadow-[0_-12px_16px_#111] bg-white dark:bg-dark sticky pb-8 bottom-0 dark:border-neutral-800'> 
               </div>
               </div>
             </div>
        </article>
    </React.Fragment>
  )
}

export default Firstproject
