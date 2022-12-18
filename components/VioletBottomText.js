import Link from "next/link";




const VioletBottomText = () => {

    return (
      <span className="flex flex-wrap
        text-[1rem] text-white px-3 py-2.5 lg:text-[1.5rem]">
        <span>Prioritize potential over degrees?<br/>
        &nbsp;Time to join forces&nbsp;
        <span className="bg-gray-500 border shadow shadow-black
         animate-pulse hover:animate-none hover:shadow-lg hover:shadow-red-500">
          <Link href='/contact'><a>🤝</a></Link>
        </span></span>
     </span> 
    );
}

export default VioletBottomText