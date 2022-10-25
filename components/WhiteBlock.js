import Image from "next/image";
import Link from "next/link";


const WhiteBlock = ({hide}) => {

    return (
      <div>
        <div className={hide ? `hidden` : `text-[1.1rem] font-mono 
            scale-[60%] p-4
           flex justify-center flex-col items-center bg-white 
           shadow-lg shadow-black hidden md:flex lg:ml-[21rem]`}>
            <span className='pb-[0.5rem]'>Im reliving my&nbsp;
             <span className="text-white font-semibold shadow-md 
             shadow-black bg-violet-500">childhood
            </span> with:</span>
              <div className='text-black space-x-[2rem] flex'>
                <div className='h-[4rem] w-[4rem] p-1 shadow-md shadow-black hover:scale-[102%]'>
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
                <div className='h-[4rem] w-[4rem] p-1 shadow-md shadow-black hover:scale-[102%]'>
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
                <div className='h-[4rem] w-[4rem] p-1 shadow-md shadow-black hover:scale-[102%]'>
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
                <div className='h-[4rem] w-[4rem] p-1 shadow-md shadow-black hover:scale-[102%]'>
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
                <div className='h-[4rem] w-[4rem] p-1 shadow-md shadow-black hover:scale-[102%]'>
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
    )
}

export default WhiteBlock;