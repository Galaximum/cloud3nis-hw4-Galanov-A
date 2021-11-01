import axios from "axios";

const baseURL = "http://localhost:3010/notes"

export const getNotes = async () => {
    const response = await axios.get(baseURL);
    return response.data;
}

export const updateNote = async (note) => {

    const url = baseURL + '/' + note.id;
    const response = await axios.put(url, note);
    return response.status;
}


export const postNote = async (note) => {
    const response = await axios.post(baseURL, note);
    return response.status;
}

export const deleteNote = async (id) => {
    const url = baseURL + '/' + id;
    const response = await axios.delete(url);
    return response.status;
}
