import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addContractor } from "../../actions/contractorActions";
import classnames from "classnames";

class AddContractor extends Component {
    constructor(){
        super()
        this.state = {
            firstname: "",
            lastname: "",
            role: "Athletic Trainer",
            address: "",
            status: "Active",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    onSubmit(event){
        event.preventDefault()
        const newContractor = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            role: this.state.role,
            address: this.state.address,
            email: this.state.email,
            status: this.state.status
        };
        this.props.addContractor(newContractor, this.props.history);  
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/Contractors" className="btn btn-light">
                                Back to Contractors
                            </Link>
                            <h4 className='display-4 text-center'>Add Contractor</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg", {
                                        "is-invalid": errors.firstname
                                    })}
                                    name="firstname" 
                                    value={this.state.firstname} 
                                    placeholder="Firstname" 
                                    onChange={this.onChange}
                                    />
                                    <p>{errors.firstname}</p>
                                </div>
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg", {
                                        "is-invalid": errors.lastname
                                    })}                                    
                                    name="lastname" 
                                    value={this.state.lastname}
                                    placeholder="Lastname" 
                                    onChange={this.onChange}
                                    />
                                    <p>{errors.lastname}</p>
                                </div>
                                <div className="form-group">
                                    <select 
                                    className={classnames("form-control form-control-lg", {
                                        "is-invalid": errors.role
                                    })}                                    
                                    name="role"
                                    value={this.state.role}
                                    onChange={this.onChange}
                                    >
                                        <option value="Athletic Trainer">Athletic Trainer</option>
                                        <option value="EMT">EMT</option>
                                        <option value="Paramedic">Paramedic</option>
                                        <option value="Physician">Physician</option>
                                        <option value="Nurse">Nurse</option>
                                        <option value="Physician Assistant">Physician Assistant</option>
                                    </select>  
                                    <p>{errors.role}</p>  
                                </div>
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg", {
                                        "is-invalid": errors.address
                                    })}                                    
                                    name="address" 
                                    value={this.state.address}
                                    placeholder="Address" 
                                    onChange={this.onChange}
                                    />
                                    <p>{errors.address}</p>
                                </div> 
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg", {
                                        "is-invalid": errors.email
                                    })}                                    
                                    name="email" 
                                    value={this.state.email}
                                    placeholder="Email" 
                                    onChange={this.onChange}
                                    />
                                    <p>{errors.email}</p>
                                </div> 
                                <div className="form-group">
                                    <select 
                                    className={classnames("form-control form-control-lg", {
                                        "is-invalid": errors.status
                                    })}                                    
                                    name="status"
                                    value={this.state.status}
                                    onChange={this.onChange}
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                    <p>{errors.status}</p>
                                </div>
                                <input type="submit" className="btn btn-success btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

AddContractor.propTypes = {
    addContractor: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});


export default connect(mapStateToProps, {addContractor}) (AddContractor);
