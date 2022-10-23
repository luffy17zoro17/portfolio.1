import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import SideNav from '../components/SideNav';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState } from 'react';




export default function Home() {

  const [hide,setHide] = useState(true);

  return (
     
     <div className='absolute flex flex-col w-[100%]'>
     <div className='relative'>
      <header className='fixed top-0 left-0 z-20'>
         
         <div className="border-4 border-yellow-300 rounded-xl
          fixed z-50 top-[2.8vmin]
          ml-[1.7vmin] h-[5vmin] w-[16.4vmin]"/> 
          <SideNav/>   
      </header>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="https://iconarchive.com/download/i54293/crountch/one-piece-jolly-roger/Luffys-flag.ico" />
       
      </Head>
      

      <div className='fixed h-screen w-[100%]
        z-10'>
      <Image 
          src="https://images.unsplash.com/photo-1605012464390-45820d1f7bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          layout="fill"
          className="object-cover absolute"  
          alt=""
        />
     
        
        <div className='bg-black opacity-70 absolute flex w-[100%] h-[100%]'/>
        
        <div className='font-bold text-white text-[3rem] pt-[5rem] text-center
         shadow-xl shadow-black absolute w-[100%] flex justify-center
         border-b-[2rem]
         border-x-[4rem] border-yellow-400'>

          <div className='px-[0.3rem] pt-[5rem]'>
            <span className="shadow-lg shadow-cyan-400 text-pink-500 font-mono
          text-[9vmin] tracking-wider
           hover:opacity-80">
            Thomas Mathew</span><span className='text-[3vmin]'><br/>from</span>&nbsp;
             <span className="text-[4vmin] shadow-lg shadow-yellow-400 text-green-200
              hover:opacity-80">
              Kerala, India</span><br/>
             <span className='text-orange-400 italic px-1 text-[4.5vmin]
            shadow-lg shadow-red-400 leading-[1rem] hover:opacity-80'>
            &quot;Enjoys designing website UIs<b className="text-yellow-400">.</b>&quot;

            </span>

          <div className="text-[2.5vmin] absolute left-0 top-[32rem]
          flex justify-center flex-col items-center w-[100%]">  
           <span className='pb-[2vmin]'>I have<b className="text-yellow-400">&nbsp;:</b></span>
           <div className='text-[1.8vmin] pb-[2vmin] leading-[4vmin]'>
           <span className="text-red-500">-{'>'}&nbsp;<b className="text-cyan-400">0</b>
           </span>&nbsp;<span className="">degree certificates</span>&nbsp;<br/>
           <span className='text-red-500'>-{'>'}&nbsp;<b className="text-cyan-400">0</b></span>&nbsp;
           <span className="">work experience</span><br/>
           <span className="text-red-500">-{'>'}&nbsp;<b className="text-green-200">1</b></span>&nbsp;
            <span className="">Diploma - In VFX</span><br/>
           </div>
           but
           <div className='flex h-[2rem] gap-[1.4rem] absolute left-0
           justify-center w-[100%] pl-[7rem] mt-[7.8rem]
           scale-[70%] sm:mt-[13.9rem]'>
           <style>{`
           .cyancircle{
    
                animation-delay: 0.1s;
            }

            .purplecircle{
                animation-delay: 0.2s;
            }

            .pinkcircle{
              
                animation-delay: 0.3s;

            } `}
           </style> 

           <div> 
           <div className='shadow shadow-black rounded-full h-[0.7rem] w-[0.7rem] 
           bg-cyan-400 absolute animate-bounce cyancircle'/>
           </div>


           <div>
           <div className='shadow shadow-black rounded-full
            h-[0.7rem] w-[0.7rem] bg-purple-500 absolute animate-bounce purplecircle'/>
           </div>

           <div>
           <div className='shadow shadow-black rounded-full 
           h-[0.7rem] w-[0.7rem] bg-pink-500 absolute animate-bounce pinkcircle'/>
           </div>

           </div>



          </div>     
          </div> 
          
        </div>
  
      
      </div>


      <div className='z-20 animate-bounce h-[6%] text-violet-500
              font-bold fixed bottom-[3rem] w-[100%] left-0
              flex justify-center items-center
              text-white text-xl'>
              Swipe up&nbsp;<b className='text-green-400'>/</b>&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;
              Scroll down  
          <ArrowDownwardIcon className="text-pink-700 z-40 absolute 
          scale-[180%] shadow-xl shadow-black" 
            fontSize="large"/>
      </div>



      <div className='flex flex-col absolute shadow shadow-black
        w-[100%] z-30 h-[15rem] top-[66rem]'>
        <div className={styles.green}>

         <div className='right-[3rem] absolute z-50 
         shadow-xl shadow-black
         top-[5.7vmin] border-4 cursor-pointer'>
         <button className="w-[100%] px-[3vmin]
          py-[0.4rem] bg-red-500 hover:animate-bounce
         font-mono font-bold text-[2.3vmin]
         " onClick={()=>setHide(!hide)}>
          {hide ? `SHOW` : `HIDE`}</button>
         </div>

         <div className={hide ? `border-l-[4rem] border-r-[2rem]
         border-y-[2rem] border-green-500 drop-shadow-xl relative
         shadow-xl shadow-black h-[54vmin]` : `border-l-[4rem] border-r-[2rem]
         border-y-[2rem] border-green-500 relative
         shadow-xl shadow-black h-[77vmin]` }>

         <div className={hide ? `hidden` : `text-[1.1rem] font-mono 
            absolute z-50 bottom-[-0.7rem]
            scale-[60%] p-4 left-[-3rem]
            lg:left-[0rem]
           flex justify-center flex-col items-center bg-white 
           shadow-lg shadow-black hidden md:flex`}>
            <span className='pb-[0.5rem]'>Im reliving my&nbsp;
             <span className="text-white font-semibold shadow-md shadow-black bg-violet-500">childhood
            </span> with:</span>
              <div className='text-black space-x-[2rem] flex'>
                <div className='h-[4rem] w-[4rem] p-1 shadow-md shadow-black hover:scale-[102%]'>
                <Link href="https://www.w3schools.com/html/">
                  <a className="">
                  <Image 
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"
                   layout="responsive"
                   height={900}
                   width={900}
                   className="object-cover hover:scale-[90%]"
                   alt=""
                   />
                  </a>
                </Link>
                </div>
                <div className='h-[4rem] w-[4rem] p-1 shadow-md shadow-black hover:scale-[102%]'>
                <Link href="https://www.w3.org/Style/CSS/Overview.en.html">
                  <a>
                  <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                    layout="responsive"
                    height={900}
                    width={900}
                    className="object-contain hover:scale-[90%]"
                    alt=""
                  />  
                  </a>
                </Link>
                </div>
                <div className='h-[4rem] w-[4rem] p-1 shadow-md shadow-black hover:scale-[102%]'>
                <Link href="https://tailwindcss.com/"><a>
                  <Image 
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--JXlFx1ne--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/f30hrij5h3j7gt2klbcu.jpg"
                  layout="responsive"
                  height={900}
                  width={900}
                  className="object-cover hover:object-contain"
                  alt=""
                  />
                </a>
                </Link>
                </div>
                <div className='h-[4rem] w-[4rem] p-1 shadow-md shadow-black hover:scale-[102%]'>
                <Link href="https://reactjs.org/"><a>
                  <Image 
                    src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png?fm=webp"
                    layout="responsive"
                    height={900}
                    width={900}
                    className="object-cover hover:scale-[90%]"
                    alt=""
                    
                    />
                </a>
                </Link>
                </div>
                <div className='h-[4rem] w-[4rem] p-1 shadow-md shadow-black hover:scale-[102%]'>
                <Link href="https://nextjs.org/"><a>
                  <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
                  layout="responsive"
                  height={900}
                  width={900}
                  className="object-contain hover:scale-[90%]"
                  alt=""
                  />
                </a></Link>
                </div>
              </div>
          </div>

          <div>
          <div className='absolute shadow-xl shadow-black
          h-[100%] top-0 z-[-10]'/>

          
          
          
          <div className='z-40 top-0 absolute
           bg-gradient-to-r from-purple-500 to-black
          p-4 shadow-xl shadow-black
          h-full
           w-full'>

          

            <span className="font-bold drop-shadow-xl text-[5vmin]"><span className="text-pink-600">B
          </span><span className="text-purple-700">A</span>
            <span className="text-cyan-400">M</span>M!</span> 
             &nbsp;<span className='text-white'>I build these fellas:</span> <br/>
             <div className="absolute flex flex-wrap justify-center items-center
             text-[2.1vmin] text-white px-3 py-2">Prioritize potential over degrees?&nbsp;
             Time to join forces! &nbsp;&nbsp;<b className="bg-gray-500 border shadow shadow-black
              animate-pulse">
               <Link href='/contact'>🤝</Link></b>
             </div>  
             
            <div className='font-bold italic text-center shadow-black text-[3vmin]
             underline underline-offset-[0.4rem] space-y-[1rem] px-[1rem]
             shadow-inner h-[25vmin] flex flex-col justify-center items-center'>
            <div className='text-blue-800 py-[0.2rem] px-[1rem]
             rounded-full decoration-slate-100 
             bg-gradient-to-b from-orange-300 to-blue-200
             shadow-md shadow-black mt-[1rem]
            hover:text-cyan-500 hover:shadow-lg hover:shadow-black'>
             <Link href={`${process.env.PRIVATE_BLIPKAR_KEY}`}>
              <a><b className='text-cyan-500'>#1</b> BLIPKART App&nbsp;(Flipkart inspired)</a>
             </Link>
             </div>
             <div className='py-[0.2rem] rounded-full text-violet-800 
              bg-gradient-to-b from-orange-300 to-red-500
              decoration-slate-100 px-[1rem]
             shadow-md shadow-black
             hover:text-cyan-500 hover:shadow-lg hover:shadow-black'>
             <Link href={`${process.env.PRIVATE_MESL_KEY}`}>
              <a><b className='text-cyan-500'>#2</b> MESLA App&nbsp;(Tesla inspired)</a>
             </Link>
             </div>
             <div className={hide ? `hidden` : `border-y-[5vmin] border-l-[2vmin] border-pink-600 
             shadow-lg shadow-black bg-white rounded-3xl absolute font-light
               z-30 right-[4vmin] bottom-5`}>
              <div className='shadow-inner shadow-black
              text-[1.7vmin] p-[0.1rem]'>
               Ah yes..
               Building Blocks(LEGO)&nbsp;&nbsp;

               <b>-My Childhood</b>
              </div>
             </div>
             </div>

            
          </div> 
          </div> 
          
         
         
        </div>
        </div>
        </div>
      </div>
      </div>
    
  );
}


