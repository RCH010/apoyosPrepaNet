export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyDagEMOEZxPiLgBy15fwXOPx30tt8EsB1M",
    authDomain: "apoyos-prepanet.firebaseapp.com",
    databaseURL: "https://apoyos-prepanet.firebaseio.com",
    projectId: "apoyos-prepanet",
    storageBucket: "apoyos-prepanet.appspot.com",
    messagingSenderId: "74712115572",
    appId: "1:74712115572:web:e2e32349deecc558392421",
    measurementId: "G-LHYRSW41QZ"
  }
};

export const infoTemas = [
  // SUPERTEMA 1
  {
    supertitle: "¿Qué es PrepaNet?",
    sections: [
      // SECCIÓN 1.1 -- que es pnet
      {
        title: "¿Qué es PrepaNet?",
        parrafos: [
          {
            text: "Prepanet es un programa social de preparatoria en línea del Tecnológico de Monterrey, diseñada con flexibilidad de horarios, con una alta calidad académica que se ofrece para el personal de la base operativa de las empresas y personas en edad no escolarizada o con alguna condición de desigualdad social que quieren seguir estudiando, pero que no les es posible acudir al sistema educativo tradicional por recursos económicos limitados, sumados a compromisos laborales, familiares, lejanía geográfica, capacidades diferentes, alguna condición médica que impida acudir a programas presenciales."
          },
          {
            text: "Un alumno PrepaNet, tiene el apoyo de muchas personas que colaboran en conjunto para servirle en su trayectoria como estudiante. (Revisar el archivo llamado 'Modelo Educativo')"
          },
          {
            text:"Como alumno de nuevo ingreso, cuentas con las Plataformas Educativas, estas se explican en la sección 03. Plataformas. Por otro lado, cuentas con un consejero que se pondrá muy pronto en contacto contigo, él o ella te apoyaran guiándote en tu trayecto como alumno. Por otro lado, por cada materia que estés cursando, cuentas con un tutor, que es quien te apoyara en cuestiones académicas de esa materia. Este tutor se presentará contigo en la plataforma educativa Canvas, dentro de su respectiva materia. "
          }
        ],
        links: [
          {enlace: "https://www.youtube.com/watch?v=vpeEGZWZcfU",
          nombre: "Vídeo, PrepaNet Todo Público"},
          {enlace: "https://docs.google.com/drawings/d/1975DR-bSPndmJvuFK8SSRrkzoXAGPX895w4Ev3QWYzQ/edit?usp=sharing", 
          nombre: "Modelo Educativo"}
        ]
      },
      // SECCIÓN 1.2 -- Presentación del equipo
      {
        title: "2. Presentación del equipo",
        parrafos: [
          {text: "A continuación esta un archivo con las encargadas de PrepaNet, campus Monterrey."}
        ],
        links: [
          {enlace: "https://drive.google.com/file/d/1G3n7gcrWBTu7Qn5xvC-HPUnjnXDjLyiy/view?usp=sharing",
          nombre: "Equipo PrepaNet"}
        ],
      },
      // SECCIÓN 1.3 -- Plan de estudios
      {
        title: "3. Plan de Estudios",
        parrafos: [
          {text: "A continuación se muestra el plan de estudios de PrepaNet plan 18. El plan consta de 25 materias que se llevan aproximadamente en seis tetramestres. "}
        ],
        links: [
          {enlace: "https://drive.google.com/file/d/10m7JKXU4OFhOwl_Ae1rH5Z307J8ew0Em/view?usp=sharing", 
          nombre: "Plan de Estudios PrepaNet18"},
        ],
      },
      // SECCIÓN 1.4 -- Actividad 1
      {
        title: "4. Actividad 1",
        parrafos: [
          {text: "Da clic en el siguiente enlace para tomar un pequeño quiz. Con este quiz reforzaras el contenido de esta sección."},
        ],
        links: [
          {enlace: "https://docs.google.com/forms/d/e/1FAIpQLSeSeVdfJzX13nbOB1zb8-ueVr_-cZba1Nezj-K2S_1f4QqESg/viewform?usp=sf_link",
          nombre: "Actividad Sección 1"},
        ],
      },
    ]
  }, // termina super tema 1
  // SUPERTEMA 2
  {
    supertitle: "Aspectos Académico-Administrativos",
    sections: [
      // SECCIÓN 2.1 -- Calendario
      {
        title: "1. Calendario",
        parrafos: [
          {text: "En esta sección se muestra el calendario de este tetramestre; Revisar el archivo adjunto y favor de tomar nota de las fechas. "},
          {text: "Tomar en cuenta lo siguiente:"},
          {text: "1. Los exámenes están disponibles en cualquier horario dentro del periodo señalado."},
          {text: "2. Los exámenes finales no se pueden presentar después de las fechas marcadas, por tener cierre de calificaciones durante el fin de semana y alta al sistema oficial el lunes inmediato."},
          {text: "3. En el periodo de re-inscripción oficial se corren diversos procesos, por ello se pide con antelación que presenten la solicitud señalando materias, para integrar los listados que vamos a reportar."},
          {text: "4. Si después del segundo bloque el promedio apunta a que sí podrá aprobar con puntaje del tercer periodo, ya pueden solicitar la re-inscripción."},
        ],
        links: [
          {enlace: "https://drive.google.com/file/d/13sixas34mp-lU-8DOYaPqHO4yqDZA6BV/view?usp=sharing",
          nombre: "Calendario SD20"
        },
        ],
      },
      // SECCIÓN 2.2 -- Reglamento y Bajas
      {
        title: "2. Reglamento y Bajas",
        parrafos: [
          {text: "El reglamento se encuentra disponible en el enlace de esta sección. Además se adjunta a esta sección el reglamento académico 2019 (actualmente vigente). Favor de revisar en especial el capítulo IV de inscripciones."},
          {text: "Importante: Acumular 8 materías reprobadas en su historial académico es causa de Baja Definitiva"},
          {text: "Bajas"},
          {text: "Existen diferentes tipos de bajas que un alumno de PrepaNet, revisa los archivos y ahí encontrarás información más detallada."},
        ],
        links: [
          {enlace: "https://drive.google.com/file/d/1vwqTTP2g7B7oUD6fZEjrnuMQMNUGE9dF/view?usp=sharing",
            nombre: "Reglamento Académico - PrepaNet"
        },
          {enlace: "http://sitios.itesm.mx/prepanet/alumnos_reglamento.htm", 
          nombre: "Sitio - Reglamento PrepaNet"
        },
          {enlace: "https://drive.google.com/file/d/1w1DQMluftDQVXxsU1hdNIkCmODG2FLSr/view?usp=sharing",
          nombre: "Presentación Tipos de Bajas"},
        ],
      },
      // SECCIÓN 2.3 -- Pagos
      {
        title: "3. Pagos",
        parrafos: [
          {text: "Cada materia que se cursa tiene el costo de $800.00. Se puede realizar el pago de dos formas. En cuatro pagos, o en un pago completo anticipado (tener esto en cuenta para siguientes tetramestres)."},
          {text: "En 4 pagos:"},
          {text: "Son cuatro fechas de pago y en su cálculo se considera una tasa de interés de financiamiento del 3.2% , así como interés moratorio en caso de retraso. La penalidad por pago a destiempo es de $50.00."},
          {text: "Pago completo anticipado:"},
          {text: "Se puede realizar pago completo anticipado el total de colegiatura en la semana anterior al inicio de clases, para así tener el beneficio del 10% de descuento."},
          {text: "*Las fechas de pagos se comparten por correo señalando estas opciones y anexando un excel con el que podían realizar los cálculos, según la opción elegida, favor de estar al pendiente."},
          {text: "*Revisar en el tema de Plataformas, la sección 2. Mitec. En esta sección se explica cómo se pueden realizar los pagos."},
          {text: "  "},
          {text: "Importante:"},
          {text: "Conserva tus comprobantes y da seguimiento personal en tu estado de cuenta de los pagos que realices; tardan en aplicarse de 2 a 3 días dependiendo del banco y hora del depósito, si al tercer día no se refleja debes llamar a Tesorería y gestionar la corrección. Al término del tetramestre no debes tener adeudo para que puedas reinscribirte sin problema."},
          {text: "  "},
          {text: "Dudas o aclaraciones sobre los pagos: Tesorería:  81 8358-2000, ext. 3108 Horario de atención: 8:30 a 1:00 y 2:30 a 5:30 Lunes a Viernes"},
        ],
        links: [
        ],
      },
      // SECCIÓN 2.4 -- Papeleria pend y reinscripcion
      {
        title: "4. Papelería Pendiente y Reinscripción",
        parrafos: [
          {text: "En caso de deber algún documento pendiente de entrega (duplicado de certificado de secundaria, original de acta de nacimiento, copia de IFE/INE) se solicita que se entregue lo más pronto posible con el equipo de Prepanet."},
          {text: "   "},
          {text: "¿Por qué es importante entregar la papelería?"},
          {text: "Tener en orden los papeles y poder realizar los trámites que ameriten. Evitar ser dado de baja del programa (REGLAMENTO PREPANET ARTÍCULO 6). Poder graduarse cuando ya sean candidatos y sea posible el trámite de su certificado. "},
          {text: "   "},
          {text: "Reinscripción"},
          {text: "Después del segundo parcial, te llegará al correo la lista de las materias que puedes seleccionar como prioritarias en el siguiente tetramestre. El periodo para solicitar reinscripción es del: 15 de junio al 22 de agosto, respondiendo al correo que la Ing. Marina les hace llegar. El que hagas solicitud señalando las materias elegidas, no equivale a que ya estás inscrito. Con tu solicitud alimentamos un registro de materias a inscribir que se conjunta con las de todos los alumnos solicitantes. Esto se envía al departamento de Escolar para que corran los procesos de reinscripción. Debes estar atento a estas fechas y a las indicaciones que demos por correo para que no te quedes sin ser considerado en tu reingreso."},
        ],
        links: [
        ],
      },
      // SECCIÓN 2.5 Actividad 2
      {
        title: "5. Actividad 2",
        parrafos: [
          {text: "Da clic en el siguiente enlace para tomar un pequeño quiz. Con este quiz reforzaras el contenido de esta sección."},
        ],
        links: [
          {enlace: "https://docs.google.com/forms/d/e/1FAIpQLScY2tk4S0Wi_km4G3m1QP-7sQL4nsPAJFUDkNl9bKukrYI91g/viewform?usp=sf_link",
        nombre: "Actividad Sección 2"},
        ],
      },
    ]
  }, // termina super tema 2
  // SUPERTEMA 3
  {
    supertitle: "Plataformas",
    sections: [
      // SECCIÓN 3.1 -- Correo
      {
        title: "1. Correo",
        parrafos: [
          {text: "Al ingresar como alumno de PrepaNet, se crea un correo para el alumno. Todos los alumnos de Prepanet tienen activado este correo institucional que es la cuenta a donde llegará la comunicación oficial de la escuela."},
          {text: " "},
          {text: "Formato correo: A0#######@itesm.mx"},
          {text: "Ingresa a: http://mail.itesm.mx/ y coloca tus credenciales"},
          {text: " "},
          {text: "Dado que ya se utiliza un correo, recomendamos ampliamente hacer la configuración de redirección. Esto es que los correos que les lleguen a su cuenta de alumnos se envíen también a la cuenta de correo que ya utilizan. Con la finalidad que tengan toda la información a la mano."},
          {text: " "},
          {text: "Se anexa un archivo dónde se explica como hacer esta configuración."}
        ],
        links: [
          {enlace: "https://drive.google.com/file/d/1lkeiOa9_rz9dHMPdLOA8DSi-hC1XjLuZ/view?usp=sharing",
        nombre: "Configuración de Reenvio"}
        ],
      },
      // SECCIÓN 3.2 -- Portal MiTec
      {
        title: "2. Portal MiTec",
        parrafos: [
          {text: "Como alumno PrepaNet también se tiene acceso a esta plataforma que se llama MiTec. En ella es dónde se pueden realizar los pagos, ver tu historia académica entre otras cosas."},
          {text: "Se anexa una presentación que indica cómo se puede acceder a ella. En la misma, se explica cómo se genera una ficha de pago para realizar los pagos."},
          {text: "El link de acceso a la plataforma Mitec es: https://mitec.itesm.mx/"},
        ],
        links: [
          {enlace: "https://mitec.itesm.mx/",
          nombre: "Enlace MiTec"},
          {enlace: "https://drive.google.com/file/d/1xpaJQZ3mTagS_D781eq5m9CDcYpJ8ZPm/view?usp=sharing",
          nombre: "Presentación Uso de Mitec"},
        ],
      },
      // SECCIÓN 3.3 -- Canvas
      {
        title: "3. Canvas",
        parrafos: [
          {text: "Canvas es la plataforma dónde tendrás el material de las materias que estas cursando. En esta misma plataforma será dónde verás que tareas tienes y para cuando son. Recuerda que PrepaNet es un modelo flexible, por lo que tu decides a qué hora realizas las actividades siempre y cuando sean entregadas dentro de las fechas establecidas."},
          {text: "En esta sección se anexa un video que explica como esta estructurado Canvas. Además se anexa una presentación que explica paso a paso como revisar los comentarios que los tutores pueden colocar en tus tareas."},
          {text: "El link de acceso a la plataforma Canvas es: https://miaprendizaje.prepanet.tec.mx/"},
        ],
        links: [
          {enlace: "https://drive.google.com/file/d/1IDt5lQDfzpjFng5a-ZVhWYJC_daVf6H4/view?usp=sharing",
          nombre: "Vídeo Uso de Canvas - PrepaNet"},
          {enlace: "https://drive.google.com/file/d/18LVnnhlbW444L0errcAFxOk9AUwKbdfD/view?usp=sharing",
          nombre: "Presentación Visualizar Comentarios de Tutores"},
          {enlace: "https://miaprendizaje.prepanet.tec.mx/",
          nombre: "Sitio Canvas"},
        ],
      },
      // SECCIÓN 3.4 -- Actividad 3
      {
        title: "4. Actividad 3",
        parrafos: [
          {text: "Da clic en el siguiente enlace para tomar un pequeño quiz. Con este quiz reforzaras el contenido de esta sección."},
        ],
        links: [
          {enlace: "https://docs.google.com/forms/d/e/1FAIpQLSdxZwwCgazdq9Xgrpe7KUgPrynxLuHsHEOfGSMecHxpMCYo9Q/viewform?usp=sf_link",
          nombre: "Actividad Sección 3"},
        ],
      },

    ]
  },  // termina super tema 3

  // SUPERTEMA 4
  {
    supertitle: "Tutores y Consejeros",
    sections: [
      // SECCIÓN 4.1
      {
        title: "1. Tutores",
        parrafos: [
          {text: "A continuación encontrarás un archivo dónde se explican las funciones de los tutores y se ve cómo se deben solicitar las asesorías."},
        ],
        links: [
          {enlace: "https://drive.google.com/file/d/1Kho5pA-tTSo4MxuN9En-gBIdCQMT-YUc/view?usp=sharing",
          nombre: "Tutores"},
        ],
      },
      // SECCIÓN 4.2
      {
        title: "2. Consejeros",
        parrafos: [
          {text: "En este apartado encontraras la  información necesaria sobre el programa de Consejería. Consejería busca ayudar a los alumnos mediante un seguimiento personal al resolver dudas académicas y al facilitar la comunicación entre los mismos  y Prepanet. "}
        ],
        links: [
          {enlace: "https://docs.google.com/presentation/d/1_pjlB6xm2_YfCy3cRYGFibxUOt3XVW47mCAoiGz1ga0/edit?usp=sharing",
          nombre: "Presentación Consejeros"}
        ],
      },
      // SECCIÓN 4.3
      {
        title: "3. Curso APA",
        parrafos: [
          {text: "Aquí podrás ver un curso preparado sobre cómo hacer citas. Empieza viendo el video dónde se expone el tema, realiza la actividad que se menciona, y corrobora tus respuestas."},
        ],
        links: [
          {enlace: "https://drive.google.com/file/d/1Z4jKe7t_tKVjHWGXwXlOsG5PSbzBnc_s/view?usp=sharing",
          nombre: "Vídeo Curso de Referencias y APA"},
          {enlace: "https://drive.google.com/file/d/1m-pSOnaVX5IU9ZIYd3i_KsqJ31KO1BUz/view?usp=sharing",
          nombre: "Formato de Actividad Citas y Referencias APA"},
          {enlace: "https://drive.google.com/file/d/1gipkV-qb0DtjRpV-vlv6Q6r5zozUYeGH/view?usp=sharing",
          nombre: "Presentación Uso de Citas y Referencias APA"},
          {enlace: "https://drive.google.com/file/d/11HH4UBUnZa1Ra2WBz1NHW1LQUR4zkwGP/view?usp=sharing",
          nombre: "Respuestas de Actividad Citas y Referencias APA"},
        ],
      },
      // SECCIÓN 4.4
      {
        title: "4. Carta a Alumnos de Nuevo Ingreso",
        parrafos: [
          {text: "Finalmente, nos gustaría compartir esta pequeña carta con algunas recomendaciones para que obtengas buenos resultados."},
          {text: "Lee el archivo adjunto y no olvides que cualquier cosa, estamos a tus ordenes."},
        ],
        links: [
          {enlace: "https://drive.google.com/file/d/1Xr5AnIpURuh7YID5rg3IFN7IFonel9ot/view?usp=sharing",
          nombre: "Carta a los Alumnos de PrepaNet"},
        ],
      },


    ]
  }  // termina super tema 4
]