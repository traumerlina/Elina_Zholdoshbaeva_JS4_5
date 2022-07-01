import React, {useState} from 'react';

function FormPage(props) {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        age: 0,
         
    })
    
    const changeInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
    
        })
    }
    
    const submit = () => {
        console.log(data);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        alert('data sent successfully');
        
        setData({
            firstName: "",
            lastName: "",
            age: 0,
        });
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='firstName' onChange={changeInput} value={data.firstName} />
                <input type="text" name='lastName' onChange={changeInput} value={data.lastName} />
                <input type="number" name='age' onChange={changeInput} value={data.age} />
                
                <button onClick={submit}>create user</button>
            </form>

    

        </div>
    );
}

export default FormPage;
