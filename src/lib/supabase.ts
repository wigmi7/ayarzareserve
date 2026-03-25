import { createClient } from '@supabase/supabase-js';

// Vercel no sube el archivo .env por seguridad, así que las insertamos estáticamente.
// Al usar RLS (Row Level Security) en Supabase, es seguro tener el 'anon key' público aquí.
const supabaseUrl = 'https://drzreadpobejkxnqtutc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyenJlYWRwb2Jlamt4bnF0dXRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0MTE5MjIsImV4cCI6MjA4OTk4NzkyMn0.Zcs1s6-bB3h0Dtp7sPoSKL-dQ950aS-o5PrMwOnIldI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
