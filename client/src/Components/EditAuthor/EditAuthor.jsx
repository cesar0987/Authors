import { Link, useNavigate, useParams } from 'react-router-dom';

export const EditAuthor = () => {
    const navigate = useNavigate();
    
    const {id} = useParams();
    const updateAuthor = (e) => {
        e.preventDefault();
        const updatedAuthor = {
            name: e.target.name.value
        }
        fetch(`http://localhost:8000/api/authors/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedAuthor)
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

    const cancelEdit = () => {
        navigate("/");
    }

    
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Edit this author:</h1>
            <form onSubmit={updateAuthor}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
                <button onClick={cancelEdit}>Cancel</button>
                <button>Submit</button>
            </form>
        </div>
    )
}