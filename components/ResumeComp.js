
import LinkProp from "./props/LinkProp";




const ResumeComp = ()=>{
    return (
       <div className="fixed top-[11vh] bottom-0 right-0 z-50
         flex cursor-pointer md:pt-4 lg:pt-0">
         <LinkProp
            lhref={`${process.env.PRIVATE_RESUM_KEY}`}
            title={`Resume`}
            lclassN={``}
            ldivclassN={`bg-gradient-to-r from-black via-red-900 to-black
             hover:text-orange-600 px-3 font-mono pr-6
             shadow-xl shadow-black z-50 rounded-br-full
             border-pink-300 hover:border-orange-600
            text-xl -rotate-90 fixed right-[-1.3rem] border-4
             text-pink-300 font-bold hover:text-orange-400
           hover:border-orange-400 md:text-2xl lg:text-3xl`}
         />
       </div> 
    );
}

export default ResumeComp;




