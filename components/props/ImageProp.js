import Image from "next/image";




const ImageProp = ({isrc,iht,iwd,imgclassN,ialt, idivclassN,
                ilayout}) => {
    return (
     <div className={idivclassN}>
        <Image
          src={isrc}
          height={iht}
          width={iwd}
          className={imgclassN}
          layout={ilayout ? ilayout : ``}
          alt={ialt}
        />
     </div>   
    );
}

export default ImageProp;