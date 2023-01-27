


const GrayBlackBlock = () => {

    return (
    
            
          <div className="w-[100%] bg-transparent font-sans
          z-30 
          h-screen absolute flex flex-col items-center justify-center">
           <div className="bg-gradient-to-t
            from-red-500 via-black to-transparent
           border-x-[1rem] border-t-[0rem] border-red-600
           rounded-full text-center p-[3rem] shadow-xl
            shadow-black md:border-x-[2rem] lg:border-x-[4rem]
            "> 
            <div className="font-bold w-[70vw] text-pink-200">
             <div>
               <h1 className="text-[2rem] sm:text-[5vw]
                shadow-black hover:bg-black cursor-pointer
                 rounded-b-full ">Thomas Mathew</h1>
               <i className="cursor-pointer 
               text-[1.1rem] sm:text-[2.3vw] font-medium shadow-inner shadow-black 
               rounded-bl-full pl-5 py-1 px-[2vw] xl:pl-11 hover:bg-blue-700">From</i>
               <span className="text-[1.2rem] sm:text-[3.1vw] 
               shadow-inner shadow-black rounded-br-full 
                px-[3vw] py-1 pr-5 cursor-pointer
                  hover:bg-green-700 xl:pr-11"> Kerala, India.</span>
             </div>
             <div className="text-[4.8vw] shadow-inner shadow-black text-black
               bg-gradient-to-r from-white to-gray-500 rounded-b-full cursor-pointer
              px-[3vw] hover:bg-yellow-400 border-y-[0.4rem] lg:border-y-[1rem] hover:animate-bounce">
               Enjoys designing Web UI&apos;s
             </div>
              
            </div> 
              <div className="pt-[2rem] font-sans text-gray-300">
                <i>Let my projects do the talking</i><br/>
                <b className="text-[3rem]">⇩</b>
              </div>
           </div> 
          </div>   
    );
}


export default GrayBlackBlock;