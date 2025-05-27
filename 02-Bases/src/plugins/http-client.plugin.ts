import axios from 'axios'

export const httpClient = {

    get: async (url: string) => {
        const { data } = await axios.get(url);
        return data;
    },
    post: async (url: string , body: string) => { 
        throw new Error('Not implemented');
    },
    put: async (url: string, body: string) => { 
        throw new Error('Not implemented');
    },
    delete: async (url: string, body: string) => { 
        throw new Error('Not implemented');
    }

    // get: async(url) => {
    //     const response =  await fetch(url);
    //     const data =  await response.json();
    //     return data;
    // },

    // post: async(url, body) => {},
    // put: async(url, body) => {},
    // delete: async(url, body) => {}
};