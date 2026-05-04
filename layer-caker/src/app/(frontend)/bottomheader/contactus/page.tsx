import Link from 'next/link'
import { TitleTwo } from '@/components/titletwo'; 
import { TitleThree } from '@/components/titlethree'
import laptop from "../../../../../public/laptop.jpg";




export default async function Page() {
  return (
    <><><section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-indigo-800 ">
      <TitleThree>CONTACT US</TitleThree>



    </section><section className="container mx-auto grid grid-cols-2 gap-6 p-12">
        <h1 className="text-0.5xl md:text-1.5xl lg:text-2xl font-bold text-slate-800 text-pretty text-black">MAILING ADDRESS:<br></br>
          1 King Street West, Suite 4800-208 <br></br>
          Toronto, Ontario, M5H-1A1 <br></br>
          Canada </h1>

      </section>

    </><section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-linear-to-r from-black to-red-900 content-center">

        <h1 className="text-1xl md:text-2xl lg:text-3xl text-slate-800 text-pretty text-white font-sans my-7 text-center text-plain"> Get in touch with us today to discover how Flex-Pay is shaping the future of global payments. </h1>
        <Link
          href="/signup"
        >
          <div className="flex justify-center">
            <button className="bg-white hover:bg-purple-900 text-black font-bold px-4 py-3 rounded-full">
              SIGN UP
            </button>
          </div>
        </Link>

      </section><section className="container mx-auto grid grid-cols-2 gap-6 p-12 bg-purple-900 content-center">


        <Link href="/bottomheader/aboutus">

          <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-slate-800 text-pretty text-white font-sans my-2 text-center text-plain"> About Us </h1>



        </Link>
        <Link
          href="/bottomheader/legal"
        >
          <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-slate-800 text-pretty text-white font-sans my-2 text-center text-plain"> Legal </h1>


        </Link>
        <Link
          href="/bottomheader/careers"
        >
          <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-slate-800 text-pretty text-white font-sans my-2 text-center text-plain"> Careers </h1>


        </Link>
        <Link
          href="/bottomheader/legal"
        >
          <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-slate-800 text-pretty text-white font-sans my-2 text-center text-plain"> Privacy </h1>


        </Link>
        <Link
          href="/bottomheader/contactus"
        >
          <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-slate-800 text-pretty text-white font-sans my-2 text-center text-plain"> Contact Us </h1>


        </Link>
        <Link
          href="/bottomheader/legal"
        >
          <h1 className="text-0.5xl md:text-0.75xl lg:text-1xl text-slate-800 text-pretty text-white font-sans my-2 text-center text-plain"> Terms & Conditions </h1>


        </Link>

      </section></>

  )
  
}