import React, { Component } from "react";
import AppFrame from "./AppFrame";
import { BrowserRouter as Router } from "react-router-dom";

export default {
    title: "AppFrame",
    component: AppFrame

}

export const AppFrameExample= () => (<Router> 
                                        <AppFrame>
                                            abc
                                        </AppFrame>
                                    </Router>)