import Image from "next/image";
import Link from "next/link";


const Skills = [
   {
    id:1,
    imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
    url:"https://www.w3schools.com/html/",
    name:"HTML",
   },
   {
    id:2,
    imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    url:"https://www.w3.org/Style/CSS/Overview.en.html",
    name:"CSS",
   },
   {
    id:3,
    imgSrc:"https://res.cloudinary.com/practicaldev/image/fetch/s--JXlFx1ne--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/f30hrij5h3j7gt2klbcu.jpg",
    url:"https://tailwindcss.com/",
    name:"Tailwind CSS",
   },
   {
    id:4,
    imgSrc:"https://www.datocms-assets.com/45470/1631110818-logo-react-js.png?fm=webp",
    url:"https://reactjs.org/",
    name:"React"
   },
   {
    id:5,
    imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png",
    url:"https://nextjs.org/",
    name:"Next js"
   },
   {
    id:6,
    imgSrc:"https://miro.medium.com/max/1400/1*Smbj_VLH7JRp9GhLaKyiUQ.png",
    url:"https://mui.com/",
    name:"Material UI",
   },
   {
    id:7,
    imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
    url:"https://www.typescriptlang.org/",
    name:"Typescript",
   },
   {
    id:8,
    imgSrc:"https://www.pngitem.com/pimgs/m/116-1167737_logo-javascript-pattern-copyright-framework-free-download-javascript.png",
    url:"https://www.javascript.com/",
    name:"Javascript",
   },
   {
    id:9,
    imgSrc:"https://images.squarespace-cdn.com/content/v1/5cc22d6593a63233d214110c/1597710652025-QEY2UL92MLE1E2BX4WSJ/Vercel+%28Zeit%29.jpg",
    url:"https://vercel.com/docs",
    name:"Vercel",
   },
   {
    id:10,
    imgSrc:"https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png",
    url:"https://github.com/",
    name:"GitHub",
   },
   {
    id:11,
    imgSrc:"https://imageio.forbes.com/blogs-images/jasonevangelho/files/2018/07/ubuntu-logo.jpg?format=jpg&width=1200",
    url:"https://ubuntu.com/",
    name:"Ubuntu"
   },
   {
    id:12,
    imgSrc:"https://knowledgecom.my/wp-content/uploads/2020/11/Photoshop-2020.png",
    url:"https://www.adobe.com/in/products/photoshop/landpa.html?gclid=EAIaIQobChMIuYDz086M-wIV55lmAh28Gwl7EAAYASAAEgLYcfD_BwE&sdid=SGDJMMG3&mv=search&ef_id=EAIaIQobChMIuYDz086M-wIV55lmAh28Gwl7EAAYASAAEgLYcfD_BwE:G:s&s_kwcid=AL!3085!3!585712413968!e!!g!!adobe%20photoshop!16470706475!133281435039&mv=search",
    name:"Adobe Photoshop"
   }
]





const SkillSet = () => {

    return (
     
        <div className="relative w-screen pt-[11rem] h-[48rem]
               flex justify-center items-center">
           <div className='text-black absolute p-[6%] flex justify-evenly
               gap-[3rem]
              justify-center left-0 flex flex-wrap
               w-[100%]'>
           <div className="bg-gradient-to-b from-transparent via-purple-200 
                to-transparent z-0
                 absolute w-[100%] h-full 
                 top-0"/>
              
               {Skills.map((skill)=>(
                <div key={skill.id} className="z-30">
                 
                <Link href={skill.url}><a>
                <div className="border-4 z-30 border-orange-400 shadow-lg shadow-black
                flex flex-col items-center bg-white">  
                <div className="z-30 h-[4rem] w-[4rem] border-4 
                border-black lg:h-[9rem] lg:w-[9rem]">  
                <Image
                 alt=""
                 src={skill.imgSrc}
                 className="object-cover hover:object-contain"
                 layout="responsive"
                 height={900}
                 width={900}
                />
                </div>
                <h2 className="z-30 text-black font-bold hover:text-green-400">{skill.name}</h2>
                </div>
                </a>
                </Link>
              
                </div>
               ))}
                
                 
            </div>
          </div>    
      
    );
}

export default SkillSet;