const CardHeader = ({
    userData: {
        userName = '',
        title = '',
        company = '',
        avatar = 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
    }
}) => {
    return <div className='d-flex flex-row justify-content-between'>
        <div className='d-flex flex-row'>
            <div className='image mr-3'> <img src={avatar} className='rounded-circle' width='50' /> </div>
            <div className='ms-4 mt-2'>
                <h6 className='card-title'>{userName}</h6>
                <p className='card-subtitle mb-2 text-muted'>{title} at {company}</p>
            </div>
        </div>
        <svg viewBox="0 0 515.555 515.555" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0" /><path d="m303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0" /><path d="m110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0" /></svg>
    </div>
}

export default CardHeader
