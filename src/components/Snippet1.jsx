/* import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Introduction from '../pages/Pone/Introduction'
import Firstproject from '../pages/Pone/Firstproject'
import Secondproject from '../pages/Pone/Secondproject'
import Thirdproject from '../pages/Pone/Thirdproject'
import Fourproject from '../pages/Pone/Fourproject'
import Fiveproject from '../pages/Pone/Fiveproject'
import Finalmodule from '../pages/Pone/Finalmodule' 


export const Snippetone = () => {
    return (
    
      <Router>
      <li className=''><Link to='/Introduction'
      >1. Introduction</Link></li><li className=''>
              <Link
                  to='/Firstproject'
              >2. First Project</Link>
          </li><li className=''>
              <Link
                  to='/Secondproject'
              >3. Second Project</Link>
          </li><li className=''>
              <Link
                  to='/Thirdproject'
              >4. Third Project</Link>
          </li><li className=''>
              <Link
                  to='/Fourproject'
              >5. Four Project</Link>
          </li><li className=''>
              <Link
                  to='/Fiveproject'
              >6. Five Project</Link>
          </li><li className=''>
              <Link
                  to='/Finalmodule'
              >7. Final Module</Link>
          </li>
          
                <Routes>
                    <Route path='/Introduction' element={<Introduction />} />
                    <Route path='/Firstproject' element={<Firstproject />} />
                    <Route path='/Secondproject' element={<Secondproject />} />
                    <Route path='/Thirdproject' element={<Thirdproject />} />
                    <Route path='/Fourproject' element={<Fourproject />} />
                    <Route path='/Fiveproject' element={<Fiveproject />} />
                    <Route path='/Finalmodule' element={<Finalmodule />} />
                </Routes>    
        </Router>
         
  )
}

export default Snippetone
 */