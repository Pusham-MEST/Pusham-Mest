import SignUp from "./index"

const helper = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignUp />} />

            </Routes>
        </Router>
    )
}

export default helper