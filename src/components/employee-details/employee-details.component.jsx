import React from 'react';

import './employee-details.styles.scss';

import Form from 'react-bootstrap/Form';

import { Row, Col } from 'react-bootstrap';

const EmployeeDetails  = (props) => {

    console.log('props employees',props.state.employees);

    console.log('selected',props.state.selectedEmployee);

    var selected = {name:''};

    console.log('selected',selected.name);

    if(props.state.selectedEmployee!=='')
    {
        selected = props.state.employees.find((employee)=>{
            return employee.name===props.state.selectedEmployee
        })

        return (
            <div className='employee-details'>
               <div className='employee-details-box'>
                    
                    <div className='name'><h1>{selected.name}</h1></div>
                    
                    <Row>
                        <Col lg={12} xl={2}><h3>Popularity</h3></Col>
                        <Col lg={12} xl={10}>
                            <div className='range'>
                                <Form.Range
                                min={1}
                                max={5}
                                value = {selected.popularity}
                                onChange={changeEvent => {
                                    props.popularityChanger(selected.name, changeEvent.target.value);
                                    console.log('range val: ',changeEvent.target.value);
                                }} 
                                className='popularity-slider'/>
                            </div>
                        </Col>
                    </Row>
                    
                    <p>{selected.biography}</p>
                    <img alt={selected.image} src={require('./images/' + selected.image)} />
                </div>        
            </div>
        )
    }
    else
    {
        return (
            <div className='employee-details'>
               <div className='employee-details-box'>
                    Select an employee.
                </div>        
            </div>
        )
    }
    
};

export default EmployeeDetails;