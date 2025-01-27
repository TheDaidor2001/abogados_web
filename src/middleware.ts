
import { defineMiddleware } from "astro:middleware";
import { auth } from "./lib/auth";
 
export const onRequest = defineMiddleware(async (context, next) => {
    const isAuthed = await auth.api
        .getSession({
            headers: context.request.headers,
        })
 
    if (isAuthed) {
        context.locals.user = isAuthed.user;
        context.locals.session = isAuthed.session;
    } else {
        context.locals.user = null;
        context.locals.session = null;
    }

    const requestUrl = new URL(context.request.url);
    console.log('Request Pathname:', requestUrl.pathname);

    const protectedRoutes = ['/dashboard', '/profile'];
    const notProtectedRoutes = ['/','/noticias', '/publicaciones', 'auth']

    // Si el usuario está autenticado y trata de acceder a /auth, redirige al index
    if (isAuthed && requestUrl.pathname === '/auth') {
        return context.redirect('/');
    }


    if (protectedRoutes.includes(requestUrl.pathname) && !context.locals.session) {
        console.log('middleware');
        
        return context.redirect('/auth');
    }
 
    return next();
});