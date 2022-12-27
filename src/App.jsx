import React from 'react'
import { Routes, Route  } from 'react-router-dom'
import Home from './pages/Home'
import Firstproject from './pages/Pone/Firstproject'
import Fiveproject from './pages/Pone/Fiveproject'
import Fourproject from './pages/Pone/Fourproject'
import Introduction from './pages/Pone/Introduction'
import Secondproject from './pages/Pone/Secondproject'
import Thirdproject from './pages/Pone/Thirdproject'
import Finalmodule from './pages/Pone/Finalmodule'
import Designskills from './pages/Ptwo/Designskills'
import Firstdesign from './pages/Ptwo/Firstdesign'
import Secondesign from './pages/Ptwo/Secondesign'
import Thirdesign from './pages/Ptwo/Thirdesign'
import Fourdesign from './pages/Ptwo/Fourdesign'
import Fivedesign from './pages/Ptwo/Fivedesign'
import Dynamicimport from './pages/Pthree/Dynamicimport'
import Performancepatterns from './pages/Pthree/Performancepatterns'
import Staticimport from './pages/Pthree/Staticimport'
import Renderingclient from './pages/Pfour/Renderingclient'
import Renderingintro from './pages/Pfour/Renderingintro'
import Renderingstatic from './pages/Pfour/Renderingstatic'

const App = () => {
  return (
    <>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Introduction' element={<Introduction />} />
            <Route path='/Firstproject' element={<Firstproject />} />
            <Route path='/Secondproject' element={<Secondproject />} />
            <Route path='/Thirdproject' element={<Thirdproject />} />
            <Route path='/Fourproject' element={<Fourproject />} />
            <Route path='/Fiveproject' element={<Fiveproject />} />
            <Route path='/Finalmodule' element={<Finalmodule />} />
            <Route path='/Designskills' element={<Designskills />} />
            <Route path='/Firstdesign' element={<Firstdesign />} />
            <Route path='/Secondesign' element={<Secondesign />} />
            <Route path='/Thirdesign' element={<Thirdesign />} />
            <Route path='/Fourdesign' element={<Fourdesign />} />
            <Route path='/Fivedesign' element={<Fivedesign />} />
            <Route path='/Dynamicimport' element={<Dynamicimport />} />
            <Route path='/Performancepatterns' element={<Performancepatterns />} />
            <Route path='/Staticimport' element={<Staticimport />} />
            <Route path='/Renderingclient' element={<Renderingclient />} />
            <Route path='/Renderingintro' element={<Renderingintro />} />
            <Route path='/Renderingstatic' element={<Renderingstatic />} />
         </Routes>
    </>
  )
}

export default App