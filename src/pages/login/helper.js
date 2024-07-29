
import Login from './index'

const helper = () => {
  return (
    <Router>
            <Routes>
                <Route path="/login" element={<Login />} />

            </Routes>
        </Router>
  )
}

export default helper