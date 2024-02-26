import React from "react";
import "./poo.scss";
import CodeBlock from "../../../components/code/CodeBlock";

function Poo() {
  const classCode = `
    public class Persona {
        // Declaración de variables
        private String nombre;
        private int edad;

        // Constructor de la clase
        public Persona(String nombre, int edad) {
            this.nombre = nombre;
            this.edad = edad;
        }

        // Método que retorna el nombre de la persona
        public String getNombre() {
            return this.nombre;
        }

        // Método que retorna la edad de la persona
        public int getEdad() {
            return this.edad;
        }

        // Método que imprime información de la persona
        public void imprimirInfo() {
            System.out.println("Nombre: " + this.nombre + ", Edad: " + this.edad);
        }
    }
  `;

  const personCode = `
    Persona persona1 = new Persona("Juan", 30);
  `;

  const printCode = `
    persona1.imprimirInfo();
  `;

  const outCode = `
    Nombre: Juan, Edad: 30
  `;

  const sumCode = `
    public int sumar(int num1, int num2) {
        int resultado = num1 + num2;
        return resultado;
    }
  `;

  const exSumCode = `
    public class EjemploMetodos {
        public static void main(String[] args) {
            int resultado = sumar(3, 4);
            System.out.println(resultado);
        }
    
        public static int sumar(int num1, int num2) {
            int resultado = num1 + num2;
            return resultado;
        }
    }
    `;
  const exPersonCode = `
    public class Persona {
        private String nombre;
        private int edad;
    
        public Persona(String nombre, int edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
    }
  `;

  const exConstrCode = `
    public class EjemploConstructor {

        public static void main(String[] args) {
            Persona persona1 = new Persona("Juan", 25);
            System.out.println(persona1.getNombre() + " tiene "
            + persona1.getEdad() + " años.");
        }
    }
  `;

  const exPersonComCode = `
    public class Persona {
        private String nombre;
        private int edad;
    
        public Persona(String nombre, int edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
    
        public String getNombre() {
            return nombre;
        }
    
        public void setNombre(String nombre) {
            this.nombre = nombre;
        }
    
        public int getEdad() {
            return edad;
        }
    
        public void setEdad(int edad) {
            this.edad = edad;
        }
    }
  `;

  const encapPersonCode = `
    public class EjemploEncapsulacion {

        public static void main(String[] args) {
            Persona persona1 = new Persona("Juan", 25);
            System.out.println(persona1.getNombre() + " tiene " 
            + persona1.getEdad() + " años.");
            persona1.setEdad(30);
            System.out.println(persona1.getNombre() + " ahora tiene " 
            + persona1.getEdad() + " años.");
        }
    }
  `;

  const vehicleCode = `
    public class Vehiculo {
        private String marca;
        private String modelo;
    
        public Vehiculo(String marca, String modelo) {
            this.marca = marca;
            this.modelo = modelo;
        }
    
        public String getMarca() {
            return marca;
        }
    
        public String getModelo() {
            return modelo;
        }
    }
  `;

  const vehicleHereCode = `
    public class Coche extends Vehiculo {
        private int numPuertas;
    
        public Coche(String marca, String modelo, int numPuertas) {
            super(marca, modelo);
            this.numPuertas = numPuertas;
        }
    
        public int getNumPuertas() {
            return numPuertas;
        }
    }
  `;

  const exHereCode = `
    public class EjemploHerencia {

        public static void main(String[] args) {
            Coche coche1 = new Coche("Ford", "Mustang", 2);
            System.out.println(coche1.getMarca() + " " + coche1.getModelo() + 
            " tiene " + coche1.getNumPuertas() + " puertas.");
        }
    }
  `;

  const poliCode = `
    public class Animal {
        public void hacerSonido() {
            System.out.println("El animal hace un sonido.");
        }
    }
    
    public class Perro extends Animal {
        public void hacerSonido() {
            System.out.println("El perro hace un ladrido.");
        }
    }
    
    public class Gato extends Animal {
        public void hacerSonido() {
            System.out.println("El gato hace un maullido.");
        }
    }
    
    public class EjemploPolimorfismo {
        public static void main(String[] args) {
            Animal miAnimal = new Animal();
            Animal miPerro = new Perro();
            Animal miGato = new Gato();
            
            miAnimal.hacerSonido();
            miPerro.hacerSonido();
            miGato.hacerSonido();
        }
    }
  `;

  const outPoliCode = `
    El animal hace un sonido.
    El perro hace un ladrido.
    El gato hace un maullido.
  `;

  const interfaceCode = `
    public interface Dibujable {
        void dibujar();
        void borrar();
    }
  `;

  const exInterCode = `
    public class Rectangulo implements Dibujable {
        private int x;
        private int y;
        private int ancho;
        private int alto;
    
        public Rectangulo(int x, int y, int ancho, int alto) {
            this.x = x;
            this.y = y;
            this.ancho = ancho;
            this.alto = alto;
        }
    
        @Override
        public void dibujar() {
            // Código para dibujar un rectángulo en la pantalla
        }
    
        @Override
        public void borrar() {
            // Código para borrar un rectángulo de la pantalla
        }
    }
  `;

  const exInterCode2 = `
    public class EjemploInterfaz {
        public static void main(String[] args) {
            Dibujable rectangulo = new Rectangulo(10, 10, 100, 50);
            rectangulo.dibujar();
            rectangulo.borrar();
        }
    }
  `;

  const packNameCode = `
    package nombrePaquete;
  `;

  const packNameCode2 = `
    package miPaquete;
  `;

  const packNameCode3 = `
    import miPaquete.MiClase;
  `;

  const moduleCode = `
    module nombreModulo {
        requires moduloRequerido;
        exports nombrePaquete;
    }
  `;

  const moduleCode2 = `
    module miModulo {
        requires moduloRequerido;
        exports miPaquete;
    }
  `;

  const moduleCode3 = `
    module otroModulo {
        requires miModulo;
        // ...
    }
  `;

  return (
    <section>
      <div className="container-xxl">
        <h1>Programación Orientada a Objetos</h1>
        <h3>Clases y objetos</h3>
        <br></br>
        <h4>Clases</h4>
        <p>
          Es un modelo o plantilla para crear objetos que contienen variables y
          métodos relacionados. Los objetos son instancias de una clase y se
          utilizan para interactuar con el mundo exterior. <br></br>
          <br></br>Una clase se define utilizando la palabra clave "class",
          seguida del nombre de la clase y su contenido encerrado entre llaves.
          Dentro de una clase se pueden definir variables, métodos y
          constructores. Una variable es una entidad que representa un valor o
          una referencia, mientras que un método es una función que realiza una
          tarea específica. <br></br>
          <br></br>Una clase también puede contener constructores, que son
          métodos especiales que se utilizan para inicializar los objetos de la
          clase. Los constructores tienen el mismo nombre que la clase y no
          tienen tipo de retorno. Además, las clases pueden ser organizadas en
          paquetes, que son colecciones de clases relacionadas que se utilizan
          para mantener un orden en el código.
        </p>
        <br></br>
        <CodeBlock language="java" code={classCode} />
        <br></br>
        <p>
          En este ejemplo, se define una clase llamada "Persona" que contiene
          dos variables privadas (nombre y edad), un constructor y tres métodos
          públicos (getNombre, getEdad e imprimirInfo).<br></br>
          <br></br>El constructor se utiliza para inicializar las variables de
          la clase, y los métodos getNombre y getEdad se utilizan para acceder a
          las variables privadas desde fuera de la clase. El método imprimirInfo
          se utiliza para imprimir información de la persona en la consola.
        </p>
        <br></br>
        <br></br>
        <h4>Objetos</h4>
        <p>
          Para crear un objeto de la clase "Persona", se puede utilizar el
          siguiente código:
        </p>
        <br></br>
        <CodeBlock language="java" code={personCode} />
        <br></br>
        <p>
          En este caso, se utiliza el constructor de la clase para crear un
          objeto "persona1" con el nombre "Juan" y la edad "30". Luego, se puede
          utilizar el método "imprimirInfo" para mostrar la información de la
          persona en la consola:
        </p>
        <br></br>
        <CodeBlock language="java" code={printCode} />
        <br></br>
        <p>Este código producirá la salida siguiente:</p>
        <br></br>
        <CodeBlock language="java" code={outCode} />
        <br></br>
        <br></br>
        <h3>Métodos y funciones</h3>
        <p>
          Son bloques de código reutilizable que se pueden llamar desde otros
          lugares en el programa. Los métodos y funciones permiten al
          programador dividir el código en fragmentos más pequeños y más
          manejables, lo que facilita el mantenimiento y la legibilidad del
          código. <br></br>
          <br></br>La diferencia entre método y función es más bien semántica y
          no hay una distinción técnica clara entre ambos términos. En general,
          se suele utilizar el término "método" para referirse a una función que
          está definida dentro de una clase, mientras que el término "función"
          se utiliza para referirse a una operación o algoritmo independiente
          que puede ser llamado desde cualquier parte del código. <br></br>
          <br></br>En Java, los métodos y funciones se definen dentro de una
          clase y se pueden llamar desde cualquier parte del programa. <br></br>
          <br></br>Los métodos y funciones pueden recibir argumentos o
          parámetros, y pueden devolver un valor de retorno o no. Los métodos y
          funciones se definen mediante la palabra clave "public" o "private",
          seguida del tipo de dato que devuelven (o la palabra clave "void" si
          no devuelven nada), seguido del nombre del método y una lista de
          argumentos entre paréntesis. Por ejemplo:
        </p>
        <br></br>
        <CodeBlock language="java" code={sumCode} />
        <br></br>
        <p>
          En este ejemplo, se define un método público llamado "sumar" que toma
          dos argumentos de tipo entero y devuelve un valor de tipo entero.
        </p>
        <br></br>
        <p>
          Aquí te proporciono un breve ejemplo de métodos y funciones en Java:
        </p>
        <br></br>
        <CodeBlock language="java" code={exSumCode} />
        <br></br>
        <p>
          En este ejemplo, se define una clase llamada "EjemploMetodos" que
          contiene un método principal llamado "main". Dentro del método
          principal, se llama al método "sumar" que toma dos argumentos y
          devuelve un valor, y se imprime el resultado en la consola.
        </p>
        <br></br>
        <br></br>
        <h3>Constructores</h3>
        <p>
          Los constructores en Java son métodos especiales que se utilizan para
          inicializar objetos de una clase. Los constructores tienen el mismo
          nombre que la clase y no devuelven ningún valor de retorno. <br></br>
          <br></br>La diferencia entre un constructor y un método normal es que
          un constructor se llama automáticamente cuando se crea un objeto de la
          clase, mientras que un método normal se llama explícitamente desde
          otro lugar del programa. <br></br>
          <br></br>En Java, un constructor se define con el nombre de la clase,
          seguido de una lista de argumentos entre paréntesis. Por ejemplo:
        </p>
        <br></br>
        <CodeBlock language="java" code={exPersonCode} />
        <br></br>
        <p>
          En este ejemplo, se define una clase "Persona" que tiene dos campos
          privados: "nombre" y "edad". También se define un constructor público
          que toma dos argumentos: "nombre" y "edad". Dentro del constructor, se
          inicializan los campos de la clase utilizando los valores de los
          argumentos.
        </p>
        <br></br>
        <p>
          Aquí te proporciono un breve ejemplo de cómo utilizar un constructor
          en Java:
        </p>
        <br></br>
        <CodeBlock language="java" code={exConstrCode} />
        <br></br>
        <p>
          En este ejemplo, se define una clase "EjemploConstructor" que contiene
          un método principal llamado "main". Dentro del método principal, se
          crea un objeto de la clase "Persona" utilizando el constructor que
          toma dos argumentos: "nombre" y "edad". Luego, se llama a dos métodos
          públicos de la clase "Persona" para obtener los valores de los campos
          "nombre" y "edad" del objeto creado, y se imprimen en la consola.
        </p>
        <br></br>
        <br></br>
        <h3>Encapsulación</h3>
        <p>
          La encapsulación es una técnica de programación que consiste en
          ocultar los detalles internos de una clase y proteger los datos y el
          comportamiento de la misma. Se utiliza para mantener la integridad de
          los datos y prevenir cambios no autorizados desde fuera de la clase.
          <br></br>
          <br></br>
          En Java, la encapsulación se logra definiendo los campos de la clase
          como privados y proporcionando métodos públicos para acceder y
          modificar esos campos. Estos métodos se llaman "getters" y "setters",
          y se utilizan para obtener y establecer los valores de los campos
          privados respectivamente. <br></br>
          <br></br>Aquí te proporciono un ejemplo de clase con encapsulación en
          Java:
        </p>
        <br></br>
        <CodeBlock language="java" code={exPersonComCode} />
        <br></br>
        <p>
          En este ejemplo, se define una clase "Persona" con dos campos
          privados: "nombre" y "edad". Se proporcionan los métodos "getters" y
          "setters" públicos para acceder y modificar los valores de los campos
          privados. <br></br>
          <br></br>El método <b>"getNombre()"</b> devuelve el valor del campo
          "nombre", y el método <b>"setNombre()"</b> establece el valor del
          campo "nombre". <br></br>
          <br></br>El método <b>"getEdad()"</b> devuelve el valor del campo
          "edad", y el método <b>"setEdad()"</b> establece el valor del campo
          "edad". <br></br>
          <br></br>
          Aquí te proporciono un breve ejemplo de cómo utilizar la clase
          "Persona" con encapsulación en Java:
        </p>
        <br></br>
        <CodeBlock language="java" code={encapPersonCode} />
        <br></br>
        <p>
          En este ejemplo, se define una clase "EjemploEncapsulacion" que
          contiene un método principal llamado "main". Dentro del método
          principal, se crea un objeto de la clase "Persona" utilizando el
          constructor que toma dos argumentos: "nombre" y "edad". Luego, se
          llama a los métodos públicos "getters" de la clase "Persona" para
          obtener los valores de los campos "nombre" y "edad" del objeto creado,
          y se imprimen en la consola. <br></br>
          <br></br>Luego, se llama al método "setter" público "setEdad()" de la
          clase "Persona" para establecer un nuevo valor para el campo "edad"
          del objeto creado. Finalmente, se llama a los métodos públicos
          "getters" de la clase "Persona" para obtener los nuevos valores de los
          campos "nombre" y "edad" del objeto creado, y se imprimen en la
          consola.
        </p>
        <br></br>
        <br></br>
        <h3>Herencia</h3>
        <p>
          La herencia es un mecanismo de programación en el cual una clase
          adquiere las propiedades y los métodos de otra clase. La clase
          original se llama "clase base" o "superclase", y la clase que adquiere
          las propiedades se llama "clase derivada" o "subclase". <br></br>
          <br></br>En Java, la herencia se logra utilizando la palabra clave
          "extends". La clase derivada extiende la clase base y hereda todos sus
          campos y métodos públicos y protegidos. La clase derivada puede
          agregar nuevos campos y métodos, y también puede sobrescribir los
          métodos de la clase base.
          <br></br>
          <br></br>Aquí te proporciono un ejemplo de herencia en Java:
        </p>
        <br></br>
        <CodeBlock language="java" code={vehicleCode} />
        <br></br>
        <CodeBlock language="java" code={vehicleHereCode} />
        <br></br>
        <p>
          En este ejemplo, se define una clase "Vehiculo" con dos campos
          privados: "marca" y "modelo". Se proporcionan los métodos "getters"
          públicos para acceder a los valores de los campos privados.<br></br>
          <br></br> Luego, se define una clase "Coche" que extiende la clase
          "Vehiculo". La clase "Coche" tiene un campo privado adicional llamado
          "numPuertas", y un constructor que toma tres argumentos: "marca",
          "modelo" y "numPuertas". El constructor de la clase "Coche" utiliza la
          palabra clave "super" para llamar al constructor de la clase
          "Vehiculo" y pasar los argumentos "marca" y "modelo" al constructor de
          la clase base. <br></br>
          <br></br>La clase "Coche" también tiene un método "getter" público
          llamado "getNumPuertas()" que devuelve el valor del campo
          "numPuertas". <br></br>
          <br></br>Aquí te proporciono un breve ejemplo de cómo utilizar la
          clase "Coche" con herencia en Java:
        </p>
        <br></br>
        <CodeBlock language="java" code={exHereCode} />
        <br></br>
        <p>
          En este ejemplo, se define una clase "EjemploHerencia" que contiene un
          método principal llamado "main". Dentro del método principal, se crea
          un objeto de la clase "Coche" utilizando el constructor que toma tres
          argumentos: "marca", "modelo" y "numPuertas". Luego, se llama al
          método "getter" público "getMarca()" de la clase "Vehiculo" para
          obtener el valor del campo "marca" del objeto creado, y se llama al
          método "getter" público "getModelo()" de la clase "Vehiculo" para
          obtener el valor del campo "modelo" del objeto creado. Finalmente, se
          llama al método "getter" público "getNumPuertas()" de la clase "Coche"
          para obtener el valor del campo "numPuertas".
        </p>
        <br></br>
        <br></br>
        <h3>Polimorfismo</h3>
        <p>
          El polimorfismo es una técnica de programación que permite que un
          objeto pueda tomar diferentes formas y comportarse de manera diferente
          en función del contexto en el que se utiliza. En Java, el polimorfismo
          se logra mediante el uso de clases y métodos que son comunes a
          múltiples clases, lo que permite que un objeto de una clase se
          comporte como si fuera de otra clase. <br></br>
          <br></br>
          Un ejemplo sencillo de polimorfismo en Java es el siguiente:
        </p>
        <br></br>
        <CodeBlock language="java" code={poliCode} />
        <br></br>
        <p>
          En este ejemplo, se define una clase abstracta "Animal" con un método
          "hacerSonido()", que simplemente imprime un mensaje en la consola.
          <br></br>
          <br></br>Luego, se definen dos clases que extienden la clase "Animal":
          "Perro" y "Gato". Cada una de estas clases proporciona su propia
          implementación del método "hacerSonido()", que imprime un mensaje
          diferente en la consola. <br></br>
          <br></br>Por último, se define una clase "EjemploPolimorfismo" que
          contiene un método principal "main". Dentro del método principal, se
          crean tres objetos: uno de la clase "Animal", uno de la clase "Perro"
          y uno de la clase "Gato". Luego, se llama al método "hacerSonido()" en
          cada uno de estos objetos. <br></br>
          <br></br>Como resultado, se imprime en la consola el siguiente
          mensaje:
        </p>
        <br></br>
        <CodeBlock language="java" code={outPoliCode} />
        <br></br>
        <p>
          En este ejemplo, se puede observar que los objetos "miPerro" y
          "miGato" se comportan de manera diferente al objeto "miAnimal" al
          llamar al método "hacerSonido()". Esto es posible gracias al
          polimorfismo, ya que los objetos "miPerro" y "miGato" son del tipo
          "Animal", pero también son del tipo "Perro" y "Gato", respectivamente,
          lo que les permite utilizar su propia implementación del método
          "hacerSonido()".
        </p>
        <br></br>
        <br></br>
        <h3>Interfaces</h3>
        <p>
          En Java, una interfaz es una colección de métodos abstractos y
          constantes que pueden ser implementados por cualquier clase. Las
          interfaces se utilizan para definir un conjunto de comportamientos que
          una clase debe implementar. <br></br>
          <br></br>Supongamos que necesitamos definir una interfaz para un
          objeto que puede ser dibujado en la pantalla. Podemos definir una
          interfaz llamada "Dibujable" de la siguiente manera:
        </p>
        <br></br>
        <CodeBlock language="java" code={interfaceCode} />
        <br></br>
        <p>
          En este ejemplo, la interfaz "Dibujable" contiene dos métodos
          abstractos: "dibujar()" y "borrar()". Cualquier clase que implemente
          esta interfaz debe proporcionar implementaciones concretas para estos
          métodos. <br></br>
          <br></br>Ahora, podemos crear una clase "Rectangulo" que implemente la
          interfaz "Dibujable":
        </p>
        <br></br>
        <CodeBlock language="java" code={exInterCode} />
        <br></br>
        <p>
          En este ejemplo, la clase "Rectangulo" implementa la interfaz
          "Dibujable" y proporciona implementaciones concretas para los métodos
          "dibujar()" y "borrar()". <br></br>
          <br></br>Finalmente, podemos crear un objeto de la clase "Rectangulo"
          y llamar a los métodos de la interfaz "Dibujable" para dibujar y
          borrar el rectángulo en la pantalla:
        </p>
        <br></br>
        <CodeBlock language="java" code={exInterCode2} />
        <br></br>
        <p>
          En este ejemplo, se crea un objeto de la clase "Rectangulo" y se
          asigna a una variable de tipo "Dibujable". Luego, se llama a los
          métodos "dibujar()" y "borrar()" de la interfaz "Dibujable" para
          dibujar y borrar el rectángulo en la pantalla.
        </p>
        <br></br>
        <br></br>
        <h3>Paquetes y módulos</h3>
        <p>
          En Java, los paquetes son utilizados para organizar y estructurar las
          clases y otros componentes de un programa. Un paquete es un conjunto
          de clases relacionadas que se agrupan juntas en una estructura de
          carpetas.
        </p>
        <br></br>
        <br></br>
        <h4>Paquetes</h4>
        <p>
          Los paquetes son útiles para evitar conflictos de nombres entre las
          clases, ya que cada paquete tiene su propio espacio de nombres.
          Además, los paquetes pueden ser utilizados para controlar el acceso a
          las clases y otros componentes, utilizando los modificadores de acceso
          "public", "protected" y "private". <br></br>
          <br></br>Para definir una clase dentro de un paquete, se debe incluir
          la siguiente línea al principio del archivo de la clase:
        </p>
        <br></br>
        <CodeBlock language="java" code={packNameCode} />
        <br></br>
        <p>
          Donde "nombrePaquete" es el nombre del paquete en el que se desea
          incluir la clase. Por ejemplo, si se desea incluir una clase llamada
          "MiClase" en un paquete llamado "miPaquete", se debe incluir la
          siguiente línea al principio del archivo de la clase "MiClase.java":
        </p>
        <br></br>
        <CodeBlock language="java" code={packNameCode2} />
        <br></br>
        <p>
          Luego, para utilizar la clase desde otro archivo, se debe importar el
          paquete y la clase:
        </p>
        <br></br>
        <CodeBlock language="java" code={packNameCode3} />
        <br></br>
        <br></br>
        <h4>Módulos</h4>
        <p>
          A partir de Java 9, se introdujeron los módulos como una forma de
          organizar y estructurar las clases y otros componentes de un programa
          de una manera más modular y segura. Los módulos son similares a los
          paquetes, pero proporcionan una forma más explícita de controlar el
          acceso a los componentes. <br></br>
          <br></br>Un módulo es un conjunto de paquetes que se agrupan juntos y
          se encapsulan para protegerlos de cambios externos. Un módulo puede
          especificar qué paquetes son accesibles y qué paquetes no lo son,
          utilizando las palabras clave "exports" y "requires" respectivamente.{" "}
          <br></br>
          <br></br>Para definir un módulo, se debe crear un archivo llamado
          "module-info.java" en el directorio raíz del módulo. Este archivo debe
          contener la siguiente información:
        </p>
        <br></br>
        <CodeBlock language="java" code={moduleCode} />
        <br></br>
        <p>
          Donde "nombreModulo" es el nombre del módulo, "moduloRequerido" es el
          nombre de otro módulo que se requiere para ejecutar el actual, y
          "nombrePaquete" es el nombre del paquete que se exporta para ser
          utilizado por otros módulos. <br></br>
          <br></br>Luego, para utilizar los componentes de un módulo desde otro
          módulo, se debe agregar el módulo requerido en el archivo
          "module-info.java" del módulo que desea utilizarlo:
        </p>
        <br></br>
        <CodeBlock language="java" code={moduleCode2} />
        <br></br>
        <p>
          Y se debe agregar el módulo actual como un módulo requerido en el
          archivo "module-info.java" del módulo que desea utilizarlo:
        </p>
        <br></br>
        <CodeBlock language="java" code={moduleCode3} />
      </div>
    </section>
  );
}

export default Poo;
