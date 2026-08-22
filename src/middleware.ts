import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const TOOL_SUBDOMAINS = [
  'qualify-pro', 'savings-calc', 'match-maker',
  'price-builder', 'quote-craft', 'intake-pro', 'book-craft'
]

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const url = request.nextUrl.clone()

  if (host.includes('localhost') || host.includes('vercel.app') || host === 'formcraft.app') {
    return NextResponse.next()
  }

  const subdomain = host.split('.')[0]

  if (TOOL_SUBDOMAINS.includes(subdomain)) {
    url.pathname = `/tools/${subdomain}`
    const response = NextResponse.rewrite(url)
    response.headers.set('x-tool-slug', subdomain)
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
