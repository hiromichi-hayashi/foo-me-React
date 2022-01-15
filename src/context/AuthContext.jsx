// import {React, createContext, useEffect, useState } from 'react'
// import { getAuth, onAuthStateChanged} from "firebase/auth"

// export const AuthContext = createContext()

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState({ loading: true, data: null })
//   const auth = getAuth()

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (userState) => {
//       setUser({ loading: false, data: userState })
//     })
//     return () => {
//       unsubscribe()
//     }
//   }, [])
//   return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
// }
