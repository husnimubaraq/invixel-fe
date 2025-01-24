import { useContext, createContext, type PropsWithChildren, useEffect, useState } from 'react';
import { useStorageState } from './use-storage-state';
import { router } from 'expo-router';
import { jwtDecode } from "jwt-decode";
// import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import "core-js/stable/atob";
import { TAuth } from '@/types/auth';
import { Platform } from 'react-native';

const AuthContext = createContext<{
    signIn: (token: string) => void;
    signOut: () => void;
    session?: string | null;
    isLoading: boolean;
    auth?: TAuth
}>({
    signIn: () => null,
    signOut: () => null,
    session: null,
    isLoading: false,
    auth: undefined
});

// This hook can be used to access the user info.
export function useSession() {
    const value = useContext(AuthContext);
    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error('useSession must be wrapped in a <SessionProvider />');
        }
    }

    return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState('session');

    const [auth, setAuth] = useState<TAuth | undefined>(undefined)

    const getUser = async () => {

        if (Platform.OS === "web") {
            try {
                if (typeof localStorage !== 'undefined') {
                    const token = localStorage.getItem('session')
                    
                    if(token){
                        const user = jwtDecode(token ?? '', {
                            header: false,
                        }) as TAuth;
    
                        setAuth(user)
                    }
                }
            } catch (e) {
                console.error('Local storage is unavailable:', e);
            }
        }
        if (Platform.OS === "ios" || Platform.OS === "android") {
            const token = await AsyncStorage.getItem('session')

            if(token){
                const user = jwtDecode(token ?? '', {
                    header: false,
                }) as TAuth;

                setAuth(user)
            }
        }
    }

    useEffect(() => {
        getUser()
    }, [isLoading, session])

    return (
        <AuthContext.Provider
            value={{
                signIn: (token: string) => {
                    console.log('token: ', token)
                    setSession(token);
                    router.replace('/admin')
                },
                signOut: () => {
                    setSession(null);
                    setAuth(undefined)
                    router.dismissAll()
                    router.replace('/admin/login')
                },
                session,
                isLoading,
                auth
            }}>
            {children}
        </AuthContext.Provider>
    );
}