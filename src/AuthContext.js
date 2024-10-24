import { createContext, useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {db} from "./FirebaseInit";
import { collection, doc, addDoc, onSnapshot } from "firebase/firestore";

export const authContext = createContext();

export function useAuthValue() {
    const value = useContext(authContext);
    return value;
}

export function AuthProvider({children}){

    const [userList, setUserList] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userLoggedIn, setUserLoggedIn] = useState(null);

    useEffect(()=>{
        const uunsub = onSnapshot(collection(db, "buybusy"), (snapshot) => {
            const users = snapshot.docs.map((doc)=>{
                return {
                    id:doc.id,
                    ...doc.data()
                }
            });
            setUserList(users);
        })
    }, [isLoggedIn]);


    async function createUser(data) {

        const index = userList.findIndex((user)=> user.email === data.email);

        if(index !== -1){
            toast.error("Email already exists. Please sign in.")
            return;
        }

        const docref = await addDoc(collection(db, "buybusy"), {
            name: data.name,
            email: data.email,
            password: data.password,
            cart:[],
            orders:[]
        });

        toast.success("New user has been added successfully. Please login to continue!")
        
    }

    function signIn(data){
        const index = userList.findIndex((user)=> user.email === data.email);

        if(index === -1){
            toast.error("Email does not exist. Please sign up.")
            return false;
        }

        if(userList[index].password === data.password){
            toast.success("Sign in successful!")
            setIsLoggedIn(true)
            setUserLoggedIn(userList[index])
            window.localStorage.setItem("token", true);
            window.localStorage.setItem("index",JSON.stringify(userList[index]));
            return true;
        }
        else{
            toast.error("Invalid password. Please try again");
            return false;
        }
    }

    function signOut(){
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("index");
        setIsLoggedIn(false);
        setUserLoggedIn(null);
        toast.success("Sign out successful!");
    }



    return (
        <authContext.Provider value={{createUser, signIn, signOut, isLoggedIn, setIsLoggedIn, userLoggedIn, setUserLoggedIn}}>
            <ToastContainer />
            {children}
        </authContext.Provider>
    )

}