import { useDispatch, useSelector } from "react-redux";
import { selectBlur } from "../reducers/blur/blurSlice";




const ShowHideButton = ({hide,setHide}) => {

   const BlurValue=useSelector(selectBlur);

   const dispatch = useDispatch();
    return (
    <div className={`flex shadow-md justify-center
      rounded-b-xl shadow-black relative items-center
       w-full
       h-[3rem] lg:h-[5rem]
       ${hide ? `bg-transparent` : `bg-black`}`}> 
     <div className="flex items-center">
       <div className={`pb-4 flex z-0
       justify-center pt-6 lg:pt-4
       transition delay-120 duration-300 text-white p-1 text-md 
       font-bold lg:text-3xl`}>
        {hide ? `I built these fellas:` : `What 'Coding' is like to me:`} 
        <div className={`text-4xl px-1 ${hide ? `text-yellow-400` : `text-red-200`}`}>
          ↴</div></div>

      <div className="z-20">
        
            <button className={`
         transition delay-120 duration-300
         rounded-xl shadow-lg shadow-black
         bg-red-500 hover:bg-black
         hover:text-white
          z-40 border-4 lg:text-xl
         ${hide ? `px-[0.5rem] lg:px-[1rem]
        
        font-mono font-bold` : `
         px-[1rem]
        font-mono font-bold focus:shadow-inner focus:shadow-black`}`} 
        onClick={(()=>setHide(!hide))}>
         {hide ? `HIDE` : `SHOW`}</button>
        
        
      
       </div> 
      </div> 
     </div>  
      
    );
}

export default ShowHideButton;