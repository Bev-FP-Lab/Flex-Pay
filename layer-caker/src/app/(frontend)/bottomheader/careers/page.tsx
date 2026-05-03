import Link from 'next/link'
import { TitleTwo } from '@/components/titletwo'; 
import { TitleThree } from '@/components/titlethree'




export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12 bg-indigo-800 ">
      <TitleThree>JOIN FLEXPAY</TitleThree>


    </section>

  )
  
}