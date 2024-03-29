import Image from "next/image";
import Link from "next/link";

 const SkillIcons = ({title,imgSrc,url}) => {

    return (
      <div className="scale-[100%] md:scale-[100%]">
        <Link href={url}><a>
                <div className="flex flex-col border-4
                 border-white
                items-center text-center rounded-3xl">
                <div className="h-[4rem] w-[4rem]">
                <Image
                 alt=""
                 src={imgSrc}
                 className="rounded-lg object-contain hover:object-cover"
                 layout="responsive"
                 height={900}
                 width={900}
                /> 
                </div>
                <h2 className="z-10 text-black font-bold px-1 pt-1
                 hover:text-purple-700">
                    {title}
                </h2>
                </div>    
                
                </a>
                </Link>

      </div>  
    );
 }

 export default SkillIcons