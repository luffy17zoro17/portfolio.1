
import { useSelector } from 'react-redux';

import { selectLoading } from '../reducers/Loading/loadingSlice';
import GrayBlackBlock from './GrayBlackBlock';
import ImageProp from './props/ImageProp';
import ScrollBox from './ScrollBox';





const HomeBackground = ({hide,setHide,pic}) => {
    
   
    
    const loadValue = useSelector(selectLoading);

  
    return (
      <>
       
       <div className='snap-mandatory snap-y relative'> 
       
       <div className='bg-gradient-to-b from-black via-transparent to-transparent
        h-full z-10 fixed w-full'/> 
       <div key={pic.id} className={`
          snap-center ${pic.id===2 ? `h-screen` : ``}`}> 

        {(pic.id>=0 && pic.id<3) && <div className='
            bg-gradient-to-b from-black via-transparent to-black 
            top-0 bottom-0 absolute z-10
             w-full'/> }  
        <ImageProp 
          isrc={pic.imgSrc}
          iht={`99000`}
          iwd={`99000`}

          ilayout={`${pic.id===2 ? `fill` : `intrinsic`}`}
          imgclassN={`object-cover transition delay-120 duration-300
            ease-in
            ${(hide===true && loadValue===1) ? `
              blur-md lg:blur-2xl` :`blur-none`}`}
          idivclassN={`
          ${pic.id===2 ? `h-full` : ``} 
          `}
          alt="background"
        />   
        {pic.id===0 && (<GrayBlackBlock/>)}
        {pic.id===2 && (<ScrollBox hide={hide} setHide={setHide}/>)}
        
       </div> 
      
        
        </div>
     </>   
        
    );
}

export default HomeBackground;