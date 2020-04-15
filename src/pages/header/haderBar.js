import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'

const HeaderBar = (props) => {

    const onChangeOfCountryCode = (e) => {
        if(e.target.value.length <= 3) {
            props.setCountry3code(e.target.value.toUpperCase());
        } else if(e.target.value.length === 0) {
            props.setCountry3code(e.target.value);
        }
    }

    const fetchDtls = () => {
        alert('hi');
    }

    return (
        <div className="header-bar">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Covid19 Update</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Form inline>
                <FormControl sizetype="text" value={props.country3code} placeholder="Country Code" className="mr-sm-2" onChange={onChangeOfCountryCode}/>
                <Button variant="outline-info" onClick={fetchDtls} disabled={props.country3code.length !== 3}>Fetch Details</Button>
                </Form>
            </Navbar>
        </div>
        
    )
}

export default HeaderBar;