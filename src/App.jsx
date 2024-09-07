import Main from "./Components/Main"
import ProfilePicture from "./Components/ProfilePicture"
import Socials from "./Components/Socials"
import Pointer from "./Components/Pointer"

export default function App() {
  return (
    <div className="app-container">
        <Pointer />
       <ProfilePicture />
       <Main />
       <Socials />
    </div>
  )
}
