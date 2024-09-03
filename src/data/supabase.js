import { createClient } from '@supabase/supabase-js'
const url='https://jhsxkcoxpydrqfhwlhju.supabase.co'
const supabaseKey = process.env.API_KEY
export const supabase = createClient(url, supabaseKey)