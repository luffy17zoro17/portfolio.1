
import LinkProp from "./props/LinkProp";




const ResumeComp = ()=>{
    return (
       <div className="fixed top-0 bottom-0 right-0
         flex items-center z-50 cursor-pointer hover:text-blue-300">
         <LinkProp
            lhref={`${process.env.PRIVATE_RESUM_KEY}`}
            title={`Resume`}
            lclassN={``}
            ldivclassN={`bg-gradient-to-r from-black via-red-900 to-black
             hover:bg-red-400 px-3 rounded-r-full font-sans
            text-xl -rotate-90 fixed right-[-1.3rem] border-y-4 shadow-xl
            shadow-black text-pink-300 font-bold hover:text-orange-400 hover:font-mono
           hover:border-cyan-400 md:text-2xl lg:text-3xl`}
         />
       </div> 
    );
}

export default ResumeComp;




