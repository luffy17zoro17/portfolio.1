
import { useSelector } from "react-redux";

import { selectLoading } from "../reducers/Loading/loadingSlice";



const GrayBlackBlock = () => {


    const loadValue = useSelector(selectLoading);

    return (
    
            
          <div className="w-[100%] bg-transparent font-sans
          z-30 top-0 h-screen absolute
          flex flex-col items-center justify-center
          ">
            
           <div className={`bg-gradient-to-t
            from-black via-transparent to-transparent
            border-dashed px-[1.5rem]
          
           border-x-[2rem] border-b-[0.5rem] border-yellow-300
           rounded-full text-center ease-in
           transition delay-120 duration-300
            py-3 shadow-lg hover:shadow-yellow-300
            md:hover:shadow-xl md:hover:shadow-yellow-300
            shadow-black md:w-[90%] md:border-x-[3rem] 
            lg:border-x-[4rem] xl:w-[70rem]    
            ${(loadValue===0) ? `translate-y-[4rem] text-purple-700
             border-purple-700 border-dotted
             ` : `translate-y-0 blur-none text-yellow-300`}`}> 

             <div className="z-[-10] absolute rounded-full
             bottom-0 top-0 right-0 drop-shadow-xl
             left-0 w-full shadow-lg shadow-black"/>
        
             <div className="space-y-3 font-bold
               sm:text-3xl md:space-y-6 lg:space-y-7 xl:space-y-8">
               <h1 className="text-3xl 
               transition delay-120 duration-300
               sm:text-5xl
               lg:text-6xl xl:text-7xl
                shadow-black hover:bg-black
                hover:shadow-md hover:shadow-black cursor-pointer
                 rounded-bl-full rounded-tr-full">Thomas Mathew</h1>

              <div className="flex justify-center
                ">   
               <div className="cursor-pointer rounded-bl-full italic
               font-medium shadow-black shadow-inner px-4
               transition delay-120 duration-300 bg-black
               hover:bg-blue-700">From</div>

               <div className="px-4
                  shadow-black shadow-inner rounded-tr-full
                  bg-black
                 cursor-pointer transition delay-120 duration-300
                  hover:bg-green-700"> Kerala, India.</div>
              </div>   

            
             <div className={`shadow-inner shadow-black text-black text-xl
             transition delay-120 duration-300 ease-in
               bg-gradient-to-r from-white to-gray-500 rounded-bl-full
               rounded-tr-full px-[2rem] italic
               cursor-pointer
              hover:bg-yellow-400 border-y-[0.4rem] sm:text-4xl 
              lg:text-5xl lg:border-y-[1rem]
              xl:text-6xl 
              hover:animate-bounce
              ${loadValue=== 0 ? `bg-gradient-to-r from-gray-800 to-black 
              border-purple-700 text-purple-700
                ` : ``}`}>
               Enjoys Design/Dev. UI UX
             </div>
            
              
          
              <div className="font-sans text-gray-300">
                <div className="font-mono font-light italic text-xs
                  md:text-sm xl:text-lg">
                   Let my projects do the talking</div>
                <div className="text-xl">⇩</div>
              </div>
            </div>  
           </div> 
          </div>   
    );
}


export default GrayBlackBlock;