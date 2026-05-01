import Link from 'next/link'
import { TitleTwo } from '@/components/titletwo'; 
import { TitleThree } from '@/components/titlethree'

import Image from 'next/image';
import mobile1Sneaker from "../../../public/mobile1sneaker.png";


export default async function Page() {
  return (
    <><section className="container mx-auto grid grid-cols-3 gap-6 p-12 bg-indigo-800 ">
      <TitleThree>Scale Evolve and Innovate with FLEX-PAY</TitleThree>
      <Image className="object-cover" src={mobile1Sneaker} alt="company logo" />

      <TitleTwo> Redefining the meaning of Flexible Global Payment Infrastructure.</TitleTwo>

    </section><section className="container mx-auto grid grid-cols-1 gap-6 p-12">
        <h1 className = "text-[35px] text-center font-sans">WELCOME TO FLEXIBLE GLOBAL PAYMENT INFRASTRUCTURE  </h1>
        <h2 className = "text-[20px] font-sans mx-20">Flex-Pay™ is transforming the global payment infrastructure—uniting nine dynamic payment types and a suite of additional services, all accessible through a single, seamless API.
<br></br><br></br>We simplify payment processes, advance financial inclusivity, and empower businesses to deliver exceptional user experiences in the ever-evolving world of digital commerce.  </h2>
      
      <h1 className = "text-[35px] text-center text-semibold font-sans mx-20"> PROUDLY PARTNERED WITH INDUSTRY STANDARDS </h1> 
      </section></>
  )
  
}