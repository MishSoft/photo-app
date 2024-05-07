import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function POST(req) {
  const cookieStore = req.cookies;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name);
        },
        set(name, value, options) {
          req.cookies.set(name, value, options);
        },
        remove(name, options) {
          req.cookies.set(name, "", { expires: new Date(0), ...options });
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    await supabase.auth.signOut();
  }

  return NextResponse.redirect(new URL("/", req.url), {
    status: 302,
  });
}
