# Fotos para el hero movil

Coloca aqui las fotos individuales para movil, por ejemplo `1.jpg`, `2.jpg`.
Recomendado: 1200 x 900 px (4:3), con margen alrededor del sujeto.

Agrega cada foto a `defaultMobileSlides` en `app/components/HeroSlideshow.tsx`:

```tsx
{ image: "/images/hero-mobile/1.jpg", alt: "Descripcion de la foto" },
```

El placeholder aparece hasta que se actualice esa lista. Desktop mantiene sus collages.
