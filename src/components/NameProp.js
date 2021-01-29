// Props
// Short for properties
// Parameters of a component function that get passed into the component to aid in its reuseability.
// Dynamic data can be assigned to child components.

// import React from 'react';

const NameProp = (props) => { // property returning React element
    return <h1>Hello,{ props.name }</h1>
}

export default NameProp;

// Create a component named Contacts
// Pass name, age, school, graduationYear props into it
// Return an h3 with name, and a p with remaining information