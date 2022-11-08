
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footers from '../Shered/Footers';
import Header from '../Shered/Header';

const Main = () => {
    return (
        <div>
          <Header></Header>
          <Outlet></Outlet>
          <Footers></Footers>
        </div>
    );
};

export default Main;