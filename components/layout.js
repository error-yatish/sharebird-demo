import Meta from '../components/meta'

const Layout = ({ children, question }) => (
    <>
        <Meta question={question} />
        <div className='container p-4'>
            <main>{children}</main>
        </div>
    </>
)

export default Layout
