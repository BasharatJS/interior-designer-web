import { NextResponse } from 'next/server'

export function middleware(request) {
  console.log('🔧 Middleware hit:', request.nextUrl.pathname)
  return NextResponse.json(
    { message: 'Site under maintenance' },
    { status: 503 }
  )
}
