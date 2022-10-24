# ca-product-card

Este es un paquete de pruebas de despliegue en NPM.

### SIIOS - Servicios Informáticos Integrales y Otras Soluciones.

## EJEMPLO
```
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from 'ca-product-card';
```

```
<ProductCard
    initialValues={{ count: 0, maxCount: 10 }}
    product={product}
>
    {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    )}
</ProductCard>
```