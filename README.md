
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

## **Libraries**

## react-router
Se nos indicó utilizar esta biblioteca durante el
desarrollo del curso para resolver el routing en
el proyecto sin meternos en la implementación de
las apis web dedicadas a eso. Con esta biblioteca
podemos manejar el routing con elementos de react
como son las props o los hooks.

## validator
Esta biblioteca nos permite acceder a funciones de
validaciones desarrolladas con expresiones regulares
y debidamente testeadas, obteniendo una funcionalidad
necesaria, testeada y optimizada, que es altamente integrable
al proyecto debido a su simpleza a la hora de ser utilizada.

## react-icons

Con esta biblioteca podemos tener acceso a una gran cantidad de 
iconos sin necesidad de descargarlos o buscarlos en internet,
además están integrados como componentes de react. Su funcionalidad
no es estrictamente necesaria, podría resolverse de otra forma. Sin embargo,
nos facilita y agiliza el trabajo, ahorrándonos tiempo de desarrollo
que podemos destinar a aspectos más esenciales relaciones con la funcionalidad.

## firebase
Implementado firebase en el proyecto podemos tener una base de datos
sin necesidad de implementar un backend, lo cual para un curso de frontend
es realmente necesario.

## lunr
Esta biblioteca se utilizo para lograr hacer busquedas en el catalogo de productos de forma optimizada e indexada, hacer busquedas en listas de forma manual.

## node-sass
Con esta biblioteca fue posible utilizar sass en el proyecto, de forma que los estilos quedaron escritos de una forma mas legible y con mejores practicas. Ademas, se utilizo el import de variables para mantener una UI consistente en cuanto a la paleta de colores y facilmente modificable reemplazando el contenido de las variables exportadas.

## eslint
Esta biblioteca se utilizó con el fin de mantener un linting ordenado
y consistente a lo largo de todo el proyecto.

## **Detalles de implementación**

## Services
En el proyecto se entienden por services toda lógica de consumo de información.
La idea central detrás de esta decisión es que los archivos en los que se define 
esta logica estén claramente diferenciados de los componentes. Si los componentes no
tienen la responsabilidad de conocer la implementación del consumo de datos, en caso de
ser necesario un cambio (por ejemplo, en lugar de consumir firebase consumir una API), es mucho más mantenible. Solo se deberían modificar los 
servicios y los componentes se mantendrían inalterados.
Todos los servicios asi como la implementación de la configuración fueron desarrollados con un singleton para evitar numerosas instancias de un objeto que no tiene sentido que se instance más de una vez.

## Form custom hook
Hay una carpeta hooks que contiene un único archivo, que es useForm.js.
Este hook se desarrollo acorde a las necesidades que se tuvieron durante el desarrollo de la aplicacion. Por ejemplo, se vio que muchos formularios debian redirigir a otra ruta luego de ser completados satisfactoriamente, por lo tanto se agrego la posibilidad en el hook de pasarle la ruta a la que se queria redirigir al finalizar. 

## useFields
Si bien no se creo en la carpeta hooks, en algunas carpetas se encuentra junto a los formularios un archivo fields.js que contiene los estados de los campos, sus mensajes de error, sus logicas de validacion y actualizacion, para separar las responsabilidades del manejo del formulario en useForm y la logica del manejo de campos en useFields. De esta manera, para agregar un nuevo campo simplemente basta con ir al archivo fields.js y agregar la logica del nuevo campo a la lista fields. Cabe destacar que en algunos formularios chicos no se utilizo un archivo fields.js.

## Containers
En los casos que se necesite consumir datos de un servicio, se separó la responsabilidad
en al menos 2 componentes: componente container, que se encarga de la obtención de datos y 
componente presentacional, que tiene la responsabilidad de presentar los componentes. En el caso del 
catálogo (ItemListContainer-ItemList-Item), al esquema de componente container y presentacional
se le sumó el componente lista, que tiene la responsabilidad de iterar los datos que el container le pasa por 
props.

## Cart context
Para manejar el Cart context se decidió utilizar el patrón custom provider. De esta forma el 
contexto se abstrae de quienes lo consumen y se vuelve reutilizable. Además, hay un detalle extra
en la implementación de CartContext: para manejar el precio total del carrito y la cantidad de items totales
se decidió deliberadamente utilizar 3 estados diferentes: uno para guardar los items, otro para guardar la cantidad
total de items y un último para guardar el precio total de los items. Si bien esto no era necesario y 
con la lista se podían obtener estos datos, se prefirió consumir un poco más de memoria y no tener que iterar sobre
una lista de productos, con las implicaciones que esto puede tener.
Ademas, en lugar de utilizar el hook useState se utilizo el hook useReducer y se brindaron funciones para el manejo del reducer. Es decir, ningun componente por fuera del context utiliza el dispatch directamente.

## User context
El contexto de usuario fue creado principalmente para proveer la logica del manejo del usuario y poder acceder "globalmente" al usuario logueado, determinando de esta forma acciones a seguir en caso de que hubiera o no un usuario.

## Busquedas
Esta fue posiblemente la parte mas compleja de resolver. Empezando por la utilizacion de una libreria o servicio para busquedas de texto completo. Firebase indica claramente en su documentación que no está preparado para soportar este tipo de operaciones y recomienda la utilización de otro tipo de servicio como Algolia, Typesense y Elastic. De estos 3, el único gratuito es Typesense, sin embargo para que sea práctico debía utilizarse en la nube, y esto tenía un costo. Buscando alternativas di con lunr, que hace la operación directamente en la aplicación. Esto tiene sus beneficios y complicaciones, tanto a nivel performance como a nivel codigo. La creación del índice puede ser un trabajo pesado si tenemos gran cantidad de items, por lo tanto se procuro que esta operación ocurra una única vez en toda la aplicación. Para ello, se inicializó como estado nulo en App.jsx, y una vez que la App se montó se procede a indexar los ítems (es decir con un useEffect). Además es uno de los servicios. Como se indicó anteriormente, todos estos están implementados con un patrón singleton, ya que no tiene sentido que se instancien más de una vez.