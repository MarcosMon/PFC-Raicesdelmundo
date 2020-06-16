#### **1. Motivación**

En alguno de mis viajes, al visitar museos y buscar la información de los mismos, me he encontrado con información desactualizada, dispersa y poco vistosa. De esta manera, se me ocurrió crear una página web en la cual se cumplimentase por parte del administrador y sobre todo, por parte del museo en cuestión. Ya que el museo querrá disponer de la información siempre lo más actualizada y vistosa posible, para que el cliente final pueda obtener lo que necesita y ambos obtengan un beneficio. Además de esto, el usuario final dispondrá de la información global de todos los museos posibles en un mismo entorno.

 Así surgió Raicesdelmundo, con la cual se prevé un crecimiento incremental a base del uso cotidiano de los nuevos usuarios.

#### **2. Objetivos**

El objetivo del proyecto, trata en la creación de una aplicación web en la cual se cumplimenten y se incrementen las informaciones a base del uso de los usuarios con permisos. Y que de esta manera, el usuario final, el usuario que busca una información, la disponga de manera actualizada y conjunta en el mismo entorno.

Usuario Administrador

- Podrá crear eventos, eliminarlos y modificarlos.
- Podrá modificar cualquier detalle de la página.
- Podrá crear, modificar, eliminar cualquier dato de la BBDD
- Será el encargado de modificar el Role del usuario.
- Podrá eliminar cuentas, desactivarlas o editarlas.
- Podrá iniciar sesión

Usuario Con Permisos

- Podrá crear, modificar y eliminar la información a la que corresponda a su museo.
- Podrá visualizar la información de la totalidad de la página, pero con permisos de lectura.
- Podrá visualizar la sección de KPI de rendimiento de su museo con permisos de lectura.
- Podrá abrir tickets para el administrador.
- Podrá iniciar sesión.

Usuario Regular

- Podrá visualizar la información de la página.
- Podrá escribir comentarios y valorar los museos.
- Podrá acceder mediante enlace a páginas externas (museos), para poder realizar la compra de las entradas.
- Podrá iniciar sesión.
- Podrá registrarse.

#### **3. Demostración**

- Justificación de los objetivos alcanzados:

  - Como Administrador de la página, quiero poder crear y gestionar las cuentas de los usuarios para darles servicio. V

  - Como usuario con permisos, quiero poder iniciar sesión con una cuenta propia, para poder gestionar mi museo. V

  - Como usuario con permisos, quiero poder modificar, crear e implementar la información de mi museo para que los clientes tengan la información. V

  - Como usuario con permisos, quiero poder ver el KPI referenciado a mi museo, para poder ver el rendimiento de visitas, compras etc.. V

  - como usuario con permisos, quiero poder enviar tickets al administrador para que pueda solventar mis peticiones. V

  - Como usuario regular, quiero poder iniciar sesión para poder realizar la compra de las entradas mediante enlace externo. V

  - Como usuario regular, quiero poder utilizar filtros para poder obtener la información que más se amolda a mis necesidades. V

  - Como usuario regular, quiero poder navegar por los apartados de la página para poder obtener información. V

  - Como usuario regular, quiero poder ver las mejores rutas para poder llegar al museo deseado. V

  - Como usuario regular, quiero poder comentar y valorar el museo, para poder dar mi opinión. V

  - Como usuario regular, quiero poder registrarme, para poder tener una cuenta propia y realizar la compra de las entradas mediante enlace externo.

  - Como usuario regular, quiero poder usar el buscador y los filtros del mismo. V

  - Como usuario regular, quiero poder ver las rutas de los museos que tienen una correlación histórica entre ellos, para obtener la información que deseo. X
  
  
- Justificación de objetivo no alcanzado:
  - Falta de tiempo por contratiempos.


#### **4. Testing**

- Por el momento no dispone.

#### **5. Descripción técnica:**

La aplicación web se ha realizado con el patrón de arquitectura de software MVC.

- Arquitectura de la aplicación y tecnologías utilizadas:

**VISTA**

  - El módulo de vista se ha realizado con Angular, un framework el cual hace uso del superset de Javascript conocido como Typescript. La versión de angular CLI utilizada es la **8.3.25**

  - El lenguaje utilizado ha sido Typescript un superconjunto de Javascript. La versión es la **3.5.3**

  - Para el diseño de la aplicación web, se ha utilizado la librería de Bootstrap. La versión utilizada es la **4.5.0**

**Controlador**

  - Para nuestro controlador hemos utilizado Node, que está basado en el lenguaje de programación javascript. La versión utilizada es la **10.16.0**

  - El lenguaje utilizado ha sido Typescript un superconjunto de Javascript. La versión es la **3.5.3**

