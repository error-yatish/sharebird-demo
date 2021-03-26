const Card = ({ children }) => {
    return <div className='card m-2 my-4'>
        <div className='card-body'>
            {children}
        </div>
    </div>;
}

export default Card