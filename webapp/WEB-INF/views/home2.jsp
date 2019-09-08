<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<!DOCTYPE html>
<html>
<head>
<spring:url value="/resources" var="urlPublic" />
<link rel="stylesheet" href="${urlPublic}/bootstrap/css/bootstrap.min.css">
<script type="text/javascript" src="${urlPublic}/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="${urlPublic}/js/popper.min.1.15.0.js"></script>
<script type="text/javascript" src="${urlPublic}/js/tooltip.min.1.3.2.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Bienvenido a CineApp</title>
</head>
<body>
	<!--  <h1>Lista de Peliculas</h1>
	  <ol>
		<c:forEach items="${peliculas}" var="pelicula">
		<li>${pelicula }</li>
		</c:forEach>
	</ol>-->
	<div class="card panel-default">
  <div class="card-header">Tabla de Peliculas</div>
  <div class="card-body">
	<table class="table table-striped table-bordered table-hover">
		<thead>
			<tr>
				<th>Id</th>
				<th>Titulo</th>
				<th>Duracion</th>
				<th>Clasificación</th>
				<th>Genero</th>
				<th>Poster</th>
				<th>Fecha</th>
				<th>Estado</th>
			</tr>
		</thead>
		<tbody>
		<c:forEach items="${peliculas}" var="pelicula">
			<tr>
				<td>${pelicula.id}</td>
				<td>${pelicula.titulo}</td>
				<td>${pelicula.duracion} min.</td>
				<td>${pelicula.clasificacion }</td>
				<td>${pelicula.genero}</td>
				<td><img alt="${pelicula.imagen}" src="${urlPublic}/images/${pelicula.imagen}.png" width=80px height=100px></td>
				<td><fmt:formatDate value="${pelicula.fechaEstreno}" pattern="dd/MM/yyyy"/></td>
				<td>
					<c:choose>
						<c:when test="${pelicula.status=='Activa'}">
							<span class="badge badge-success">Activa</span>
						</c:when>
						<c:otherwise>
							<span class="badge badge-danger">Inactiva</span>
						</c:otherwise>
					</c:choose>
				
				</td>
			</tr>
		</c:forEach>
		</tbody>
	</table>
	</div>
</div>
</body>
</html>