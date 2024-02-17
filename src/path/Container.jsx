import { Outlet } from "react-router-dom"

function Container() {
    return <main className="container-fluid ">
        <div className="container">
          <Outlet/>
        </div>
    </main>
}
export default Container