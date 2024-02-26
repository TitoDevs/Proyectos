import React from "react";
import "./introduccion.scss";

function Introduccion() {
  return (
    <section>
      <div className="container-xxl">
        <h1>Introducción</h1>
        <h3>¿Qué es Java?</h3>
        <p>
          Java es un lenguaje de programación de alto nivel y orientado a
          objetos desarrollado por Sun Microsystems (ahora propiedad de Oracle)
          en 1995. Fue diseñado para ser independiente de la arquitectura de la
          computadora, lo que significa que un programa escrito en Java debe
          funcionar en cualquier sistema operativo que tenga una máquina virtual
          Java (JVM) instalada.
          <br></br>
          <br></br>
          Java es utilizado ampliamente en la programación de aplicaciones de
          escritorio, aplicaciones web, aplicaciones móviles, juegos, sistemas
          empresariales y más. También es popular en la comunidad de desarrollo
          de código abierto y cuenta con una gran cantidad de bibliotecas y
          frameworks disponibles.
          <br></br>
          <br></br>
          Java se caracteriza por su seguridad, portabilidad y escalabilidad, lo
          que lo convierte en una excelente opción para proyectos de gran
          envergadura. Es un lenguaje de programación de propósito general, lo
          que significa que puede ser utilizado para desarrollar una variedad de
          aplicaciones.
        </p>
        <br></br>
        <br></br>
        <h3>Historia</h3>
        <p>
          La historia de Java comienza en 1991, cuando un equipo de ingenieros
          de Sun Microsystems, liderado por James Gosling, comenzó a trabajar en
          un proyecto llamado "Green" con el objetivo de desarrollar un lenguaje
          de programación que se ejecutara en una variedad de dispositivos
          electrónicos, incluyendo televisores, electrodomésticos y teléfonos
          celulares.
        </p>
        <br></br>
        <br></br>
        <div className="container-center">
          <img
            style={{ width: "100%", maxWidth: "400px" }}
            alt="Sun Microsystems"
            src="https://user-images.githubusercontent.com/75398496/214674990-b599e1b0-a93d-42b0-89ed-bb3689147114.jpg"
          ></img>
          <p>Sun Microsystem</p>
        </div>
        <br></br>
        <br></br>
        <p>
          El proyecto originalmente se llamó "Oak", pero debido a que ya existía
          un lenguaje de programación con ese nombre, el equipo decidió
          renombrarlo como "Java". La palabra "Java" se eligió porque se
          relaciona con la isla de Java en Indonesia, donde se originó el equipo
          de desarrollo. <br></br>
          <br></br><b>En 1994</b>, Sun lanzó la versión beta de Java, conocida como
          "Java Development Kit 1.0 Beta" (JDK 1.0 Beta). La versión final de
          JDK 1.0 se lanzó en 1995, junto con el navegador web HotJava, que
          permitía a los usuarios ejecutar aplicaciones Java en un navegador
          web. <br></br>
          <br></br><b>En 1996</b>, Sun lanzó la versión 1.1 de JDK, que incluía
          características como soporte para sesiones de servlets y una nueva
          biblioteca de clases para desarrollar aplicaciones de interfaz gráfica
          de usuario. <br></br>
          <br></br><b>En 1997</b>, Sun lanzó la versión 1.2 de JDK, también conocida
          como "Java 2 Platform, Standard Edition" (J2SE). Esta versión incluyó
          mejoras significativas en el rendimiento, soporte para el lenguaje de
          programación de expresiones regulares y una nueva biblioteca de clases
          para trabajar con colecciones de datos. <br></br>
          <br></br><b>En el año 2000</b>, Sun lanzó Java 2 Platform, Enterprise Edition
          (J2EE), que proporcionaba un marco para desarrollar aplicaciones
          empresariales escalables y distribuidas. <br></br>
          <br></br><b>En el 2006</b>, Sun lanzó Java Platform, Standard Edition 6 (Java
          SE 6), que incluyó características como soporte para scripts, mejoras
          en el rendimiento y una nueva biblioteca de clases para trabajar con
          XML. <br></br>
          <br></br><b>En el 2011</b>, Oracle Corporation adquirió Sun Microsystems, y
          ha continuado desarrollando y manteniendo Java hasta la fecha.
          <br></br>
          <br></br><b>En el año 2014</b>, Oracle lanzó Java 8, que incluyó
          características como lambda expressions, una nueva API de fecha y
          hora, y mejoras en el rendimiento. <br></br>
          <br></br><b>En 2017</b>, Oracle lanzó Java 9, que incluyó características
          como la plataforma modular, lo que permite a los desarrolladores crear
          y distribuir módulos de Java independientes, mejorando la
          escalabilidad y seguridad de las aplicaciones. También se eliminaron
          algunas clases obsoletas y se mejoró el rendimiento. <br></br>
          <br></br><b>En 2018</b>, Oracle lanzó Java 10, que incluyó características
          como la eliminación de las clases obsoletas, mejoras en el rendimiento
          y el soporte para el lenguaje de programación de expresiones locales.{" "}
          <br></br>
          <br></br><b>En 2019</b>, Oracle lanzó Java 11, que fue una versión de soporte
          a largo plazo (LTS) con características como la eliminación de algunas
          clases obsoletas, mejoras en el rendimiento, y la introducción de un
          nuevo sistema de gestión de dependencias. <br></br>
          <br></br><b>En 2020</b>, Oracle lanzó Java 14, que incluyó mejoras en el
          rendimiento y características adicionales como la compatibilidad con
          switch expressions y el soporte para la programación funcional.{" "}
          <br></br>
          <br></br><b>En 2021</b>, Oracle lanzó Java 15, que incluyó varias
          características nuevas y mejoras en el rendimiento, incluyendo una
          función de text blocks, una nueva clase de records, y mejoras en el
          soporte para el lenguaje de programación de expresiones regulares.
          <br></br>
          <br></br><b>En 2022</b>, Oracle lanzó Java 16, se espera que incluya mejoras
          en el rendimiento, correcciones de errores y nuevas características,
          como el soporte para sealed classes.
        </p>
        <br></br>
        <br></br>
        <h3>Características</h3>
        <ul>
          <li>
            <b>Plataforma independiente:</b> Java es independiente de la plataforma, lo
            que significa que un programa escrito en Java puede ejecutarse en
            cualquier sistema operativo que tenga una JVM (máquina virtual de
            Java) instalada.
          </li>
          <li>
            <b>Orientado a objetos:</b> Java es un lenguaje orientado a objetos, lo que
            significa que se basa en el concepto de objetos y clases. Los
            objetos son instancias de clases, y las clases proporcionan una
            plantilla para crear objetos.
          </li>
          <li>
            <b>Garbage collection automático:</b> Java utiliza un recolector de basura
            automático para liberar la memoria utilizada por objetos que ya no
            son necesarios. Esto hace que el código sea más fácil de escribir y
            mantener, ya que los desarrolladores no tienen que preocuparse por
            liberar manualmente la memoria.
          </li>
          <li>
            <b>Seguridad:</b> Java proporciona una serie de características de
            seguridad, como la verificación de tipos en tiempo de ejecución y la
            restricción de acceso a los recursos del sistema.
          </li>
          <li>
            <b>Multithreading:</b> Java proporciona un conjunto completo de
            herramientas para el manejo de hilos, lo que permite a los
            desarrolladores escribir programas que pueden ejecutarse de manera
            concurrente en múltiples hilos.
          </li>
          <li>
            <b>Paquetes y librerías:</b> Java viene con una gran cantidad de paquetes y
            librerías integradas, que proporcionan una amplia variedad de
            funcionalidades, como la entrada y salida, la red, la seguridad, y
            mucho más.
          </li>
          <li>
            <b>Interfaz gráfica de usuario (GUI):</b> Java proporciona un conjunto
            completo de herramientas para crear aplicaciones con interfaz
            gráfica de usuario (GUI), incluyendo el paquete javax.swing y el
            paquete java.awt.
          </li>
          <li>
            <b>Amplia adopción:</b> Java es uno de los lenguajes de programación más
            populares del mundo, y se utiliza ampliamente en una variedad de
            aplicaciones, incluyendo desde aplicaciones empresariales hasta
            videojuegos.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Introduccion;
