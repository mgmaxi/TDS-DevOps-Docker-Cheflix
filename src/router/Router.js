import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from '../pages/Movie/Movie';
import Home from '../pages/Home/Home';
/* import NotFound from '../pages/NotFound/NotFound';*/
import Layout from '../pages/Layout/Layout';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            {/*  <Route path="/movies" element={<Movies />}></Route>*/}
            <Route path="/movies/:movie_id" element={<Movie />}></Route>

            {/*  <Route path="*" element={<NotFound />}></Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
