import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import Users from "views/Users.jsx";
import Registered from "views/Registered.jsx";
import unverifieduser from "views/unverifieduser";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Notifications from "views/Notifications.jsx";
import ProductManagement from "views/ProductManagement";
import MaterialManagement from "views/MaterialManagement";
import MappingMaterial from "views/MappingMaterial";
import Grades from "views/Grades";
import SubProduct from "views/SubProduct";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Registered Users",
    icon: "pe-7s-user",
    component: Registered,
    layout: "/admin",
  },
  {
    path: "/unregistered",
    name: "Unverified Users",
    icon: "pe-7s-user",
    component: unverifieduser,
    layout: "/admin",
  },

  {
    path: "/table",
    name: "Users",
    icon: "pe-7s-note2",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Lead Transaction",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Settings",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/product-management",
    name: "Product Management",
    component: ProductManagement,
    layout: "/admin",
  },
  {
    path: "/material-management",
    name: "Material Management",
    component: MaterialManagement,
    layout: "/admin",
  },
  {
    path: "/mapping-material-management",
    name: "Mapping Materials",
    component: MappingMaterial,
    layout: "/admin",
  },
  {
    path: "/grades-management",
    name: "Grades",
    component: Grades,
    layout: "/admin",
  },
  {
    path: "/sub-product-management",
    name: "Sub Product",
    component: SubProduct,
    layout: "/admin",
  },
  /*   {
    path: "/userprofile",
    component: UserProfile,
    layout: "/admin"
  } */
];

export default dashboardRoutes;
