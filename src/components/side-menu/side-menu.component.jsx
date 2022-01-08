import React from 'react';

import './side-menu.styles.scss';

import {ReactComponent as Logo} from '../../assets/_logo/the-godfather.svg';

class SideMenu extends React.Component{
    
    render(){

        if(this.props.state.selectedEmployee!=='')
        {
            var selected_employee_index = this.props.state.employees.findIndex((employee)=>{
                return this.props.state.selectedEmployee===employee.name
              })
            
            var selected_employee = this.props.state.employees[selected_employee_index];
    
            console.log('selected_emp', selected_employee);
            var collegues_array = selected_employee.colleagues;
    
            console.log('collegues', collegues_array);
        }

        return (
            <div className='side-menu'>
                <div className='logo'>
                    <Logo/>
                </div>
                <div className='employee-list'>

                    <ul>
                        {

                            this.props.state.employees.map((employee, index)=>{

                                /*font size of li will be acaled between 30px and 15px */
                                const popularity = employee.popularity;
                                const fontSize = ((popularity-1)/4)*(15)+15;

                                var highlight = 'no-highlight';

                                if(employee.name===this.props.state.selectedEmployee)
                                {
                                    highlight = 'highlight';
                                }
                                else if(collegues_array && collegues_array.includes(employee.name))
                                {
                                    highlight = 'highlight';
                                }

                                return (<li onClick={()=>this.props.handler(employee.name)} style={{fontSize:fontSize+'px'}} key={employee.name} className={employee.popularity, highlight}>{employee.name}</li>)
                            })
                        }
                    </ul>
        
                </div>
            </div>
        
        )
    }
}

export default SideMenu;