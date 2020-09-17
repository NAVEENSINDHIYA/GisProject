<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>  
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  
    <%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
   
<!DOCTYPE html>
<html lang="en">
<!-- Mirrored from demos.creative-tim.com/material-dashboard-pro/examples/dashboard.html?_ga=2.260061773.1516442601.1555747164-1456025805.1554799064 by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 20 Apr 2019 08:06:28 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
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
  <!-- Canonical SEO -->
  <link rel="canonical" href="https://www.creative-tim.com/product/material-dashboard-pro" />
  <!--  Social tags      -->
  <meta name="keywords" content="creative tim, html dashboard, html css dashboard, web dashboard, bootstrap 4 dashboard, bootstrap 4, css3 dashboard, bootstrap 4 admin, material dashboard bootstrap 4 dashboard, frontend, responsive bootstrap 4 dashboard, material design, material dashboard bootstrap 4 dashboard">
  <meta name="description" content="Material Dashboard PRO is a Premium Material Bootstrap 4 Admin with a fresh, new design inspired by Google's Material Design.">
  <!-- Schema.org markup for Google+ -->
  <meta itemprop="name" content="Material Dashboard PRO by Creative Tim">
  <meta itemprop="description" content="Material Dashboard PRO is a Premium Material Bootstrap 4 Admin with a fresh, new design inspired by Google's Material Design.">
  <meta itemprop="image" content="../../../s3.amazonaws.com/creativetim_bucket/products/51/original/opt_mdp_thumbnail.jpg">
  <!-- Twitter Card data -->
  <meta name="twitter:card" content="product">
  <meta name="twitter:site" content="@creativetim">
  <meta name="twitter:title" content="Material Dashboard PRO by Creative Tim">
  <meta name="twitter:description" content="Material Dashboard PRO is a Premium Material Bootstrap 4 Admin with a fresh, new design inspired by Google's Material Design.">
  <meta name="twitter:creator" content="@creativetim">
  <meta name="twitter:image" content="../../../s3.amazonaws.com/creativetim_bucket/products/51/original/opt_mdp_thumbnail.jpg">
  <!-- Open Graph data -->
  <meta property="fb:app_id" content="655968634437471">
  <meta property="og:title" content="Material Dashboard PRO by Creative Tim" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="dashboard.html" />
  <meta property="og:image" content="../../../s3.amazonaws.com/creativetim_bucket/products/51/original/opt_mdp_thumbnail.jpg" />
  <meta property="og:description" content="Material Dashboard PRO is a Premium Material Bootstrap 4 Admin with a fresh, new design inspired by Google's Material Design." />
  <meta property="og:site_name" content="Creative Tim" />
  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css" href="assets/css/icons.css" />
 <!--  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" /> -->
  <link rel="stylesheet" href="../../../maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
 <!--    <link rel="stylesheet" type="text/css" href="assets/css/icons.css" />
  <link rel="stylesheet" href="assets/css/fonts.awasome.mis.css"> -->
  <!-- CSS Files -->
  <link href="assets/css/material-dashboard.minf066.css?v=2.1.0" rel="stylesheet" />
  <!-- CSS Just for demo purpose, don't include it in your project -->
  <link href="assets/demo/demo.css" rel="stylesheet" /> 
    <link href="ol/ol.css" rel="stylesheet" />
     <link href="customol/css/customOlStyle.css" rel="stylesheet" />
   <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="https:/resources/demos/style.css">
    <script src="assets/js/plugins/popper.min.js" ></script>
  
   <script src="https://unpkg.com/elm-pep"></script>
    <style>
      
    </style>
  
  
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
    <div class="sidebar" data-color="rose" data-background-color="black" data-image="assets/img/sidebar-1.jpg">
      <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    -->
      <div class="logo">
        <a href="http://www.creative-tim.com/" class="simple-text logo-mini">
          PN
        </a>
        <a href="http://www.creative-tim.com/" class="simple-text logo-normal">
         Project Name
        </a>
      </div>
      <div class="sidebar-wrapper">
         <ul class="nav">
         <li class="nav-item active ">
            <a class="nav-link" href="/">
              <i class="material-icons">dashboard</i>
              <p> pdf selector </p>
            </a>
          </li>
        
        
         
     <!--      <li class="nav-item ">
            <a class="nav-link" data-toggle="collapse" href="#pagesExamples">
              <i class="material-icons">image</i>
              <p> Pages
                <b class="caret"></b>
              </p>
            </a>
            <div class="collapse" id="pagesExamples">
              <ul class="nav">
                <li class="nav-item ">
                  <a class="nav-link" href="pages/pricing.html">
                    <span class="sidebar-mini"> P </span>
                    <span class="sidebar-normal"> Pricing </span>
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="pages/rtl.html">
                    <span class="sidebar-mini"> RS </span>
                    <span class="sidebar-normal"> RTL Support </span>
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="pages/timeline.html">
                    <span class="sidebar-mini"> T </span>
                    <span class="sidebar-normal"> Timeline </span>
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="pages/login.html">
                    <span class="sidebar-mini"> LP </span>
                    <span class="sidebar-normal"> Login Page </span>
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="pages/register.html">
                    <span class="sidebar-mini"> RP </span>
                    <span class="sidebar-normal"> Register Page </span>
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="pages/lock.html">
                    <span class="sidebar-mini"> LSP </span>
                    <span class="sidebar-normal"> Lock Screen Page </span>
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="pages/user.html">
                    <span class="sidebar-mini"> UP </span>
                    <span class="sidebar-normal"> User Profile </span>
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="pages/error.html">
                    <span class="sidebar-mini"> E </span>
                    <span class="sidebar-normal"> Error Page </span>
                  </a>
                </li>
              </ul>
            </div>
          </li> -->
               <div class="col-md-6">
                    
                      <div class="row">
                        <div class="col-lg-5 col-md-6 col-sm-3">
                       
                      <!--  <select class="selectpicker" data-size="7" data-style="btn btn-primary btn-round" title="Single Select">
                            <option disabled selected>Single Option</option>
                            <option value="2">Foobar</option>
                            <option value="3">Is great</option>
                            <option value="4">Is bum</option>
                            <option value="5">Is wow</option>
                            <option value="6">boom</option>
                          </select>
                        -->
                       
                       
                       
                       
                        <!--  <select id="district"  >
                         
                           </select>
                          <select id="village"></select>
                          
                          <select id="serveyno"></select>
                          
                           <select id="filename"></select>
                         -->
                        
                         
                      
                      
                      
                       <!--  //  class="selectpicker" data-size="7" data-style="btn btn-primary btn-round"> -->
                          
                        
                          
                         
                          
                        </div>
                     
                      </div>
                    </div>
              
              
              
              
                 </ul>
     
     
        <div class="">
              <div class="">
               
                <div class="card-body ">
                 
                 
                      <!--
                                color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger"
                            -->
                      <ul class="nav nav-pills nav-pills-success nav-pills-icons flex-column" role="tablist">
                        <li class="nav-item">
                          <a class="nav-link active" data-toggle="tab" href="#link110" role="tablist">
                            <i class="material-icons">dashboard</i>250
                             Total Positive
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" data-toggle="tab" href="#link111" role="tablist">
                            <i class="material-icons">schedule</i> 320
                            Total Nagative Case
                          </a>
                        </li>
                      </ul>
                  
                   
                 
                </div>
              </div>
            </div>
        
        
       
      </div>
    </div>
    <div class="main-panel">
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
                  <i class="material-icons">notifications</i>
                  <span class="notification">5</span>
                  <p class="d-lg-none d-md-block">
                    Some Actions
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Mike John responded to your email</a>
                  <a class="dropdown-item" href="#">You have 5 new tasks</a>
                  <a class="dropdown-item" href="#">You're now friend with Andrew</a>
                  <a class="dropdown-item" href="#">Another Notification</a>
                  <a class="dropdown-item" href="#">Another One</a>
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
              <div class="col-md-12">
                <div class="card ">
                  <!-- <div class="card-header card-header-success card-header-icon">
                    <div class="card-icon">
                      <i class="material-icons"></i>
                    </div>
                    <h4 class="card-title"></h4>
                  </div> -->
                  <div class="card-body ">
                    <div class="row">
                      <div class="col-md-1" style="max-width: 3%;position: absolute;left: 0px;z-index: 1000;">
                        <button class="btn btn-info btn-round btn-fab btn-sm" onclick="defaultmap()">
                      <i class="material-icons">language</i>
                    </button>
                     <button class="btn btn-info btn-round btn-fab btn-sm" onclick="zoomIn()">
                      <i class="material-icons">add</i>
                    </button>
                    <button class="btn btn-info btn-round btn-fab btn-sm" onclick="zoomOut()">
                      <i class="material-icons">remove</i>
                    </button>
                    
                     <button class="btn btn-info btn-round btn-fab btn-sm" onclick="geolocation()">
                      <i class="material-icons">gps_fixed</i>
                    </button>
                     <button class="btn btn-info btn-round btn-fab btn-sm">
                      <i class="material-icons">view_list</i>
                    </button>
                     <button class="btn btn-info btn-round btn-fab btn-sm">
                      <i class="material-icons">fullscreen</i>
                    </button>
                    
                      </div>
    <div class="col-md-6">
                          
                            <div id="target-map" style="width:100%;height:720px;"></div>
                            <div id="latlon" class="latlon"></div>
                             <div id="scale" class="scale-line"></div>
                             <div id="location" style="width: 24px;height: 24px;font-size: 24px;">
                                     <i class="material-icons">location_on</i>
                                     <div id="popup" class="ol-popup">
                                         <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                                          <div id="popup-content"> </div>
    </div>
                                    </div>
                            
                           
                          </div>
                         
                            <div class="col-md-6" >
                            
                             <div class="tab-content">
                             <div class="tab-pane active" id="link110">
                            <div class="card-header card-header-success card-header-icon">
                    <div class="card-icon">
                       <i class="material-icons">language</i><h4 class="card-title">  Table</h4>
                    
                    </div>
                 
                  
                  </div>
                 
                        <div class="table-responsive table-sales">
                          <table class="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/US.png" > 
                                </td>
                                <td>USA</td>
                                <td class="text-right">
                                  2.920
                                </td>
                                <td class="text-right">
                                  53.23%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/DE.png" > 
                                </td>
                                <td>Germany</td>
                                <td class="text-right">
                                  1.300
                                </td>
                                <td class="text-right">
                                  20.43%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/AU.png" > 
                                </td>
                                <td>Australia</td>
                                <td class="text-right">
                                  760
                                </td>
                                <td class="text-right">
                                  10.35%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/GB.png" > 
                                </td>
                                <td>United Kingdom</td>
                                <td class="text-right">
                                  690
                                </td>
                                <td class="text-right">
                                  7.87%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/RO.png" > 
                                </td>
                                <td>Romania</td>
                                <td class="text-right">
                                  600
                                </td>
                                <td class="text-right">
                                  5.94%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/BR.png" > 
                                </td>
                                <td>Brasil</td>
                                <td class="text-right">
                                  550
                                </td>
                                <td class="text-right">
                                  4.34%
                                </td>
                              </tr>
                               <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/US.png" > 
                                </td>
                                <td>USA</td>
                                <td class="text-right">
                                  2.920
                                </td>
                                <td class="text-right">
                                  53.23%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/DE.png" > 
                                </td>
                                <td>Germany</td>
                                <td class="text-right">
                                  1.300
                                </td>
                                <td class="text-right">
                                  20.43%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/AU.png" > 
                                </td>
                                <td>Australia</td>
                                <td class="text-right">
                                  760
                                </td>
                                <td class="text-right">
                                  10.35%
                                </td>
                              </tr>
                               <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/US.png" > 
                                </td>
                                <td>USA</td>
                                <td class="text-right">
                                  2.920
                                </td>
                                <td class="text-right">
                                  53.23%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/DE.png" > 
                                </td>
                                <td>Germany</td>
                                <td class="text-right">
                                  1.300
                                </td>
                                <td class="text-right">
                                  20.43%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/AU.png" > 
                                </td>
                                <td>Australia</td>
                                <td class="text-right">
                                  760
                                </td>
                                <td class="text-right">
                                  10.35%
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          </div>
                          </div>
                            <div class="tab-pane" id="link111">
                          
                            <div class="card-header card-header-success card-header-icon">
                    <div class="card-icon">
                       <i class="material-icons">settings </i><h4 class="card-title">  setting Table</h4>
                    </div>
                 
                  
                  </div>
                        <div class="table-responsive table-sales">
                          <table class="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/US.png" > 
                                </td>
                                <td>USA</td>
                                <td class="text-right">
                                  2.920
                                </td>
                                <td class="text-right">
                                  53.23%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/DE.png" > 
                                </td>
                                <td>Germany</td>
                                <td class="text-right">
                                  1.300
                                </td>
                                <td class="text-right">
                                  20.43%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/AU.png" > 
                                </td>
                                <td>Australia</td>
                                <td class="text-right">
                                  760
                                </td>
                                <td class="text-right">
                                  10.35%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/GB.png" > 
                                </td>
                                <td>United Kingdom</td>
                                <td class="text-right">
                                  690
                                </td>
                                <td class="text-right">
                                  7.87%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/RO.png" > 
                                </td>
                                <td>Romania</td>
                                <td class="text-right">
                                  600
                                </td>
                                <td class="text-right">
                                  5.94%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/BR.png" > 
                                </td>
                                <td>Brasil</td>
                                <td class="text-right">
                                  550
                                </td>
                                <td class="text-right">
                                  4.34%
                                </td>
                              </tr>
                               <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/US.png" > 
                                </td>
                                <td>USA</td>
                                <td class="text-right">
                                  2.920
                                </td>
                                <td class="text-right">
                                  53.23%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/DE.png" > 
                                </td>
                                <td>Germany</td>
                                <td class="text-right">
                                  1.300
                                </td>
                                <td class="text-right">
                                  20.43%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/AU.png" > 
                                </td>
                                <td>Australia</td>
                                <td class="text-right">
                                  760
                                </td>
                                <td class="text-right">
                                  10.35%
                                </td>
                              </tr>
                               <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/US.png"> 
                                </td>
                                <td>USA</td>
                                <td class="text-right">
                                  2.920
                                </td>
                                <td class="text-right">
                                  53.23%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/DE.png"> 
                                </td>
                                <td>Germany</td>
                                <td class="text-right">
                                  1.300
                                </td>
                                <td class="text-right">
                                  20.43%
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="flag">
                                    <img src="assets/img/flags/AU.png"> 
                                </td>
                                <td>Australia</td>
                                <td class="text-right">
                                  760
                                </td>
                                <td class="text-right">
                                  10.35%
                                </td>
                              </tr>
                            </tbody>
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
                        &copy;
                        <script>
                          document.write(new Date().getFullYear())
                        </script>, made with <i class="material-icons">favorite</i> by
                        <a href="https://www.creative-tim.com/" target="_blank">Creative Tim</a>  a better web.
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
              
            
              
              <div class="fixed-plugin">
                <div class="dropdown show-dropdown">
                  <a href="#" data-toggle="dropdown">
                    <i class="material-icons">settings </i>
                  </a>
                  
                  
                  <ul class="dropdown-menu">
                    <li class="header-title"> Sidebar Filters</li>
                    <li class="adjustments-line">
                      <a href="javascript:void(0)" class="switch-trigger active-color">
                        <div class="badge-colors ml-auto mr-auto">
                          <span class="badge filter badge-purple" data-color="purple"></span>
                          <span class="badge filter badge-azure" data-color="azure"></span>
                          <span class="badge filter badge-green" data-color="green"></span>
                          <span class="badge filter badge-warning" data-color="orange"></span>
                          <span class="badge filter badge-danger" data-color="danger"></span>
                          <span class="badge filter badge-rose active" data-color="rose"></span>
                        </div>
                        <div class="clearfix"></div>
                      </a>
                    </li>
                    <li class="header-title">Sidebar Background</li>
                    <li class="adjustments-line">
                      <a href="javascript:void(0)" class="switch-trigger background-color">
                        <div class="ml-auto mr-auto">
                          <span class="badge filter badge-black active" data-background-color="black"></span>
                          <span class="badge filter badge-white" data-background-color="white"></span>
                          <span class="badge filter badge-red" data-background-color="red"></span>
                        </div>
                        <div class="clearfix"></div>
                      </a>
                    </li>
                    <li class="adjustments-line">
                      <a href="javascript:void(0)" class="switch-trigger">
                        <p>Location</p>
                        <label class="ml-auto">
                       <!--    <div class="togglebutton switch-sidebar-mini"> -->
                          <div class="togglebutton ">
                            <label>
                              <input type="checkbox">
                              <span class="toggle"></span>
                            </label>
                          </div>
                        </label>
                        <div class="clearfix"></div>
                      </a>
                    </li>
                    <li class="adjustments-line">
                      <a href="javascript:void(0)" class="switch-trigger">
                        <p>Sidebar Images</p>
                        <label class="switch-mini ml-auto">
                          <div class="togglebutton switch-sidebar-image">
                            <label>
                              <input type="checkbox" checked="">
                              <span class="toggle"></span>
                            </label>
                          </div>
                        </label>
                        <div class="clearfix"></div>
                      </a>
                    </li>
                    <li class="header-title">Images</li>
                   
                    
                  </ul>
                  
                  
                  
                </div>
              </div>
              
           
              <div class="" style="position: fixed;top: 150px;right: 0;width: 64px;background:rgba(0, 0, 0, .3);z-index: 1031;border-radius: 8px 0 0 8px;text-align: center;">
                <div class="dropdown show-dropdown">
                  <a href="#" id="show_hide">
                    <i class="material-icons">language </i>
                  </a>
                  </div>
                  </div>
           
           
           
              <div id="slidingDiv" style="position: absolute;top:150px;right: 60px;z-index:100;min-width: 500px;">
              
           <div class="col-md-12">
              <div class="card ">
               
                <div class="card-body">
                 
                
                  <div class="row">
                    
                    <div class="col-md-10">
                    
                    
                    




                    
                    
                      <div class="tab-content">
                      
                      
                      
                      
                      
                      
                      
                      
                          <div class="tab-pane active" id="link112">
                             <div class="card-header card-header card-header-rose">
                 
                               <h4 class="card-title">Layer Groups:   <span id="groupscount"></span></h4>
                             
                              </div>
                           

                                 <div id="accordion" role="tablist">
 
 <div id="groups">
 <span class="togglebutton" ><label ><input id="allopacity" class="visible" type="checkbox"/><span class="toggle"></span>Opacity</label></span>
                 
                    
            </div>        
                   
                 
                  </div>
                          
                          </div>
                          
                          
                           <div class="tab-pane" id="link113">
                             <div class="card-header card-header card-header-rose">
                 
                               <h4 class="card-title">Find near by position</h4>
                 
                              </div>
                                  First
                          
                          </div>
                          
                            <div class="tab-pane" id="link114">
                             <div class="card-header card-header card-header-rose">
                 
                               <h4 class="card-title">Find by Location</h4>
                 
                              </div>
 
     
      
       
 
                          
    </div>
                          
                          <div class="tab-pane" id="link115">
                             <div class="card-header card-header card-header-rose">
                 
                               <h4 class="card-title">Navigation</h4>
                 
                              </div>
                                 <div class="col-lg-5 col-md-6 col-sm-3">
                          <select class="selectpicker" data-size="7" data-style="btn btn-primary btn-round" title="Single Select">
                            <option disabled selected>State</option>
                            <option value="2">Foobar</option>
                            <option value="3">Is great</option>
                            <option value="4">Is bum</option>
                            <option value="5">Is wow</option>
                            <option value="6">boom</option>
                          </select>
                        </div>
                          
                          </div>
                          
                           <div class="tab-pane" id="link116">
                             <div class="card-header card-header card-header-rose">
                 
                               <h4 class="card-title">Buffer</h4>
                 
                              </div>
                                  First
                          
                          </div>
                           <div class="tab-pane" id="link117">
                             <div class="card-header card-header card-header-rose">
                 
                               <h4 class="card-title">Identify</h4>
                 
                              </div>
                                  First
                          
                          </div>
                          
                           <div class="tab-pane" id="link118">
                             <div class="card-header card-header card-header-rose">
                 
                               <h4 class="card-title">Measure</h4>
                 
                              </div>
                                
                  
                   <div class="">
                 <ul class="nav nav-pills nav-pills-rose" role="tablist" style="padding-top: 5px;">
                    <li class="nav-item">
                      <a class="nav-link active" data-toggle="tab" href="#link1" role="tablist" onclick=selectedType('LineString') style="border-radius: 10px;padding: 2px 5px;">
                       <i class="material-icons" style="padding: 1px 0;">linear_scale</i> 
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#link2" role="tablist" onclick=selectedType('Polygon') style="border-radius: 10px;padding: 2px 5px;">
                         <i class="material-icons"style="padding: 1px 0;">square_foot</i> 
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#link3" role="tablist" onclick=selectedType('Circle') style="border-radius: 10px;padding: 2px 5px;">
                      
                          <i class="material-icons"style="padding: 1px 0;">  panorama_fish_eye</i> 
                      </a>
                    </li>
                  </ul>
                
                
                  <div class="tab-content tab-space">
                    <div class="tab-pane active" id="link1">
                    Click on the map to start measure distance<br>
                     Distance:<span id="distance"></span>                    </div>
                    <div class="tab-pane" id="link2">
                     Click on the map to start measure area<br>
                     Area:<span id="area"></span>
                    </div>
                    <div class="tab-pane" id="link3">
                    Click on the map to start measure radious<br>
                     Radious:<span id="radious"></span>
                    </div>
                  </div>
                </div>
                          
                          </div>
                          
                           <div class="tab-pane" id="link119">
                             <div class="card-header card-header card-header-rose">
                 
                               <h4 class="card-title">Query Builder</h4>
                 
                              </div>
                                  First
                          
                          </div>
                          
                           <div class="tab-pane" id="link120">
                             <div class="card-header card-header card-header-rose">
                 
                               <h4 class="card-title">Print</h4>
                 
                              </div>
                                            <div class="col-lg-5 col-md-6 col-sm-3">
                                            
                                              <a id="export-png" class="btn btn-default"><i class="fa fa-download"></i> Download PNG</a>
    <a id="image-download" download="map.png"></a>
                                            
                          <select class="selectpicker" data-size="7" id="format" data-style="btn btn-primary btn-round" title="Single Select">
                            <option disabled selected>Page Size</option>
                            <option value="a0">A0 (slow)</option>
        <option value="a1">A1</option>
        <option value="a2">A2</option>
        <option value="a3">A3</option>
        <option value="a4" selected>A4</option>
        <option value="a5">A5 (fast)</option>
                          </select>
                        </div>
                        
                          <div class="col-lg-5 col-md-6 col-sm-3">
                      
                          <select class="selectpicker" data-size="7" id="resolution" data-style="btn btn-primary btn-round" title="Single Select">
                            <option disabled >Resolution</option>
                            <option value="72" selected>72 dpi (fast)</option>
        <option value="150">150 dpi</option>
        <option value="300">300 dpi (slow)</option>
                          </select>
                          
                        </div>
                           <div class="col-lg-5 col-md-6 col-sm-3">
                            <button class="btn btn-primary" id="export-pdf">Export PDF</button>
                           </div>
                         

         
                          
                          
                          </div>
                          
                      
                      </div>
                    </div>
                    <div class="col-md-2">
                      <!--
                                color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger"
                            -->
                      <ul class="nav nav-pills nav-pills-rose nav-pills-icons flex-column" role="tablist">
                        <li class="nav-item" style="padding-bottom: 10px;">
                          <a class="nav-links active" data-toggle="tab" href="#link112" role="tablist">
                            <i class="material-icons">layers</i> 
                          </a>
                        </li>
                        <li class="nav-item" style="padding-bottom: 10px;">
                          <a class="nav-links" data-toggle="tab" href="#link113" role="tablist">
                            <i class="material-icons">room</i> 
                          </a>
                        </li>
                        
                        <li class="nav-item" style="padding-bottom: 10px;">
                          <a class="nav-links" data-toggle="tab" href="#link114" role="tablist">
                            <i class="material-icons">adjust</i> 
                          </a>
                        </li>
                         <li class="nav-item" style="padding-bottom: 10px;">
                          <a class="nav-links" data-toggle="tab" href="#link115" role="tablist">
                            <i class="material-icons">navigation</i> 
                          </a>
                        </li>
                        <li class="nav-item" style="padding-bottom: 10px;">
                          <a class="nav-links" data-toggle="tab" href="#link116" role="tablist">
                            <i class="material-icons">swap_horizontal_circle</i> 
                          </a>
                        </li>
                        
                        <li class="nav-item" style="padding-bottom: 10px;">
                          <a class="nav-links" data-toggle="tab" href="#link117" role="tablist">
                            <i class="material-icons">location_searching</i> 
                          </a>
                        </li>
                        
                         <li class="nav-item" style="padding-bottom: 10px;">
                          <a class="nav-links" data-toggle="tab" href="#link118" role="tablist">
                            <i class="material-icons">linear_scale</i> 
                          </a>
                        </li>
                        
                         <li class="nav-item" style="padding-bottom: 10px;">
                          <a class="nav-links" data-toggle="tab" href="#link119" role="tablist">
                            <i class="material-icons">query_builder</i> 
                          </a>
                        </li>
                        <li class="nav-item" style="padding-bottom: 10px;">
                          <a class="nav-links" data-toggle="tab" href="#link120" role="tablist">
                            <i class="material-icons">print</i> 
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
               </div>
                
              
              </div>
            </div>
              
              </div>
              
              
              
              <!--   Core JS Files   -->
               
               <script src="ol/ol.js"></script>
             
             
               
             
        
            
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
              <script src="../../../cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script>
              <!-- Library for adding dinamically elements -->
              <script src="assets/js/plugins/arrive.min.js"></script>
              <!--  Google Maps Plugin    -->
              <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2Yno10-YTnLjjn_Vtk0V8cdcY5lC4plU"></script>
              <!-- Place this tag in your head or just before your close body tag. -->
              <script async defer src="../../../buttons.github.io/buttons.js"></script>
              <!-- Chartist JS -->
              <script src="assets/js/plugins/chartist.min.js"></script>
              <!--  Notifications Plugin    -->
              <script src="assets/js/plugins/bootstrap-notify.js"></script>
              <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
              <script src="assets/js/material-dashboard.minf066.js?v=2.1.0" type="text/javascript"></script>
              <!-- Material Dashboard DEMO methods, don't include it in your project! -->
              <script src="assets/demo/demo.js"></script>
                        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
           
  <!--              <script>
    $(document).ready(function() {
      // initialise Datetimepicker and Sliders
      md.initFormExtendedDatetimepickers();
      if ($('.slider').length != 0) {
        md.initSliders();
      }
    });
  </script> -->

 <script>
 $(document).ready(function() {
	 $("#slidingDiv").hide();
$('#show_hide').click(function () {
	
    $("#slidingDiv").toggle("'slide', {direction: 'right' }, 1000");
});
 });
