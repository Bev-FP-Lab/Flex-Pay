import Link from 'next/link'
import { TitleTwo } from '@/components/titletwo'; 
import { TitleThree } from '@/components/titlethree'




export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-3 gap-6 p-12 bg-indigo-800 ">
      <TitleThree>Scale Evolve and Innovate with FLEX-PAY</TitleThree>

      <TitleTwo> Redefining the meaning of Flexible Global Payment Infrastructure.</TitleTwo>

    </section>

  )
  
}