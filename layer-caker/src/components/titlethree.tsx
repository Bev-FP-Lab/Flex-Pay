import { PropsWithChildren } from 'react'

export function TitleThree(props: PropsWithChildren) {
  return (
    <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-slate-800 text-pretty max-w-3xl text-white">
      {props.children}
    </h1>
  )
}