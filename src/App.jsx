import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  

  return (
    <>
      <div className="login-container">
        <div className="header-logo">
          <div className="manager-container">
            <img src="https://cdnbancawebprodcx6.azureedge.net/blue/static/items/pbw-pichincha-banca-web-public-ang/assets/logo_pichincha.svg" className="img-size"></img>
          </div>
        </div>
      </div>
      <form className="absolute">
      <h2>Bienvenido a tu Banca Web</h2>
      <br></br>
      <div>
          <label className="user">Usuario</label>
          <input type="text"  id="inputBtn" required></input>
          <a href="#" className="info-user">¿Olvidaste tu usuario?</a>
      </div>
      <div>
          <label className="password">Contraseña</label>
          <input type="password"  id="inputBtn"  required></input>
          <a href="#" className="info-password">¿Olvidaste tu contraseña?</a>
      </div>
      <button className="btn" type="submit">
        <span className="text-button">Ingresar</span>
      </button>
      </form>
    </>
  )
}

export default App


