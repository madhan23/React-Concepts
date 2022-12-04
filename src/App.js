import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegister from "./hooks/useContext/UserRegister";
import { UserContextProvider } from "./hooks/useContext/UserContext";
import ReactMemo from "./hooks/memo/ReactMemo";
import UseMemo from "./hooks/useMemo/UseMemo";
import UseRef from "./hooks/useRef/useRef";
import UseLayoutEffect from "./hooks/useLayoutEffect/useLayoutEffect";
import UseReducerDemo from "./hooks/useReducer/UseReducerDemo";
import UseCallback from "./hooks/useCallback/UseCallback";
import Hooks from "./hooks/Hooks";
import Home from "./Home";
import RedirectToHomePage from "./RedirectToHomePage";
import Context from "./hooks/useContext/Context";
import UserProfile from "./hooks/useContext/UserProfile";
function App() {
  return (
    <div className='App'>
      <Router>
        <UserContextProvider>
          <div style={{ marginTop: "30px" }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='*' element={<h5>page not found</h5>} />

              <Route path='/hooks' element={<RedirectToHomePage />}>
                <Route path='' element={<Hooks />} />
                <Route path='memo' element={<ReactMemo />} />
                <Route path='usememo' element={<UseMemo />} />
                <Route path='useref' element={<UseRef />} />
                <Route path='uselayouteffect' element={<UseLayoutEffect />} />
                <Route path='usereducer' element={<UseReducerDemo />} />
                <Route path='callback' element={<UseCallback />} />
                <Route path='usecontext' element={<Context />} />
                <Route path='userprofile' element={<UserProfile />} />
                <Route path='userregister' element={<UserRegister />} />
              </Route>
            </Routes>
          </div>
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
