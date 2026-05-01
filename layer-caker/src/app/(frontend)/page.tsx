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
import clothingstore from "../../../public/clothingstore.jpg";
import paymentterminal from "../../../public/paymentterminal.png";
import bank from "../../../public/bank.jpg"



export default async function Page() {
  return (
    <><><><><><><section className="container mx-auto grid grid-cols-3 gap-6 p-12 bg-indigo-800 ">
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
        <Image className="object-cover 5 m-4" src={alipay} alt="company logo" />
        <Image className="object-cover m-4" src={paypal} alt="company logo" />
        <Image className="object-cover" src={mastercard} alt="company logo" />
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
      </section></><section className="container mx-auto grid grid-cols-1 gap-6 p-12">
        <h1 className="text-[35px] text-center font-sans m-1">THE FLEX-PAY SOLUTIONS </h1>
        <div>
          <section className="container mx-auto grid grid-cols-2 gap-12 p-12">
            <Image className="object-cover m-4" src={clothingstore} alt="company logo" />
            <div>
              <h1 className="text-[30px] font-sans my-7 text-bold">FLEX-PAY Direct™  </h1>
              <h2 className="text-[15px] font-sans">FLEX-PAY Direct™ is a global initiative that supports merchants through complimentary integration—enabling fast access to diverse payment options with minimal effort.

                Integrate once to unlock Flex-Pay’s full suite of payment types, with new integrations added weekly </h2>


              <ul className="list-disc list-inside"> <li> Reorder checkout elements in seconds using our no-code, drag-and-drop editor. </li>
                <li>  Settle transactions faster with direct agreements through connected payment providers. </li></ul>

            </div>
          </section><section className="container mx-auto grid grid-cols-2 gap-12 p-12">
            <div>
              <h1 className="text-[30px] font-sans my-7 text-bold">FLEX-PAY Synergy™  </h1>
              <h2 className="text-[15px] font-sans">FLEX-PAY Synergy™ is a white-labeled solution tailored for payment service providers, gateways, and acquirers. It offers seamless integration, single sign-on access, full customization, and a flexible three-level hierarchy.</h2>


              <ul className="list-disc list-inside"> <li> Maintain oversight of your entire merchant base through our multi-level hierarchy.</li>
                <li> Customize branding and interface with complete control using our white-label capability. </li>
                <li> Introduce new payment methods instantly with our single sign-on integration. </li>
              </ul>

            </div>
            <Image className="object-cover m-4" src={paymentterminal} alt="company logo" />

          </section>
          <section className="container mx-auto grid grid-cols-2 gap-12 p-12">
            <Image className="object-cover m-4" src={bank} alt="company logo" />
            <div>
              <h1 className="text-[30px] font-sans my-7 text-bold">FLEX-PAY Banking™  </h1>
              <h2 className="text-[15px] font-sans">FLEX-PAY Banking™ empowers traditional banks to evolve into agile, digitally driven fintechs—streamlining operations, modernizing infrastructure, and enhancing competitiveness. </h2>


              <ul className="list-disc list-inside"> <li> Provide merchants with a comprehensive suite of modern payment solutions. </li>
                <li>  Reduce operational costs tied to payment services while improving efficiency and profitability. </li>
                <li> Access Flex-Pay’s extensive payment integration library to strengthen your institution’s digital offerings. </li>
              </ul>

            </div>
          </section>
        </div>

      </section></><section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-indigo-800 ">
        <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-slate-800 text-pretty max-w-5xl text-white"> GLOBAL REACH </h1>

        <h1 className="text-0.5xl md:text-2xl lg:text-3xl text-slate-800 text-pretty max-w-3xl text-white font-sans my-7 text-plain"> Unlock Global Payment Flexibility Empower cross-border commerce with Flex-Pay's expansive network of payment methods, multi-currency support, and worldwide integrations. 
          Grow effortlessly, transact securely, and scale your business globally. </h1>
                  <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-slate-800 text-pretty max-w-5xl text-white"> FLEX-PAY ECOSYSTEM AT A GLANCE: </h1>

          <div className="container mx-auto grid grid-cols-4 gap-6 p-12 bg-indigo-800 "> 
          <div> 
          <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-slate-800 text-pretty max-w-5xl text-white"> +400 </h1>
          <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-slate-800 text-pretty max-w-2.5xl text-white font-sans my-7 text-plain"> INTEGRATIONS </h1> 
          <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-slate-800 text-pretty max-w-2.5xl text-white font-sans my-7 text-plain"> Comprehensive network spanning all major payment types and regional preferences. </h1> 

          </div> 
          <div> 
          <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-slate-800 text-pretty max-w-5xl text-white"> +140 </h1>
          <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-slate-800 text-pretty max-w-2.5xl text-white font-sans my-7 text-plain"> COUNTRIES COVERED </h1> 
          <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-slate-800 text-pretty max-w-2.5xl text-white font-sans my-7 text-plain"> Global reach across six continents with localized payment solutions. </h1> 

          </div> 
          <div> 
          <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-slate-800 text-pretty max-w-5xl text-white"> +120 </h1>
          <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-slate-800 text-pretty max-w-2.5xl text-white font-sans my-7 text-plain"> CURRENCIES SUPPORTED </h1> 
          <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-slate-800 text-pretty max-w-2.5xl text-white font-sans my-7 text-plain"> Multi-currency processing enabling true international commerce capabilities. </h1> 
          
          </div> 
          <div> 
          <h1 className="text-1xl md:text-3xl lg:text-5xl font-bold text-slate-800 text-pretty max-w-5xl text-white"> 9 </h1>
           <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-slate-800 text-pretty max-w-2.5xl text-white font-sans my-7 text-plain"> PAYMENT CATEGORIES </h1> 
            <h1 className="text-0.5xl md:text-1.5xl lg:text-2.5xl text-slate-800 text-pretty max-w-2.5xl text-white font-sans my-7 text-plain"> Complete coverage from traditional cards and interest free payments to emerging cryptocurrency solutions. </h1> 

          </div> 
          </div> 
      </section></>

  )
  
}