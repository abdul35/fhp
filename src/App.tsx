import Chat from "./components/Chat/Chat"
import Guilds from "./components/Guilds/Guilds"
import Sidebar from "./components/Sidebar/Sidebar"

const App = (): JSX.Element => {

  return (
    <div className="App">
      <div className="">
        <main className="main">
          <Guilds />
          <Sidebar />
          <Chat />
        </main>
      </div>
    </div>
  )
}

export default App
