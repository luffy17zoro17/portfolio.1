import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useDispatch, useSelector } from 'react-redux';
import { scrollChange, scrollDown, scrollUp, selectScroll } from '../reducers/autoScroll/autoScroll';

import TextProp from "../components/props/TextProp";


const ScrollSwipeArrow = () => {
    
    const autoScrollValue = useSelector(selectScroll);
    const dispatch= useDispatch();

    return (
      <div className=' transition delay-120 duration-300
            fixed h-[4rem] z-30 bottom-[1rem]
             w-screen md:ml-[10rem] lg:ml-0 lg:bottom-[3rem]'>

        <div>      
        
        <div onClick={autoScrollValue===0 ? ()=>dispatch(scrollDown()) : 
           ()=>dispatch(scrollUp())} className='
              font-bold w-[100%] left-0 transition delay-120 duration-300
              flex justify-center cursor-pointer
               text-lg lg:text-xl'>
              
                
                <TextProp title={autoScrollValue===0 ? `Down` : `Up`} 
                  titleClassN={` `}
                   details={`➤`} detailClassN={`text-xl
                   ${autoScrollValue===0 ? `rotate-90` : `-rotate-90`}`}
                   textDivClassN={`bg-gradient-to-t
                   from-red-500 via-black to-transparent
                   z-40 absolute border-4 text-center border-pink-300
                  
                    hover:border-cyan-400 hover:border-dotted
                   
                   justify-center items-center animate-bounce
                   px-3 py-2 transition delay-120 duration-300
                    active:blur-md text-pink-300
                     shadow-xl shadow-black rounded-full hover:text-cyan-400
                     ${autoScrollValue===0 ? `flex flex-col px-[0.82rem]` : 
                     `flex flex-col-reverse`}`}/>   


             
          
        </div>
        </div>
      </div>  
    );
}


export default ScrollSwipeArrow;