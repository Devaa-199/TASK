import React, { useEffect, useState } from 'react'
// import { View } from './Components/View';
import { View } from './View';
// import {View} from ''
const getDatafromLS = () => {
    const data = localStorage.getItem('books');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}

export const App = () => {

    // main array of objects state || books state || books array of objects
    const [books, setbooks] = useState(getDatafromLS());

    // input field states
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [searchInput, setSearchInput] = useState("");
    // const [name, setName] = useState(() => {
    //     // getting stored value
    //     const saved = localStorage.getItem("name");
    //     const initialValue = JSON.parse(saved);
    //     return initialValue || "";
    // });
    // form submit event
    const handleAddBookSubmit = (e) => {
        e.preventDefault();
        // creating an object
        let book = {
            title,
            author,
            isbn
        }
        setbooks([...books, book]);
        setTitle('');
        setAuthor('');
        setIsbn('');
    }

    // delete book from LS
    const deleteBook = (isbn) => {
        const filteredBooks = books.filter((element, index) => {
            return element.isbn !== isbn
        })
        setbooks(filteredBooks);
    }

    // saving data to local storage
    // useEffect(() => {
    //     localStorage.setItem('books', JSON.stringify(books));
    // }, [books])
    // const handleChange = (e) => {
    //     e.preventDefault();
    //     // setSearchInput(e.target.value);
    //     setSearchInput(localStorage.setItem('myData', e.target.value));
    // };

    // if (searchInput.length > 0) {
    //     // countries.filter((country) => {
    //     //     return country.name.match(searchInput);
    //     // });
    // }
    return (
        <div className='wrapper'>
            <h1>ProductList App</h1>
            <p>Add and view your Products using local storage</p>
            <div className='main'>
                {/* search bar */}
                {/* <div>
                    <form>
                        <input
                            type="text"
                            value={name}
                            onChange={handleChange}
                            placeholder="Full name"
                            aria-label="fullname"
                        />
                        <input type="submit" value="Submit"></input>
                    </form>
                </div> */}
                <div className='form-container'>
                    <form autoComplete="off" className='form-group'
                        onSubmit={handleAddBookSubmit}>
                        <label>Title</label>
                        <input type="text" className='form-control' required
                            onChange={(e) => setTitle(e.target.value)} value={title}></input>
                        <br></br>
                        <label>Price</label>
                        <input type="text" className='form-control' required
                            onChange={(e) => setAuthor(e.target.value)} value={author}></input>
                        <br></br>
                        <label>Product Name</label>
                        <input type="text" className='form-control' required
                            onChange={(e) => setIsbn(e.target.value)} value={isbn}></input>
                        <br></br>
                        <button type="submit" className='btn btn-success btn-md'>
                            ADD
                        </button>
                    </form>
                </div>

                <div className='view-container'>
                    {books.length > 0 && <>
                        <div className='table-responsive'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <View books={books} deleteBook={deleteBook} />
                                </tbody>
                            </table>
                        </div>
                        <button className='btn btn-danger btn-md'
                            onClick={() => setbooks([])}>Remove All</button>
                    </>}
                    {books.length < 1 && <div>No product are added yet</div>}
                </div>

            </div>
        </div>
    )
}

export default App