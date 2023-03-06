



const TextProp = ({title,details, innerDiv,
    titleClassN,detailClassN,textDivClassN}) => {
    return (
      <div className={textDivClassN}>
        <h1 className={titleClassN}>{title}</h1>
        <p className={detailClassN}>{details}</p>
        <div className={innerDiv}/>
      </div>  
    );
}

export default TextProp;