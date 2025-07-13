import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";



export default function TitlesPage() {


  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const pageTitles = {
      "/": "Tek Part",
      "/Project": "Project",
      "/DailyTasks": "Tasks",
      "/Profile": "Profile",
      "/Settings": "Settings",
      "/Login" : "Login",
    };

    const pageTitle = pageTitles[path];

    document.title = pageTitle;
  }, [location.pathname]);

  return null;
}
