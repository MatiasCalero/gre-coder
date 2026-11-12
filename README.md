# ☣️ GRE Coder — Guía de Respuesta en Caso de Emergencia (GRE 2024)

[![PWA](https://img.shields.io/badge/PWA-100%25%20Offline-orange.svg)](https://developer.mozilla.org/es/docs/Web/Progressive_web_apps)
[![GRE](https://img.shields.io/badge/GRE%20%2F%20ERG-2024%20Vigente-red.svg)](https://www.phmsa.dot.gov/)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**GRE Coder** es una aplicación web progresiva (**PWA**), moderna, reactiva y **100% offline**, diseñada para primeros respondedores, bomberos, técnicos HazMat, personal de emergencias químicas, transportistas y brigadas industriales. 

Permite identificar, decodificar y consultar instantáneamente materiales peligrosos basándose en la **Guía de Respuesta a Emergencias oficial vigente (GRE 2024 / ERG 2024)** de DOT / PHMSA / Transport Canada / CIQUIME / SCT.

---

## 📱 Demostración y Acceso Web

- **Web App / PWA:** `https://<tu-usuario>.github.io/<tu-repositorio>/`
- **Instalable:** Compatible con Android, iOS (iPhone/iPad), Windows, macOS y Linux.
- **Funcionamiento Offline:** No requiere internet ni señal móvil una vez cargada por primera vez.

---

## ✨ Características Principales

### 1. 🔢 Selector Digital de Cartel (4 Dígitos UN)
- Ruletas numéricas independientes para Millares (1-9, \*), Centenas (0-9, \*), Decenas (0-9, \*) y Unidades (0-9, \*).
- Soporte para comodines interactivos (`*`) y botón de borrado inmediato en un solo toque.

### 2. 🔍 Búsqueda Rápida e Inteligente
- Búsqueda en tiempo real por número ONU (4 dígitos) o por nombre técnico del químico.
- Soporte bilingüe (Español e Inglés) y filtros configurables (*Empieza por* o *Contiene*).
- Pegado directo desde el portapapeles y navegación fluida entre resultados.

### 3. 🛡️ Guías de Respuesta Operativa (Páginas Naranjas 111 a 174)
- Consulta completa y estructurada de cada guía:
  - **Peligros Potenciales:** Riesgos a la salud y peligro de incendio o explosión.
  - **Seguridad Pública:** Zonas de aislamiento inicial, evacuación y ropa de protección especializada (SCBA / Nivel A-B-C).
  - **Respuesta a Emergencias:** Fuego (agentes extintores adecuados), derrames o fugas y primeros auxilios.

### 4. 📏 Tablas de Distancias de Aislamiento y Acción Protectora (Páginas Verdes)
- **Tabla 1:** Distancias operativas recomendadas para:
  - Derrames pequeños vs. derrames grandes.
  - Día vs. noche.
  - Situaciones especiales (*Derrame en agua*, *Derrame en tierra*, *Uso como arma química o tóxica*).
- **Tabla 3:** Matriz para los 6 gases tóxicos críticos por inhalación (Amoníaco anhidro 1005, Cloro 1017, Óxido de etileno 1040, Cloruro de hidrógeno 1050, Fluoruro de hidrógeno 1052 y Dióxido de azufre 1079), discriminados por:
  - Tipo de contenedor (vagón cisterna, camión cisterna, cilindros, nodrizas agrícolas).
  - Velocidad del viento (< 10 km/h, 10–20 km/h, > 20 km/h).
- Selector rápido entre unidades **Métricas** (metros / km) e **Imperiales** (pies / millas).

### 5. 💧 Sustancias Reactivas con Agua (TIH / WRM)
- Identificación inmediata de materiales que producen **Gases Tóxicos por Inhalación (TIH)** al entrar en contacto con agua o humedad atmosférica.
- Desglose de fórmulas químicas resultantes con navegación en 1 clic a la ficha del gas generado.

### 6. ⚠️ Advertencia de Polimerización Explosiva (P)
- Detección visual destacada del indicador **"P"** (polimerización violenta o explosiva por calor, choque o contaminación de inhibidor).

### 7. 🏷️ Catálogo de Carteles y Siluetas de Transporte
- Más de 35 carteles de rombos de clase (Explosivos, Gases, Líquidos inflamables, Corrosivos, Radioactivos, Sustancias infecciosas 6.2, etc.).
- Siluetas de camiones, vagones y cisternas de carretera con vinculación directa a su guía inicial de respuesta recomendada.

### 8. ☣️ Pictogramas SGA / GHS y Documentos Técnicos
- Los 9 pictogramas oficiales del Sistema Globalmente Armonizado (SGA / GHS) con sus clasificaciones de peligro.
- Manuales operativos integrados: BLEVE, distancias mínimas para artefactos explosivos improvisados (IED), tuberías y gasoductos, ropa de protección, papeles de embarque y códigos de peligro Kemler.

### 9. 🎨 Interfaz Limpia y Uniforme
- **Tema Claro Exclusivo:** Diseñado específicamente para entornos de campo y exteriores a plena luz del sol.
- Encabezados uniformes y limpios en tono naranja de seguridad HazMat (`#ea580c`), garantizando máxima legibilidad técnica sin distractores visuales.

---

## 🛠️ Stack Tecnológico

| Componente | Tecnología |
|---|---|
| **Frontend** | React 18 + TypeScript |
| **Empaquetador** | Vite 6 |
| **Estilos** | Tailwind CSS |
| **Iconografía** | Lucide Icons + SVGs vectoriales propios |
| **PWA / Offline** | `vite-plugin-pwa` (Workbox Service Worker) |
| **Despliegue** | GitHub Actions & GitHub Pages |

---

## 🚀 Instalación y Desarrollo Local

### Prerrequisitos
- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- [Git](https://git-scm.com/)

### 1. Clonar el repositorio
```bash
git clone https://github.com/<tu-usuario>/gre_coder.git
cd gre_coder
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar servidor de desarrollo
```bash
npm run dev
```
Abre tu navegador en `http://localhost:5173`.

### 4. Compilar para producción
```bash
npm run build
```
Genera la versión optimizada en la carpeta `dist/`.

### 5. Previsualizar la versión de producción localmente
```bash
npm run preview
```

---

## 🌐 Despliegue en GitHub Pages

Este repositorio cuenta con un flujo automatizado de **GitHub Actions** en [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

### Pasos para publicar:
1. Sube tu proyecto a un repositorio de GitHub (vía GitHub Desktop o terminal).
2. En GitHub, ve a **Settings** &rarr; **Pages**.
3. En la sección **Build and deployment > Source**, selecciona **GitHub Actions**.
4. ¡Listo! En la pestaña **Actions** verás el progreso de compilación y en menos de un minuto tendrás tu enlace público disponible:
   ```
   https://<tu-usuario>.github.io/<nombre-del-repo>/
   ```

---

## 📲 Cómo instalar como PWA en tu Dispositivo

1. Ingresa a la URL de la aplicación desde tu navegador móvil (**Chrome** en Android o **Safari** en iOS).
2. **En Android:** Toca el botón *"Instalar aplicación"* en el banner inferior o desde el menú de opciones (tres puntos) selecciona **"Instalar GRE Coder"**.
3. **En iPhone / iPad:** Toca el botón Compartir (icono de cuadrado con flecha hacia arriba) y selecciona **"Agregar al inicio"**.
4. La aplicación se ejecutará a pantalla completa, con icono propio en la pantalla de inicio y con disponibilidad 100% offline.

---

## 📄 Licencia y Fuentes Oficiales

- **Datos y Contenido Operativo:** Basado en la *Guía de Respuesta en Caso de Emergencia (GRE 2024)*, desarrollada conjuntamente por Transport Canada (TC), el Departamento de Transporte de los Estados Unidos (U.S. DOT / PHMSA), la Secretaría de Infraestructura, Comunicaciones y Transportes de México (SICT), y con la colaboración del Centro de Información Química para Emergencias (CIQUIME).
- **Código Fuente:** Distribuido bajo la Licencia MIT.
