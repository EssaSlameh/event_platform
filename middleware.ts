import {
    clerkMiddleware,
    createRouteMatcher
  } from "@clerk/nextjs/server"

  const isPublicRoute = createRouteMatcher([
    '/',
    '/events/:id',
    '/sign-in(.*)',
    '/sign-up(.*)',
  ])

  const isIgnoredRoute = createRouteMatcher([
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ])

  export default clerkMiddleware((auth, req) => {
    if (isPublicRoute(req)) return 

    if(!isIgnoredRoute(req)){
      auth().protect();
    }
    
  })
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};