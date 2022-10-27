import Image from "next/image";
import Link from "next/link";





const SkillSet = () => {

    return (
       <div>
        <div className="w-screen pt-[11rem] h-screen
               flex justify-center items-center">
              <div className='text-black absolute p-[6%] 
              justify-center left-0
               gap-[4rem] flex flex-wrap w-[100%]'>
                <div className="bg-gradient-to-b from-transparent via-purple-200 
                to-transparent z-0
                 absolute w-[100%] h-full 
                 top-0"/>
                <div className='h-[8rem] w-[8rem] p-1 shadow-md bg-white z-20
                shadow-black hover:scale-[102%] lg:h-[14rem] lg:w-[14rem]'>
                <Link href="https://www.w3schools.com/html/">
                  <a className="">
                  <Image 
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"
                   layout="responsive"
                   height={900}
                   width={900}
                   className="object-cover hover:scale-[90%]"
                   alt=""
                   />
                  </a>
                </Link>
                </div>
                <div className='h-[8rem] w-[8rem] p-1 shadow-md bg-white z-20
                shadow-black hover:scale-[102%] lg:h-[14rem] lg:w-[14rem]'>
                <Link href="https://www.w3.org/Style/CSS/Overview.en.html">
                  <a>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                    layout="responsive"
                    height={900}
                    width={900}
                    className="object-contain hover:scale-[90%]"
                    alt=""
                  />  
                  </a>
                </Link>
                </div>
                <div className='h-[8rem] w-[8rem] p-1 bg-white z-20
                 shadow-md shadow-black hover:scale-[102%] lg:h-[14rem] lg:w-[14rem]'>
                <Link href="https://tailwindcss.com/"><a>
                  <Image 
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--JXlFx1ne--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/f30hrij5h3j7gt2klbcu.jpg"
                  layout="responsive"
                  height={900}
                  width={900}
                  className="object-cover hover:object-contain"
                  alt=""
                  />
                </a>
                </Link>
                </div>
                <div className='h-[8rem] w-[8rem] p-1 bg-white shadow-md z-20
                 shadow-black hover:scale-[102%] lg:h-[14rem] lg:w-[14rem]'>
                <Link href="https://reactjs.org/"><a>
                  <Image 
                    src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png?fm=webp"
                    layout="responsive"
                    height={900}
                    width={900}
                    className="object-cover hover:scale-[90%]"
                    alt=""
                    
                    />
                </a>
                </Link>
                </div>
                <div className='h-[8rem] w-[8rem] bg-white z-20
                p-1 shadow-md shadow-black hover:scale-[102%] lg:h-[14rem] lg:w-[14rem]'>
                <Link href="https://nextjs.org/"><a>
                  <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
                  layout="responsive"
                  height={900}
                  width={900}
                  className="object-contain hover:scale-[90%]"
                  alt=""
                  />
                </a></Link>
                </div>
            </div>
            </div>    
       </div> 
    );
}

export default SkillSet;