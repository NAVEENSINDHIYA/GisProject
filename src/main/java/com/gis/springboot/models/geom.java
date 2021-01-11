package com.gis.springboot.models;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.vividsolutions.jts.geom.Geometry;

@Entity
@Table(name = "geom", uniqueConstraints = { @UniqueConstraint(columnNames = "gid") })
public class geom {
	@Id
	@GeneratedValue(strategy = IDENTITY)
	public int gid;

	private String firstname;
	private String lastname;
	private String statename;
	private String distictname;
	private String talukaname;
	private String villagename;
	private double lat;
	private double lon;

	private Geometry geom;
	private String wktGeom;

	public int getGid() {
		return gid;
	}

	public void setGid(int gid) {
		this.gid = gid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getStatename() {
		return statename;
	}

	public void setStatename(String statename) {
		this.statename = statename;
	}

	public String getDistictname() {
		return distictname;
	}

	public void setDistictname(String distictname) {
		this.distictname = distictname;
	}

	public String getTalukaname() {
		return talukaname;
	}

	public void setTalukaname(String talukaname) {
		this.talukaname = talukaname;
	}

	public String getVillagename() {
		return villagename;
	}

	public void setVillagename(String villagename) {
		this.villagename = villagename;
	}

	public double getLat() {
		return lat;
	}

	public void setLat(double lat) {
		this.lat = lat;
	}

	public double getLon() {
		return lon;
	}

	public void setLon(double lon) {
		this.lon = lon;
	}

	/**
	 * @return Geometry return the geom
	 */
	@JsonIgnore
	public Geometry getGeom() {
		return geom;
	}

	/**
	 * @param geom the geom to set
	 */
	public void setGeom(Geometry geom) {
		this.geom = geom;
	}

	/**
	 * @return String return the wktGeom
	 */
	public String getWktGeom() {
		return wktGeom;
	}

	/**
	 * @param wktGeom the wktGeom to set
	 */
	public void setWktGeom(String wktGeom) {
		this.wktGeom = wktGeom;
	}

}
