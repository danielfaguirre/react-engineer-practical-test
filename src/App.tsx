import BankList from "./modules/BankList"
import BankContextProvider from "./context/BankContext"

function App() {
  return (
    <div className="App">
      <BankContextProvider>
        <BankList />
      </BankContextProvider>
    </div>
  )
}

export default App
