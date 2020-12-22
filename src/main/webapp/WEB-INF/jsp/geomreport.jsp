<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
    <%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>

<!DOCTYPE html>
<html lang="en">
<!-- Mirrored from demos.creative-tim.com/material-dashboard-pro/examples/dashboard.html?_ga=2.260061773.1516442601.1555747164-1456025805.1554799064 by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 20 Apr 2019 08:06:28 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
<head>
  <meta charset="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="assets/img/favicon.png">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
    Material Dashboard PRO by Creative Tim
  </title>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
  <!-- Extra details for Live View on GitHub Pages -->
  
  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css" href="assets/css/icons.css" />
 <!--  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" /> -->
  <%-- <link rel="stylesheet" href="maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"> --%>
 <!--    <link rel="stylesheet" type="text/css" href="assets/css/icons.css" />
  <link rel="stylesheet" href="assets/css/fonts.awasome.mis.css"> -->
  <!-- CSS Files -->
  <link href="assets/css/material-dashboard.minf066.css?v=2.1.0" rel="stylesheet" />
  <!-- CSS Just for demo purpose, don't include it in your project -->
  <link href="assets/demo/demo.css" rel="stylesheet" />
     <link href="ol/ol.css" rel="stylesheet" />
     <link href="customol/css/customOlStyle.css" rel="stylesheet" />
   
 
   
    <%-- <link rel="stylesheet" href="https://unpkg.com/ol-geocoder@latest/dist/ol-geocoder.min.css" /> --%>
 <script src="ol/popup.js"></script>
                  

  <style>
  .latlon
  {
transition: box-shadow 280ms cubic-bezier(.4,0,.2,1);
display: inline-flex;
padding: 7px 12px;
border-radius: 16px;
align-items: center;
cursor: default;
min-height: 32px;
height: 1px;
background-color:#2196f3;
color:#fff;
font-family: 'Roboto Mono',monospace;
font-weight: 300;
text-align: center;
margin: 4px;
position: relative;
overflow: hidden;
box-sizing: border-box;
-webkit-tap-highlight-color: transparent;
transform: translateZ(0);

  }
  .nav-pills .nav-item li
  {
  padding-bottom: 10px;

  }
  .nav-pills .nav-item .nav-links {
border-radius: 8px;
padding: 17px 8px 4px 9px;
}

.nav-pills.nav-pills-rose .nav-item
.nav-links.active {
    background-color:
#e91e63;
box-shadow: 0 4px 20px 0
rgba(0, 0, 0, .14), 0 7px 10px -5px
rgba(233, 30, 99, .4);
color:
    #fff;
}
.nav-pills .nav-item .nav-links i
{
display: contents;
font-size: 22px;
padding: 0;

}
.nav-pills .nav-item .nav-links i, ::after, ::before
{
box-sizing: content-box;
}


  </style>

</head>

