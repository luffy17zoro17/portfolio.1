import Image from "next/image";
import Link from "next/link";

 const SkillIcons = ({title,imgSrc,url}) => {

    return (
      <div className="scale-[100%] md:scale-[100%]">
        <Link href={url}><a>
                <div className="flex flex-col border-4 
                items-center text-center rounded-3xl">
                <div className="h-[4rem] w-[4rem]">
                <Image
                 alt=""
                 src={imgSrc}
                 className="object-cover rounded-lg hover:object-contain"
                 layout="responsive"
                 height={900}
                 width={900}
                /> 
                </div>
                <h2 className="z-10 text-black font-bold px-1 pt-1
                 hover:text-green-400">
                    {title}
                </h2>
                </div>    
                
                </a>
                </Link>

      </div>  
    );
 }

 export default SkillIcons