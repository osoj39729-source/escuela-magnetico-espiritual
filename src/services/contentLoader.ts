/**
 * Servicio de carga dinámica de contenido doctrinal (Paradigma JSON Web).
 * Se ejecuta en el cliente (Navegador) y carga la sabiduría bajo demanda
 * mediante peticiones de red internas, resolviendo el overhead de Vite.
 */
export async function loadBookContent(bookId: string): Promise<Record<string, string>> {
  try {
    console.log(`[contentLoader] Inhalando sabiduría pura (JSON) para: ${bookId}`);
    
    // Obtenemos el JSON de la carpeta pública. Fetch maneja automáticamente
    // las codificaciones UTF-8 y descarta silenciosamente los BOM.
    const response = await fetch(`/data/contents/${bookId}_content.json`);
    
    if (!response.ok) {
      console.warn(`[contentLoader] El libro ${bookId} no se encontró en el depósito público.`);
      return {};
    }
    
    const content = await response.json();
    return content || {};
  } catch (error) {
    console.error(`[contentLoader] Error cargando contenido para ${bookId}:`, error);
    return {};
  }
}

export async function loadBookEssence(bookId: string): Promise<Record<string, any>> {
  try {
    const response = await fetch(`/data/contents/${bookId}_esencia.json`);
    if (!response.ok) return {};
    return await response.json();
  } catch (e) {
    console.error(`[contentLoader] Error cargando esencia para ${bookId}:`, e);
    return {};
  }
}
