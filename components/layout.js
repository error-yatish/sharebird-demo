import { useSelector } from 'react-redux'
import Meta from '../components/meta'

const Layout = ({ children }) => {
    const question = useSelector((state) => state.question)
    return (
        <>
            <Meta question={question} />
            <div className='container p-4'>
                <main>{children}</main>
            </div>
        </>
    )
}


export default Layout
