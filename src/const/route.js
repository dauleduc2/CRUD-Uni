import AboutUsPage from "../components/AboutUsPage";
import HomePage from "../components/HomePage";
import SchoolInformation from "../components/SchoolInfomation";
import FPTUniversityMainPage from "../components/SpecialSchool/FPTUniversity/FPTUniversityMainPage";
import UniTable from "../components/UniTable";
import { database } from "./database";

export const routeList = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/universities",
    exact: true,
    component: UniTable,
    data: database,
  },
  {
    path: "/about-us",
    exact: true,
    component: AboutUsPage,
  },
  {
    path: "/universities/special/fpt-university",
    exact: true,
    component: FPTUniversityMainPage,
  },
  {
    path: "/universities/:university",
    exact: true,
    component: SchoolInformation,
  },
];
