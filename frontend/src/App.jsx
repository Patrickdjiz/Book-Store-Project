import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBooks from './pages/CreateBooks'
import ShowBook from './pages/ShowBook'
import EditBooks from './pages/EditBooks'
import DeleteBooks from './pages/DeleteBooks'


const App = () => {
  return (
    <Routes>
      <Route path='/' element {<Home />} />
      <Route path='/book/create' element={<CreateBooks />} />
      <Route path='/book/details/:id' element={<ShowBook />} />
      <Route path='/book/edit/:id' element={<EditBooks />} />
      <Route path='/book/delete/:id' element={<DeleteBooks />} />
    </Routes>
  )
}

export default App