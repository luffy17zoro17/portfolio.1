import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import SideNav from '../components/SideNav';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';




export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      

      <main className="relative">
      <div className="">
           <div className="border-4 border-yellow-300 rounded-xl
            fixed z-50 top-[0.5rem]
            ml-[0.3rem] h-[3rem] w-[9rem]"/> 
            <SideNav/>   
        </div>

        
      <div className="h-[63rem] relative w-[100%]">
        <Image 
          src="https://images.unsplash.com/photo-1605012464390-45820d1f7bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          layout="fill"
          className="object-cover"  
          alt=""
        />

      <div className='absolute h-[44rem] flex flex-col justify-center z-10 flex w-[100%]
         text-center top-0 border-x-[3rem] border-yellow-300 md:h-[42rem]'>
        <div className='font-bold text-white text-[3rem]
         shadow-xl shadow-black'>
          <div className='px-[0.3rem] top-[12rem] absolute w-[100%] md:top-[8rem]'>
            <span className="shadow-lg shadow-cyan-400 text-pink-600 
          text-[3rem] hover:opacity-80 md:text-[4rem]">
            Thomas Mathew</span><span className='text-xl'><br/>from</span>&nbsp;
             <span className="text-2xl shadow-lg shadow-yellow-400 text-green-200
              hover:opacity-80 md:text-3xl">
              Kerala, India</span><br/>
             <span className='text-orange-400 italic px-1 text-2xl
            shadow-lg shadow-red-400 leading-[1rem] hover:opacity-80 md:text-4xl'>
            &quot;Enjoys designing website UIs<b className="text-yellow-400">.</b>&quot;

            </span>

          <div className=" text-2xl leading-[3rem] pt-6 md:text-[1.6rem] md:pt-10">  
           I have<b className="text-yellow-400">:</b><br/>
           <div className='text-lg leading-[3rem] md:text-xl md:leading-[3rem]'>
           <span className="text-red-500">-{'>'}&nbsp;<b className="text-cyan-400">0</b>
           </span>&nbsp;<span className="">degree certificates</span>&nbsp;<br/>
           <span className='text-red-500'>-{'>'}&nbsp;<b className="text-cyan-400">0</b></span>&nbsp;
           <span className="">work experience</span><br/>
           <span className="text-red-500">-{'>'}&nbsp;<b className="text-green-200">1</b></span>&nbsp;
            <span className="">Diploma - In VFX</span><br/>
           </div> 
           but
          </div>     
          </div> 
          <div className='flex w-[100%] h-[2rem] gap-[1.4rem] absolute 
                   justify-center pl-[7.3rem]
          top-[40.3rem] scale-[70%] md: md:top-[39rem]'>
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

          <div className='absolute z-[-10] flex flex-col items-center 
          top-0 w-[100%] h-full shadow-2xl shadow-black justify-center
          bg-black opacity-80'/>
          
        </div>
        </div>
        
      
        <div className='absolute z-40 animate-bounce h-[6%] top-[45rem]
         flex justify-start flex-col items-center w-[30rem] text-pink-700 
         md:top-[47rem] md:left-[9rem] lg:left-[0rem]'>
          <ArrowDownwardIcon className="z-40 absolute scale-[180%]" 
          fontSize="large"/>
        </div>
        


        <div className={styles.green}>
        <div className='text-xl absolute border-4 w-[100%]
         flex flex-col justify-center h-[33%] left-[0%] 
         top-[44rem] items-center shadow-2xl shadow-black 
         drop-shadow-2xl md:top-[42rem]
          '>
          
         <div className='border-l-[4rem] border-r-[2rem]
         border-y-[2rem] border-green-500
         relative w-full shadow-xl shadow-black h-[100%]
          '>
          <div className='z-40 h-full absolute p-4 shadow-xl shadow-black
           md:w-[90%]
          '><span className="font-bold text-5xl"><span className="text-pink-600">B
          </span><span className="text-purple-700">A</span>
            <span className="text-cyan-400">M</span>M!</span> 
             &nbsp;I build these fellas: <br/>
            
            <div className='font-bold italic text-center shadow-black 
             underline underline-offset-[0.4rem]
             shadow-inner space-y-5 h-[8rem] flex flex-col justify-center
             lg:text-start lg:pl-5 xl:pl-[7rem]'>
            <div className='text-blue-600 decoration-slate-100
             hover:shadow hover:shadow-black 
            hover:text-cyan-500'>
             <Link href={`${process.env.PRIVATE_BLIPKAR_KEY}`}>
              #1 BLIPKART App&nbsp;(Flipkart inspired)
             </Link>
             </div>
             <div className='text-violet-900 decoration-slate-100
             hover:shadow hover:shadow-black
             hover:text-cyan-500'>
             <Link href={`${process.env.PRIVATE_MESL_KEY}`}>
              #2 MESLA App&nbsp;(Tesla inspired)
             </Link>
             </div>
             </div>


             <div className="absolute text-[1.2rem]">Prioritize potential over degrees?<br/>
             Time to join forces! <b className="bg-gray-500 border shadow shadow-black
              animate-pulse">
               <Link href='/contact'>🤝</Link></b>
            </div>    
          </div>  
          <div className='z-0 absolute bg-orange-400 h-[100%]
             top-0 w-[100%]
          '/> 
         </div> 
         
        </div>
        </div>
        

       
        <div className='flex flex-col absolute right-0 bottom-10
         w-[30%] z-10 shadow-xl shadow-black
         justify-end flex-col items-end hidden md:flex md:scale-[60%] lg:bottom-[8rem]'>
        <div className='flex flex-col shadow-2xl shadow-black w-[100%]
         items-end z-0'>
         <div className='text-3xl w-full h-full text-gray-500 
         shadow-inner shadow-black text-center 
          border-t-[2rem] border-x-[1.9rem] p-4 border-red-400
           pt-[2rem] z-50 leading-[3.5rem] font-semibold
          '>
            Ah yes <span className="shadow-lg shadow-black
            bg-red-300">&quot;Building Blocks!&quot;</span>
                 
             <span className="text-violet-500 shadow-lg shadow-gray-700"><br/>-My Childhood</span>        
         </div>

         <div className='bg-white absolute
         w-[99%] shadow-2xl shadow-black h-full'/>

        </div>
        </div>
      
        
        
    
        <div className='text-2xl text-black z-30 w-[38rem]
         border-[2rem] border-cyan-200 right-0 bottom-[-3rem]
         shadow-xl shadow-black absolute h-[22%] hidden 
         lg:flex lg:scale-[68%] lg:bottom-[0rem]'>
          <div className='text-[1.1rem] font-mono absolute h-[100%] w-full flex justify-center
          flex-col items-center'>
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
          <div className='absolute bg-white shadow-xl shadow-black
          h-[100%] w-[99%] top-0 z-[-10]'/>
        </div>
      

      
      </div>
      </main>
    </div>
  )
}



