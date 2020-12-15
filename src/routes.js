import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Unregistered from "views/unregistered.jsx";
import unverifieduser from "views/unverifieduser";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Notifications from "views/Notifications.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Registered Users",
    icon: "pe-7s-user",
    component: Unregistered,
    layout: "/admin"
  },
  {
    path: "/unregistered",
    name: "Unverified Users",
    icon: "pe-7s-user",
    component: unverifieduser,
    layout: "/admin"
  },

  {
    path: "/table",
    name: "Users",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Lead Transaction",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Settings",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },
/*   {
    path: "/userprofile",
    component: UserProfile,
    layout: "/admin"
  } */
];

export default dashboardRoutes;
