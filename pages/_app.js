import Layout from "../public/src/Layout/Layout"
import "../public/src/styles/General.css"

const App = ({ Component, pageProps }) => {
    return (
        <Layout >
            <Component {...pageProps} />
        </Layout>
    )
}
export default App;
