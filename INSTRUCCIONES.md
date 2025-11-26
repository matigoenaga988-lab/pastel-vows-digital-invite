# 📝 Instrucciones para Personalizar tu Invitación de Boda

Esta guía te ayudará a editar todos los aspectos de tu invitación digital sin necesidad de conocimientos técnicos avanzados. Cada sección tiene comentarios `<!-- EDITAR: ... -->` o `// EDITAR:` que indican exactamente dónde hacer cambios.

---

## 🎨 1. Cambiar Colores y Estilos Generales

**Archivo:** `src/index.css`

Los colores principales están definidos en variables CSS. Puedes modificar los valores HSL:

```css
/* Rosa principal */
--primary: 350 70% 85%;

/* Melocotón (secundario) */
--secondary: 20 80% 90%;

/* Lavanda (acento) */
--accent: 270 50% 90%;

/* Verde menta */
--mint: 150 40% 90%;
```

**Cómo cambiar colores:**
- Los valores HSL son: `matiz saturación% luminosidad%`
- Matiz: 0-360 (0=rojo, 120=verde, 240=azul)
- Saturación: 0-100% (más alto = más intenso)
- Luminosidad: 0-100% (más alto = más claro)

---

## 🖼️ 2. Cambiar Imágenes

### **Imagen de Portada (Hero)**
**Archivo:** `src/components/Hero.tsx`

1. Reemplaza el archivo `src/assets/hero-wedding.jpg` con tu propia foto
2. Mantén el mismo nombre de archivo, o actualiza la línea:
   ```tsx
   import heroImage from "@/assets/hero-wedding.jpg";
   ```

### **Foto de Pareja**
**Archivo:** `src/assets/couple-photo.jpg`
- Reemplaza con tu foto (recomendado: 800x800px)

### **Galería de Fotos**
**Archivo:** `src/components/Gallery.tsx`

1. Reemplaza las imágenes en `src/assets/`:
   - `gallery-1.jpg`
   - `gallery-2.jpg`
   - `gallery-3.jpg`

2. Para agregar más fotos:
   ```tsx
   // Importa la nueva imagen
   import gallery4 from "@/assets/gallery-4.jpg";
   
   // Agrégala al array
   const images = [gallery1, gallery2, gallery3, gallery4];
   ```

---

## ✏️ 3. Editar Textos

### **A. Portada (Hero)**
**Archivo:** `src/components/Hero.tsx`

```tsx
{/* Nombres de los novios */}
<h1>Ana & Carlos</h1>

{/* Fecha */}
<p>15 de Junio, 2025</p>

{/* Lugar */}
<p>Salón Los Jardines, Buenos Aires</p>
```

### **B. Historia / Frase Especial**
**Archivo:** `src/components/Story.tsx`

Edita el título, la frase principal y los párrafos de la historia:

```tsx
<h2>Nuestra Historia</h2>

<p className="italic">
  "Tu frase romántica aquí..."
</p>

<p>
  Primer párrafo de tu historia...
</p>
```

### **C. Cuenta Regresiva**
**Archivo:** `src/components/Countdown.tsx`

```tsx
// Cambia la fecha (formato: YYYY-MM-DD)
const weddingDate = new Date("2025-06-15T18:00:00");
```

### **D. Agradecimiento Final**
**Archivo:** `src/components/ThankYou.tsx`

Edita la frase de agradecimiento y los datos de contacto:

```tsx
{/* Teléfono */}
<span>+54 9 11 1234-5678</span>

{/* Email */}
<span>contacto@nuestra-boda.com</span>

{/* Instagram */}
<span>@ana_y_carlos_boda</span>
```

---

## 📍 4. Configurar Ubicación y Mapa

**Archivo:** `src/components/Location.tsx`

### **A. Datos del Lugar**

```tsx
// Coordenadas (busca tu lugar en Google Maps)
const latitude = -34.6037;
const longitude = -58.3816;

// Dirección completa
const address = "Av. del Libertador 1234, CABA, Buenos Aires";

// Nombre del salón
const venueName = "Salón Los Jardines";
```

