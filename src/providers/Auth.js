import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    const [user, setUser] = useState({
        id: '',
        name: "",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/StadeFranceNationsLeague2018.jpg/800px-StadeFranceNationsLeague2018.jpg',
        token: '',
        done: 0,
        entrou: false
    })

    useEffect(() => {
        if (localStorage.getItem("usuario")) {
                const usuario = localStorage.getItem("usuario");
                const objetoUsuario = JSON.parse(usuario);
                setUser({...user, 
                        id: objetoUsuario.id,
                        name: objetoUsuario.name,
                        entrou: objetoUsuario.entrou,
                        image: objetoUsuario.image,
                        token: objetoUsuario.token});
            }
    }, [])

    

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
};