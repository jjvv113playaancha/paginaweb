// Reemplaza las imágenes marcadas con data-img-key por la versión
// subida en Supabase Storage (bucket site-images). Si no existe todavía
// una imagen para esa llave, o falla la conexión, se mantiene el
// respaldo (SVG/placeholder) que ya viene en el HTML.

document.addEventListener('DOMContentLoaded', () => {
  if (typeof SUPABASE_URL === 'undefined' || SUPABASE_URL.includes('PEGA_AQUI')) {
    return; // credenciales no configuradas todavía
  }

  const bucket = typeof IMAGES_BUCKET !== 'undefined' ? IMAGES_BUCKET : 'site-images';

  document.querySelectorAll('[data-img-key]').forEach((el) => {
    const key = el.getAttribute('data-img-key');
    const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${key}`;

    const test = new Image();
    test.onload = () => {
      if (el.tagName === 'IMG') {
        el.src = `${publicUrl}?t=${Date.now()}`;
      } else {
        el.style.backgroundImage = `url("${publicUrl}?t=${Date.now()}")`;
      }
    };
    // Si no hay imagen subida para esta llave, se queda con el respaldo del HTML
    test.onerror = () => {};
    test.src = `${publicUrl}?t=${Date.now()}`;
  });
});
