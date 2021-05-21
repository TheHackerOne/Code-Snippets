import React, { useEffect, useState } from 'react';
import './App.css'
import Highlight from './Highlight';
import InputBar from './InputBar';
import styled from 'styled-components'
import db from './firebase';

function App() {
  const [snips, setSnips] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  
  const getSpecificData = (e) => {
    let singleLanguage = [];
    snips.forEach((snip) => {
      if(e.target.value == 'All'){
        singleLanguage.push({
          language: snip.language,
          snip: snip.snip,
          heading: snip.heading,
        });
      }
      else if(e.target.value == snip.language )
        singleLanguage.push({
          language: snip.language,
          snip: snip.snip,
          heading: snip.heading,
        });
    })
    
    setDisplayData(singleLanguage);
  }

  const addNewSnip = (e, snip, language, heading) => {
    e.preventDefault();
    db.collection('codeSnippets').add({
      language: language,
      snip: snip,
      heading: heading,
    })
  }

  useEffect(() => {

    db.collection('codeSnippets').get()
    .then((snapshot) => {
      let snipsFromDb = [];
      snapshot.docs.forEach(doc => {
        const snip = {
          language:doc.data().language ,
          snip: doc.data().snip,
          heading: doc.data().heading,
        }
        snipsFromDb.push(snip)
      })
      console.log("snips from the database -> ",snipsFromDb)
      setSnips(snipsFromDb);
      setDisplayData(snipsFromDb);
    })
    .catch(error => console.log(error))
}, [])

  
  return (
    <div className="App">
      <Heading><h1>Code Snippets </h1></Heading>      
      <InputBar addNewSnip={addNewSnip} getSpecificData={getSpecificData}/>
      { displayData.length !== 0 ? displayData.map((obj, i) => {
        return (
          <>
          <HeadSnippet><h1>{obj.heading}</h1></HeadSnippet>
          <Highlight key={i} coder={obj.snip}/>
          </>
        )
      }) : null}
    </div>
  );
}

export default App;

const Heading = styled.div`
  width: 100vw;
  text-align:center;

  h1{
    color: rgba(0,0,0,0.6)
  }
`

const HeadSnippet = styled.div`
  width: 70%;
  margin: auto;
  text-align:left;

  h1{
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
  }
`
