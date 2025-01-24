import LoginWrapper from '@/features/login/components/login-wrapper'
import { useSession } from '@/contexts/auth-context'
import { TLoginRequest } from '@/features/login/types/login'
import { useMutation } from '@tanstack/react-query'
import { loginRequest } from '@/features/login/apis/login'
import Toast from 'react-native-toast-message'
import { Redirect } from 'expo-router'
import { Loading } from '@/components/loading'

export default function LoginScreen() {

    const { signIn, isLoading, session } = useSession()

    const { mutate, isPending } = useMutation({
        mutationFn: (params: TLoginRequest) => loginRequest(params),
        onSuccess: async (response) => {
            console.log('response: ', response)
            if (response.status === 200) {
                signIn(response.data.token)
            } else {
                Toast.show({
                    type: 'error',
                    text1: response.data.message,
                });
            }
        },
        onError: (error: any) => {
            console.log('error: ', error)
            Toast.show({
                type: 'error',
                text1: error.response.data.message,
            });
        }
    })

    const onLogin = (data: TLoginRequest) => {
        mutate(data)
    }

    if (isLoading) {
        return <Loading />
    }

    if (session) {
        return <Redirect href="/admin" />;
    }

    return <LoginWrapper onLogin={onLogin} />
}