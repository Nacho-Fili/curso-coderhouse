
# TryH4rd e-commerce

Esta es mi implementación de un e-commerce
desarrollada en el marco del proyecto final
del curso de React en coderhouse.
## Installation

```bash
  git clone https://github.com/Nacho-Fili/curso-coderhouse
  cd curso-coderhouse
  npm i
```

Luego, para ejecutar la app en el puerto 3000:

```bash
  npm start
```
## Convenciones
Para nombrar componentes se utilizó PascalCase, para variables
camelCase, así como para archivos que no sean componentes y directorios.
En cuanto a linting, no se han utilizado console.log, se han utilizado 
comillas dobles cuando no se tratara de un template string y se ha optado
por usar ; siempre.

## Libraries

### react-router
Se nos indicó utilizar esta biblioteca durante el
desarrollo del curso para resolver el routing en
el proyecto sin meternos en la implementación de
las apis web dedicadas a eso. Con esta biblioteca
podemos manejar el routing con elementos de react
como son las props o los hooks.

### validator
Esta biblioteca nos permite acceder a funciones de
validaciones desarrolladas con expresiones regulares
y debidamente testeadas, obteniendo una funcionalidad
necesaria, testeada y optimizada, que es altamente integrable
al proyecto debido a su simpleza a la hora de ser utilizada.

### react-icons

Con esta biblioteca podemos tener acceso a una gran cantidad de 
iconos sin necesidad de descargarlos o buscarlos en internet,
además están integrados como componentes de react. Su funcionalidad
no es estrictamente necesaria, podría resolverse de otra forma. Sin embargo,
nos facilita y agiliza el trabajo, ahorrándonos tiempo de desarrollo
que podemos destinar a aspectos más esenciales relaciones con la funcionalidad.

### firebase
Implementado firebase en el proyecto podemos tener una base de datos
sin necesidad de implementar un backend, lo cual para un curso de frontend
es realmente necesario.

### eslint
Esta biblioteca se utilizó con el fin de mantener un linting ordenado
y consistente a lo largo de todo el proyecto.

## Detalles de implementación

### Services
En el proyecto se entienden por services toda lógica de consumo de información.
La idea central detrás de esta decisión es que los archivos en los que se define 
esta logica estén claramente diferenciados de los componentes. Si los componentes no
tienen la responsabilidad de conocer la implementación del consumo de datos, en caso de
ser necesario un cambio (por ejemplo, en lugar de consumir firebase consumir una API), es mucho más mantenible. Solo se deberían modificar los 
servicios y los componentes se mantendrían inalterados.

### Form custom hook
Hay una carpeta hooks que contiene un único archivo, que es useForm.js.
Si bien la lógica que contiene este archivo no se repite en más de un componente,
para simplificar el componente Form se decidió extraer parte del comportamiento en un custom hook.

### Containers
En los casos que se necesite consumir datos de un servicio, se separó la responsabilidad
en al menos 2 componentes: componente container, que se encarga de la obtención de datos y 
componente presentacional, que tiene la responsabilidad de presentar los componentes. En el caso del 
catálogo (ItemListContainer-ItemList-Item), al esquema de componente container y presentacional
se le sumó el componente lista, que tiene la responsabilidad de iterar los datos que el container le pasa por 
props.

### Cart context
Para manejar el Cart context se decidió utilizar el patrón custom provider. De esta forma el 
contexto se abstrae de quienes lo consumen y se vuelve reutilizable. Además, hay un detalle extra
en la implementación de CartContext: para manejar el precio total del carrito y la cantidad de items totales
se decidió deliberadamente utilizar 3 estados diferentes: uno para guardar los items, otro para guardar la cantidad
total de items y un último para guardar el precio total de los items. Si bien esto no era necesario y 
con la lista se podían obtener estos datos, se prefirió consumir un poco más de memoria y no tener que iterar sobre
una lista de productos, con las implicaciones que esto puede tener.
