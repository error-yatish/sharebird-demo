import { useSelector } from 'react-redux'
import Header from '../components/header'
import Layout from '../components/layout'
import AnswerCard from '../components/answer-card'
import QuestionCard from '../components/question-card'

const Homepage = () => {
    const answers = useSelector((state) => state.answers) || []

    return (
        <>
            <Header />
            <Layout>
                <QuestionCard />
                <div className='d-flex flex-row my-4 justify-content-center align-items-center'>
                    <p className='me-3'>Want more answers to this question? Add this question to an upcoming AMA.</p>
                    <button type="button" className="btn btn-primary btn-sm">Request More Answers</button>
                </div>
                {
                    answers.map(answer =>
                        <AnswerCard
                            key={answer.id}
                            answerData={answer} />)
                }
            </Layout>
        </>
    )
}

export default Homepage
