import axios from "axios";

export const getComic = () => {
    return axios
    .post("/home",(comics)=>{
    })
    .then(res=>{
        var comics = res.data;
        return comics;
    })
}