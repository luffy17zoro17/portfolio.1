



const RedBlock = ({hide}) => {
    return (
      <div>
        <div className={hide ? `hidden` : `border-y-[0.5rem] border-l-[2vw]
            border-pink-600 
             shadow-lg shadow-black rounded-3xl font-light bg-pink-600 absolute 
             bottom-0
             w-[14rem] xl:w-[18rem] xl:mx-[4rem]`}>
              <div className='shadow-inner shadow-black rounded-3xl bg-white
              text-[0.8rem] p-[3rem] py-[0.5rem]'>
               Ah yes..
               Building Blocks(LEGO)&nbsp;&nbsp;

               <b className="font-bold">-My Childhood</b>
              </div>
        </div>

      </div>  
    );
}


export default RedBlock;