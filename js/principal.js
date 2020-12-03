function cambiarAOscuro() {
  setCookie("Claro","false");
  setCookie("Oscuro","true");
  $("hr").addClass("hr");
  document.getElementById("body").classList.remove('w3-light-grey');
  document.getElementById("body").classList.add('negro-oscuro');
  document.getElementById("cuadro-izq").classList.remove('w3-white');
  document.getElementById("cuadro-izq").classList.remove('w3-text-grey');
  document.getElementById("cuadro-izq").classList.add('negro-claro');
  document.getElementById("cuadro-izq").classList.add('blanco-falso');
  document.getElementById("cuadro-izq2").classList.remove('w3-white');
  document.getElementById("cuadro-izq2").classList.remove('w3-text-grey');
  document.getElementById("cuadro-izq2").classList.add('negro-claro');
  document.getElementById("cuadro-izq2").classList.add('blanco-falso');
  document.getElementById("cuadro-der-exp-lab").classList.remove('w3-white');
  document.getElementById("cuadro-der-exp-lab").classList.remove('w3-text-grey');
  document.getElementById("cuadro-der-exp-lab").classList.add('negro-claro');
  document.getElementById("cuadro-der-exp-lab").classList.add('blanco-falso');
  document.getElementById("cuadro-der-edu").classList.remove('w3-white');
  document.getElementById("cuadro-der-edu").classList.remove('w3-text-grey');
  document.getElementById("cuadro-der-edu").classList.add('negro-claro');
  document.getElementById("cuadro-der-edu").classList.add('blanco-falso');
  document.getElementById("cuadro-der-exp-pro").classList.remove('w3-white');
  document.getElementById("cuadro-der-exp-pro").classList.remove('w3-text-grey');
  document.getElementById("cuadro-der-exp-pro").classList.add('negro-claro');
  document.getElementById("cuadro-der-exp-pro").classList.add('blanco-falso');
  document.getElementById("footer").classList.remove('w3-teal');
  document.getElementById("footer").classList.add('negro-claro');
  document.getElementById("footer").classList.add('blanco-falso');
}

function cambiarAClaro() {
  setCookie("Oscuro","false");
  setCookie("Claro","true");
  $("hr").removeClass("hr");
  document.getElementById("body").classList.add('w3-light-grey');
  document.getElementById("body").classList.remove('negro-oscuro');
  document.getElementById("cuadro-izq").classList.add('w3-white');
  document.getElementById("cuadro-izq").classList.add('w3-text-grey');
  document.getElementById("cuadro-izq").classList.remove('negro-claro');
  document.getElementById("cuadro-izq").classList.remove('blanco-falso');
  document.getElementById("cuadro-izq2").classList.add('w3-white');
  document.getElementById("cuadro-izq2").classList.add('w3-text-grey');
  document.getElementById("cuadro-izq2").classList.remove('negro-claro');
  document.getElementById("cuadro-izq2").classList.remove('blanco-falso');
  document.getElementById("cuadro-der-exp-lab").classList.add('w3-white');
  document.getElementById("cuadro-der-exp-lab").classList.add('w3-text-grey');
  document.getElementById("cuadro-der-exp-lab").classList.remove('negro-claro');
  document.getElementById("cuadro-der-exp-lab").classList.remove('blanco-falso');
  document.getElementById("cuadro-der-edu").classList.add('w3-white');
  document.getElementById("cuadro-der-edu").classList.add('w3-text-grey');
  document.getElementById("cuadro-der-edu").classList.remove('negro-claro');
  document.getElementById("cuadro-der-edu").classList.remove('blanco-falso');
  document.getElementById("cuadro-der-exp-pro").classList.add('w3-white');
  document.getElementById("cuadro-der-exp-pro").classList.add('w3-text-grey');
  document.getElementById("cuadro-der-exp-pro").classList.remove('negro-claro');
  document.getElementById("cuadro-der-exp-pro").classList.remove('blanco-falso');
  document.getElementById("footer").classList.add('w3-teal');
  document.getElementById("footer").classList.remove('negro-claro');
  document.getElementById("footer").classList.remove('blanco-falso');
}

function CambiarEstado(){
  if(document.getElementById("myonoffswitch").checked === true){
    cambiarAOscuro();
  }else{cambiarAClaro();}
}

