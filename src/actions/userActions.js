import { LOGOUT, UPDATE_USER_INFO} from './types';



export const logout = () => {
    return {
        type: LOGOUT,
    };

};

export const updateUserInfo = (object) => {
    return {
        type: UPDATE_USER_INFO,
        payload: object,
    };
};


