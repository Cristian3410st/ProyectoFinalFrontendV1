import "../../public/styles/manualAdmin.css"

function ManualAdminPage()

{
    return(
        <main className="contenedor_PrincipialAdmin">
           <section className="contenedor_segundario">
            <h1>manual de usuario</h1>
            <p className="texto">bienvenido,Aquí podrás consultar el funcionamiento detallado de 
            cada una de las opciones que integra el sistema MGDT. Explora y descubre cómo 
            aprovechar al máximo las funcionalidades disponibles para administradores.
            </p>
           </section>
           <section className="contenedor_cuarto">
            <article className="contenedorNUmerodos">
                <div className="documentacion1">
                     <h3>cambiar contraseña</h3>
                     <p>Para cambiar su contraseña, vaya al menú en la parte superior y seleccione la opción 
                  'Cambiar Contraseña'. En la primera sección, ingrese su contraseña actual, la que 
                     utiliza normalmente. A continuación, en la segunda sección, introduzca la nueva 
                   contraseña que desea asignar a su cuenta. Si todo se realiza correctamente, recibirá 
                     un mensaje confirmando la modificación exitosa. Para comprobarlo, cierre la sesión y 
                    vuelva a ingresar utilizando la nueva contraseña.
                     </p>
                </div>
            </article>
            <article className="contenedorNUmerodos">
              <img></img>
              <div className="documentacion1">
              <h3>Menu principal</h3>
              <p>ara registrar tanto la hora de entrada como la hora de salida, diríjase al menú en la 
                  parte superior y seleccione la opción 'Registro de Entrada y Salida'. Al hacer clic
                  aparecerán dos recuadros. Cada uno contendrá un botón. El primero le indicará que 
                  registre su hora de entrada; al presionarlo, se mostrará la hora exacta en la que lo 
                  presionó. El segundo recuadro tendrá un botón llamado 'Registre su Hora de Salida'; al 
                  presionarlo, le indicará la hora exacta en la que lo oprimió.

                  Al iniciar su jornada laboral, deberá presionar el botón que dice 'Registre Hora de
                  Entrada'. Al finalizar su jornada, presione el botón 'Registre su Hora de Salida'. Ambas
                  opciones le permitirán visualizar en pantalla la hora exacta en la que se realizaron las 
                  acciones mencionadas.

                  tambien en la opcion de consulte los usuarios registrados, podra visualizar una tabla
                  de todos los usuarios registrados en el sistema tendra la informacion de su usuario,los nombres
                  y apellidos la edad el correo corporativo el cargo , el supervisor encargado y el rol del usuario
              </p>
              </div>
            </article>
           </section>


           <section className="contenedor_final">
           <article className="contenedorNUmero1">
            <div className="documentacion1">
            <h3>C&M horarios</h3>
              <h3>En esta sección, encontrará diversas opciones para gestionar horarios y asignaciones de usuarios:</h3><br/>
              <h3>Consultar Horarios:</h3>
              <p>
               Consulte los horarios de cualquier usuario ingresando su nombre. En caso de que<br/>
              el usuario no exista o se haya ingresado incorrectamente, recibirá un mensaje<br/>
              indicando "Usuario no encontrado. Por favor, verifique los datos ingresados."<br/>
              </p>
              <h3>Asignación de Descanso:</h3>
              <p>
              Asigne días de descanso a cualquier usuario indicando su nombre y el día de<br/>
              descanso (por ejemplo: lunes, martes, miércoles, etc.). Además, especifique la <br/>
              fecha en el formato "año-mes-día" (ejemplo: "2024-02-04").<br/>
              </p>
              <h3>Asignación Individual de Horarios:</h3>
               <p>
               Realice la asignación individual de horarios para cualquier usuario. Ingrese el <br/>
               nombre del usuario, seleccione los días laborales (de lunes a domingo), y  <br/>
               especifique las horas de entrada y salida en formato militar (por ejemplo, 08:00:00  <br/>
               para las 8 a.m.). Además, indique la fecha de inicio y fin de asignación en formato  <br/>
               "año-mes-día".</p>
                  
               <h3>Modificación Individual de Horarios:</h3>
               <p>
               Modifique días específicos de los horarios asignados según sus necesidades.  <br/>
               Ingrese el nombre del usuario, el día de la semana, las nuevas horas de entrada y <br/>
               salida, y la fecha de modificación.<br/>
               </p>

               <p>
               Para verificar todas estas modificaciones, puede utilizar la opción Consultar Horarios<br/>
                y observar los cambios realizados. ¡Explora estas opciones para gestionar <br/>
               eficientemente los horarios de los usuarios!<br/>
               </p>
            </div>
            </article>
           </section>
        </main>
)}


export default ManualAdminPage;