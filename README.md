
![DUMAX LOGO](https://firebasestorage.googleapis.com/v0/b/dumax-eld.appspot.com/o/images.jpg?alt=media&token=3e802db7-7dca-483e-aca8-415489806b10)

<h1>Objetivo</h1> 
Dumax ofrece a sus clientes la posibilidad de monitorear en tiempo real , los 365 días del año,  las unidades vehiculares de sus clientes. Para esto, la empresa ha ofrecido una plataforma WEB y una aplicación móvil diseñada hace 5 años, sin embargo en Dumax buscamos siempre estar a la vanguardia y satisfacer las expectativas de nuestros clientes , por lo que se buscar dar un “refresh” a la plataforma, desde mejorar el diseño de la misma así como mejorar la experiencia que tiene el usuario hoy en día.
Para esto, el área de diseño se aboco en rediseñar el look & feel que se planea integrar en el próximo realease de la plataforma por lo que se ha planeado un sprint abocado a este tema. Dentro de dicho sprint, el PO ha creado la siguiente historia la cual la tendrá que desarrollar el Dev en cuestión. 

<h1>Instrucciones de la prueba:</h1> 
<ul>
  <li>1.	Entendemos que el tiempo es limitado, por lo que no se busca necesariamente que el candidato desarrolle todos los ejercicios al 100%; El propósito de esto, es poder evaluar la capacidad analítica y de desarrollo que posee el candidato.
</li>
  <li>2.	Al terminar el desarrollo, es importante que el candidato suba su repositorio/resultados a un repositorio propio de GITHUB para que nos comparta el link al mismo. Importante , NO subir sus resultados al repositorio original.
</li>
</ul>

<h2>Instalación del proyecto</h2>
Para instalar el proyecto, será necesario correr en la terminal los comanddos:
<ul>
  <li> <b>npm install</b></li>
  <li> <b>npm start</b></li>
  <li>** Si por alguna razon les es imposible instalar el proyeto, les pedimos realizar el ejercicio  desde un proyecto nuevo creado por ustedes mismos.</li>
</ul>


<h1>API:</h1>
<b>Documentación</b>https://documenter.getpostman.com/view/16647194/2s9YJXYQDh
<br/>
<b>API LINK</b> https://us-central1-dumax-eld.cloudfunctions.net/userApp

<h1>Task</h1>

<b>Como:</b>	Product Owner<br/>
<b>Quiero:</b>	Rediseñar la plataforma WEB, comenzando por el “Informe de Geocercas” <br/>
<b>Para:</b>	Cumplir con las necesidades, requerimientos y expectativas de nuestros clientes. <br/>


<b>Imagen base para crear el rediseño:</b>
![Imagen base para crear el rediseño:](https://firebasestorage.googleapis.com/v0/b/dumax-eld.appspot.com/o/Dashboard%20-%20Reporte%20Geocercas%402x.jpg?alt=media&token=67f66e66-8aad-424e-a4b5-ff86a7517b15)
<span>https://firebasestorage.googleapis.com/v0/b/dumax-eld.appspot.com/o/Dashboard%20-%20Reporte%20Geocercas%402x.jpg?alt=media&token=67f66e66-8aad-424e-a4b5-ff86a7517b15</span>


<b>Criterios de Aceptación</b>	<br/>

1.	El Menu lateral derecho deberá de contener el listado de todos los informes posibles (Obtenerlos de la Imagen).

2.	Se deberán de modificar los colores, tipográfias, imágenes, espacios, etc para asemejar la plataforma actual, con el look & feel del nuevo diseño.

3.	El informe de geocercas deberá de tener 3 drop-downs con los cuales el usuario podrá generar el reporte en cuestión. Los catálogos de los drop-downs son: 

 <h5>Geocercas</h5>
  <ul>
              <li>Monterrey</li>
              <li>Ciudad de México</li>
              <li>Texas</li>
              <li>Los Angeles</li>
              <li>Laredo</li>
          </ul>


<h5>Unidades</h5>
  <ul>
              <li>Base 1525</li>
              <li>Base 1458</li>
              <li>Base 1258</li>
          </ul>

<h5>Rangos de fechas</h5>
  <ul>
              <li>Q1</li>
              <li>Q2</li>
              <li>Q3</li>
              <li>Q4</li>
          </ul>


Una vez realizada la selección y clickeado el botón “Generar Reporte” , se tendrán que realizar un GET request al enpoint “Reporte de Geocercas” el cual regresará un Array todos los eventos realizados dentro la Geocerca elegida, para las unidades seleccionadas, en el periodo de fechas especificado.

4.	Del array recibido, se tendrán que mostrar los valores en una tabla, a manera descendente según la fecha de entrada de la unidad. 

5.	A un costado de la tabla, se tendrá que crear un formulario con la finalidad de poder crear una nueva geocerca mediante un POST al endpoint del API “Crear Geocerca”

Los campos del formulario deberán de ser:

  <ul>
              <li>Los dropdowns Geocercas y Unidades del inciso 3 del ejercicio.</li>
              <li>“Nombre de la Unidad” (De tipo string, Min 3 - Max 15 caracteres)</li>
              <li>“Licencia del Chofer” (De tipo num, 10 caracteres ) </li>
              <li>“Email del chofer”</li>
          </ul>

  
 


