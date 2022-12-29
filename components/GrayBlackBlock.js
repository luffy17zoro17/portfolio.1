


const GrayBlackBlock = () => {

    return (
    
            
          <div className="bg-white w-[100%] bg-transparent font-serif
          h-screen absolute flex flex-col items-center justify-center">
           <div className="bg-gradient-to-t from-black via-red-500 to-transparent
           border-x-[1rem] border-t-[0rem] border-black
           rounded-b-full text-center p-[3rem] shadow-lg
            shadow-black md:border-x-[2rem] lg:border-x-[4rem]
            "> 
            <div className="font-bold w-[70vw] text-pink-200">
             <div>
               <h1 className="text-[2rem] sm:text-[5vw]
                shadow-inner shadow-black hover:bg-black 
                 rounded-b-full border-t-0 border">Thomas Mathew</h1>
               <i className="text-[1.1rem] sm:text-[2.3vw] font-medium shadow-inner shadow-black 
               rounded-bl-full pl-5 py-1 px-[2vw] hover:bg-blue-700">From</i>
               <span className="text-[1.2rem] sm:text-[3.1vw] shadow-inner shadow-black rounded-br-full 
                px-[3vw] py-1 pr-5
                  hover:bg-green-700"> Kerala, India.</span>
             </div>
             <div className="text-[4.8vw] shadow-inner shadow-black text-black
               bg-gradient-to-r from-white to-gray-500 rounded-b-full
              px-[3vw] hover:bg-yellow-400 border-4 hover:animate-bounce">
               Enjoys designing Web UI&apos;s
             </div>
              
            </div> 
              <div className="pt-[2rem] font-sans text-gray-300">
                <i>Let my projects do the talking</i><br/><b className="text-[3rem]">⇩</b>
              </div>
           </div> 
          </div>   
    );
}


export default GrayBlackBlock;