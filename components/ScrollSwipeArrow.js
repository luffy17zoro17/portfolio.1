import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';




const ScrollSwipeArrow = () => {

    return (
      <div>
        <div className='z-30 animate-bounce h-[6%] 
              font-bold fixed bottom-[3rem] w-[100%] left-0 
              flex justify-center items-center 
               text-lg lg:text-xl'>
              <span className="bg-pink-300 rounded-bl-full
               shadow-inner outline pl-5 outline-pink-300
              shadow-black px-[0.5vw]">
                Swipe</span>
                
                <ArrowDownwardIcon className="text-cyan-400
                 bg-gradient-to-t
                 from-red-500 via-black to-transparent
                 z-40 absolute border-y
               scale-[180%] shadow-xl shadow-black rounded-full" 
               fontSize="large"/>   


              <span className='rounded-xl bg-pink-300 shadow-inner outline
               rounded-br-full outline-pink-300
               shadow-black px-[0.5vw] pr-5 ml-[6rem]'>
                Scroll</span>  
          
        </div>

      </div>  
    );
}


export default ScrollSwipeArrow;