<body class="" id="renderPDF">
  <!-- Extra details for Live View on GitHub Pages -->
  <!-- Google Tag Manager (noscript) -->
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6" height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  <!-- End Google Tag Manager (noscript) -->
  <div class="wrapper ">
    
    <div class="main-panel" style="width:100%;">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
          <div class="navbar-wrapper">
           <!--    <div class="navbar-minimize">
              <button id="minimizeSidebar" class="btn btn-just-icon btn-white btn-fab btn-round">
                <i class="material-icons text_align-center visible-on-sidebar-regular">more_vert</i>
                <i class="material-icons design_bullet-list-67 visible-on-sidebar-mini">view_list</i>
              </button>
            </div>-->
          <a class="navbar-brand" href="#pablo">Dashboard</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end">
            <form class="navbar-form">
              <div class="input-group no-border">
                <input type="text" value="" class="form-control" placeholder="Search...">
                <button type="submit" class="btn btn-white btn-round btn-just-icon">
                  <i class="material-icons">search</i>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#pablo">
                  <i class="material-icons">dashboard</i>
                  <p class="d-lg-none d-md-block">
                    Stats
                  </p>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="http://example.com/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="material-icons">report</i>
                  
                  <p class="d-lg-none d-md-block">
                    Some Actions
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="/geomreport">GeomReport</a>
                   </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#pablo" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="material-icons">person</i>
                  <p class="d-lg-none d-md-block">
                    Account
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">


                <%--  <p class="dropdown-item"> User Name: <security:authentication property="principal.username" /></p>

		<p class="dropdown-item">Role
		<security:authentication property="principal.authorities" />
		</p> --%>
	<%-- <security:authorize access="hasRole('ADMIN')"> --%>
                  <a class="dropdown-item" href="${pageContext.request.contextPath}/registration">Registration</a>
               <%--    </security:authorize> --%>
                  <div class="dropdown-divider"></div>

                  <form:form action="${pageContext.request.contextPath}/logout"  method="POST" >
					 <input type="submit" class="dropdown-item" value="Log out"/>
				   </form:form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- End Navbar -->
      <div class="content">
        <div class="content">
          <div class="container-fluid">
            <div class="row">
             
                  <!-- <div class="card-header card-header-success card-header-icon">
                    <div class="card-icon">
                      <i class="material-icons"></i>
                    </div>
                    <h4 class="card-title"></h4>
                  </div> -->
                  <div class="card-body ">
                           <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-rose card-header-icon">
                  <div class="card-icon">
                    
                     <h4 class="card-title" style="color:white;">Geom Report</h4>
                  </div>
                 
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-striped" id="GeomReportList">
                     
                    </table>
                  </div>
                </div>
              </div>
            </div>
                         
                          </div>
                        </div>
       </div>
                    </div>
                  </div>
                  <footer class="footer">
                    <div class="container-fluid">
                      <nav class="float-left">
                        <ul>
                          <li>
                            <a href="https://www.creative-tim.com/">
                              Creative Tim
                            </a>
                          </li>
                          <li>
                            <a href="https://creative-tim.com/presentation">
                              About Us
                            </a>
                          </li>
                          <li>
                            <a href="http://blog.creative-tim.com/">
                              Blog
                            </a>
                          </li>
                          <li>
                            <a href="https://www.creative-tim.com/license">
                              Licenses
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <div class="copyright float-right">

                        <a href="https://www.creative-tim.com/" target="_blank">Creative Tim</a> for a better web.
                      </div>
                    </div>
                  </footer>
                </div>
              </div>





             



              

             



              <!--   Core JS Files   -->


         
    



               <script src="assets/js/core/jquery.min.js"></script>
               <script src="assets/js/core/pdf.js"></script>
              <script src="assets/js/core/popper.min.js"></script>
              <script src="assets/js/core/bootstrap-material-design.min.js"></script>
              <script src="assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
              <!-- Plugin for the momentJs  -->
              <script src="assets/js/plugins/moment.min.js"></script>
              <!--  Plugin for Sweet Alert -->
              <script src="assets/js/plugins/sweetalert2.js"></script>
              <!-- Forms Validations Plugin -->
              <script src="assets/js/plugins/jquery.validate.min.js"></script>
              <!-- Plugin for the Wizard, full documentation here: https://github.com/VinceG/twitter-bootstrap-wizard -->
              <script src="assets/js/plugins/jquery.bootstrap-wizard.js"></script>
              <!--	Plugin for Select, full documentation here: http://silviomoreto.github.io/bootstrap-select -->
              <script src="assets/js/plugins/bootstrap-selectpicker.js"></script>
              <!--  Plugin for the DateTimePicker, full documentation here: https://eonasdan.github.io/bootstrap-datetimepicker/ -->
              <script src="assets/js/plugins/bootstrap-datetimepicker.min.js"></script>
              <!--  DataTables.net Plugin, full documentation here: https://datatables.net/  -->
              <script src="assets/js/plugins/jquery.dataTables.min.js"></script>
              <!--	Plugin for Tags, full documentation here: https://github.com/bootstrap-tagsinput/bootstrap-tagsinputs  -->
              <script src="assets/js/plugins/bootstrap-tagsinput.js"></script>
              <!-- Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput -->
              <script src="assets/js/plugins/jasny-bootstrap.min.js"></script>
              <!--  Full Calendar Plugin, full documentation here: https://github.com/fullcalendar/fullcalendar    -->
              <script src="assets/js/plugins/fullcalendar.min.js"></script>
              <!-- Vector Map plugin, full documentation here: http://jvectormap.com/documentation/ -->
              <script src="assets/js/plugins/jquery-jvectormap.js"></script>
              <!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ -->
              <script src="assets/js/plugins/nouislider.min.js"></script>
              <!-- Include a polyfill for ES6 Promises (optional) for IE11, UC Browser and Android browser support SweetAlert -->
             
              <!-- Library for adding dinamically elements -->
              <script src="assets/js/plugins/arrive.min.js"></script>
              <!--  Google Maps Plugin    -->
             
              <!-- Place this tag in your head or just before your close body tag. -->
             
              <!-- Chartist JS -->
              <script src="assets/js/plugins/chartist.min.js"></script>
              <!--  Notifications Plugin    -->
              <script src="assets/js/plugins/bootstrap-notify.js"></script>
              <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
              <script src="assets/js/material-dashboard.minf066.js?v=2.1.0" type="text/javascript"></script>
              <!-- Material Dashboard DEMO methods, don't include it in your project! -->
              <script src="assets/demo/demo.js"></script>
                        





             
              <!-- Sharrre libray -->
              
       <script src="mis/js/services/misservices.js"></script>
        <script src="mis/js/customscripts/geomreports.js"></script>
       <script>
 $(document).ready( function () {

 defaultfunction();

 });
 </script>  
  
       

   
                 
                  


<%-- <script src="mis/services/misservices.js"></script>
  <script  src="mis/customscripts/geomreports.js"></script> --%>
 
   
</body>
<!-- Mirrored from demos.creative-tim.com/material-dashboard-pro/examples/dashboard.html?_ga=2.260061773.1516442601.1555747164-1456025805.1554799064 by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 20 Apr 2019 08:06:54 GMT -->
</html>