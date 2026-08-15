// ============================================
// Configuración de Supabase
// ============================================
// 1. Entra a tu proyecto en https://supabase.com/dashboard
// 2. Ve a Project Settings -> API
// 3. Copia "Project URL" y pégalo abajo en SUPABASE_URL
// 4. Copia la llave "anon public" y pégala abajo en SUPABASE_ANON_KEY
//    (NUNCA uses la llave "service_role" aquí, esa es secreta)

const SUPABASE_URL = oezvwrgrrdzlcaelojxo.supabase.co;
const SUPABASE_ANON_KEY = sb_secret_XWIoIozEEC6tEOxQcyB2uQ_Xk3Zx3te;

// Nombre del bucket de Storage donde se guardan las imágenes del sitio.
// Debe existir en Supabase -> Storage, marcado como "Public bucket".
const IMAGES_BUCKET = "site-images";
