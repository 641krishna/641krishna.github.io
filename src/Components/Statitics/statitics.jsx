import React, { Component } from "react";
import GitHubCalendar from "react-github-calendar";
import "./statitics.css"

export default class Statistics extends Component {
    render() {
        return (

            <section id="stats">
                <div>
                    <section className="colorlib-work" data-section="statistics">
                        <div className="colorlib-narrow-content">
                            <div className="row">
                                <div
                                    className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                    data-animate-effect="fadeInLeft"
                                    style={{ fontSize: "25px", textAlign: "center" }}
                                >
                                    {/* <span className="heading-meta" >My Work</span> */}
                                    <h2 className="colorlib-heading animate-box">Statistics</h2>
                                </div>
                            </div>
                            <div id="statistics"
                            // style={{ display:"flex",
                            //  justifyContent:"space-around",textAlign:"center",}}
                            >
                                <div
                                    className="individualStat animate-box main-card"
                                    data-animate-effect="fadeInLeft"

                                >
                                    <div><h4>1200+</h4></div>
                                    <div>
                                        <h3>Hours</h3> <h4>of Full Stack Coding</h4>
                                    </div>
                                </div>

                                <div
                                    className="individualStat animate-box main-card"
                                    data-animate-effect="fadeInLeft"
                                // style={{width:"10%",boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px", 
                                // padding:"15px",borderRadius:"15%"}}
                                >
                                    <div><h4>60+</h4></div>
                                    <div>
                                        <h3>Git</h3> <h4>Commits</h4>
                                    </div>
                                </div>

                                <div
                                    className="individualStat animate-box main-card"
                                    data-animate-effect="fadeInLeft"
                                // style={{width:"10%",boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px", 
                                // padding:"15px",borderRadius:"15%"}}
                                >
                                    <div><h4>4+</h4></div>
                                    <div>
                                        <h3>Projects</h3> <h4>Done</h4>
                                    </div>
                                </div>

                                <div
                                    className="individualStat animate-box main-card"
                                    data-animate-effect="fadeInLeft"
                                // style={{width:"10%",boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px", 
                                // padding:"15px",borderRadius:"15%"}}
                                >
                                    <div><h4>90+</h4></div>
                                    <div>
                                        <h3>Hours</h3> <h4>of Soft Skills Sessions</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row git-calender" style={{
                                boxShadow: " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                                width: "65%", margin: "auto", padding: "15px", marginTop: "25px"
                            }}>
                                <div
                                    className="animate-box"
                                    data-animate-effect="fadeInLeft"

                                >
                                    <div className="cal"    >
                                        <GitHubCalendar
                                            username="641krishna"
                                            year={new Date().getFullYear()}
                                            className="gitCal"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            </section>




        );
    }
}