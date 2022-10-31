import axiosClient from "./axiosClient";

const END_POINT = {
   LOGIN: 'Login',
   REGISTER: "Register"
}

export const create_account_api = (newAccount) => {
    return axiosClient.post(`${END_POINT.REGISTER}`,newAccount);
}
export const login_account_api = (account) => {
    return axiosClient.post(`${END_POINT.LOGIN}`,account);
}