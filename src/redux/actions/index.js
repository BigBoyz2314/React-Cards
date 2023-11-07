import axios from 'axios';
import { ADDNEW_TODO, GET_TODOS, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from './type';

const API_URI  = 'http://localhost:8000'

export const addNewTodo = (data) => async(dispatch) => {
    try {
        const res = await axios.post(`${API_URI}/todos`, { data });
        
        dispatch({ type: ADDNEW_TODO, payload: res.data });
    } 
    catch (error) {
        console.log('Error while calling addNewTodo API', error.message);
    }
}

export const getTodos = () => async(dispatch) => {
    try {
        const res = await axios.get(`${API_URI}/todos`);
        
        dispatch({ type: GET_TODOS, payload: res.data });
    }
    catch (error) {
        console.log('Error while calling getTodos API', error.message);
    }
}

export const toggleTodo = (id) => async(dispatch) => {
    try {
        const res = await axios.get(`${API_URI}/todos/${id}`);

        dispatch({ type: TOGGLE_TODO, payload: res.data });
    }
    catch (error) {
        console.log('Error while calling toggleTodo API', error.message);
    }
}

export const updateTodo = (id, data) => async(dispatch) => {
    try {
        const res = await axios.put(`${API_URI}/todos/${id}`, { data });

        dispatch({ type: UPDATE_TODO, payload: res.data });
    }
    catch (error) {
        console.log('Error while calling updateTodo API', error.message);
    }
}

export const deleteTodo = (id) => async(dispatch) => {
    try {
        const res = await axios.delete(`${API_URI}/todos/${id}`);

        dispatch({ type: DELETE_TODO, payload: res.data });
    }
    catch (error) {
        console.log('Error while calling deleteTodo API', error.message);
    }
}

export const toggleTab = (tab) => async(dispatch) => {
    try {
        dispatch({ type: TOGGLE_TAB, filter: tab });
    }
    catch (error) {
        console.log('Error while calling toggleTab API', error.message);
    }
}