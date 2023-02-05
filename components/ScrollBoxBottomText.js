import Link from "next/link";




const VioletBottomText = ({hide}) => {

    return (
      <span className={hide===false ? `flex flex-wrap absolute bottom-[6rem]
        text-[1rem] text-white px-3 py-2.5 lg:text-[1.5rem]` : `
        flex flex-wrap absolute bottom-[1.5rem]
        text-[1rem] text-white px-3 py-2.5 lg:text-[1.5rem]`}>
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