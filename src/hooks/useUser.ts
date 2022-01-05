import {QueryHookOptions, useMutation, useQuery} from "@apollo/client";
import {curUserQuery} from "../graphql/queries/currentUser";
import {CurrentUser} from "../graphql/queries/__generated__/CurrentUser";
import {loginUserQuery} from "../graphql/mutations/login";
import {Login, LoginVariables} from "../graphql/mutations/__generated__/Login";
import {registerQuery} from "../graphql/mutations/register";
import {Register, RegisterVariables} from "../graphql/mutations/__generated__/Register";

export const useUser = (options?: QueryHookOptions) => useQuery<CurrentUser>(curUserQuery, options);

export const useLogin = () => {
    const {refetch} = useUser({
        errorPolicy: "ignore",
    });

    const [makeLogin, loginResults] = useMutation<Login, LoginVariables>(loginUserQuery, {
        onError: error => console.log(error)
    });

    const login = async (login: string, password: string) => {
        const results = await makeLogin({
            variables: {login, password},
        });
        localStorage.setItem('token', results.data?.tokenAuth?.token ?? '');
        await refetch();
        return results;
    };

    return {login, loginResults};
};

export const useRegister = () => {

    const [makeRegister, registerResults] = useMutation<Register, RegisterVariables>(registerQuery);

    const {login} = useLogin();

    const register = async (username: string, password: string, firstName: string) => {
        const results = await makeRegister({
            variables: {
                login: username, password, firstName
            }
        });
        if (!results.errors) {
            return await login(username, password);
        }
    };

    return {register, registerResults};
}

export const useLogout = () => {
    const {refetch} = useUser();

    const logout = async () => {
        localStorage.removeItem('token');
        await refetch();
    }

    return {logout};
}