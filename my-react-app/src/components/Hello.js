import React from 'react';

const Hello = (props) => 
{
    // return (
     //   <div>
     //<h1>Hello Abhishek</h1>
     //</div>)
     return React.createElement(
        'div',
        {id: 'hello',className: 'hello'},
        React.createElement('h1',null,'HELLO abhishek'));
}

export default Hello;