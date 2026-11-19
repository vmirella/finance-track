# Convenciones de contribución

## Convención de ramas

Usa el prefijo que describe el tipo de trabajo:

- `feat/<descripcion-corta>`: una funcionalidad nueva
- `fix/<descripcion-corta>`: corrección de un defecto
- `chore/<descripcion-corta>`: mantenimiento o configuración
- `docs/<descripcion-corta>`: documentación
- `refactor/<descripcion-corta>`: cambio interno sin alterar comportamiento
- `test/<descripcion-corta>`: pruebas

Ejemplos:

```text
feat/add-expense-screen
fix/metro-global-css
chore/configure-husky
```

## Convención de commits

Usa Conventional Commits. Puedes crear el mensaje de forma guiada con Commitizen:

```bash
npm run commit
```

Commitizen mostrará una serie de preguntas para el tipo, alcance, descripción y referencias del cambio.

También puedes escribir el mensaje manualmente:

```text
<tipo>(<alcance-opcional>): <descripción>
```

Tipos permitidos:

- `feat`: nueva funcionalidad
- `fix`: corrección
- `docs`: documentación
- `style`: formato sin cambio de lógica
- `refactor`: reorganización interna
- `perf`: mejora de rendimiento
- `test`: pruebas
- `build`: dependencias o sistema de compilación
- `ci`: integración continua
- `chore`: mantenimiento
- `revert`: reversión

Ejemplos:

```text
feat(router): add expense details route
fix(metro): resolve Uniwind CSS entry
chore(husky): add commit validation hooks
```

Escribe la descripción en presente, con minúscula inicial, sin punto final y sin exceder aproximadamente 72 caracteres.

## Crear una rama

Actualiza la rama base y crea el trabajo desde ahí:

```bash
git switch main
git pull --ff-only
git switch -c feat/add-expense-screen
```

## Antes de crear el pull request

Ejecuta las verificaciones locales:

```bash
npm run lint
npm run format:check
npm run typecheck
```

También puedes corregir formato y lint:

```bash
npm run lint:fix
npm run format
```

## Crear un pull request

1. Sube la rama:

```bash
git push -u origin HEAD
```

2. Abre un pull request hacia `main`.
3. Usa un título que siga la misma convención de commits, por ejemplo:

```text
feat(expenses): add expense details screen
```

4. En la descripción incluye:

- objetivo del cambio;
- capturas o evidencia si afecta la interfaz;
- cómo probarlo;
- riesgos o cambios importantes.

5. Confirma que las verificaciones locales pasan y solicita revisión.

## Hooks locales

- `commit-msg` rechaza mensajes que no sigan Conventional Commits.
- `pre-commit` ejecuta ESLint y Prettier únicamente sobre los archivos preparados mediante `lint-staged`, evitando una revisión completa innecesariamente lenta.

Si necesitas omitir temporalmente los hooks, usa:

```bash
git commit --no-verify
```

Úsalo solo excepcionalmente y conserva las verificaciones manualmente.
