import { useRouter } from 'next/router';
import { useAuth } from '../app/context/AuthContext';

const useAuthWithRouting = () =>
{
    const router = useRouter();
    const authContext = useAuth();

    const login = async (email, password) =>
    {
        await authContext.login(email, password);
        if (authContext.user)
        {
            router.push('/');
        }
    };

    const signup = async (email, password) =>
    {
        await authContext.signup(email, password);
        if (authContext.user)
        {
            router.push('/');
        }
    };

    const logout = () =>
    {
        authContext.logout();
        router.push('/login');
    };

    return {
        ...authContext,
        login,
        signup,
        logout,
    };
};

export default useAuthWithRouting;
