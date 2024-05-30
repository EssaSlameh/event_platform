import {
  clerkMiddleware,
  createRouteMatcher
} from "@clerk/nextjs/server"

const isPublicRoute = createRouteMatcher([
  '/(.*)',
  '/events/:id(.*)',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/app/api/webhook/clerk(.*)',
  '/api/webhook/stripe(.*)',
  '/api/uploadthing(.*)',
])


export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) return

    auth().protect();


})
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};