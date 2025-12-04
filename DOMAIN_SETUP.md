# Guía para Configurar Dominio Personalizado en GitHub Pages

## Dominio: marketdream.solutions

Esta guía te ayudará a configurar tu dominio `marketdream.solutions` (actualmente en Squarespace) para que funcione con GitHub Pages.

---

## Paso 1: Configurar CNAME en GitHub

✅ **YA COMPLETADO**: El archivo `CNAME` ya está creado en el repositorio con el contenido `marketdream.solutions`

Este archivo le dice a GitHub Pages qué dominio personalizado usar.

---

## Paso 2: Configurar DNS en Squarespace

Necesitas configurar los registros DNS en Squarespace para que apunten a GitHub Pages.

### Opción A: Usar Registros A (Recomendado para dominio raíz)

1. **Inicia sesión en Squarespace**
   - Ve a tu cuenta de Squarespace
   - Navega a **Settings** → **Domains**
   - Selecciona tu dominio `marketdream.solutions`

2. **Configura los registros A**:
   - Busca la sección de **DNS Settings** o **Advanced DNS**
   - Agrega o modifica los siguientes registros **A**:

   ```
   Tipo: A
   Host: @ (o deja en blanco)
   Points to: 185.199.108.153
   TTL: 3600 (o Auto)

   Tipo: A
   Host: @ (o deja en blanco)
   Points to: 185.199.109.153
   TTL: 3600 (o Auto)

   Tipo: A
   Host: @ (o deja en blanco)
   Points to: 185.199.110.153
   TTL: 3600 (o Auto)

   Tipo: A
   Host: @ (o deja en blanco)
   Points to: 185.199.111.153
   TTL: 3600 (o Auto)
   ```

   Estos son los 4 IPs de GitHub Pages que necesitas configurar.

3. **Configura el registro CNAME para www** (opcional pero recomendado):
   ```
   Tipo: CNAME
   Host: www
   Points to: toledoal.github.io
   TTL: 3600 (o Auto)
   ```

### Opción B: Usar CNAME (Solo si Squarespace lo permite para dominio raíz)

Algunos proveedores DNS no permiten CNAME en el dominio raíz (@). Si Squarespace lo permite:

1. **Configura el registro CNAME**:
   ```
   Tipo: CNAME
   Host: @ (o deja en blanco)
   Points to: toledoal.github.io
   TTL: 3600 (o Auto)
   ```

2. **Configura www también**:
   ```
   Tipo: CNAME
   Host: www
   Points to: toledoal.github.io
   TTL: 3600 (o Auto)
   ```

---

## Paso 3: Habilitar Dominio Personalizado en GitHub

1. **Ve a tu repositorio en GitHub**:
   - `https://github.com/toledoal/marketdream`
   - Ve a **Settings** → **Pages**

2. **En la sección "Custom domain"**:
   - Ingresa: `marketdream.solutions`
   - Haz clic en **Save**

3. **Espera la verificación**:
   - GitHub verificará automáticamente la configuración DNS
   - Esto puede tardar desde unos minutos hasta 24 horas
   - Verás un mensaje de "DNS check successful" cuando esté listo

4. **Habilita "Enforce HTTPS"** (recomendado):
   - Una vez que el dominio esté verificado, marca la casilla **"Enforce HTTPS"**
   - Esto asegurará que tu sitio solo sea accesible por HTTPS

---

## Paso 4: Verificar la Configuración

### Verificar DNS (desde tu terminal):

```bash
# Verificar registros A
dig marketdream.solutions A

# Verificar CNAME (si lo usaste)
dig marketdream.solutions CNAME

# Verificar desde diferentes ubicaciones
nslookup marketdream.solutions
```

### Verificar en GitHub:

1. Ve a **Settings** → **Pages**
2. Deberías ver:
   - ✅ "DNS check successful"
   - ✅ "Your site is live at marketdream.solutions"

---

## Paso 5: Configurar Redirección de www (Opcional)

Si configuraste `www.marketdream.solutions`, puedes hacer que redirija al dominio principal:

1. En GitHub Pages settings, agrega también `www.marketdream.solutions`
2. GitHub automáticamente redirigirá `www` a la versión sin `www` (o viceversa según tu preferencia)

---

## Troubleshooting

### El dominio no carga después de 24 horas:

1. **Verifica los registros DNS**:
   - Usa herramientas como `dig` o `nslookup` para verificar que los registros A apuntan correctamente
   - Asegúrate de que los TTL no sean muy altos (3600 es bueno)

2. **Verifica el archivo CNAME**:
   - Asegúrate de que el archivo `CNAME` en la raíz del repositorio contenga solo `marketdream.solutions` (sin http://, sin www, sin espacios)

3. **Limpia la caché DNS**:
   ```bash
   # En Mac/Linux
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   
   # O simplemente espera - los cambios DNS pueden tardar hasta 48 horas
   ```

4. **Verifica en GitHub**:
   - Ve a Settings → Pages
   - Revisa si hay mensajes de error
   - Asegúrate de que el dominio esté verificado

### Errores comunes:

- **"DNS check failed"**: Los registros DNS no están configurados correctamente o aún no se han propagado
- **"Domain is not verified"**: Espera más tiempo o verifica que los registros DNS sean correctos
- **"CNAME already in use"**: Otro repositorio de GitHub está usando este dominio

---

## Notas Importantes

1. **Propagación DNS**: Los cambios DNS pueden tardar desde unos minutos hasta 48 horas en propagarse completamente

2. **HTTPS**: GitHub Pages proporciona certificados SSL automáticamente para dominios personalizados. Una vez verificado, habilita "Enforce HTTPS"

3. **Squarespace**: Si tu dominio está conectado a un sitio de Squarespace, es posible que necesites desconectarlo primero o configurar los DNS manualmente

4. **Subdominios**: Si quieres usar subdominios (como `www`), agrégalos también en la configuración de GitHub Pages

---

## Comandos Útiles

```bash
# Verificar configuración DNS actual
dig marketdream.solutions +short

# Verificar si GitHub puede resolver el dominio
dig marketdream.solutions A

# Verificar certificado SSL (después de que esté configurado)
curl -I https://marketdream.solutions
```

---

## Soporte

Si tienes problemas:
1. Verifica la documentación oficial de GitHub Pages: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
2. Revisa los logs en GitHub Actions para ver si hay errores de despliegue
3. Contacta a Squarespace si tienes problemas con la configuración DNS

---

**Última actualización**: Después de configurar, espera 24-48 horas para la propagación completa del DNS.

