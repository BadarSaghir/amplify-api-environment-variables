"use client"
export default function Home() {
  return (
    <div>


      <h1> {"CLIENT SIDE VARIABLE ========> " + process.env.NEXT_PUBLIC_TEST}</h1>
      <h1>  {"SERVER SIDE VARIABLE ========> " + process.env?.TEST}</h1>


    </div>
  )
}
