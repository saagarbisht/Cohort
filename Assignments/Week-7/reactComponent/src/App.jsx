import Profile from "./components/Profile"
import "./css/app.css"

function App() {
  const users = [
    {
      image : "https://shorturl.at/fzCMX",
      name : "Nico Robin",
      age : "28",
      location : "Ohara",
      followers : "19M",
      likes : "11M",
      photos : "15k"
    },
    {
      image : "https://shorturl.at/nors1",
      name : "Nami",
      age : "22",
      location : "East Blue",
      followers : "29M",
      likes : "18M",
      photos : "30k"
    },
    {
      image : "https://shorturl.at/cFMX4",
      name : "Boa Hancock",
      age : "30",
      location : "Amazon lily",
      followers : "32M",
      likes : "80M",
      photos : "12k"
    },
    {
      image : "https://shorturl.at/lm679",
      name : "nefertari vivi",
      age : "18",
      location : "Alabasta",
      followers : "12M",
      likes : "9M",
      photos : "11k"
    },
    {
      image : "https://shorturl.at/fhpCG",
      name : "Rebbeca Riku",
      age : "17",
      location : "Dressrosa",
      followers : "9M",
      likes : "6M",
      photos : "1k"
    },
    {
      image : "https://shorturl.at/bASU4",
      name : "Shirahoshi Neptune",
      age : "16",
      location : "Ryugu Kingdome",
      followers : "13M",
      likes : "10M",
      photos : "5k"
    },
  ]
  return (
    < div className="plain">
      {users.map(user => <Profile image={user.image} name={user.name} age={user.age} location={user.location} followers={user.followers} likes={user.likes} photos={user.photos}/>)}
    </div>
  )
}

export default App
