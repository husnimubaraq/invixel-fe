import { QueryClient, QueryClientProvider, QueryCache } from "@tanstack/react-query";
import Toast from 'react-native-toast-message';

export default function Provider({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient({
        queryCache: new QueryCache({
            onError: (error: any) => {
                console.log('error: ', error.response.status)
                
            },
        }),
    });

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <Toast />
        </QueryClientProvider>
    )
}