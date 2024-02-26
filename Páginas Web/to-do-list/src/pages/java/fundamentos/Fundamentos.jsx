import React from "react";
import CodeBlock from "../../../components/code/CodeBlock";
import { FaGithub } from "react-icons/fa";
import "./fundamentos.scss";

function Fundamentos() {
  const variableCode = `
    int edad = 25; // variable de tipo entero que almacena la edad
    double precio = 14.99; // variable de tipo decimal que almacena el precio
    String nombre = "Juan"; // variable de tipo cadena de caracteres que almacena el nombre
  `;

  const aritmeticCode = `
    /* Suma (+): se utiliza para sumar dos valores. */
    int resSuma = 2 + 3; // resSuma será igual a 5

    /* Resta (-): se utiliza para restar un valor de otro valor. */
    int resResta = 5 - 2; // resResta será igual a 3

    /* Multiplicación (*): se utiliza para multiplicar dos valores. */
    int resMult = 2 * 3; // resultado será igual a 6

    /* División (/): se utiliza para dividir un valor entre otro valor. Si los valores son enteros,
    el resultado será también entero. Si uno o ambos valores son decimales, el resultado será decimal. */
    int resDiv1 = 10 / 2; // resultado1 será igual a 5
    double resDiv2 = 10.0 / 3.0; // resultado2 será igual a 3.3333333333333335

    /* Módulo (%): se utiliza para obtener el resto de la división de un valor entre otro valor. */
    int resMod = 10 % 3; // resultado será igual a 1

    /* Incremento (++): se utiliza para aumentar el valor de una variable en 1. */
    int valorInc = 5;
    valorInc++; // valor ahora será igual a 6

    /* Decremento (--): se utiliza para disminuir el valor de una variable en 1. */
    int valorDec = 5;
    valorDec--; // valor ahora será igual a 4

    /* Los operadores aritméticos pueden ser combinados con el operador de asignación (=) para realizar cálculos y
    asignar el resultado a una variable. Por ejemplo:*/
    int x = 5;
    int y = 10;

    x += y; // equivalente a x = x + y; x ahora será igual a 15
    y *= 2; // equivalente a y = y * 2; y ahora será igual a 20
  `;

  const bit2bitCode = `
    /* AND a nivel de bits (&): realiza una operación AND a nivel de bits en dos valores enteros y devuelve un
    nuevo valor entero. */
    int resAND = 6 & 3; // resultado será igual a 2 (en binario: 110 & 011 = 010)

    /* OR a nivel de bits (|): realiza una operación OR a nivel de bits en dos valores enteros y devuelve un nuevo
    valor entero. */
    int resOR = 6 | 3; // resultado será igual a 7 (en binario: 110 | 011 = 111)

    /* XOR a nivel de bits (^): realiza una operación XOR a nivel de bits en dos valores enteros y devuelve un
    nuevo valor entero. */
    int resXOR = 6 ^ 3; // resultado será igual a 5 (en binario: 110 ^ 011 = 101)

    /* Complemento a uno (~): realiza una operación de complemento a uno en un valor entero y devuelve un nuevo
    valor entero. */
    int resCompUno = ~6; // resultado será igual a -7 (en binario: ~110 = -111)

    /* Desplazamiento a la izquierda (<<): realiza una operación de desplazamiento a la izquierda en un valor
    entero y devuelve un nuevo valor entero. El valor se desplaza a la izquierda la cantidad especificada de bits,
    y se rellena con ceros a la derecha. */
    int resDespIzq = 6 << 2; // resultado será igual a 24 (en binario: 110 << 2 = 11000)

    /* Desplazamiento a la derecha con signo (>>): realiza una operación de desplazamiento a la derecha en un
    valor entero y devuelve un nuevo valor entero. El valor se desplaza a la derecha la cantidad especificada de
    bits, y se rellena con el bit de signo a la izquierda (es decir, se extiende el signo). */
    int resDespDchSig = -6 >> 2; // resultado será igual a -2 (en binario: 11111111111111111111111111111010 >> 2 = 11111111111111111111111111111110)

    /* Desplazamiento a la derecha sin signo (>>>): realiza una operación de desplazamiento a la derecha sin signo
    en un valor entero y devuelve un nuevo valor entero. El valor se desplaza a la derecha la cantidad especificada
    de bits, y se rellena con ceros a la izquierda. */
    int resDespDch = -6 >>> 2; // resultado será igual a 1073741822 (en binario: 11111111111111111111111111111010 >>> 2 = 00111111111111111111111111111110)
  `;

  const conditionalCode = `
    /* AND lógico (&&): devuelve verdadero si y solo si ambas expresiones booleanas son verdaderas. Si la primera
    expresión es falsa, no se evalúa la segunda expresión. */
    boolean resAND = (4 < 5) && (3 > 1); // resAND será verdadero (ambas expresiones son verdaderas)

    /* OR lógico (||): devuelve verdadero si al menos una de las expresiones booleanas es verdadera. Si la primera
    expresión es verdadera, no se evalúa la segunda expresión. */
    boolean resOR = (4 > 5) || (3 < 1); // resOR será verdadero (la segunda expresión es verdadera)

    /* NOT lógico (!): invierte el valor booleano de una expresión. */
    boolean resNOT = !(4 < 5); // resNOT será falso (la expresión es verdadera, pero se invierte con el operador !)
  `;

  const setOperatorCode = `
    /* Asignación simple (=): asigna un valor a una variable. */
    int x = 10; // asigna el valor 10 a la variable x

    /* Asignación compuesta (+=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>=, >>>=): combina un operador aritmético, bit
    a bit o de comparación con el operador de asignación simple. Primero se realiza la operación indicada y luego
    se asigna el resultado a la variable.*/
    int y = 5;
    y += 3; // equivale a x = x + 3, asigna el valor 8 a la variable x
    y *= 2; // equivale a x = x * 2, asigna el valor 16 a la variable x
  `;

  const compareCode = `
    /* Igualdad (==): El operador de igualdad se utiliza para comparar si dos valores son iguales. */
    int a = 5;
    int b = 7;
    boolean resIgu = (a == b); // El valor de resultado será false

    /* Desigualdad (!=): El operador de desigualdad se utiliza para comparar si dos valores son diferentes. */
    int c = 5;
    int d = 7;
    boolean resDes = (c != d); // El valor de resultado será true

    /* Mayor que (>): El operador mayor que se utiliza para comparar si un valor es mayor que otro. */
    int e = 7;
    int f = 5;
    boolean resMay = (e > f); // El valor de resultado será true

    /* Menor que (<): El operador menor que se utiliza para comparar si un valor es menor que otro. */
    int g = 5;
    int h = 7;
    boolean resMen = (g < h); // El valor de resultado será true

    /* Mayor o igual que (>=): El operador mayor o igual que se utiliza para comparar si un valor es mayor o igual
    que otro. */
    int i = 7;
    int j = 5;
    boolean resMayI = (i >= j); // El valor de resultado será true

    /* Menor o igual que (<=): El operador menor o igual que se utiliza para comparar si un valor es menor o igual
    que otro. */
    int k = 5;
    int l = 7;
    boolean resMenI = (k <= l); // El valor de resultado será true
  `;

  const concatCode = `
    /* Concatenación (+): El operador de concatenación se utiliza para combinar dos cadenas de caracteres. */
    String cadena1 = "Hola ";
    String cadena2 = "Mundo";
    String resultado = cadena1 + cadena2; // El valor de resultado será "Hola Mundo"

    /* Concatenación con valor numérico: El operador de concatenación también se puede utilizar para combinar una
    cadena y un valor numérico. En este caso, el valor numérico se convierte automáticamente en una cadena antes
    de concatenarse. */
    int x = 5;
    String cadenaNum = "El valor de x es: " + x; // El valor de cadenaNum será "El valor de x es: 5"

    /* Concatenación con objetos: El operador de concatenación también se puede utilizar para combinar una cadena
    y otro objeto. En este caso, el objeto se convierte automáticamente en una cadena antes de concatenarse. */
    Date fecha = new Date();
    String cadenaObj = "La fecha actual es: " + fecha; // El valor de cadenaObj será "La fecha actual es: Mon Mar 29 17:31:00 UTC 2023"
  `;

  const regularCode = `
    /* . (punto): El operador de punto se utiliza para buscar cualquier carácter, excepto el carácter de nueva
    línea (\n). */
    String cadena = "Hola Mundo";
    boolean resultado = cadena.matches("H..a"); // El valor de resultado será true

    /* [] (corchetes): Los corchetes se utilizan para buscar un conjunto de caracteres. */
    String cadenaCor = "Hola Mundo";
    boolean resCor = cadena.matches("[Hh]ola [Mm]undo"); // El valor de resCor será true

    /* ^ (circunflejo): El operador de circunflejo se utiliza para buscar una cadena que comience con un cierto patrón. */
    String cadenaCir = "Hola Mundo";
    boolean resCir = cadena.matches("^H[a-z]*"); // El valor de resCir será true

    /* $ (signo de dólar): El operador de signo de dólar se utiliza para buscar una cadena que termine con un
    cierto patrón. */
    String cadenaDol = "Hola Mundo";
    boolean resDol = cadena.matches(".*do$"); // El valor de resDol será true

    /* | (barra vertical): El operador de barra vertical se utiliza para buscar cualquiera de los patrones
    especificados. */
    String cadenaBar = "Hola Mundo";
    boolean resBar = cadena.matches("Hola|Adiós"); // El valor de resBar será true si la cadena es "Hola" o "Adiós"

    /* () (paréntesis): Los paréntesis se utilizan para agrupar patrones juntos. */
    String cadenaPar = "Hola Mundo";
    boolean resPar = cadena.matches("(Hola|Adiós) Mundo"); // El valor de resPar será true si la cadena es "Hola Mundo" o "Adiós Mundo"
  `;

  const increaseCode = `
    /* Operadores de incremento y decremento: se utilizan para aumentar o disminuir el valor de una variable en una
    unidad. Estos operadores se representan por dos símbolos: el operador de incremento "++" y el operador de
    decremento "--".*/
    int numero = 10;
    ++numero; // número ahora es 11
    --numero; // número ahora es 10

    int x = 5;
    int y = ++x; // x ahora es 6 e y ahora es 6

    int a = 5;
    int b = a++; // a ahora es 6 y b ahora es 5
  `;

  const instanceCode = `
    /* Operador de instancia: se utiliza para comprobar si un objeto es una instancia de una clase en
    particular. Este operador se representa por la palabra reservada "instanceof". */
    String cadena = "Hola Mundo";
    boolean esCadena = cadena instanceof String; // devuelve true

    Integer entero = new Integer(10);
    boolean esEntero = entero instanceof Integer; // devuelve true

    Double doble = new Double(3.1416);
    boolean esDoble = doble instanceof Integer; // Inconvertible types: devuelve false

    /* Operador de tipo: se utiliza para comprobar si un objeto es de un tipo de dato en particular.
    Este operador se representa por la palabra reservada "typeof".*/
    String cadenaType = "Hola Mundo";
    System.out.println(typeof(cadenaType)); // muestra "java.lang.String"

    int numero = 10;
    System.out.println(typeof(numero)); // muestra "int"

    double decimal = 3.1416;
    System.out.println(typeof(decimal)); // muestra "double"
  `;

  const logicOperatorCode = `
  /* Operador lógico AND: se utiliza para comprobar si ambas expresiones son verdaderas o falsas.
    Este operador se representa por dos símbolos de ampersand "&&". */
    int numero = 10;
    boolean esMayorQueCeroYMenorQueVeinte = numero > 0 && numero < 20; // devuelve true

    boolean esVerdadero = true;
    boolean esFalso = false;
    boolean sonAmbosVerdaderos = esVerdadero && esFalso; // devuelve false

    /* Operador lógico OR: se utiliza para comprobar si al menos una de las expresiones es verdadera.
    Este operador se representa por dos símbolos de barra vertical "||". */
    int numOR = 10;
    boolean esMenorQueCeroOEsMayorQueVeinte = numOR < 0 || numOR > 20; // devuelve false

    boolean esVer = true;
    boolean esFal = false;
    boolean esCualquierCosaVerdadera = esVer || esFal; // devuelve true

    /* Operador lógico NOT: se utiliza para negar una expresión.
    Este operador se representa por el símbolo de exclamación "!". */
    boolean esVerNOT= true;
    boolean esFalNOT = !esVerNOT; // devuelve false

    int numNOT = 10;
    boolean noEsMenorQueCero = !(numNOT < 0); // devuelve true
  `;

  const ifElseCode = `
    int edad = 18;
    if (edad >= 18) {
        System.out.println("Eres mayor de edad");
    } else {
        System.out.println("Eres menor de edad");
    }
  `;

  const switchCode = `
    int diaSemana = 4;
    switch (diaSemana) {
        case 1:
            System.out.println("Lunes");
            break;
        case 2:
            System.out.println("Martes");
            break;
        case 3:
            System.out.println("Miércoles");
            break;
        case 4:
            System.out.println("Jueves");
            break;
        case 5:
            System.out.println("Viernes");
            break;
        case 6:
            System.out.println("Sábado");
            break;
        case 7:
            System.out.println("Domingo");
            break;
        default:
            System.out.println("Valor inválido");
    }
  `;

  const forCode = `
    for (int i = 0; i < 10; i++) {
        System.out.println("Valor de i: " + i);
    }
  `;

  const forEachCode = `
    // Crear una lista de números enteros
    ArrayList<Integer> numeros = new ArrayList<Integer>();
    numeros.add(1);
    numeros.add(2);
    numeros.add(3);
    numeros.add(4);
    numeros.add(5);

    // Iterar sobre la lista utilizando la estructura foreach
    for (int numero : numeros) {
        System.out.println(numero);
    }
  `;

  const whileCode = `
    int i = 0;
    while (i < 10) {
        System.out.println("Valor de i: " + i);
        i++;
    }
  `;

  const doWhileCode = `
    int i = 0;
    do {
        System.out.println("Valor de i: " + i);
        i++;
    } while (i < 10);
  `;

  const breakCode = `
    for (int i = 0; i < 10; i++) {
        if (i == 5) {
            break;
        }
        System.out.println("Valor de i: " + i);
    }
  `;

  const continueCode = `
    for (int i = 0; i < 10; i++) {
        if (i == 5) {
            continue;
        }
        System.out.println("Valor de i: " + i);
    }
  `;

  const arrayCode = `
    int[] numeros = new int[5];
  `;

  const colectionCode = `
  import java.util.ArrayList;

  ArrayList<String> nombres = new ArrayList<String>();
  nombres.add("Juan");
  nombres.add("Pedro");
  nombres.add("María");

  for (String nombre : nombres) {
      System.out.println(nombre);
  }
  `;

  const commentsCode = `
    // Este es un comentario de una sola línea

    /*
    Este es un comentario de varias líneas.
    Puede ser muy útil para explicar partes complejas del código.
    */
    
    /**
    * Este es un comentario de documentación.
    * Se utiliza para generar documentación del código.
    */
  `;

  return (
    <section>
      <div className="container-xxl">
        <h1>Fundamentos</h1>
        <p>
          Conocer los fundamentos de Java es esencial para poder escribir
          programas efectivos y bien estructurados. A continuación, les mostraré
          algunos:
        </p>
        <br></br>
        <h3>Variables y tipos de datos</h3>
        <p>
          <b>Las variables</b> son contenedores de datos que se utilizan para
          almacenar valores en la memoria de un programa. En Java, se pueden
          declarar variables de diferentes tipos de datos.
        </p>
        <br></br>
        <CodeBlock language="java" code={variableCode} />
        <br></br>
        <br></br>
        <p>
          En programación, <b>los tipos de datos</b> definen qué tipo de valores
          puede contener una variable y cómo se almacenan y manipulan esos
          valores en la memoria del programa. En Java, hay dos categorías
          principales de tipos de datos: los tipos de datos primitivos y los
          tipos de datos no primitivos.
        </p>
        <br></br>
        <br></br>
        <h4>Primitivos</h4>
        <p>
          Son tipos de datos simples que se utilizan para almacenar valores
          básicos. Los tipos de datos primitivos son ocho en total y se pueden
          clasificar en cuatro grupos:
        </p>
        <br></br>
        <ul>
          <li>
            <b>Enteros:</b> byte, short, int, long
          </li>
          <li>
            <b>Punto flotante:</b> float, double
          </li>
          <li>
            <b>Caracteres:</b> char
          </li>
          <li>
            <b>Booleanos:</b> boolean
          </li>
        </ul>
        <br></br>
        <p>
          Los tipos de datos primitivos son inmutables, es decir, una vez que se
          les asigna un valor, no se pueden cambiar. También tienen una
          representación fija en memoria, lo que significa que se puede calcular
          la cantidad de memoria que utilizará cada tipo de dato primitivo.
        </p>
        <br></br>
        <table>
          <thead>
            <tr>
              <th>Tipo de Dato</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>byte</td>
              <td>Almacena un valor entero de 8 bits</td>
            </tr>
            <tr>
              <td>short</td>
              <td>Almacena un valor entero de 16 bits</td>
            </tr>
            <tr>
              <td>int</td>
              <td>Almacena un valor entero de 32 bits</td>
            </tr>
            <tr>
              <td>long</td>
              <td>Almacena un valor entero de 64 bits</td>
            </tr>
            <tr>
              <td>float</td>
              <td>Almacena un valor de coma flotante de 32 bits</td>
            </tr>
            <tr>
              <td>double</td>
              <td>Almacena un valor de coma flotante de 64 bits</td>
            </tr>
            <tr>
              <td>boolean</td>
              <td>Almacena un valor booleano (true o false)</td>
            </tr>
            <tr>
              <td>char</td>
              <td>Almacena un valor de carácter Unicode de 16 bits</td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <br></br>
        <h4>No primitivos</h4>
        <p>
          Son tipos de datos complejos que se utilizan para representar objetos
          y estructuras de datos. Los tipos de datos no primitivos se crean a
          partir de tipos de datos primitivos o de otros objetos y son variables
          que almacenan una referencia a un objeto en lugar de los datos del
          objeto en sí.
          <br></br>
          <br></br>
          Los tres tipos de datos no primitivos en Java son:
        </p>
        <br></br>
        <ul>
          <li>
            <b>String:</b> una secuencia de caracteres.
          </li>
          <li>
            <b>Arrays:</b> una colección de elementos del mismo tipo.
          </li>
          <li>
            <b>Clases personalizadas:</b> objetos personalizados creados por el
            usuario.
          </li>
        </ul>
        <br></br>
        <p>
          Los tipos de datos no primitivos son mutables, es decir, los valores
          que contienen pueden cambiar. Además, los tipos de datos no primitivos
          no tienen una representación fija en memoria, lo que significa que el
          tamaño de memoria que ocupan depende del objeto que estén almacenando
          y de su estado actual.
        </p>
        <br></br>
        <table>
          <thead>
            <tr>
              <th>Tipo de dato</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>String</td>
              <td>Almacena una secuencia de caracteres</td>
            </tr>
            <tr>
              <td>Arrays</td>
              <td>Almacena una colección de elementos del mismo tipo</td>
            </tr>
            <tr>
              <td>Clases personalizadas</td>
              <td>Almacena objetos personalizados creados por el usuario</td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <br></br>
        <h3>Operadores y expresiones</h3>
        <p>
          En Java, los operadores son símbolos que representan una acción que se
          realizará sobre uno o más valores. Las expresiones son combinaciones
          de operadores y operandos que se evalúan para producir un valor.{" "}
          <br></br>
          <br></br>A continuación se describen los principales operadores y
          expresiones en Java:
        </p>
        <br></br>
        <br></br>
        <h4>Operadores aritméticos</h4>
        <p>
          Los operadores aritméticos son operadores matemáticos que se utilizan
          en Java para realizar cálculos matemáticos. Java tiene los siguientes
          operadores aritméticos:
        </p>
        <br></br>
        <CodeBlock language="java" code={aritmeticCode} />
        <br></br>
        <br></br>
        <h4>Operadores bit a bit</h4>
        <p>
          Los operadores bit a bit son operadores que se aplican a nivel de bits
          en valores enteros. En Java, los operadores bit a bit se aplican a los
          bits individuales de un número entero y producen un nuevo valor
          entero. <br></br>
          <br></br>Java tiene los siguientes operadores bit a bit:
        </p>
        <br></br>
        <CodeBlock language="java" code={bit2bitCode} />
        <br></br>
        <br></br>
        <h4>Operadores condicionales</h4>
        <p>
          Los operadores condicionales se utilizan en expresiones booleanas para
          evaluar múltiples condiciones. En Java, los operadores condicionales
          devuelven un valor booleano verdadero o falso, dependiendo del
          resultado de la evaluación. <br></br>
          <br></br>Java tiene los siguientes operadores condicionales:
        </p>
        <br></br>
        <CodeBlock language="java" code={conditionalCode} />
        <br></br>
        <br></br>
        <h4>Operadores de asignación</h4>
        <p>
          Los operadores de asignación se utilizan para asignar un valor a una
          variable. En Java, los operadores de asignación se combinan con otros
          operadores aritméticos, bit a bit o de comparación para realizar una
          operación y luego asignar el resultado a una variable. <br></br>
          <br></br>Java tiene los siguientes operadores de asignación:
        </p>
        <br></br>
        <CodeBlock language="java" code={setOperatorCode} />
        <br></br>
        <br></br>
        <h4>Operadores de comparación</h4>
        <p>
          Los operadores de comparación se utilizan en Java para comparar dos
          valores o expresiones y devolver un valor booleano (verdadero o falso)
          como resultado. <br></br>
          <br></br>Los operadores de comparación disponibles en Java son los
          siguientes:
        </p>
        <br></br>
        <CodeBlock language="java" code={compareCode} />
        <br></br>
        <br></br>
        <h4>Operadores de concatenación</h4>
        <p>
          Los operadores de concatenación se utilizan en Java para combinar dos
          cadenas de caracteres o para combinar una cadena y un valor numérico u
          otro objeto. <br></br>
          <br></br>Los operadores de concatenación disponibles en Java son los
          siguientes:
        </p>
        <br></br>
        <CodeBlock language="java" code={concatCode} />
        <br></br>
        <br></br>
        <h4>Operadores de expresiones regulares</h4>
        <p>
          En Java, las expresiones regulares se utilizan para buscar y manipular
          cadenas de caracteres. Los operadores de expresiones regulares se
          utilizan para construir patrones de búsqueda que se utilizan para
          comparar y manipular cadenas de caracteres. <br></br>
          <br></br>Los operadores de expresiones regulares disponibles en Java
          son los siguientes:
        </p>
        <br></br>
        <CodeBlock language="java" code={regularCode} />
        <br></br>
        <br></br>
        <h4>Operadores de incremento-decremento</h4>
        <p>
          Los operadores de incremento y decremento se utilizan para aumentar o
          disminuir el valor de una variable en una unidad. Estos operadores se
          representan por dos símbolos: el operador de incremento "++" y el
          operador de decremento "--". <br></br>
          <br></br>Hay dos formas de utilizar los operadores de incremento y
          decremento:
        </p>
        <br></br>
        <ul>
          <li>
            Operador antes de la variable: si utilizamos el operador antes de la
            variable, primero se realiza la operación de incremento o decremento
            y luego se utiliza el valor resultante.
          </li>
          <li>
            Operador después de la variable: si utilizamos el operador después
            de la variable, primero se utiliza el valor de la variable y luego
            se realiza la operación de incremento o decremento.
          </li>
        </ul>
        <br></br>
        <p>
          Aquí hay algunos ejemplos de cómo se pueden utilizar los operadores de
          incremento y decremento:
        </p>
        <br></br>
        <CodeBlock language="java" code={increaseCode} />
        <br></br>
        <br></br>
        <h4>Operadores de instancia y de tipo</h4>
        <p>
          Los operadores de instancia y de tipo en Java son fundamentales para
          trabajar con objetos y tipos de datos. A continuación, te explicaré la
          teoría de cada uno de ellos y te daré algunos ejemplos de su uso:
        </p>
        <br></br>
        <CodeBlock language="java" code={instanceCode} />
        <br></br>
        <br></br>
        <h4>Operadores lógicos</h4>
        <p>Se utilizan en Java para combinar expresiones lógicas. Incluyen:</p>
        <br></br>
        <CodeBlock language="java" code={logicOperatorCode} />
        <br></br>
        <br></br>
        <h3>Estructuras de control de flujo</h3>
        <p>
          Las estructuras de control de flujo son herramientas fundamentales en
          la programación, ya que nos permiten controlar el flujo de ejecución
          de nuestro programa y tomar decisiones en función de diferentes
          situaciones. <br></br>
          <br></br>Existen varias estructuras de control de flujo en Java, como
          por ejemplo la estructura if-else, la estructura switch, la estructura
          for, la estructura while, la estructura do-while, la estructura break
          y la estructura continue.
        </p>
        <br></br>
        <br></br>
        <h4>Estructura if-else</h4>
        <p>
          Esta estructura permite ejecutar diferentes bloques de código
          dependiendo del resultado de una condición.
        </p>
        <br></br>
        <CodeBlock language="java" code={ifElseCode} />
        <br></br>
        <br></br>
        <h4>Estructura switch</h4>
        <p>
          Esta estructura permite evaluar diferentes casos y ejecutar diferentes
          bloques de código en función del valor de una variable.
        </p>
        <br></br>
        <CodeBlock language="java" code={switchCode} />
        <br></br>
        <br></br>
        <h4>Estructura for</h4>
        <p>
          Esta estructura permite ejecutar un bloque de código varias veces, en
          función de una condición.
        </p>
        <br></br>
        <CodeBlock language="java" code={forCode} />
        <br></br>
        <br></br>
        <h4>Estructura foreach</h4>
        <p>
          Esta estructura permite ejecutar un bloque de código varias veces, en
          función al tamaño de la lista.
        </p>
        <br></br>
        <CodeBlock language="java" code={forEachCode} />
        <br></br>
        <br></br>
        <h4>Estructura while</h4>
        <p>
          Esta estructura permite ejecutar un bloque de código mientras se
          cumpla una condición.
        </p>
        <br></br>
        <CodeBlock language="java" code={whileCode} />
        <br></br>
        <br></br>
        <h4>Estructura do-while</h4>
        <p>
          Esta estructura es similar a la estructura while, pero se ejecuta al
          menos una vez, independientemente de si se cumple o no la condición.
        </p>
        <br></br>
        <CodeBlock language="java" code={doWhileCode} />
        <br></br>
        <br></br>
        <h4>Estructura break</h4>
        <p>Esta estructura permite salir de un bucle de manera anticipada.</p>
        <br></br>
        <CodeBlock language="java" code={breakCode} />
        <br></br>
        <br></br>
        <h4>Estructure continue</h4>
        <p>
          Esta estructura permite saltar a la siguiente iteración de un bucle.
        </p>
        <br></br>
        <CodeBlock language="java" code={continueCode} />
        <br></br>
        <br></br>
        <h3>Arrays y colecciones</h3>
        <p>
          Un <b>array</b> es estructura de datos que se utiliza para almacenar
          una colección de elementos del mismo tipo. Los arrays tienen una
          longitud fija que se define al crearlos y se accede a sus elementos
          utilizando un índice numérico.
        </p>
        <br></br>
        <CodeBlock language="java" code={arrayCode} />
        <br></br>
        <br></br>
        <p>
          Las <b>colecciones</b> son estructuras de datos dinámicas que se
          utilizan para almacenar elementos de diferentes tipos. Las colecciones
          son más flexibles que los arrays porque pueden crecer y reducir su
          tamaño dinámicamente durante la ejecución del programa.
        </p>
        <br></br>
        <CodeBlock language="java" code={colectionCode} />
        <br></br>
        <br></br>
        <h3>Comentarios</h3>
        <p>
          Son texto que se incluye en el código fuente para explicar lo que hace
          el programa. Los comentarios no se ejecutan cuando se compila el
          código, por lo que no afectan al funcionamiento del programa.{" "}
          <br></br>
          <br></br>Java admite tres tipos de comentarios:
        </p>
        <br></br>
        <ul>
          <li>
            <b>Comentarios de una sola línea:</b> estos comentarios comienzan
            con // y se extienden hasta el final de la línea. Se utilizan para
            agregar comentarios breves y explicativos en el código.
          </li>
          <li>
            <b>Comentarios de múltiples líneas:</b> estos comentarios comienzan
            con /* y terminan con */. Se utilizan para agregar comentarios más
            largos y detallados en el código.
          </li>
          <li>
            <b>Comentarios de documentación:</b> estos comentarios comienzan con /** y
            terminan con */. Se utilizan para generar documentación del código.
            Los comentarios de documentación se pueden procesar con herramientas
            de documentación para generar una documentación detallada del
            código.
          </li>
        </ul>
        <br></br>
        <CodeBlock language="java" code={commentsCode} />
        <br></br>
        <h3>Enlace a prácticas:</h3>
        <a href="https://github.com/TitoDevs/Java/tree/main/Ruta%20de%20aprendizaje/3.%20Fundamentos">
          <FaGithub size={28} />
        </a>
      </div>
    </section>
  );
}

export default Fundamentos;
