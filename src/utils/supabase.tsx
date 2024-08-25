import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

export const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY
);

export type Material = Database['public']['Tables']['material'];

/* 
npx supabase gen types --lang=typescript --project-id "$PROJECT_REF" --schema public > database.types.ts
*/