**Modelo**

  - Para nuestro modelo, hemos utilizado SQL. Un lenguaje de dominio diseñado para administrar y recuperar información de sistemas de sistemas de gestión de bases de datos relacionales. Se ha utilizado el sistema de gestión de Base de datos MYSQL. La versión es la **8.0**

- Control de versiones:

  - Git: Utilizaremos el software de control de versiones Git, para el mantenimiento de nuestra aplicación web. La versión utilizada es la **v2.26.1**

- Dependencias del proyecto:

  - Express : Ya que nos proporciona funcionalidades como el enrutamiento.. La versión utilizada es la **4.17.6**
  - Mysql: Para poder conectar nuestra aplicación a la base de datos. La versión utilizada es la **4.3**
  - Bcryptjs: Nos da la funcionalidad pertinente para poderle hacer un hash a las contraseñas recibidas y de esta manera le damos más seguridad. La versión utilizada es la **2.4.3**
  - Promise-mysql: Es un contenedor para mysql que envuelve las llamadas de función con promesas. La versión utilizada es la **3.3.1**
  - Morgan: Es un middleware que registra las solicitudes de HTTP para Node La versión utilizada es la **1.10.0**
  - Typescript: Un superset para javascript. La versión utilizada es la **3.5.3**
  - Nodemon: Es una herramienta que actualiza de manera automática los cambios realizados. La versión utilizada es la **2.0.3**
  - Cors: Es un mecanismo el cual utiliza cabeceras HTTP que nos da acceso a los recursos seleccionados desde un servidor La versión utilizada es la **2.8.6**
  - rxjs: Es una librería para programación reactiva que utiliza observables para facilitar la composición del código asíncrono. La versión utilizada es la **6.4.0**
  - ng2-charts: Es un contenedor de angular para la librería de chartsjs. La versión utilizada es la **2.3.2**
  - chartjs: Es una librería para gráficos de javascript . La versión utilizada es la **2.9.3**

- Arquitectura de la aplicación:

<img src="../master/img/MVC.png" class="card-img-top"
                        alt="...">       

- Diagrama de componentes:

<img src="../master/img/componentes.png" class="card-img-top"
                        alt="...">  

- Opcional: Diagrama E/R de la base de datos (o el que proceda).

<img src="../master/img/BBDD.png" class="card-img-top"
                        alt="...">       

####


####


####


####


#### **6.Metodología de desarrollo utilizada**

- La metodología de desarrollo utilizada ha sido la de iterativa y creciente:

 En esta se ha precisado la rápida representación gráfica para que el cliente tenga resultados visibles. De esta manera y con la retroalimentación del mismo, se van obteniendo mejoras futuras. Por eso, la página dispone de un sistema de tickets para recibir peticiones diversas de los mismos.

1. El proceso ha sido el siguiente para cada uno de los componentes de la aplicación:

  - Configuración del sistema.
  - Creación y estructuración de la BBDD.
  - Creación de Ruta y Controlador ( Back ).
  - Comprobación de que estas funcionan con POSTMAN ( Back ).
  - Creación del servicio en angular ( Front ).
  - Creación del componente en angular ( Front ).
  - Conectividad entre servicio y componente.
  - Creación de vista con bootstrap y css.
  - Comprobar funcionalidad.

2. El proyecto se ha dividido en dos ramas:

  - Master: Aquí se encuentra la versión final.
  - Develop: En este se ha trabajado en modo desarrollo.

#### **7.Diagrama de Gantt previo y final del desarrollo de la app**

Previo

<img src="../master/img/tabla.png" class="card-img-top"
                        alt="...">
                        
<img src="../master/img/diagrama.png" class="card-img-top"
                        alt="...">        

Final

<img src="../master/img/clocky.png" class="card-img-top"
                        alt="...">       

- Justificación del exceso de tiempo:
  - Este se ha producido por diversos contratiempos en la aplicación.

#### **8.Clockify**

<img src="../master/img/clocky.png" class="card-img-top"
                        alt="...">       

#### **9.Presupuesto**

<img src="../master/img/PRESU.png" class="card-img-top"
                        alt="...">     

#### **10.Conclusiones**

- Posibles mejoras:
  - Utilizar la API de google para poder realizar la traducción de un idioma a otro.
  - Crear componente de correlación entre museos, teniendo en cuenta la etapa histórica
  - Mejorar el código
  - Insetar más información de museos con alguna API de pago, ya que las públicas carecen de información.
  - Realizar casos test
  - Ir implementando ante las peticiones de los usuarios
 
