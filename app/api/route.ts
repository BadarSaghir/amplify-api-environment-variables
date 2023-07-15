import { NextResponse } from 'next/server'
 
export async function GET() {
 
 
  return NextResponse.json({ client_variable:process.env.NEXT_PUBLIC_TEST,server_variable:process.env.TEST })
}