### **B. Insertar Mapa de Google Maps**

1. Ve a [Google Maps](https://maps.google.com)
2. Busca tu ubicación
3. Clic en **"Compartir"** > **"Insertar un mapa"**
4. Copia el código `<iframe>` completo
5. Reemplaza el iframe en `Location.tsx`:

```tsx
<iframe
  src="TU_URL_DE_GOOGLE_MAPS_AQUÍ"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

---

## 📋 5. Insertar Google Forms

### **A. Formulario RSVP (Confirmación de Asistencia)**
**Archivo:** `src/components/RSVP.tsx`

1. Crea un Google Form en [forms.google.com](https://forms.google.com)
2. Haz clic en **"Enviar"** > ícono **"<>"** (código HTML)
3. Copia la URL del atributo `src`
4. Pégala en:

```tsx
const googleFormUrl = "https://docs.google.com/forms/d/e/TU_ID_AQUI/viewform?embedded=true";
```

### **B. Formulario de Sugerencias de Canciones**
**Archivo:** `src/components/SongRequest.tsx`

1. Crea otro Google Form para canciones
2. Clic en **"Enviar"** > obtén el enlace
3. Reemplaza:

```tsx
const songRequestFormUrl = "https://docs.google.com/forms/d/e/TU_ID_AQUI/viewform";
```

---

## 🎵 6. Cambiar la Música de Fondo

**Archivo:** `src/components/MusicPlayer.tsx`

### **Opción 1: Archivo local**
1. Coloca tu archivo de música (MP3) en la carpeta `public/music/`
2. Nómbralo `wedding-song.mp3`

### **Opción 2: URL externa**
```tsx
const musicUrl = "https://ejemplo.com/tu-cancion.mp3";
```

**Ajustar volumen:**
```tsx
audioRef.current.volume = 0.3; // 0.0 a 1.0 (30% volumen)
```

---

## 🎨 7. Personalizar Fuentes Tipográficas

**Archivo:** `index.html`

La invitación usa:
- **Cormorant Garamond** (serif elegante)
- **Montserrat** (sans-serif moderna)

Para cambiar:
1. Ve a [Google Fonts](https://fonts.google.com)
2. Selecciona tu fuente favorita
3. Copia el enlace `<link>` y reemplázalo en `index.html`
4. Actualiza `tailwind.config.ts`:

```tsx
fontFamily: {
  serif: ['"Tu Fuente Serif"', 'serif'],
  sans: ['"Tu Fuente Sans"', 'sans-serif'],
},
```

---

## 🚀 8. Cómo Ver tus Cambios

### **Desarrollo local:**
```bash
npm install
npm run dev
```
Abre http://localhost:8080 en tu navegador

### **Publicar en línea:**
1. Haz clic en **"Publish"** en Lovable
2. Tu sitio estará disponible en: `tu-proyecto.lovable.app`

---

## 📱 9. Compartir tu Invitación

Una vez publicada, simplemente comparte el enlace:
- Por WhatsApp
- Por email
- En redes sociales
- Como código QR

---

## ❓ Preguntas Frecuentes

### **¿Cómo agrego más secciones?**
Crea un nuevo componente en `src/components/` y agrégalo en `src/pages/Index.tsx`

### **¿Puedo cambiar el orden de las secciones?**
Sí, reordena los componentes en `Index.tsx`

### **¿La música se reproduce automáticamente?**
No, por políticas de navegadores. Los usuarios deben hacer clic en el botón de música.

### **¿Es responsive (se adapta a móviles)?**
Sí, todo el diseño es completamente responsive y se ve bien en cualquier dispositivo.

---

## 🎉 ¡Listo!

Tu invitación está lista para personalizar. Si necesitas ayuda adicional, consulta los comentarios en cada archivo o pregunta en la comunidad de Lovable.

**¡Felicidades por tu boda! 💕**
