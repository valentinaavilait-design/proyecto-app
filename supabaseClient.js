import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';


// 1. La URL base que sacaste de la captura (sin /rest/v1/)
const SUPABASE_URL = "NEXT_PUBLIC_SUPABASE_URL=https://tyjgcnshbilttxyqlmkw.supabase.co";


// 2. La Publishable Key (sb_publishable_...) que copiaste en la pantalla anterior
const SUPABASE_KEY = "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_4F8QVVABq0_nuCs8SFtteA_Sp0lt1j7";


export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
