import Link from "next/link"



const LinkProp = ({title,icon,lhref,lclassN,ldivclassN,
       titleClassN,iconClassN}) => {
    return (
     <div className={ldivclassN}>
      <Link href={lhref}>
         <div className={lclassN}>
             <div className={titleClassN}>{title}</div>
             <div className={iconClassN}>{icon}</div>
        </div>
      </Link>  
     </div> 
    );
}
export default LinkProp