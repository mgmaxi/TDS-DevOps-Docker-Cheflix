import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from '../pages/Movie/Movie';
import Search from '../pages/Search/Search';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Layout from '../pages/Layout/Layout';
import TVShows from '../pages/TVShows/TVShows';
import Movies from '../pages/Movies/Movies';
import NewPopular from '../pages/NewPopular/NewPopular';
import MyList from '../pages/MyList/MyList';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/tv" element={<TVShows />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/movies/:movie_id" element={<Movie />}></Route>
            <Route path="/newpopular" element={<NewPopular />}></Route>
            <Route path="/mylist" element={<MyList />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
