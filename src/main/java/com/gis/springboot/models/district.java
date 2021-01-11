package com.gis.springboot.models;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "district2014_bound", uniqueConstraints = { @UniqueConstraint(columnNames = "gid") })
public class district {
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	private int gid;
	@Column(name="name11")
	private String districtname;

	@Column(name="stcode11")
	private String statecode;
	@Column(name="dtcode11")
	private String districtcode;
	
	
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
	public String getDistrictname() {
		return districtname;
	}
	public void setDistrictname(String districtname) {
		this.districtname = districtname;
	}
	public String getStatecode() {
		return statecode;
	}
	public void setStatecode(String statecode) {
		this.statecode = statecode;
	}
	public String getDistrictcode() {
		return districtcode;
	}
	public void setDistrictcode(String districtcode) {
		this.districtcode = districtcode;
	}
	
	  public double getMinx() { return minx; } public void setMinx(double minx) {
	  this.minx = minx; } public double getMiny() { return miny; } public void
	  setMiny(double miny) { this.miny = miny; } public double getMaxx() { return
	  maxx; } public void setMaxx(double maxx) { this.maxx = maxx; } public double
	  getMaxy() { return maxy; } public void setMaxy(double maxy) { this.maxy =
	  maxy; }
	 
	
	

}
