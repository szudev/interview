Enunciado
Crea una aplicación para buscar películas
VIDEO: MINUTO 2:22:00
API a usar:

https://www.omdbapi.com/
API_KEY: 1ba0f63e <- Se puede obtener una KEY de forma gratuita desde la API

Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar.
✅ Lista las películas y muestra el título, año y poster.
✅ Que el formulario funcione
✅ Haz que las películas se muestren en un grid responsive.
✅ Hacer el fetching de datos a la API

Primera iteración:

✅ Evitar que se haga la misma búsqueda dos veces seguidas. <- Se utiliza el hook useRef y useMemo
✅ Haz que la búsqueda se haga automáticamente al escribir.
✅ Evita que se haga la búsqueda continuamente al escribir (debounce)
