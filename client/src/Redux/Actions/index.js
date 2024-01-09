import {POST_DOG,GET_DOGS,FILTER_NAME, PAGINATE, GET_ONE_DOG,LOADING_DETAILS,LOADING_DOGS,CLOSE_FILTER, GET_TYPES} from "./actions-types"
import axios from "axios"


export function postDog(info){
    return async function (dispatch) {
        try {
            await axios.post('http://localhost:3001/dog',info)
            alert('usuario creado correctamente')
            dispatch({
                type:POST_DOG,
                payload: 'ok'
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export function getDogs(){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/dogs")
            dispatch({
                type:GET_DOGS,
                payload: response.data,
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export function dogsPage(info){
    return {
            type:PAGINATE,
            payload:info,
        }
    }

export function filterName(name){
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/dogs?name=${name}`)
            dispatch({
                type:FILTER_NAME,
                payload:response.data,
            })
        } catch (error) {
            alert(error.message)
        }
    }
}
export function getOneDog(id){
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/dogs/${id}`)
            dispatch({
                type: GET_ONE_DOG,
                payload:response.data
            })
        }
        catch(error){
            alert(error.message)
        }
    }
}

export function loadingDetails(value){
    return {
            type:LOADING_DETAILS,
            payload: value
    }
}

export function loadingDogs(value){
    return{
        type:LOADING_DOGS,
        payload:value
    }
}

export function closeFilter(){
    return{
        type:CLOSE_FILTER,
        payload: false
    }
}

export function getTypes(){
    return async function(dispatch){
        try {
            let response = (await axios.get('http://localhost:3001/types'))
        response = response.data.sort(function (a, b) {
            return a.name.localeCompare(b.name);})
            dispatch({
                type: GET_TYPES,
                payload: response
            })
            
        } catch (error) {
            alert(error.message)
        }
    }
}