function CambiarEstadoIdioma(){
  if(document.getElementById("myonoffswitch2").checked === true){
    setCookie("Arg","false");
    setCookie("En","true");
   }else{
    setCookie("En","false");
    setCookie("Arg","true");
   }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var localStorage2 = window.localStorage;
function setCookie(cname,cvalue) {
  localStorage2.setItem(cname, cvalue);
}

function cargaDeCookies() {
  var Oscuro = "";
  var Claro = "";
  var Arg = "";
  var En = "";
  Oscuro= localStorage2.getItem("Oscuro");
  Claro= localStorage2.getItem("Claro");
  Arg= localStorage2.getItem("Arg");
  En= localStorage2.getItem("En");

  if(Arg == "true"){
    $('.lang').each(function(index, item) {
      $(this).text(arrLang["en"][$(this).attr('key')]);
    });  
    document.getElementById("myonoffswitch2").checked = false;
  }
  else{
    $('.lang').each(function(index, item) {
      $(this).text(arrLang["arg"][$(this).attr('key')]);
    });    
    document.getElementById("myonoffswitch2").checked = true;
  }

  if(Claro == "true"){
    document.getElementById("myonoffswitch").checked = false;
    cambiarAClaro();
  }
  else{
    cambiarAOscuro();
    document.getElementById("myonoffswitch").checked = true;
  }
  if($(window).width() > 600){
    var h = document.getElementById("der").clientHeight;
    $("#cuadro-izq").css({ minHeight: h+"px" });
    }
    else{
      $("#cuadro-izq").css({ minHeight:"" });
    }
}


 $(window).resize(function () {
      if($(window).width() > 600){
      var h = document.getElementById("der").clientHeight;
      $("#cuadro-izq").css({ minHeight: h+"px" });
    }
    else{
      $("#cuadro-izq").css({ minHeight:"" });
    }
    });

    $(document).ready(function() {
      if($(window).width() > 600){
      var h = document.getElementById("der").clientHeight;
      $("#cuadro-izq").css({ minHeight: h+"px" });
      }
      else{
        $("#cuadro-izq").css({ minHeight:"" });
      }
    });

$('#myonoffswitch2').change(function() {
        if($(this).is(":checked")) {
          $('.lang').each(function(index, item) {
          $(this).text(arrLang["arg"][$(this).attr('key')]);
        });        }else{
          $('.lang').each(function(index, item) {
          $(this).text(arrLang["en"][$(this).attr('key')]);
        });
        }
    });

    var arrLang = {
      'en': {
        'ExperienciaTitulo': 'Work experience',
        'Agosto': 'August',
        'Actualmente': 'Nowadays',
        'puesto2': 'Customer Service',
        'descPuesto2P1': 'Online procedures - Loans - Sale of reloadable debit cards - Money transfers to the interior and exterior of the country - Ticket sales - Upload system - Photocopier management - Cash and stock closing - Cash monitoring and control in Rapipago sector.',
        'descPuesto2P2': 'Approximately 1 year in a shift manager position, in charge of 5 people.',
        'descPuesto3': 'Technical support in a call center on the 3 services provided by the Telecentro company (Internet, Telephony, TV).',
        'ac1': 'Server Management: Linux (Redhat, Centos) and Windows Server instances hosted in different cloud providers.',
        'ac2': 'AWS, Azure and GCP management and configuration.',
        'ac3': 'Big Data platforms support (Ambari, Cloudera).',
        'ac4': 'Administration and application support to: Tableau, Talend, QlikView, Alteryx, QlikSense, Yarkon, RStudio, Informatica.',
        'ac5': 'Tasks automation through PowerShell and Python.',
        'ac6': 'Support to Docker and Kubernetes.',
        'ac7': 'Monitoring through Nagios XI.',
        'ac8': 'Web servers support (Apache - Tomcat - NGINX).',
        'ac9': 'Support to DBs (SQL Server - MySQL - Redshift - RDS - PostgreSQL).',
        'ac10': 'ServiceNow as ticket system following ITIL best practices.',
        'ac11': 'Creation of procedures for the internal KB.',
        'ac12': 'Mentoring activities for new joiners in the team.',
        'Abril': 'April',
        'Octubre': 'October',
        'Noviembre': 'November ',
        'Julio': 'July',
        'Enero': 'January',
        'Educacion': 'Education',
        'EnCurso': 'In progress',
        'Tec': 'University Technician in Web Development',
        'Redes': 'Computer network installer',
        'Pc': 'PC repair',
        'Bachiller': 'Bachelor with an orientation in Economics & Administration',
        'Proyectos': 'Projects',
        'Proyecto1T': 'About 3 Month',
        'Proyecto1Inf': 'Ecommerce - Forum with AI - University Project',
        'Proyecto1': ' Helping others',
        'Proyecto2T': 'About 2 Months',
        'Proyecto2Inf': 'Donations Network - University Project',
        'Proyecto3T': 'About 1 Months',
        'Proyecto3Inf': 'Ecommerce - University Project',
        'Footer':'Find me on my social networks.',
        'Idioma': 'Language',
        'Español':'Spanish',
        'Ingles': 'English',
        'St':'Technical support | Call center - Contactcom',
      },
      'arg': {
        'ExperienciaTitulo': 'Experiencia laboral',
        'Agosto': 'Agosto',
        'Actualmente': 'Actualmente',
        'puesto2': 'Servicio de atención al cliente',
        'descPuesto2P1': 'Trámites online - Prestamos - Venta de tarjetas de debito recargables - Giros al interior y exterior del pais - Venta de pasajes - Sistema de sube - Manejo de fotocopiadora - Cierre de caja y stock - Seguimiento y control de caja en sector Rapipago.',
        'descPuesto2P2': 'Aproximadamente un 1 año en puesto de encargado de turno, a cargo de 5 personas.',
        'descPuesto3': 'Soporte técnico en un call center sobre los 3 servicios que brinda la empresa Telecentro (Internet, Telefonía, TV).',
        'ac1': 'Administración de servidores: Linux (Redhat, Centos) y Windows Server alojados en distintos cloud providers.',
        'ac2': 'Administración de AWS, Azure y GCP.',
        'ac3': 'Soporte a clusters de BigData (Ambari, Cloudera).',
        'ac4': 'Administración y Soporte de aplicaciones tales como Tableau, Talend, QlikView, Alteryx, QlikSense, Yarkon, RStudio, Informatica.',
        'ac5': 'Automatización de tareas a través de PowerShell y Python.',
        'ac6': 'Manejo de containers con Docker y Kubernetes.',
        'ac7': 'Monitoreo a través de Nagios XI.',
        'ac8': 'Soporte a web servers (Apache - Tomcat - Nginx).',
        'ac9': 'Soporte a base de datos (SQL Server - MySQL - Redshift - RDS - PostgreSQL).',
        'ac10': 'Uso de ServiceNow como gestor de tickets bajo los lineamientos de ITIL.',
        'ac11': 'Creación de procedimientos para la KB interna.',
        'ac12': 'Actividades de tutoría para los nuevos integrantes del equipo.',
        'Abril': 'Abril',
        'Octubre': 'Octubre',
        'Noviembre': 'Noviembre',
        'Julio': 'Julio',
        'Enero': 'Enero',
        'Educacion': 'Educación',
        'EnCurso': 'En Curso',
        'Tec': 'Técnico Universitario en Desarrollo Web',
        'Redes': 'Instalador de redes informaticas',
        'Pc': 'Enero',
        'Bachiller': 'Bachiller con orientación en Economía & Administración',
        'Proyectos': 'Proyectos',
        'Proyecto1T': 'Aproximadamente 3 Mes',
        'Proyecto1Inf': 'Ecommerce - Foro con IA - Proyecto Universitario',
        'Proyecto1': 'Ayudando al projimo',
        'Proyecto2T': 'Aproximadamente 2 Mes',
        'Proyecto2Inf': 'Red de donaciones - Proyecto Universitario',
        'Proyecto3T': 'Aproximadamente 1 Mes',
        'Proyecto3Inf': 'Ecommerce - Proyecto Universitario',
        'Footer':'Buscame en mis redes sociales.',
        'Idioma': 'Idioma',
        'Español':'Español',
        'Ingles': 'Inglés',
        'St':'Soporte técnico | Call center - Contactcom',
      }
    };