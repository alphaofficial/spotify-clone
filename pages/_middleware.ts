import { NextResponse, NextRequest } from "next/server";

const signedInPages = ["/", "/playlist", "library"];

// this is not a node environment so you only have access to low level runtime apis

export default function middleware(req: NextRequest) {
  if (signedInPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;
    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
