import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';




const ScrollSwipeArrow = () => {

    return (
      <div>
        <div className='z-20 animate-bounce h-[6%] 
              font-bold fixed bottom-[3rem] w-[100%] left-0 
              flex justify-center items-center 
               text-lg lg:text-xl'>
              <span className="bg-gray-200 rounded-xl shadow-inner border-4 border-black 
              shadow-black px-[0.5vw]">
                Swipe&nbsp;</span><b className='text-green-400 text-[1.8rem]'>&nbsp;/&nbsp;</b>&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;
              <span className='rounded-xl bg-gray-200 shadow-inner border-4 
              border-black shadow-black px-[0.5vw]'>
                Scroll</span>  
          <ArrowDownwardIcon className="text-pink-700 z-40 absolute 
          scale-[180%] shadow-xl shadow-black" 
            fontSize="large"/> 
        </div>

      </div>  
    );
}


export default ScrollSwipeArrow;