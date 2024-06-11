
import { useEffect } from 'react';
import { Link} from 'react-router-dom';
import {Author} from '../Author/Author';

export const AuthorsList = ({URL,setAuthors,authors,setAuthorToEdit}) => {
    
    useEffect(() => {
        fetch(URL)
            .then(res => {
                if(res.ok){
                    return res.json();
                }
                throw res;
            })
            .then(data => {
                console.log(data);
                setAuthors(data);

            })
            .catch(err => {
                console.log(err);
            })
    }
    , [URL,setAuthors]);
 
    return (
        <div>
            <Link to="/addAuthor">Add an author</Link>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, i) => {
                        return <Author key={i} author={author} setAuthorToEdit={setAuthorToEdit}/>
                    })}
                </tbody>
               
            </table>
        </div>
    )
}
