import { useSelector } from 'react-redux'
import ReplyInput from './reply-input'
import Card from './card'
import LinkedInIcon from './icons/linkedin-icon'
import TwitterIcon from './icons/twitter-icon'
import ChainIcon from './icons/chain-icon'

const useQuestion = () => {
    const question = useSelector((state) => state.question)
    const domain = useSelector((state) => state.domain)
    const user = useSelector((state) => state.user)
    const answersCount = useSelector((state) => state.answers).length

    return { question, domain, user, answersCount }
}

const svgProps = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
};

const QuestionCard = () => {
    const { question, domain, user, answersCount } = useQuestion()

    return <Card>
        <h6 className="card-subtitle mb-2 text-muted">{domain}</h6>
        <h5 className="card-title">{question}</h5>
        <div className="d-flex align-items-center flex-wrap my-4">
            <div className='mx-2'>
                <LinkedInIcon />
            </div>
            <div className='mx-2'>
                <TwitterIcon />
            </div>
            <div className='mx-2'>
                <ChainIcon />
                {answersCount} answers
            </div>
        </div>
        <button type="button" className="btn btn-primary btn-sm">Follow Question</button>
        <hr />
        <ReplyInput userName={user?.userName} />
    </Card>
}

export default QuestionCard
