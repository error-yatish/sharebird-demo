import MoreIcon from './icons/more-icon';

const CardHeader = ({
    userData: {
        userName = '',
        title = '',
        company = '',
        avatar = 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
    }
}) => {
    // title and company is not required fields
    let jobTitle = title || company;
    if (title && company) {
        jobTitle = `${title} at ${company}`
    }

    return <div className='d-flex flex-row justify-content-between'>
        <div className='d-flex flex-row'>
            <div className='image mr-3'>
                <img src={avatar} className='rounded-circle' width='50' />
            </div>
            <div className='ms-4 mt-2'>
                <h6 className='card-title'>{userName}</h6>
                {
                    jobTitle && <p className='card-subtitle mb-2 text-muted'>{jobTitle}</p>
                }
            </div>
        </div>
        <MoreIcon />
    </div>
}

export default CardHeader
