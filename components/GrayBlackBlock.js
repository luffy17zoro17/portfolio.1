import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectScroll } from "../reducers/autoScroll/autoScroll";
import { loadChange, selectLoading } from "../reducers/Loading/loadingSlice";



const GrayBlackBlock = () => {


    const loadValue = useSelector(selectLoading);

    const autoScrollValue = useSelector(selectScroll);

    const dispatch = useDispatch();

   
  

    useEffect(()=>{
      if(loadValue===0){
      
         dispatch(loadChange());
      } 
      

    },[loadValue]);

    return (
    
            
          <div className="w-[100%] bg-transparent font-sans
          z-30 top-0 h-screen absolute w-full
          flex flex-col items-center justify-center
          ">
            
           <div className={`bg-gradient-to-t border-dashed
            from-red-500 via-black to-transparent w-full
           border-x-[1rem] border-b-[0.5rem] border-pink-300
           rounded-full text-center px-[3rem]
           ease-in
           transition delay-120 duration-300
            py-3 shadow-lg hover:shadow-pink-300
            md:hover:shadow-xl md:hover:shadow-pink-300
            shadow-black md:w-[90%]
            lg:border-x-[4rem]
            xl:w-[70rem]
            
            ${(loadValue===0) ? `rotate-180 blur-3xl` : `rotate-0`}`}> 
        
             <div className="space-y-3 font-bold text-pink-200
               sm:text-3xl md:space-y-6 lg:space-y-7 xl:space-y-8">
               <h1 className="text-3xl 
               transition delay-120 duration-300
               sm:text-5xl
               lg:text-6xl xl:text-7xl
                shadow-black hover:bg-black
                hover:shadow-md hover:shadow-black cursor-pointer
                 rounded-b-full">Thomas Mathew</h1>

              <div className="flex justify-center rounded-b-full
                ">   
               <div className="cursor-pointer rounded-bl-full italic
               font-medium shadow-black shadow-inner px-4
               transition delay-120 duration-300
               hover:bg-blue-700">From</div>

               <div className="px-4
                  shadow-black shadow-inner rounded-br-full
                 cursor-pointer transition delay-120 duration-300
                  hover:bg-green-700"> Kerala, India.</div>
              </div>   

            
             <div className="shadow-inner shadow-black text-black text-xl
             transition delay-120 duration-300
               bg-gradient-to-r from-white to-gray-500 rounded-b-full 
               cursor-pointer
              hover:bg-yellow-400 border-y-[0.4rem] sm:text-4xl 
              lg:text-5xl lg:border-y-[1rem]
              xl:text-6xl 
              hover:animate-bounce
               ">
               Enjoys designing Web UI&apos;s
             </div>
            
              
          
              <div className="font-sans text-gray-300 text-xl">
                <div className="font-mono font-light italic text-sm
                  xl:text-lg">
                   Let my projects do the talking</div>
                <div>⇩</div>
              </div>
            </div>  
           </div> 
          </div>   
    );
}


export default GrayBlackBlock;