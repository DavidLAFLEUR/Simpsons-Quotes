import { useState, useEffect } from 'react';
import axios from 'axios';


export const useAxios = ( url, change ) => {
    const [state, setState] = useState({ data: null, loaded: false, error: null });

    useEffect( () => {

        setState({ data: null,  loaded: false, error: null });

        axios
        .get(url)
        // Extract the DATA from the received response
        .then((response) => response.data)
        // Use this data to update the state
        .then( data => {
            setState({
                loaded: true,
                error: null,
                data
            });
        

    });

    },[change])

    return state;
}
