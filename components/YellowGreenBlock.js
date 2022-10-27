

const YellowGreenBlock = () => {

    return (
      <div>
        <div className='shadow-inner shadow-black
         absolute flex w-[100%] h-[100%]'/>
        
        <div className='font-bold text-white text-[3rem] pt-[11rem] text-center
         shadow-xl shadow-black absolute w-[100%] flex justify-center
         border-b-[2rem] rounded-b-3xl
         border-x-[1rem] border-gray-300 md:pt-[7rem]'>
           

          <div className='border-[1rem] shadow-xl shadow-black border-black relative
          p-3 rounded-tl-3xl rounded-br-3xl shadow-inner'>
            
            <span className="bg-gradient-to-r from-white to-gray-700 rounded-3xl
            shadow-lg shadow-black text-black font-mono px-[4vw]
          text-[9vmin] tracking-wider
           hover:shadow-purple-700">
            Thomas Mathew</span><span className='rounded-3xl bg-black text-[3vmin]'><br/>from</span>&nbsp;
             <span className="text-[4vmin] shadow-lg shadow-black text-black px-[2vw]
             rounded-3xl bg-gradient-to-r from-white to-gray-700
              hover:shadow-green-700">
              Kerala, India</span><br/>
             <span className='text-black italic px-1 text-[4.5vmin] px-[2vw]
             rounded-3xl bg-gradient-to-r from-white to-gray-700
            shadow-lg shadow-black leading-[1rem] hover:shadow-red-700'>
            <b className='text-black'>&quot;</b>Enjoys designing website UIs<b className="text-red-500">.</b>
            <b className='text-white'>&quot;</b>

            </span>
          </div> 

          <div className="text-[2.5vmin] absolute left-0 top-[32rem]
          flex justify-center flex-col items-center w-[100%] md:top-[28rem]">  
           <span className='mb-[2vmin] rounded-xl bg-white text-black shadow-lg
           shadow-black px-1'>I have<b className="text-red-800">&nbsp;:</b></span>
           <div className='text-[1.8vw] pb-[2vmin] leading-[4vmin] 
           space-x-3 lg:text-[0.8rem]'>
           <span className='bg-white rounded-xl shadow-inner shadow-black p-2'>
           <span className="text-red-500">-{'>'}&nbsp;<b className="text-cyan-400">0</b>
           </span>&nbsp;<span className="rounded-xl text-black">degree certificates</span></span>
           &nbsp;
           <span className='bg-white shadow-inner text-black shadow-black rounded-xl p-2'>
            <span className='text-red-500'>-{'>'}&nbsp;<b className="text-cyan-400">0</b></span>&nbsp;
           <span className="">work experience</span></span>
           <span className='rounded-xl bg-white text-black shadow-inner shadow-black p-2'>
            <span className="text-red-500">-{'>'}&nbsp;<b className="text-green-500">1</b></span>&nbsp;
            <span className="">Diploma - In VFX</span></span><br/>
           </div>
           <span className='border-4 bg-white text-black w-[11vmin] rounded-xl h-[5vmin] 
           shadow-inner shadow-black'>but
           <div className='flex gap-[1.4rem] absolute left-0
           justify-center w-[100%] ml-[3rem]
           scale-[70%]'>
           <style className='shadow-lg shadow-black'>{`
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
           </span>


          </div>     
          </div> 
          
        </div>
      
    );
}


export default YellowGreenBlock;