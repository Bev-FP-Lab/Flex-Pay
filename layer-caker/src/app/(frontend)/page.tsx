import Link from "next/link";

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">Scale Evolve and Innovate with FLEX-PAY</h1>
      <h2 className="text-2xl font-italic">Redefining the meaning of Flexible Global Payment Infrastructure</h2>
      <h3 className="text-3xl font-plain">WELCOME TO FLEXIBLE GLOBAL PAYMENT INFRASTRUCTURE</h3>  
      <h2> Flex-Pay™ is transforming the global payment infrastructure—uniting nine dynamic payment types and a suite of additional services, all accessible through a single, seamless API.</h2> 

 

We simplify payment processes, advance financial inclusivity, and empower businesses to deliver exceptional user experiences in the ever-evolving world of digital commerce.    
      <hr />
      <Link href="/posts">Flex-News &rarr;</Link>
    </section>
  );
}