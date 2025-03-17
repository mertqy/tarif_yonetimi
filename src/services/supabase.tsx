// services/api.ts yerine services/supabase.ts oluşturun
import {createClient} from '@supabase/supabase-js';

// .env dosyasından değişkenleri oku
const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

// Token yönetimi için auth listener
supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN" && session) {
        localStorage.setItem('token', session.access_token);
    } else if (event === "SIGNED_OUT") {
        localStorage.removeItem('token');
    }
});

export default supabase;