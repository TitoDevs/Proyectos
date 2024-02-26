import React from "react";
import "./configuracion.scss";

function Configuracion() {
  return (
    <section>
      <div className="container-xxl">
        <h1>Configuración del entorno</h1>
        <p>
          La configuración del entorno de desarrollo es esencial para poder
          desarrollar y ejecutar aplicaciones Java en un sistema. Al configurar
          correctamente el entorno de Java, se asegura de que su sistema tenga
          acceso a todas las herramientas y componentes necesarios para el
          desarrollo Java, como el Java Development Kit (JDK), la máquina
          virtual de Java (JVM) y las bibliotecas Java. <br></br>
          <br></br>Además, la configuración del entorno de Java también permite
          que su sistema sepa dónde encontrar y utilizar las herramientas y
          componentes necesarios para el desarrollo Java. Esto se logra
          estableciendo y configurando variables de entorno, como JAVA_HOME y
          PATH, que permiten a su sistema encontrar y utilizar fácilmente el JDK
          y otras herramientas Java. <br></br>
          <br></br>En resumen, la configuración del entorno de Java es
          importante porque permite a su sistema tener acceso a las herramientas
          y componentes necesarios para el desarrollo Java y le permite a usted,
          como desarrollador, escribir y ejecutar aplicaciones Java de manera
          efectiva.
        </p>
        <br></br>
        <br></br>
        <h3>Configuración</h3>
        <p>
          La configuración del entorno de Java varía dependiendo del sistema
          operativo que esté utilizando. Vamos a seguir los siguientes pasos:
        </p>
        <br></br>
        <h4>1. Descargar e Instalar el JSK (Java Development Kit)</h4>
        <ul>
          <li>
            Visite la página oficial de Java y descargue el último JDK para su
            sistema operativo.
            https://www.oracle.com/eg/java/technologies/downloads/
          </li>
          <li>
            Siga las instrucciones de instalación para instalar el JDK en su
            sistema.
          </li>
        </ul>
        <br></br>
        <h4>2. Configurar la variable de entorno JAVA_HOME</h4>
        <ul>
          <li>Abra el panel de control de su sistema operativo.</li>
          <li>Busque "Variables de entorno" y selecciónelo.</li>
          <li>
            En Windows, haga clic en "Editar variables de sistema". En
            MacOS/Linux, busque "Variables de entorno" en la sección de
            configuración avanzada.
          </li>
          <li>
            Haga clic en "Nueva" o "Agregar" y agregue una nueva variable
            llamada JAVA_HOME.
          </li>
          <li>
            Establezca el valor de JAVA_HOME como la ruta de instalación de su
            JDK. Por ejemplo, en Windows puede ser algo como "C:\Program
            Files\Java\jdk1.8.0_xx".
          </li>
        </ul>
        <br></br>
        <h4>3. Configurar la variable de entorno PATH</h4>
        <ul>
          <li>
            En la misma ventana de variables de entorno, busque la variable PATH
            y selecciónela.
          </li>
          <li>
            Haga clic en "Editar" o "Modificar" y añada el valor %JAVA_HOME%\bin
            a la variable PATH.
          </li>
          <li>
            Guarde los cambios y cierre la ventana de variables de entorno.
          </li>
        </ul>
        <br></br>
        <h4>4. Verificar la instalación de Java</h4>
        <ul>
          <li>Abra una terminal o símbolo del sistema.</li>
          <li>Escriba "java -version" y presione Enter.</li>
          <li>
            Si la instalación es correcta, verá la versión de Java que tiene
            instalada.
          </li>
        </ul>
        <br></br>
        <h4>5. Configurar su editor de texto o IDE</h4>
        <ul>
          <li>
            Si desea usar un editor de texto o un IDE para escribir y ejecutar
            código Java, asegúrese de configurarlo para usar la versión correcta
            de Java.
          </li>
          <li>
            Consulte la documentación de su editor de texto o IDE para obtener
            instrucciones sobre cómo configurarlo para usar Java.
          </li>
        </ul>
        <br></br>
        <p>
          Con estos pasos, su entorno de Java estará listo para su uso.
          <strong> ¡Comience a escribir y ejecutar código Java!</strong>
        </p>
      </div>
    </section>
  );
}

export default Configuracion;
