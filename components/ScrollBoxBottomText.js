import Link from "next/link";




const VioletBottomText = ({hide}) => {

    return (
   <div className="flex justify-center">
    <div className={`z-30 border-x-[3rem] rounded-b-full
       border-b-4 my-[1rem]
        bg-transparent
        text-white shadow-md shadow-black 
        border-transparent
       text-md
       
        ${hide===false ? `opacity-0 px-3` : `px-3 opacity-100`}`}>  
      <div className="flex text-sm lg:text-xl">
        <span>Prioritize potential over degrees?<br/>
        &nbsp;Time to join forces&nbsp;
        <span className="bg-gray-500 border shadow shadow-black
         animate-pulse hover:animate-none hover:shadow-lg hover:shadow-red-500">
          <Link href='/contact'><a>🤝</a></Link>
        </span></span>
     </div>
    </div>  
   </div> 
    );
}

export default VioletBottomText