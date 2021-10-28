// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "http://localhost:3000/";

const clientId = "f6485ae4bbb648c4978faadf20eac0fe";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const getTokenFromUrl = () =>{
    return window.location.hash.substring(1).split('&')
    .reduce((initial,item) => {
        // http://localhost:3000/#access_token=BQDfB0cqJvo432daWBJ0QLdLijRxs4rnjA3_e-4lDtNn1z9QPeWDBQWbfc25tPbiex60GjKhKlNDjy0I2RgCHsMm77bI8NBsOAbZSQ6Gk6ryNwpnmjtzQsBzVHv9tlw7X5F03H8ZYKsS6e-nPkYou3oGD0aKK2B18nsTrOZnECzXWPoL&token_type=Bearer&expires_in=3600
        // access_token=BQDfB0cqJvo432daWBJ0QLdLijRxs4rnjA3_e-4lDtNn1z9QPeWDBQWbfc25tPbiex60GjKhKlNDjy0I2RgCHsMm77bI8NBsOAbZSQ6Gk6ryNwpnmjtzQsBzVHv9tlw7X5F03H8ZYKsS6e-nPkYou3oGD0aKK2B18nsTrOZnECzXWPoL
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;