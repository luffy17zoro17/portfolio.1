import Link from "next/link"



const LinkProp = ({title,icon,lhref,lclassN,ldivclassN}) => {
    return (
     <div className={ldivclassN}>
      <Link href={lhref}>
         <div className={lclassN}>{title}{icon}</div>
      </Link>  
     </div> 
    );
}
export default LinkProp