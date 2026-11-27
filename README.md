# mateomaldini.dev

Portfolio personal de Mateo Maldini, desarrollador de software en Mar del Plata, Argentina.

> Estado: en construcción. El plan de trabajo va por fases y cada fase entra por su propio pull request.

## Stack

- [React](https://react.dev) 19 + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) para desarrollo y build
- [Biome](https://biomejs.dev) para lint y formato
- [Vitest](https://vitest.dev) para tests
- [pnpm](https://pnpm.io) como gestor de paquetes y [fnm](https://github.com/Schniz/fnm) para la versión de Node
- Deploy en [Vercel](https://vercel.com)

## Cómo correrlo

```bash
fnm use            # toma la versión de .node-version (fnm install si no la tenés)
corepack enable    # activa la versión de pnpm fijada en package.json
pnpm install
pnpm dev           # http://localhost:5173
```

## Scripts

| Comando          | Qué hace                                   |
| ---------------- | ------------------------------------------ |
| `pnpm dev`       | Servidor de desarrollo                     |
| `pnpm build`     | Chequea tipos y genera el build en `dist/` |
| `pnpm preview`   | Sirve el build localmente                  |
| `pnpm check`     | Lint y formato con Biome                   |
| `pnpm check:fix` | Aplica los arreglos automáticos de Biome   |
| `pnpm typecheck` | Solo chequeo de tipos                      |
| `pnpm test`      | Corre los tests una vez                    |

GitHub Actions corre `check`, `typecheck`, `test` y `build` en cada pull request.

## Sistema de diseño

Los tokens (colores, tipografías, espaciados, radios y curvas de movimiento) están en `src/styles/tokens.css`. Cada sección declara un tema con `data-theme="dark" | "light" | "lime"` y los componentes solo leen los tokens del tema (`--bg`, `--fg`, `--accent`...), así que las secciones claras y oscuras se invierten solas.

Con `pnpm dev`, la página [`/ui/`](http://localhost:5173/ui/) muestra la paleta, la tipografía y los componentes base en los tres temas.

## Estructura

```
src/
├── app/            # Composición de la página (App)
├── sections/       # Una carpeta por sección: hero, proyectos, skills, sobre mí, contacto
├── components/ui/  # Componentes base reutilizables: botón, caja, ícono
├── motion/         # Efectos y animaciones encapsuladas: olas, puntero, marea
├── data/           # Contenido tipado: proyectos, skills, links de contacto
├── hooks/          # Hooks propios
├── ui/             # Página interna /ui con el sistema de diseño
├── lib/            # Utilidades sin React
└── styles/         # Estilos globales y tokens de diseño
```

### Decisiones

- **Datos separados de la vista.** El contenido (proyectos, skills, links) vive en `src/data` con tipos de TypeScript. Las secciones solo lo reciben y lo muestran, así que sumar un proyecto no toca el diseño.
- **Animaciones encapsuladas.** Cada efecto es un componente o hook propio, para poder ajustarlo o apagarlo (por ejemplo con `prefers-reduced-motion`) sin tocar las secciones.
- **Commits con formato.** `feat:`, `fix:`, `style:`, `docs:`, `chore:`, uno por cambio lógico.
