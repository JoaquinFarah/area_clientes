import Image from 'next/image'
import Link from 'next/link'

export default function ErrorPage() {
    return (
      <div>        
        <Link href="/">
        <Image 
          className="mx-auto"
          src="/404-error.png" 
          alt="error" 
          width={670} 
          height={670} />  
        </Link>       
      </div>
    )
  }