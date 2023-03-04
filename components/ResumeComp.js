
import LinkProp from "./props/LinkProp";

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const HomeRightOptions = [
  {
    id:1,
    title:`pmthomas645@gmail.com`,
    icon:``,
    url:``,
    isrc:``,
  },
  {
     id:2,
     title:`Resume`,
     icon:``,
     url:`${process.env.PRIVATE_RESUM_KEY}`,
     isrc:``,
  },
  {
    id:3,
    title:``,
    icon:<GitHubIcon fontSize="large"/>,
    url:`${process.env.PRIVATE_GITHU_KEY}`,
    isrc:``,
  },
  {
    id:4,
    title:``,
    icon:<LinkedInIcon fontSize="large"/>,
    url:`${process.env.PRIVATE_LINKEDI_KEY}`,
    isrc:``,
  },
  {
    id:5,
    title:``,
    icon:``,
    url:`https://dribbble.com/luffyzoro`,
    isrc:`https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Dribbble_colored_svg-512.png`
  
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
            ldivclassN={`
             border-4
             shadow-inner shadow-black
             font-serif border-pink-300
             z-50 rounded-bl-xl
             hover:border-orange-600
             font-bold 
             flex justify-center 
             hover:border-orange-400 lg:rounded-bl-2xl
             ${item.id===2 ? `text-blue-700` : 
             item.id===3 ? `text-black` : item.id===4 ? `text-blue-500` : 
             item.id===1 ? 
             `bg-gradient-to-r from-blue-300 via-red-300 to-yellow-300
             text-green-800` : ``}
             ${item.id>2 ? `
                lg:h-[4rem] lg:w-[4rem]` : `px-1 md:text-2xl lg:px-3 lg:text-3xl
                `}
                ${item.id===1 ? `text-xs font-light md:text-[0.84rem] lg:text-[1.1rem]
                 ` : `hover:text-orange-800 cursor-pointer`}
               ${item.id > 1 ? `bg-white` : ``}
               `}  
             
             iht={30}
             iwd={30}    
             imgclassN={item.id===5 ? `object-contain` : ``}
            
             isrc={item.id===5 && item.isrc}     
         />
       </div> 
      ))}
    
    </div>
    );
}

export default ResumeComp;




