
import { useDispatch, useSelector } from 'react-redux';
import { scrollDown, scrollUp, selectScroll } from '../reducers/autoScroll/autoScroll';

import TextProp from "../components/props/TextProp";
import { selectLoading } from '../reducers/Loading/loadingSlice';



const ScrollSwipeArrow = () => {
    
    const autoScrollValue = useSelector(selectScroll);
    
    const loadValue = useSelector(selectLoading);
    
    const dispatch= useDispatch();

    return (
      <div className=' transition delay-120 duration-300
            fixed h-[4rem] z-30 bottom-[1rem]
             w-screen md:ml-[10rem] lg:ml-0 lg:bottom-[3rem]'>

        <div className={`transition delay-120 duration-300 ease-in
        ${loadValue === 0 ? `rotate-180` : `rotate-0`}`}>      
        
        <div onClick={autoScrollValue===0 ? ()=>dispatch(scrollDown()) : 
           ()=>dispatch(scrollUp())} className='
              font-bold w-[100%] left-0 transition delay-120 duration-300
              flex justify-center cursor-pointer
               text-lg lg:text-xl'>
              
                
                
                <TextProp title={autoScrollValue===0 ? `Down` : `Up`} 
                  titleClassN={autoScrollValue===0 ? `` : ``}
                   details={`➤`} detailClassN={`text-xl
                   ${autoScrollValue===0 ? `rotate-90 text-red-500
                     scale-[1.5]` : 
                   `-rotate-90 text-red-500
                     scale-[1.5]`}`}
                   textDivClassN={`bg-gradient-to-t
                   from-yellow-300 via-black to-transparent
                   z-40 absolute border-4 text-center border-yellow-300 
                         animate-bounce
                    
                   flex justify-center items-center
                   px-3 py-2 transition delay-120 duration-300
                    active:blur-md text-yellow-300
                     shadow-xl shadow-black rounded-full
                     ${autoScrollValue===0 ? `flex-col px-[0.82rem]` : 
                     `flex flex-col-reverse`}`}

                innerDiv={`fixed w-full h-full rounded-full
                  border-dotted border-yellow-300
                  border-2 ${autoScrollValue===0 ? 
                    `shadow-md shadow-black border-dotted` : 
                    `shadow-inner shadow-black`}`}
                />
             
          
        </div>
        </div>
      </div>  
    );
}


export default ScrollSwipeArrow;