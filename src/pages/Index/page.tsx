import { PropsWithChildren } from 'react'

export const Page = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <h2>Index Page</h2>
      {children}
    </div>
  )
}
