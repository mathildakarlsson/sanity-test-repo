import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './components/Home';
import About from './components/About';
import SingleItem from './components/SingleItem';
import Item from './components/Item';
import Project from './components/Project';
import NavBar from 'components/NavBar';


export const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route element={<Home />} path='/'/>
        <Route element={<About />} path='/about' />
        <Route element={<SingleItem />} path='/item/:slug' />
        <Route element={<Item />} path='/item' />
        <Route element={<Project />} path='/project' />
      </Routes>
    </BrowserRouter>
  );
};
