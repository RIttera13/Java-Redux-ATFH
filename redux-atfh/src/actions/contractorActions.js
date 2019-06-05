import axios from "axios";
import { GET_ERRORS, GET_CONTRACTORS, DELETE_CONTRACTOR, GET_CONTRACTOR } from "./types"

export const addContractor = (contractor, history) => async dispatch => {
    await axios.post("http://localhost:8080/api/contractors", contractor);
    history.push("/");
};

export const getContractors = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/contractors/all")
    dispatch({
        type: GET_CONTRACTORS,
        payload: res.data
    })
};

export const deleteContractor = contractor_id => async dispatch => {
    if(window.confirm(`Are you sure you want to delete ${contractor_id}?`)) {
        await axios.delete(`http://localhost:8080/api/contractors/${contractor_id}`);
        dispatch({
            type: DELETE_CONTRACTOR,
            payload: contractor_id
        });
    }
};

export const getContractor = (contractor_id, history) => async dispatch => {
    const res = await axios.get(`http://localhost:8080/api/contractors/${contractor_id}`);
    dispatch({
        type: GET_CONTRACTOR,
        payload: res.data
    });
};