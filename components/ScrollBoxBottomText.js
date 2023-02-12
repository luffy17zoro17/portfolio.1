import Link from "next/link";




const VioletBottomText = ({hide}) => {

    return (
   
    <div className={`z-30 mt-[30rem] border-x-[3rem] rounded-b-full
       border-b-4
       bg-gradient-to-b from-black via-red-800 to-black
        text-white shadow-md shadow-black border-pink-300
       text-md lg:text-xl
       lg:mt-[44rem]
        ${hide===false ? `opacity-0 px-3` : `px-3 opacity-100`}`}>  
      <div className="">
        <span>Prioritize potential over degrees?<br/>
        &nbsp;Time to join forces&nbsp;
        <span className="bg-gray-500 border shadow shadow-black
         animate-pulse hover:animate-none hover:shadow-lg hover:shadow-red-500">
          <Link href='/contact'><a>🤝</a></Link>
        </span></span>
     </div>
    </div>  
    );
}

export default VioletBottomText