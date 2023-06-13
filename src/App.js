import React from "react"
import './App.css';
import { BrowserRouter, Routes, Route, Link, createBrowserRouter, RouterProvider, useRoutes } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Dashboard from "./page/Dashboard";
import Funeral from "./page/Funeral"
import Gallery from "./page/Gallery";
import Forum from "./page/Forum";


/*
  참고 URL
  https://stackoverflow.com/questions/65425884/react-router-v6-error-useroutes-may-be-used-only-in-the-context-of-a-route
*/
const App = () => {
  let element = useRoutes([
    { path: '/', element: <Dashboard /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/funeral", element: <Funeral /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/forum", element: <Forum /> }
  ]);

  return element;
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <App />
      </Sidebar>
    </BrowserRouter>
  );
};

export default AppWrapper;


/*
  참고 URL
  https://reactrouter.com/en/main/hooks/use-routes

*/

// const router = createBrowserRouter([
//   // { path: "*", Component: Root },
//   { path: "/", Component: Dashboard },
//   { path: "/dashboard", Component: Dashboard },
//   { path: "/funeral", Component: Funeral },
//   { path: "/gallery", Component: Gallery },
//   { path: "/forum", Component: Forum },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }



/*
  기존 소스
*/

// function App() {
//   return (
//     <BrowserRouter>
//       <Sidebar>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/funeral" element={<Funeral />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/forum" element={<Forum />} />
//         </Routes>
//       </Sidebar>
//     </BrowserRouter>
//   );
// }

// export default App;
