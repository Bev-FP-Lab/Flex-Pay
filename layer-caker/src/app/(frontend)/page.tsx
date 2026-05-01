import Link from 'next/link'
import { TitleTwo } from '@/components/titletwo'; 
import { TitleThree } from '@/components/titlethree'

import Image from 'next/image';
import afterpay from "../../../public/afterpay.png";
import applepay from "../../../public/applepay.png";
import klarna from "../../../public/klarna.png";
import bnpparibas from "../../../public/bnpparibas.png";
import googlepay from "../../../public/googlepay.png";
import alipay from "../../../public/alipay.png";
import paypal from "../../../public/paypal.png";
import mastercard from "../../../public/mastercard.png";
import bancontact from "../../../public/bancontact.png";
import bigcommerce from "../../../public/bigcommerce.png";
import bpi from "../../../public/bpi.png";
import salesforce from "../../../public/salesforce.png";
import mobile1Sneaker from "../../../public/mobile1sneaker.png";
import floatingphone from "../../../public/floatingphone.png";


export default async function Page() {
  return (
    <><><><><section className="container mx-auto grid grid-cols-3 gap-6 p-12 bg-indigo-800 ">
      <TitleThree>Scale Evolve and Innovate with FLEX-PAY</TitleThree>
      <Image className="object-cover" src={mobile1Sneaker} alt="company logo" />

      <TitleTwo> Redefining the meaning of Flexible Global Payment Infrastructure.</TitleTwo>

    </section><section className="container mx-auto grid grid-cols-1 gap-6 p-12">
        <h1 className="text-[35px] text-center font-sans">WELCOME TO FLEXIBLE GLOBAL PAYMENT INFRASTRUCTURE  </h1>
        <h2 className="text-[20px] font-sans mx-20">Flex-Pay™ is transforming the global payment infrastructure—uniting nine dynamic payment types and a suite of additional services, all accessible through a single, seamless API.
          <br></br><br></br>We simplify payment processes, advance financial inclusivity, and empower businesses to deliver exceptional user experiences in the ever-evolving world of digital commerce.  </h2>

        <h1 className="text-[35px] text-center text-semibold font-sans mx-20"> PROUDLY PARTNERED WITH INDUSTRY STANDARDS </h1>
      </section></><section className="container mx-auto grid grid-cols-4 gap-12 p-12">
        <Image className="object-cover m-4" src={afterpay} alt="company logo" />
        <Image className="object-cover m-4" src={applepay} alt="company logo" />
        <Image className="object-cover m-4" src={klarna} alt="company logo" />
        <Image className="object-cover m-4" src={bnpparibas} alt="company logo" />
        <Image className="object-cover m-4" src={googlepay} alt="company logo" />
        <Image className="h-25 w-65 m-4" src={alipay} alt="company logo" />
        <Image className="object-cover m-4" src={paypal} alt="company logo" />
        <Image className="h-30 w-40 m-4" src={mastercard} alt="company logo" />
        <Image className="object-cover m-4" src={bancontact} alt="company logo" />
        <Image className="object-cover my-20" src={bigcommerce} alt="company logo" />
        <Image className="object-cover m-4" src={bpi} alt="company logo" />
        <Image className="object-cover m-4" src={salesforce} alt="company logo" />
      </section></><section className="container mx-auto grid grid-cols-2 gap-5 p-10">
        <Image className="object-cover" src={floatingphone} alt="company logo" />
        <div>
          <h1 className="text-[30px] font-sans my-7 text-bold"> Elegantly Unlocking Limitless Ways to Pay </h1>
          <h2 className="text-[15px] font-sans">Step into a world of limitless payment possibilities and integrated services, unified through one seamless connection. </h2>
          <h1 className="text-[30px] font-sans my-7 text-bold"> Low-Effort Implementation </h1>
          <h2 className="text-[15px] font-sans">Flex-Pay offers rapid setup through an intuitive interface and quick integration. Businesses can configure and activate each payment method in under a minute—saving valuable time and resources. </h2>
          <h1 className="text-[30px] font-sans my-7 text-bold"> Continuous Platform Development </h1>
          <h2 className="text-[15px] font-sans">Step into a world of limitless payment possibilities and integrated services, unified through one seamless connection. </h2>
          <h1 className="text-[30px] font-sans my-7 text-bold"> Multi-Level Hierarchy</h1>
          <h2 className="text-[15px] font-sans">Our multi-level hierarchy architecture simplifies collaboration and scaling with gateway and merchant partners—providing flexibility, visibility, and control without added complexity. </h2>
          <h1 className="text-[30px] font-sans my-7 text-bold"> White Label Solutions </h1>
          <h2 className="text-[15px] font-sans">Flex-Pay’s white-label framework enables fully branded, customizable payment experiences through seamless integration. Businesses can scale confidently while maintaining full ownership of their interface and brand identity. </h2>
        </div>
      </section></><section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-indigo-800 ">
        <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-slate-800 text-pretty max-w-5xl text-white"> PAYMENT INFRASTRUCTURE DESIGNED FOR GROWTH </h1> 

          <h1 className="text-0.5xl md:text-2xl lg:text-3xl text-slate-800 text-pretty max-w-3xl text-white font-sans my-7 text-plain"> Flex-Pay unifies nine payment architectures through one streamlined API—simplifying transactions, improving efficiency, and driving financial inclusivity. </h1>
      </section></> 

  )
  
}