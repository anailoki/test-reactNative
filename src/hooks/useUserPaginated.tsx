import { useEffect, useState } from "react";
import { usersApi } from '../api/usersApi';
import { User } from '../interfaces/userInterfaces';

export const useUserPaginated = () => {
    const [simpleUserList, setSimpleUserList] = useState<User []>([])
    const [isLoading, setIsLoading] = useState(true);
    const url = 'https://jsonplaceholder.typicode.com/users';

    const loadUsers = async() => {
        setIsLoading(true);
        const resp = await usersApi.get<User []>(url);
      
        setSimpleUserList(resp.data);
        setIsLoading(false);

    }

    useEffect(() => {
        loadUsers();
    }, [])

    return { isLoading, simpleUserList};
    
}