
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai
 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styled from 'styled-components'

function Highlight(props){
  return (
    <Container>
        <SyntaxHighlighter showInlineLineNumbers={true} language="javascript" style={monokai} >
      {props.coder}
    </SyntaxHighlighter>
    </Container>
  );
};

export default Highlight

const Container = styled.div`
    width: 70vw;
    margin: auto;

    pre{
        border-radius: 10px;
        padding: 30px 30px !important;
        // background-color:lightgray !important;
    }

    code{
      // background-color:white;
    }
`