import AppRoutes from "../AppRoutes"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
    <div>Doma</div>
    <Link to={"/login"}>
    <button>Go to login</button>
    </Link>
    </>
  )
}
