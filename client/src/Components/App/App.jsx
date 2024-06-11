import './App.css';
import {AuthorsList} from '../AuthorsList/AuthorsList';
import {AddAuthors} from '../AddAuthors/AddAuthors';
import { Routes,Route } from 'react-router-dom';
import { EditAuthor } from '../EditAuthor/EditAuthor';
import { useState } from 'react';

export const App=()=> {
  const URL = "http://localhost:8000/api/authors";
  const [authors, setAuthors] = useState([]);
  const [authorToEdit, setAuthorToEdit] = useState([{}]);
  return (
    <div className="App">
      <h1>Favorite Authors</h1>

      <>
    <Routes>
      <Route path="/" element={<AuthorsList URL={URL} setAuthors={setAuthors} authors={authors} authorToEdit={authorToEdit} setAuthorToEdit={setAuthorToEdit}/>} />
      <Route path="/addAuthor" element={<AddAuthors URL={URL}/>} />
      <Route path="/editAuthor/:id" element={<EditAuthor URL={URL} authorToEdit={authorToEdit} setAuthorToEdit={setAuthorToEdit}/>} />
    </Routes>
    </>
    
    </div>
  );
}
export default App;
