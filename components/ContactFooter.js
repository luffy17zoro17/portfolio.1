
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

const ContactFooter=()=>{
    return (
       <div>
         <div className='flex items-center h-[5rem] gap-10
        justify-center text-white fixed bottom-3 z-10 left-0
        w-[101%] bg-black shadow-md shadow-black opacity-90'>
        <div className='flex flex-col items-center'>GitHub:
        <Link href={`${process.env.PRIVATE_GITHU_KEY}`} className="flex flex-col">
          <a><GitHubIcon fontSize="large"/></a></Link>
        </div>
        <div className='flex flex-col items-center'>Facebook:
        <Link href={`${process.env.PRIVATE_FACEBOO_KEY}`}><a><FacebookIcon fontSize="large"/></a></Link>
        </div>
        <div className='flex flex-col items-center'>LinkedIn:
        <Link href={`${process.env.PRIVATE_LINKEDI_KEY}`}><a><LinkedInIcon fontSize="large"/></a></Link>
        </div>
      </div>
         
       </div> 
    );
}

export default ContactFooter;