import { Routes, Route } from 'react-router-dom'
import { Layout } from '../layouts'


export default function AppRoutes() {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
        </Route>
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>  )
}
