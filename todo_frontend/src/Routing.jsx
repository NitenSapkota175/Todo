import { BrowserRouter, Route,Routes } from  "react-router-dom"
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import BehaviourLogic from "./pages/BehaviourLogic";
import ImproveBehaviourLogic from "./pages/ImproveBehaviourLogic";
import 'react-toastify/dist/ReactToastify.css'
const Routing = () =>{

        return (

                <div>
                        <BrowserRouter>
                        <ToastContainer autoClose={3000} position={"top-center"} hideProgressBar={true} />

                        <Routes>

                            <Route path='/' element= {<ProtectedRoute> <Home/>  </ProtectedRoute>}/>

                            <Route path="/login" element={<Login/>} />

                            <Route path="/signup" element={<SignUp/>}/>

                           



                            <Route path="/behaviour" elemnet={<ProtectedRoute><BehaviourLogic/></ProtectedRoute>}></Route>

                            <Route path="/improveBehaviour/:id/" element={<ProtectedRoute><ImproveBehaviourLogic/></ProtectedRoute>}></Route>

                        </Routes>
                </BrowserRouter>


                </div>


        )





};

export default Routing;