<<<<<<< HEAD
# practica-react
Practica #3 Fundamentos de React para Next.js
=======
# Fundamentos de React para Next.js — Práctica guiada

Este repo contiene **3 capítulos** (3 ramas sugeridas) que siguen exactamente la rúbrica de tu práctica:
- **Capítulo 1 (JS puro):** DOM + eventos + estado en memoria (`localStorage`).
- **Capítulo 2 (React):** componentes, `useState`, `useEffect`, props, lifting state.
- **Capítulo 3 (Next.js):** App Router, rutas, `Link`, server/client components, metadatos y una ruta API.

> Requisitos: Node.js 20.x LTS y npm. Editor recomendado: VSCode.

## Cómo usar este repo
1) Clona o descarga este proyecto.  
2) Abre cada carpeta de capítulo por separado y ejecuta las instrucciones de su `README.md`.  
3) Sigue el plan de **ramas en Git** del enunciado (ver más abajo).

## Plan de ramas en Git (sugerido)
```
main
├─ chapter-1   # JS puro
├─ chapter-2   # Migración a React (parte desde chapter-1)
└─ chapter-3   # Migración a Next.js (parte desde chapter-2)
```

### Comandos base
```bash
mkdir practica-react && cd practica-react
git init --initial-branch=main
git remote add origin <URL-de-tu-repo>
git add . && git commit -m "Initial commit"
git push -u origin main

# Capítulo 1
git checkout -b chapter-1
# ...trabajo...
git add . && git commit -m "Add chapter 1 content: DOM + eventos + localStorage"
git push -u origin chapter-1

# Capítulo 2 (desde chapter-1)
git checkout -b chapter-2
# ...trabajo...
git add . && git commit -m "Add chapter 2 content: React (useState/useEffect)"
git push -u origin chapter-2

# Capítulo 3 (desde chapter-2)
git checkout -b chapter-3
# ...trabajo...
git add . && git commit -m "Add chapter 3 content: Next.js App Router + API route"
git push -u origin chapter-3
```

## Cómo mapeas la rúbrica
- **Comprensión de conceptos (20 pts):** `README.md` de cada capítulo explica *qué* y *por qué*.  
- **Implementación en código (25 pts):** app funcional en cada fase.  
- **Migración progresiva con ramas (20 pts):** `chapter-1` → `chapter-2` → `chapter-3`.  
- **Interactividad y estado (15 pts):** contador, lista de tareas con filtros, persistencia.  
- **Buenas prácticas (10 pts):** semántica en HTML, componentes pequeños, commits descriptivos, `.gitignore`.  
- **Participación y documentación (10 pts):** GIFs/capturas + explicación en cada `README.md`.

> Consejo: graba GIFs con ScreenToGif (Windows), Kap (macOS) o `CTRL+SHIFT+5` (macOS) para capturas.
>>>>>>> c67e0bb (Iniciando ell commit)
