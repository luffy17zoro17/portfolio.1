


const ShowHideButton = ({hide,setHide}) => {
    return (
    <div className="absolute flex justify-end shadow-md
      rounded-b-xl shadow-black
      mt-[-21rem] w-full bg-gradient-to-b from-gray-500 to-black
       lg:mt-[-33rem]"> 
       <h1 className="text-white p-1 text-2xl 
       font-bold lg:text-3xl">
        I built these fellas: 
        <b className={`text-5xl px-1 ${hide ? `text-pink-300` : `text-red-500`}`}>
          ↴</b></h1>
      <div className="">
        <div className='z-50
        shadow-xl shadow-black
          cursor-pointer 
          lg:text-2xl'>
        <button className={hide ? `px-[1rem]
         bg-red-500 hover:animate-bounce
        font-mono font-bold` : `
         px-[1rem]
         bg-red-500 hover:animate-bounce
        font-mono font-bold text-[1rem] focus:shadow-inner focus:shadow-black`} 
        onClick={()=>setHide(!hide)}>
         {hide ? `SHOW` : `HIDE`}</button>
        </div> 
       </div> 
     </div>  
      
    );
}

export default ShowHideButton;