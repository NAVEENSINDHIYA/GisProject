package com.gis.springboot.models;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "village_bound", uniqueConstraints = { @UniqueConstraint(columnNames = "gid") })
public class village {
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	private int gid;
	
	@Column(name = "vil_name11", nullable = false)
	private String villagename;
	
	@Column(name = "vil_2011", unique = true, nullable = false)
	private String villagecode;
	
	@Column(name="sdt_2011")
	private String talukacode;
	
	 private double minx; 
	  private double miny;
	  private double maxx;
	  private double maxy;
	public int getGid() {
		return gid;
	}
	public void setGid(int gid) {
		this.gid = gid;
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
	public String getTalukacode() {
		return talukacode;
	}
	public void setTalukacode(String talukacode) {
		this.talukacode = talukacode;
	}
	public double getMinx() {
		return minx;
	}
	public void setMinx(double minx) {
		this.minx = minx;
	}
	public double getMiny() {
		return miny;
	}
	public void setMiny(double miny) {
		this.miny = miny;
	}
	public double getMaxx() {
		return maxx;
	}
	public void setMaxx(double maxx) {
		this.maxx = maxx;
	}
	public double getMaxy() {
		return maxy;
	}
	public void setMaxy(double maxy) {
		this.maxy = maxy;
	}
	  
	  
}
