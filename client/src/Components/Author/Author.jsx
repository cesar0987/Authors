import { useNavigate } from "react-router-dom"

export const Author = ({author,setAuthorToEdit}) => {
    const navigate=useNavigate();
    const navigateToEdit = () => {
        setAuthorToEdit(author);
        navigate(`/editAuthor/${author._id}`);
    }

    const handleDelete = () => {
        fetch(`https://authors-lryr.onrender.com/api/authors/${author._id}`, {
            method: "DELETE"
        })
            .then(res => {
                if(res.ok){
                    return res.json();
                }
                throw res;
            })
            .then(data => {
                console.log(data);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
            })
    }

    
    return (
        <tr>
            <td>{author.name}</td>
            <td>
                <button onClick={navigateToEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    )
}