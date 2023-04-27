import App from "App";
import Nickname from "pages/guest/quiz/Nickname";
import Profile from "pages/guest/quiz/Profile";
import GuestQuiz from "pages/guest/GuestQuiz";
import HomeMain from "pages/host/home/HomeMain";
import Quiz from "pages/host/home/quiz/Quiz";
import Report from "pages/host/home/report/Report";
import HostQuiz from "pages/host/host/HostQuiz";
import Login from "pages/host/login/Login";
import Create from "pages/host/quiz/Create";
import Edit from "pages/host/quiz/Edit";
import { createBrowserRouter } from "react-router-dom";
import EnterPin from "pages/guest/quiz/EnterPin";
import ShowPin from "pages/host/host/quiz/ShowPin";
import ReportMain from "pages/host/home/report/ReportMain";
import ReportBasic from "pages/host/home/report/ReportBasic";
import ReportPart from "pages/host/home/report/ReportPart";
import ReportQuiz from "pages/host/home/report/ReportQuiz";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "home",
        element: <HomeMain />,
        children: [
          {
            index: true,
            element: <Quiz />,
          },
          {
            path: "report",
            element: <ReportMain />,
            children: [
              {
                index: true,
                element: <Report />,
              },
              {
                path: ":report_id/basicinfo",
                element: <ReportBasic></ReportBasic>,
              },
              {
                path: ":report_id/partinfo",
                element: <ReportPart></ReportPart>,
              },
              {
                path: ":report_id/quizinfo",
                element: <ReportQuiz></ReportQuiz>,
              },
            ],
          },
        ],
      },
      {
        path: "quiz/create",
        element: <Create />,
      },
      {
        path: "quiz/:quiz_id/edit",
        element: <Edit />,
      },
      {
        path: "host/quiz/:quiz_id",
        element: <HostQuiz />,
        children: [
          {
            index: true,
            element: <ShowPin />,
          },
          {
            path: "lobby",
            element: <></>,
          },
          {
            path: "play",
            element: <></>,
          },
          {
            path: "awards",
            element: <></>,
          },
        ],
      },
      {
        path: "guest",
        element: <GuestQuiz />,
        children: [
          {
            index: true,
            element: <EnterPin />,
          },
          {
            path: "nickname",
            element: <Nickname />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "quiz/lobby",
            element: <></>,
          },
          {
            path: "quiz/play",
            element: <></>,
          },
          {
            path: "quiz/result",
            element: <></>,
          },
          {
            path: "quiz/awards",
            element: <></>,
          },
          {
            path: "quiz/ranking",
            element: <></>,
          },
        ],
      },
    ],
  },
]);

export default router;
