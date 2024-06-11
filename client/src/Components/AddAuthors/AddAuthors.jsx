import { Link, useNavigate } from 'react-router-dom';

export const AddAuthors = ({URL}) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAuthor = {
            name: e.target.name.value
        }
        fetch(`${URL}/new`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAuthor)
        })
        .then(res => {
            if(res.ok){
                return res.json();
            }
            throw res;
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
        navigate("/");
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Add a new author:</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
                <button>Cancel</button>
                <button>Submit</button>
            </form>
        </div>
    )
}