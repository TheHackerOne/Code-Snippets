import React, { useState } from 'react'
import styled from 'styled-components'

function InputBar(props) {
    
  const [snip, setSnip] = useState('');
  const [heading, setHeading] = useState('');
  const [language, setLanguage] = useState('All');

 
  const debug = (e) => {
    setLanguage(e.target.value)
    props.getSpecificData(e);
  }


    return (
        <Container>
            <textarea rows='4' type='textarea' placeholder="Code goes here.." value={snip} onChange={(e) => setSnip(e.target.value)}/>
            <input placeholder='Snippet note goes here..' type='text' value={heading} onChange={(e) => setHeading(e.target.value)}/>
            <select value={language}
                    onChange={(e) => debug(e)}
                    name="language">
                <option value="All">All</option>
                <option value="React">React</option>
                <option value="Redux">Redux</option>
                <option value="Express">Express</option>
                <option value="MongoDB">MongoDB</option>
            </select>
             <button onClick={(e) => props.addNewSnip(e, snip, language, heading)}>Add New Snippet</button>
        </Container>
    )
}

export default InputBar

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    input{
        border-radius: 10px;
        padding: 10px 10px;
        box-shadow: 10px 1px 12px 1px rgba(0,0,0,0.2);
        border: 1px solid rgba(0,0,0,0.4);
    }
    
    textarea{
        margin-right:10px;
        box-shadow: 6px 1px 12px 1px rgba(0,0,0,0.2);
        border-radius: 10px;
        padding: 10px 10px;

        &::placeholder{
            height:100%;
            font-size: 13px;
        }
    }

    button{
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        box-shadow: 10px 1px 12px 1px rgba(0,0,0,0.2);
        cursor: pointer;  
        margin-left: 20px;
        max-height: 40px;
        color:white;
        background-color: #64c4ed;
        font-size:14px;
        
        &:hover{
            
            background-color: #494ca2;
        }
    }
    
    select{
        margin-left:20px;
        box-shadow: 10px 1px 12px 1px rgba(0,0,0,0.2);
        border-radius: 10px;
        padding: 0px 10px;
        max-height: 40px;
        cursor: pointer;

        &:focus{
            border: 1px solid rgba(0,0,0,0.3);
        }
    }
    
`