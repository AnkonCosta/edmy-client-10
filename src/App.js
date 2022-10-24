import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import FAQs from './components/FAQ/FAQs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CoursePageLayout from './layouts/CoursePageLayout';
import SpecificTopics from './components/SpecificTopics/SpecificTopics';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/',
          element: <CoursePageLayout></CoursePageLayout>,
          children: [
            {
              path: '/courses',
              element: <Courses></Courses>,
              loader: () => {
                return fetch(`http://localhost:5000/courses`)
              }
            },
            {
              path: '/courses/:id',
              element: <SpecificTopics></SpecificTopics>,
              loader: ({ params }) => {
                return fetch(`http://localhost:5000/topics/${params.id}`)
              }
            },
          ]
        },
        {
          path: '/faqs',
          element: <FAQs></FAQs>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
      ]
    }
  ])

  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
