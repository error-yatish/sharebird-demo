import Header from '../components/header'
import Layout from '../components/layout'
import AnswerCard from '../components/answer-card'
import QuestionCard from '../components/question-card'

const Homepage = ({
    question,
    domain,
    user,
    answers
}) => (
    <>
        <Header/>
        <Layout question={question}>
            <QuestionCard question={question} user={user} domain={domain} answersCount={answers.length} />
            <div className='d-flex flex-row my-4 justify-content-center align-items-center'>
                <p className='me-3'>Want more answers to this question? Add this question to an upcoming AMA.</p>
                <button type="button" className="btn btn-primary btn-sm">Request More Answers</button>
            </div>
            {
                answers.map(answer => <AnswerCard key={answer.id} answerData={answer} />)
            }
        </Layout>
    </>
)

export default Homepage
