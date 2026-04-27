# Grupo 1 - TP2 "JavaScript"

## Integrantes

### Nombre y Apellido / Cuenta de github

Dionicio Rodrigo Ezequiel / Dionicio-Rodrigo  
Cruz Benavidez Rita Melina / rmelinacruzb  
Mamaní Lucas Darío Joaquín / Lucas4414  
Mamani Lucas Lautaro / lucasmamani-lxl

Leonel Maximiliano Aramayo Estrada / Leomax99

## Parte I (Ejercicios del 1 al 18)

### Operaciones Básicas de JavaScript [1-8]

1. **Presentacion de los integrantes en consola**\
   Se declara una variable constante llamada `integrantes` utilizando const, ya que el valor no va a cambiar.Se le asigna un string con los nombres de los integrantes del grupo.Luego mediante `console.log()` se muestra el mensaje, empleando template strings para incluir el valor de la variable integrantes dentro del texto con `${}`.   

2. **Números Pares**\
   La variable `cant` decide cuantos números pares mostrar. Para mostrar los números se utiliza la función flecha `pares(cant)`, la cual recorre el rango de [0 -`cant`] y por cada número se llama a la consola y lo multiplica por 2.

3. **Volumen de Esfera**\
   Se declaran la variables constantes `radio` y `PI` para agregar el valor de los datos. Luego se crea la variable `Volumen` para empezar a hacer el calculo, se codifica la formula dada en lenguaje de javascript `(4/3)*PI*(radio)**2`. Y por ultimo se escribe con el `console.log()` la respectiva salida.

4. **Area del perimetro de un rectangulo**\
   Se declaran dos variables numéricas que representan los lados del rectángulo que apartir de estos valores se calcula el área utilizando la fórmula `lado1 * lado2` y el perímetro con la expresión `2 * (lado1 + lado2)`.Los resultados se muestran por consola mediante `console.log()`, utilizando template strings para incluir los valores calculados en el mensaje.  


5. **Conversion a segundos**\
   Creamos una función llamada `conversion()`la cual recibe un número y devuelve el número multiplcado por 60. Esta función nos deja pasar de minutos y luego a segundos.\
   Declaramos los valores de horas, minutos y los mostramos en consola. Escribimos en consola los segundos totales, llamando a la función para los minutos y para las horas los llamamos dos veces.

6. **Titulo**\
   Descripción

7. **El nombre mas Largo**\
   Primero creamos el array `nombres` y le colocamos como minio 6 nombres, en mi caso use los nombres de los integrantes del grupo.
   Ahora usamos la estructura `for` para mostrar cada nombre, usando el iterador `i`, la funcion `nombres.length` para marcar el limite del arregle y que sume de a 1 para mostrar cada elemento del arreglo.
   Para saber de quien es el nombre mad largo primero marcamos la variable de bloque `nombreLargo` para guardar el valor del nombre mas largo del arreglo, el cual se obtiene usando la funcion `nombres[0].length` usando los corchetes para seleccionar un elemento del arreglo en especifico. Usamos la estructura `for` otra vez para recorrer el arreglo con otro iterador `j` por las dudas de no chocar con el otro iterador.
   Dentro de la estructura for usamos una condicional `if` para comparar las variables `nombreLargo` y `nombres[j]` y asi saber cual string es el mas largo del arreglo. Una vez detectado el nuevo elemento reemplazara al anterior dato almacenado en la variable `nombreLargo`.
   Ya por ultimo usamos el `console.log(nombreLargo)` para mostrar en pantalla el nombre mas largo.

8. **Clasificacion y promedio de notas**\
   Se utiliza un array constante `notas` con 10 valores, tambien dos arrays vacios `aprobadas` y `desaprobadas` declarados con let ya que su contenido se modifica.Con for se recorre el array acumulando la suma y mediante if/else clasifica cada nota en el array correspondiente usando `push()`.Luego con 2 for separados se muestran las notas aprobadas y desaprobadas.Por ultimo, se muestra el promedio general con `toFixed(2)` y la cantidad de notas aprobadas.   

### JavaScript dentro de HTML [9-18]

9. **!Bienvenidos a Programación Visual!**\
   Primero le pedimos al usuario su apellido (Flores), luego su nombre (Liliana) con la función `promt()` y los guardamos en variables con el mismo nombre. Con la función `document.write()` escribimos el mensaje en el HTML:\

   > !Hola Liliana Flores!.
   > !Bienvenido/a a Programación Visual!

10. **Ingreso de números y cálculo de promedio**\
   Se solicita al usuario la cantidad de números que desea ingresar mediante `prompt()`, convirtiendo el valor a entero con `parseInt()`. Luego, utilizando un ciclo `for`, se piden los números uno por uno, los cuales se almacenan en un array y al mismo tiempo se acumulan en una variable suma.Una vez finalizado el ingreso, se calcula el promedio dividiendo la suma total por la cantidad de números ingresados. Finalmente, se muestran en pantalla los números ingresados y el promedio utilizando `document.write()` y template strings.

11. **Calculo de Consumo de Nafta por Km Recorridos**\
    Descripción

12. **Determinacion de un numero par/impar**\
    Se solicita un numero al usuario mediante `prompt()`, el cual es convertido a entero con `parseInt()`, ya que `prompt()` siempre devuelve un string.Se evalua con if/else si el numero es valido y si es par o impar.Luego el resultado se muestra en la pagina HTML con `document.write()` utilizando template strings.    

13. **Titulo**\
    Descripción

14. **Titulo**\
    Descripción

15. **Meses**\
    Le pedimos al usuario un número entero y verificamos que este dentro del rango [1-12], si no, le pedimos que vuelva a ingresar el número.\
    Cuando el número se encuentre entre el rango llamamos a la función `retornarMes()`, dentro de esta función se crea un arreglo con todos los meses del año ["Enero"-"Diciembre"] y devolvemos el elemento con el indice del numero menos 1, ya que, en JavaScript los arreglos empiezan en 0\
    Obviamente se escribe en el HTML el mes que devolvera la función.

16. **Titulo**\
    Descripción

17. **contar letra "a"**\
    Se implementa una función flecha llamada `contarLetraA` que recibe un string como parámetro.Luego ,dentro de la función se recorre el texto carácter por carácter mediante un ciclo `for`, comparando cada uno con la letra "a" tanto en mayúscula como en minúscula. Cada vez que se encuentra una coincidencia, se incrementa un contador. El resultado final se retorna y luego se muestra en pantalla utilizando `document.write()`. El valor del texto es ingresado por el usuario mediante `prompt()` .

18. **Determinar el mayor entre 2 numeros**\
    Se piden dos numeros al usuario mediante `prompt()`, convertidos a enteros con `parseInt()` y validados con `isNaN()`.Se declara una funcion llamada `calcularMayor` que recibe a numero1 y numero2 como parametros.La cual evalua si el primero numero es mayor, si el segundo es mayor o si son iguales, mostrando el mensaje con `document.write()`.Al terminar la definicion de la funcion, esta es invocada con los valores ingresados.   
