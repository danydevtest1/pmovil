import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Ej01} from "../components/Ejemplos";
import {Otro} from "../components/otro";
import {Layout} from '../layout';

export function RutasProyecto() {
    const renderLayout=(Layout, Page)=>{
        return(
            <Layout>
                <Page/>
            </Layout>
        )
    }
  return (
    <Routes>
        <Route path='/' element={renderLayout(Layout, Ej01)}/>
        <Route path='/otro' element={renderLayout(Layout, Otro)}/>
    </Routes>
  )
}
