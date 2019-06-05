import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { getContractors } from "../actions/contractorActions";
import { deleteContractor } from "../actions/contractorActions";

class Contractors extends Component {
    componentDidMount(){
        this.props.getContractors();
    }
    onDelete(contractor_id){
        this.props.deleteContractor(contractor_id);
    }
    render() {
        const { contractors } = this.props.contractors;

        let ContractorContent;
        let contractorList = [];

        const ContractorAlgorithm = conractors => {
            if(contractors.length < 1) {
                return (
                    <div className="alert alert-info text-center" role="alert">
                        No Contractors
                    </div>
                );
            } else {
                for (let i = 0 ; i < contractors.length; i++) {
                    contractorList.push(
                        <tr className={classnames("staffing-list-font-inactive", {
                            "staffing-list-font-inactive": contractors[i].status === "Inactive"
                        })}>
                            <td className="col col-md-auto">
                                <p className="text-center">{contractors[i].firstname}</p>
                            </td>
                            <td className="col col-md-auto">
                                <p className="text-center">{contractors[i].lastname}</p>
                            </td>
                            <td className="col col-md-auto">
                                <p className="text-center">{contractors[i].role}</p>
                            </td>
                            <td className="col col-md-auto">
                                <p className="text-center">{contractors[i].address}</p>
                            </td>
                            <td className="col col-md-auto">
                                <p className="text-center">{contractors[i].status}</p>
                            </td>
                            <td className="col col-md-auto">
                                <p className="text-center">{contractors[i].email}</p>
                            </td>
                            <td className="col col-md-auto">
                                <Link to={`updateContractor/${contractors[i].id}`} className="btn btn-warning ml-4">
                                    <i className="fa fa-pencil-square"> Edit</i>
                                </Link>
                            </td>
                            <td className="col col-md-auto">
                                <button 
                                className="btn btn-danger ml-4"
                                onClick={this.onDelete.bind(this, contractors[i].id)}>
                                    <i className="fa fa-times-circle"> Delete</i>
                                </button>
                            </td>
                        </tr>
                    );
                }
                return(
                    <React.Fragment>
                        <div className="text-center scroll">
                            <table className="table table-fixed table-bordered">
                                <thead>
                                    <tr className='text-center'>
                                    <th className="text-center">Firstname</th>
                                    <th className="text-center">Lastname</th>
                                    <th className="text-center">Role</th>
                                    <th className="text-center">Address</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Email</th>
                                    <th className="text-center">Edit User</th>
                                    <th className="text-center">De-Activate User</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contractorList}
                                </tbody>
                            </table>
                        </div>
                    </React.Fragment>
                )
            }
         };

        ContractorContent = ContractorAlgorithm(contractors);
         
        return (
            <div>
                <div className="container">
                    <Link to="/addContractor" className="btn btn-primary mb-3">
                        <i className="fa fa-plus-circle"> Add New Contractor</i>
                    </Link>
                </div>
                <br/>
                <br/>
                {ContractorContent}
            </div>
        )
    }
};

Contractors.propTypes = {
    getContractors: PropTypes.func.isRequired,
    contractors: PropTypes.object.isRequired,
    deleteContractor: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    contractors: state.contractors
});

export default connect(
    mapStateToProps,
    {getContractors, deleteContractor}
) (Contractors);