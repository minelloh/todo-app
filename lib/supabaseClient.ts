// This file creates a single, reusable Supabase client for your app.
// Think of it as the "telephone" your frontend uses to talk to the Supabase database.

import { createClient } from "@supabase/supabase-js";

// We read the Supabase URL and Anon Key from environment variables.
// In Next.js, any variable that needs to be available in the browser
// MUST start with NEXT_PUBLIC_.
//
// You will define these in a `.env.local` file in the root of your project.
// (I will tell you exactly what to put in that file in the instructions.)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// This small runtime check helps you catch misconfigured environment variables early.
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in your .env.local file."
  );
}

// We export a single Supabase client instance that we can import anywhere
// in our app to perform database operations (select, insert, update, delete).
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

