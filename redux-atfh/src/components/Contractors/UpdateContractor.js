import React, { Component } from 'react';
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from 'react-router-dom'; 
import PropTypes from "prop-types";
import { getContractor, addContractor } from "../../actions/contractorActions";

class UpdateContractor extends Component {

    constructor(){
        super()
        this.state = {
            id: "",
            firstname: "",
            lastname: "",
            role: "Athletic Trainer",
            address: "",
            email: "",
            status: "Active",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        const {
            id,
            firstname,
            lastname,
            role,
            address,
            email,
            status
        } = nextProps.contractor;

        this.setState({
            id,
            firstname,
            lastname,
            role,
            address,
            email,
            status
        });
    }

    onChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    onSubmit(event){
        event.preventDefault()
        const updateContractor = {
            id: this.state.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            role: this.state.role,
            address: this.state.address,
            email: this.state.email,
            status: this.state.status
        };
        this.props.addContractor(updateContractor, this.props.history);  
    }

    componentDidMount(){
        const {contractor_id} = this.props.match.params;
        this.props.getContractor(contractor_id);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/Contractors" className="btn btn-light">
                                Back to Contractors
                            </Link>
                            <h4 className='display-4 text-center'>Add/Update Contractor</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg")}
                                    name="firstname" 
                                    value={this.state.firstname} 
                                    placeholder="Firstname" 
                                    onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg")}                                   
                                    name="lastname" 
                                    value={this.state.lastname}
                                    placeholder="Lastname" 
                                    onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <select 
                                    className={classnames("form-control form-control-lg")}                                   
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
                                </div>
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg")}                                    
                                    name="address" 
                                    value={this.state.address}
                                    placeholder="Address" 
                                    onChange={this.onChange}
                                    />
                                </div> 
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg")}                                    
                                    name="email" 
                                    value={this.state.email}
                                    placeholder="Email" 
                                    onChange={this.onChange}
                                    />
                                </div> 
                                <div className="form-group">
                                    <select 
                                    className={classnames("form-control form-control-lg")}                                    
                                    name="status"
                                    value={this.state.status}
                                    onChange={this.onChange}
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>

                                </div>
                                <input type="submit" className="btn btn-success btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

UpdateContractor.propTypes = {
    contractor: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getContractor: PropTypes.func.isRequired,
    addContractor: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    contractor: state.contractors.contractor,
    errors: state.errors
});

export default connect(
    mapStateToProps, 
    { getContractor, addContractor }
)(UpdateContractor);
