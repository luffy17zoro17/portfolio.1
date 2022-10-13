import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import SideNav from '../components/SideNav';




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      

      <main className="relative flex flex-col justify-center">
      <div className="">
           <div className="border-4 border-yellow-300 rounded-xl
            absolute z-50 top-[0.5rem]
            ml-[0.3rem] h-[3rem] w-[9rem]"/> 
            <SideNav/>   
        </div>
        <div className='z-10 absolute flex w-[100%] h-[40%]
         justify-center items-center text-center z-10
         '>
        <h1 className='font-bold text-white text-[3rem] w-[50%] h-[157%]
         border-x-[3rem] border-yellow-300 absolute z-60 shadow-xl shadow-black'>
          <span className='p-[0.3rem]'><span className="shadow-lg shadow-red-400 text-yellow-400 
          text-[5rem] hover:opacity-80">
            Thomas Mathew<br/></span> -from&nbsp;
             <span className="shadow-xl shadow-cyan-400 text-green-200 hover:opacity-80">
              Kerala, India</span>
             <span className='text-orange-400 italic px-4
            shadow-lg shadow-red-400 hover:opacity-80'><br/>
            "Enjoys designing website UIs<b className="text-yellow-400">.</b>"
          </span>

          <div className="leading-[4rem] pt-[6%]">  
           I have<b className="text-yellow-400">:</b><br/>
           <div className='text-3xl leading-[3rem]'>
           <span className="text-red-500">-{'>'}&nbsp;<b className="text-cyan-400">0</b>
           </span>&nbsp;<span className="">degree certificates</span>&nbsp;<br/>
           <span className='text-red-500'>-{'>'}&nbsp;<b className="text-cyan-400">0</b></span>&nbsp;
           <span className="">work experience</span><br/>
           <span className="text-red-500">-{'>'}&nbsp;<b className="text-green-200">1</b></span>&nbsp;
            <span className="">Diploma - In VFX</span><br/>
           </div> 
           but<br/> 
          </div>     
          </span> 
          <div className='flex w-[14%] h-[2rem] gap-[1.4rem] absolute right-[30%] bottom-[1.1rem]'>
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
           h-[0.7rem] w-[0.7rem] bg-pink-300 absolute animate-bounce pinkcircle'/>
           </div>

           </div>

          <div className='absolute z-[-10] flex flex-col top-0 w-full h-full shadow-2xl shadow-black
          bg-black opacity-70'/>
          
        </h1>
        </div>
        
        <div className="relative h-screen">
        <Image 
          src="https://images.unsplash.com/photo-1605012464390-45820d1f7bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          layout="fill"
          className="object-cover"  
        />

        <div className='absolute w-screen h-screen bg-violet-400 opacity-40 z-0'/>
        
        <div className='flex absolute w-[100%] h-[100%]
         justify-end flex-col items-end'>
        <div className='flex flex-col shadow-2xl shadow-black w-[20%]
         items-end z-0 relative h-[34%]'>
         <div className='text-3xl w-full h-full text-gray-500 shadow-inner shadow-black text-center 
          border-t-[2rem] border-x-[1.9rem] p-4 border-red-400 pt-[2rem] z-50 leading-[4.5rem] font-semibold
          '>
            Ah yes <span className="shadow-lg shadow-black
            bg-red-300">"Building Blocks!"</span>
                 
             <span className="text-violet-500 shadow-lg shadow-gray-700"><br/>-My Childhood</span>        
         </div>

         <div className='bg-white absolute z-10 w-full shadow-2xl shadow-black h-full'/>

        </div>
        </div>
        
        <div className={styles.green}>
        <div className='text-3xl absolute z-40 border-4
         flex flex-col justify-center h-[30%] left-[7%] top-[29rem]
         w-[26%] items-center shadow-2xl shadow-black drop-shadow-2xl'>
          
         <div className='border-l-[4rem] border-r-[2rem]
         border-y-[2rem] border-green-500
         relative w-[100%] shadow-xl shadow-black h-[100%]
          '>
          <div className='z-40 h-full absolute p-4 shadow-xl shadow-black
          '><span className="font-bold text-5xl"><span className="text-pink-300">B
          </span><span className="text-purple-700">A</span>
            <span className="text-cyan-400">M</span>M!</span> I build these 
             fellas: <br/>  

             <div className="absolute text-[1.6rem]">Prioritize potential over degrees?<br/>
             Time to join forces! <b className="bg-gray-500 border shadow shadow-black">🤝</b>
            </div>    
          </div>  
          <div className='z-0 absolute bg-orange-400 h-[100%]
             top-0 w-[100%] blur-3xl
          '/> 
         </div> 
         
        </div>
        </div>
    
      
        
        <div className='w-[100%] flex flex-col items-end justify-end p-2 h-[100%]
        absolute right-[17%]'>
        <div className='z-0 text-2xl text-black w-[30%] border-[2rem] border-cyan-200
         shadow-xl shadow-black absolute h-[22%] flex justify-center items-center'>
          <div className='z-40 text-[1.1rem] font-mono absolute h-[100%] w-full flex justify-center
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
                  />
                </a></Link>
                </div>
              </div>
          </div>
          <div className='absolute bg-white shadow-xl shadow-black
          h-[100%] w-[100%] top-0 z-[-10]'/>
        </div>
        </div>

      
      </div>
      </main>

      <footer className="">
        
      </footer>
    </div>
  )
}



