import Hedaerr from "@/components/Hedaerr"
import Footer from "@/components/Footer"


export const metadata = {
  title: 'Baterías Solares, Inversores y Más para tu Sistema de Energía Solar | DailyPower',
  description: 'Encuentra baterías solares, de litio, para inversores y más en DailyPower. Ofrecemos productos de alta calidad y fiabilidad con la mejor garantía del mercado, ideal para sistemas solares, UPS, música para vehículos y más. Ubicados en Santo Domingo, garantizamos la mejor experiencia de uso y servicio.',
}
const Layout = ({ children }) => {
    return (<>
        <Hedaerr />
        {children}
        <Footer/>
    </>)
}

export default Layout;