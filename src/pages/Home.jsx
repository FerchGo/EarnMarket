import React from 'react'
import videinio from '../assets/imgs/patati.mp4'

function Home() {
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
                 Home
               </div>
             </div>
       <h1>Webpage Summary </h1>
             <div className='w-auto px-2 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8'>
               <div className='w-auto grid grid-cols-1'>
                 <video src={videinio} alt='video/mp4' className='will-change' autoPlay='autoplay' loop='loop' muted='muted' playsInline='playsinline' height='500' width='800' style={{position:'relative'}}/>
                    <h1 decorator='inlineTextEditable' contenteditable='false' className='capa mr-4 hidden md:inline-block' data-text-keypath='customizations.masthead.title.text' value='Web Development'>Web Development & E-business Design </h1>
                    <h2 decorator='inlineTextEditable' contenteditable='false' className='capa1 mr-4 hidden md:inline-block' data-text-keypath='customizations.masthead.title.text' value='Web Development'> Earn-Market </h2>
               </div>
             </div>
             <h2>
               <span className='subheading-anchor' id='Summary'></span>
               <a href='#Summary' className='anchor text-current no-underline no-outline'>Summary<span className='anchor-icon' aria-hidden='true'>#</span></a>
             </h2>
             <p>
             This website is about the React library and other code languages and useful code things for who is learning from scratch, as an empirical front-end developer I wanted to make this website to show that everyone who is interested in lear new technologies, they will have access to all sort of code material on internet for free then just you've got to have willingness to learn. React is a JavaScript library for building user interfaces. 
             It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of <code>single-page</code> or <code>mobile applications</code>. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. 
             <code>Redux</code> and <code>React Router</code> are respective examples of such libraries.
             </p>
             <p>
             Also this website is intended to show an entrepreneural e-business called <code>Earn Market</code> which is a website to promote an e-business company and brand to help other business get in to the e-business and new platforms to make trade and transactions.
             </p>
             <br>
             </br>
            <h1>Does matter if i type wrong code but the appliction works properly?</h1>
             <h2>
               <span className='subheading-anchor' id='Suggestion'></span>
               <a href='#Suggestion' className='anchor text-current no-underline no-outline'>Suggestion<span className='anchor-icon' aria-hidden='true'>#</span></a>
             </h2>
             <p>
             It doen't matter at all while you are learning from scratch then you don't need to be worried about make mistakes or type with the right semantic, because you are learning, then you with the time will earn more skills and will type appropriate and then it will matter because you have to make your code readable. Take in consideration the follows advice:
             <li>Clone a GitHub repo with a fully working example of a simple ecommerce, written in React and Typescript.</li>
             <li>Copy our <code>DatoCMS</code> template project to your DatoCMS account.</li>
             <li>Deploy on <code>Vercel</code> or <code>Netlify</code> your newly created ecommerce.</li>
             </p>
             <div
               className='nextra-navigation-links pt-8 mb-8 border-t dark:border-neutral-800 flex flex-row items-center justify-between'
             >
               <div className='flex-1 min-w-0'></div>
               <div className='flex-1 min-w-0 text-right'>
                 <a
                   className='w-full text-lg font-medium p-4 -m-4 no-underline transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-primary-500 hover:text-primary-500 inline-flex items-center justify-end rounded ml-2'
                   title='START'
                   href='/Introduction'
                   > Start the trip <svg
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

export default Home