</script>


 

              
              
              <script>
                $(document).ready(function() {
                  $().ready(function() {
                    $sidebar = $('.sidebar');

                    $sidebar_img_container = $sidebar.find('.sidebar-background');

                    $full_page = $('.full-page');

                    $sidebar_responsive = $('body > .navbar-collapse');

                    window_width = $(window).width();

                    fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();

                    if (window_width > 767 && fixed_plugin_open == 'Dashboard') {
                      if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                        $('.fixed-plugin .dropdown').addClass('open');
                      }

                    }

                    $('.fixed-plugin a').click(function(event) {
                      // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
                      if ($(this).hasClass('switch-trigger')) {
                        if (event.stopPropagation) {
                          event.stopPropagation();
                        } else if (window.event) {
                          window.event.cancelBubble = true;
                        }
                      }
                    });

                    $('.fixed-plugin .active-color span').click(function() {
                      $full_page_background = $('.full-page-background');

                      $(this).siblings().removeClass('active');
                      $(this).addClass('active');

                      var new_color = $(this).data('color');

                      if ($sidebar.length != 0) {
                        $sidebar.attr('data-color', new_color);
                      }

                      if ($full_page.length != 0) {
                        $full_page.attr('filter-color', new_color);
                      }

                      if ($sidebar_responsive.length != 0) {
                        $sidebar_responsive.attr('data-color', new_color);
                      }
                    });

                    $('.fixed-plugin .background-color .badge').click(function() {
                      $(this).siblings().removeClass('active');
                      $(this).addClass('active');

                      var new_color = $(this).data('background-color');

                      if ($sidebar.length != 0) {
                        $sidebar.attr('data-background-color', new_color);
                      }
                    });

                    $('.fixed-plugin .img-holder').click(function() {
                      $full_page_background = $('.full-page-background');

                      $(this).parent('li').siblings().removeClass('active');
                      $(this).parent('li').addClass('active');


                      var new_image = $(this).find("img").attr('src');

                      if ($sidebar_img_container.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
                        $sidebar_img_container.fadeOut('fast', function() {
                          $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                          $sidebar_img_container.fadeIn('fast');
                        });
                      }

                      if ($full_page_background.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
                        var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

                        $full_page_background.fadeOut('fast', function() {
                          $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
                          $full_page_background.fadeIn('fast');
                        });
                      }

                      if ($('.switch-sidebar-image input:checked').length == 0) {
                        var new_image = $('.fixed-plugin li.active .img-holder').find("img").attr('src');
                        var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

                        $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                        $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
                      }

                      if ($sidebar_responsive.length != 0) {
                        $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
                      }
                    });

                    $('.switch-sidebar-image input').change(function() {
                      $full_page_background = $('.full-page-background');

                      $input = $(this);

                      if ($input.is(':checked')) {
                        if ($sidebar_img_container.length != 0) {
                          $sidebar_img_container.fadeIn('fast');
                          $sidebar.attr('data-image', '#');
                        }

                        if ($full_page_background.length != 0) {
                          $full_page_background.fadeIn('fast');
                          $full_page.attr('data-image', '#');
                        }

                        background_image = true;
                      } else {
                        if ($sidebar_img_container.length != 0) {
                          $sidebar.removeAttr('data-image');
                          $sidebar_img_container.fadeOut('fast');
                        }

                        if ($full_page_background.length != 0) {
                          $full_page.removeAttr('data-image', '#');
                          $full_page_background.fadeOut('fast');
                        }

                        background_image = false;
                      }
                    });

                    $('.switch-sidebar-mini input').change(function() {
                      $body = $('body');

                      $input = $(this);

                      if (md.misc.sidebar_mini_active == true) {
                        $('body').removeClass('sidebar-mini');
                        md.misc.sidebar_mini_active = false;

                        $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

                      } else {

                        $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar('destroy');

                        setTimeout(function() {
                          $('body').addClass('sidebar-mini');

                          md.misc.sidebar_mini_active = true;
                        }, 300);
                      }

                      // we simulate the window Resize so the charts will get updated in realtime.
                      var simulateWindowResize = setInterval(function() {
                        window.dispatchEvent(new Event('resize'));
                      }, 180);

                      // we stop the simulation of Window Resize after the animations are completed
                      setTimeout(function() {
                        clearInterval(simulateWindowResize);
                      }, 1000);

                    });
                  });
                });
              </script>
              <!-- Sharrre libray -->
              <script src="assets/demo/jquery.sharrre.js"></script>
           
           
              <noscript>
                <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=111649226022273&amp;ev=PageView&amp;noscript=1" />
              </noscript>
             <!--  <script>
                $(document).ready(function() {
                  // Javascript method's body can be found in assets/js/demos.js
                  md.initDashboardPageCharts();

                  md.initVectorMap();

                });
              </script> -->
              
              
               <script src="customol/js/identify.js"></script> 
               <script src="customol/js/exportpdf.js"></script> 
               <script src="customol/js/measure.js"></script> 
         <script src="customol/js/controllers.js"></script> 
              <script src="customol/js/scaleline.js"></script> 
               <script src="customol/js/mouse-position.js"></script> 
              <script src="customol/js/layerSwitcher.js"></script>
              
               <script src="customol/js/LayersGroup/indianmapLayersGroup.js"></script>
               <script src="customol/js/LayersGroup/commonlayersGroup.js"></script>
                <script src="customol/js/LayersGroup/railLayerGroup.js"></script>  
 
               
                <script src="customol/js/main.js"></script>
                  <script src="customol/js/services/services.js"></script>       
               
           
</body>
   
              

<!-- Mirrored from demos.creative-tim.com/material-dashboard-pro/examples/dashboard.html?_ga=2.260061773.1516442601.1555747164-1456025805.1554799064 by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 20 Apr 2019 08:06:54 GMT -->
</html>