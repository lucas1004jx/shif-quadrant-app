
interface Todo {
    id: number,
    title: string,
    completed: boolean
}

const LandingPage = () => {
    const data = {
        id: 123,
        title: 'title',
        completed: false
    }
    const todo = data as Todo;

    return (
        <div>
            this is the landing page
        </div>
    )
}

export default LandingPage;