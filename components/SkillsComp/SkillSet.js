
import SkillIcons from "./SkillIcons";


const Skills = [
  

   {
    id:1,
    imgSrc:"https://res.cloudinary.com/practicaldev/image/fetch/s--JXlFx1ne--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/f30hrij5h3j7gt2klbcu.jpg",
    url:"https://tailwindcss.com/",
    title:"Tailwind CSS",
   },
   {
    id:2,
    imgSrc:"https://www.datocms-assets.com/45470/1631110818-logo-react-js.png?fm=webp",
    url:"https://reactjs.org/",
    title:"React"
   },
   {
    id:3,
    imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png",
    url:"https://nextjs.org/",
    title:"Next js"
   },
   {
    id:4,
    imgSrc:"https://miro.medium.com/max/1400/1*Smbj_VLH7JRp9GhLaKyiUQ.png",
    url:"https://mui.com/",
    title:"Material UI",
   },
   {
    id:5,
    imgSrc:"https://www.pngitem.com/pimgs/m/116-1167737_logo-javascript-pattern-copyright-framework-free-download-javascript.png",
    url:"https://www.javascript.com/",
    title:"Javascript",
   },
   {
    id:6,
    imgSrc:"https://images.squarespace-cdn.com/content/v1/5cc22d6593a63233d214110c/1597710652025-QEY2UL92MLE1E2BX4WSJ/Vercel+%28Zeit%29.jpg",
    url:"https://vercel.com/docs",
    title:"Vercel",
   },
   {
    id:7,
    imgSrc:"https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png",
    url:"https://github.com/",
    title:"GitHub",
   },
   {
    id:8,
    imgSrc:"https://imageio.forbes.com/blogs-images/jasonevangelho/files/2018/07/ubuntu-logo.jpg?format=jpg&width=1200",
    url:"https://ubuntu.com/",
    title:"Ubuntu"
   },
   {
      id:9,
      imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png",
      url:"https://www.npmjs.com/",
      title:"Node Package Manager"
   },
   {
    id:10,
    imgSrc:"https://knowledgecom.my/wp-content/uploads/2020/11/Photoshop-2020.png",
    url:"https://www.adobe.com/in/products/photoshop/landpa.html?gclid=EAIaIQobChMIuYDz086M-wIV55lmAh28Gwl7EAAYASAAEgLYcfD_BwE&sdid=SGDJMMG3&mv=search&ef_id=EAIaIQobChMIuYDz086M-wIV55lmAh28Gwl7EAAYASAAEgLYcfD_BwE:G:s&s_kwcid=AL!3085!3!585712413968!e!!g!!adobe%20photoshop!16470706475!133281435039&mv=search",
    title:"Adobe Photoshop"
   },
   {
      id:11,
      imgSrc:"https://redux.js.org/img/redux-logo-landscape.png",
      url:"https://redux.js.org/",
      title:"Redux"
   },
   {
      id:12,
      imgSrc:"https://w7.pngwing.com/pngs/648/190/png-transparent-figma-logo-tech-companies-thumbnail.png",
      url:"https://www.figma.com/",
      title:"Figma"
   },

]





const SkillSet = () => {

    return (
           
           <div className="w-screen 
             left-0 flex flex-col items-center justify-center
            absolute h-[20rem]">
           <div className='text-black h-[18rem]
              flex justify-center z-0 gap-1
                flex flex-wrap md:mx-[8rem] lg:gap-11'>
          
              
               {Skills.map(({id,title,url,imgSrc})=>(
                <div key={id} className="">
                <div className="z-0 rounded-3xl 
                scale-[80%] lg:scale-[100%]
                shadow-lg shadow-black bg-white 
                ">  
                      
                 <SkillIcons
                   title={title}
                   url={url}
                   imgSrc={imgSrc}
                 />
              
                </div>
                </div>
               ))}
                
                 
            </div>
            </div>
    );
}

export default SkillSet;