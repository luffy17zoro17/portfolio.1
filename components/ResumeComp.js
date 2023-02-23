
import LinkProp from "./props/LinkProp";

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const HomeRightOptions = [
  {
    id:1,
    title:`pmthomas645@gmail.com`,
    icon:``,
    url:``
  },
  {
     id:2,
     title:`Resume`,
     icon:``,
     url:`${process.env.PRIVATE_RESUM_KEY}`
  },
  {
    id:3,
    title:``,
    icon:<GitHubIcon fontSize="large"/>,
    url:`${process.env.PRIVATE_GITHU_KEY}`,
  },
  {
    id:4,
    title:``,
    icon:<LinkedInIcon fontSize="large"/>,
    url:`${process.env.PRIVATE_LINKEDI_KEY}`,
  },
]



const ResumeComp = ()=>{
    return (
    <div className={`fixed top-0 z-40 w-[2.7rem] lg:w-[4rem]
    right-0 text-center flex flex-col items-end`}> 
    
      {HomeRightOptions.map((item)=>(
       <div key={item.id} className="
           flex flex-col justify-center">
         <LinkProp
            lhref={item.url}
            title={item.title}  
            icon={item.icon}
            lclassN={`flex items-center`}
            ldivclassN={`bg-pink-300
             border-pink-300 border-4
             shadow-inner shadow-black
             font-serif 
             z-50 rounded-bl-xl
             border-pink-300 hover:border-orange-600
             font-bold 
             flex justify-center 
             hover:border-orange-400 lg:rounded-bl-2xl
             ${item.id>2 ? `
                lg:h-[4rem] lg:w-[4rem] ` : `px-1 md:text-2xl lg:px-3 lg:text-3xl
                `}
                ${item.id===1 ? `text-xs font-light md:text-[0.84rem] lg:text-[1.1rem]
                 ` : `hover:text-orange-800 cursor-pointer`}`}
         />
       </div> 
      ))}
    
    </div>
    );
}

export default ResumeComp;




