


const ShowHideButton = ({hide,setHide}) => {
    return (
        <div className='right-[1rem] absolute z-50 
        shadow-xl shadow-black
         border-4 cursor-pointer lg:text-2xl'>
        <button className={hide ? `w-[100%] px-[1rem]
         bg-red-500 hover:animate-bounce
        font-mono font-bold` : `
        w-[100%] px-[1rem]
         bg-red-500 hover:animate-bounce
        font-mono font-bold text-[1rem] focus:shadow-inner focus:shadow-black`} 
        onClick={()=>setHide(!hide)}>
         {hide ? `SHOW` : `HIDE`}</button>
        </div> 
    );
}

export default ShowHideButton;