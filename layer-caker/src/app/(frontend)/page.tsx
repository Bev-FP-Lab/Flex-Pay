import Link from 'next/link'
import { Title } from '@/components/title'

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>FLEX-PAY</Title>
      <hr />
      <Link href="/posts">FLEX-NEWS &rarr;</Link>
    </section>
  )
}