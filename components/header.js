const Header = () => {
    return (
        <nav className='navbar navbar-light bg-light'>
            <div className='container-fluid'>
                <div className='d-flex align-items-md-center'>
                    <span className='navbar-brand mb-0 h1'>SHAREBIRD</span>
                    <span>| Get Better Outcomes</span>
                </div>
                <div className='d-flex align-items-center'>
                    <span className='navbar-text me-3'>Already a Sharebird user?</span>
                    <button className='btn btn-warning btn-sm'>Continue with LinkedIn</button>
                </div>
            </div>
        </nav>
    )
}

export default Header
