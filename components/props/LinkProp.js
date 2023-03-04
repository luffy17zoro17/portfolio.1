import Link from "next/link"

import ImageProp from "./ImageProp";

const LinkProp = ({title,icon,lhref,lclassN,ldivclassN,
       titleClassN,iconClassN, isrc, iht,iwd,imgclassN,ialt}) => {
    return (
     <div className={ldivclassN}>
      <Link href={lhref}>
         <div className={lclassN}>
             <div className={titleClassN}>{title}</div>
             <div className={iconClassN}>{icon}</div>
             {isrc && (
                <ImageProp
                    isrc={isrc}
                    iht={iht}
                    iwd={iwd}
                    imgclassN={imgclassN}
                    ialt={ialt}  
                    idivclassN={`h-[2.3rem] w-[2.2rem] pt-1`}   
                />
             )}
        </div>
      </Link>  
     </div> 
    );
}
export default LinkProp