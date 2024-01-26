import React from "react";
import "../../public/styles/manual.css"
import imgCard1 from "../../public/images/login.jpg"
import imgCard2 from "../../public/images/class2.jpg"
import imgCard3 from "../../public/images/imagen76.jpg"



function ManualPage(){

    return(
        <main className="contenedor_Principial">
           <section className="contenedor_segundario">
            <h1>manual de usuario</h1>
            <p className="texto">bienvenido,Aquí podrás consultar el funcionamiento detallado de 
            cada una de las opciones que integra el sistema MGDT. Explora y descubre cómo 
            aprovechar al máximo las funcionalidades disponibles.
            </p>
           </section>
           <section className="contenedor_terceario">
            <article className="card1">
           <img src={imgCard1} alt="img1" className="imgCard1"></img>
           <div className="documentacion">
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
            <article className="card1">
            <img src={imgCard2} alt="imgCard2" className="imgCard1"></img>
            <div className="documentacion">
            <h3>consultar horarios</h3>
            <p>Para revisar los horarios, vaya al menú en la parte superior y elija 'Consultar Horarios
            Luego, encontrará un botón denominado 'Validar Horarios'; haga clic en él. Si ya tiene 
            horarios programados, se mostrará una tabla con su nombre de usuario, el día, la hora 
            de entrada, la hora de salida y la fecha correspondiente. En la última columna, puede
            consultar el día de descanso. Identificará el día de descanso en la fila que mencione 
            'descanso'. En caso de no tener horarios registrados, recibirá un mensaje indicando 
            que aún no se han asignado horarios. Esta opción le permite visualizar la información 
            de una semana completa, desde el lunes hasta el domingo.
            </p>
            </div>
            </article>
            <article className="card1">
                <img src={imgCard3} className="imgCard1"></img>
                <div className="documentacion">
                <h3>Menu</h3>
                  <p>Para registrar tanto la hora de entrada como la hora de salida, diríjase al menú en la 
                  parte superior y seleccione la opción 'Registro de Entrada y Salida'. Al hacer clic
                  aparecerán dos recuadros. Cada uno contendrá un botón. El primero le indicará que 
                  registre su hora de entrada; al presionarlo, se mostrará la hora exacta en la que lo 
                  presionó. El segundo recuadro tendrá un botón llamado 'Registre su Hora de Salida'; al 
                  presionarlo, le indicará la hora exacta en la que lo oprimió.

                  Al iniciar su jornada laboral, deberá presionar el botón que dice 'Registre Hora de
                  Entrada'. Al finalizar su jornada, presione el botón 'Registre su Hora de Salida'. Ambas
                  opciones le permitirán visualizar en pantalla la hora exacta en la que se realizaron las 
                  acciones mencionadas.
                    </p>   
                </div>
            </article>
           </section>
           
        </main>
    )
    
}



export default ManualPage