import { NextResponse } from 'next/server';
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log("middleware exe");

    const authToken = request.cookies.get("authToken")?.value;

    if (
        request.nextUrl.pathname === "/api/login" || 
        request.nextUrl.pathname === "/api/users"
        )
        {
        return;
    }
    const loggedUserNotAccessPath =
        request.nextUrl.pathname === "/login" ||
        request.nextUrl.pathname == "/signup";

    if (loggedUserNotAccessPath) {
        if (authToken) {
            return NextResponse.redirect(new URL("/profile/user", request.url));
        }
    } else {
        if (!authToken) {

            if(request.nextUrl.pathname.startsWith("/api")){
                return NextResponse.json({
                    message: "Access Denied",
                    success: false,
                },{
                    status: 401,
                });
            }

            return NextResponse.redirect(new URL("/login", request.url));
        }else{
            // vverify
        }
    }
    console.log("authToken");
    //return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/",
        "/login",
        "/signup",
        "/add-task",
        "/show-task",
        "/profile/:path*",
        "/api/:path*",
    ],
};