import { atom } from "recoil";
import { Url } from "url";


type Playlist = {
    images:String,
    name: String,
    body: null,
    url: Url,
    play:String   
}


export const playlistState = atom({
    key: "playlistState",
    default: null
});

export const playlistIdState = atom({
    key: "playlistIdState",
    default: '429AhnPSHFmHsPrdLu1Zuj'
});

