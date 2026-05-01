import { PropsWithChildren } from 'react'

export function TitleTwo(props: PropsWithChildren) {
  return (
    <h1 className="text-1xl md:text-3xl lg:text-5xl font-plain font-serif text-slate-800 text-pretty max-w-3xl text-white">
      {props.children}
    </h1>
  )
}