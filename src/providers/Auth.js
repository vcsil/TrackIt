import React, { useState } from "react";

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

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
};