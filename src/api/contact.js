import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:3006/",
    // baseURL: "http://localhost/goldennumbers/wp-json/wp/v2",
    // baseURL: "https://my-json-server.typicode.com/typicode/demo",
});