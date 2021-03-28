import 'bootstrap/dist/css/bootstrap.css'
import HomepageComponent from '../containers/homepage'
import { initializeStore } from '../config/redux'

export default function Index() {
    return <HomepageComponent />
}

export function getServerSideProps() {
    const reduxStore = initializeStore()

    return { props: { ...reduxStore.getState() } }
}
