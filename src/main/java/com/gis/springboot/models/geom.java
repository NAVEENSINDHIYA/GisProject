package com.gis.springboot.models;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "geom", uniqueConstraints = { @UniqueConstraint(columnNames = "gid") })
public class geom {
	@Id
	@GeneratedValue(strategy = IDENTITY)
	public int gid;
	
	private String firstname;
	private String lastname;
	private String statename;
	private String statecode;
	private String distictname;
	private String districtcode;
	private String talukaname;
	private String talukacode;
	private String villagename;
	private String villagecode;
	private double lat;
	private double lon;
	
	
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
	public String getStatecode() {
		return statecode;
	}
	public void setStatecode(String statecode) {
		this.statecode = statecode;
	}
	public String getDistictname() {
		return distictname;
	}
	public void setDistictname(String distictname) {
		this.distictname = distictname;
	}
	public String getDistrictcode() {
		return districtcode;
	}
	public void setDistrictcode(String districtcode) {
		this.districtcode = districtcode;
	}
	public String getTalukaname() {
		return talukaname;
	}
	public void setTalukaname(String talukaname) {
		this.talukaname = talukaname;
	}
	public String getTalukacode() {
		return talukacode;
	}
	public void setTalukacode(String talukacode) {
		this.talukacode = talukacode;
	}
	public String getVillagename() {
		return villagename;
	}
	public void setVillagename(String villagename) {
		this.villagename = villagename;
	}
	public String getVillagecode() {
		return villagecode;
	}
	public void setVillagecode(String villagecode) {
		this.villagecode = villagecode;
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

}
