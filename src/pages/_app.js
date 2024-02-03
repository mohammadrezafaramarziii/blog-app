import { Toaster } from 'react-hot-toast'
import '../../styles/globals.css'
import AuthProvider from 'src/context/AuthContext'
import {wrapper} from "src/redux/store"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Toaster />
    </AuthProvider>
  )
}

export default wrapper.withRedux(MyApp);
