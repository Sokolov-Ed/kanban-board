const SET_LOGIN = 'SET_LOGIN';
const SET_LOGOUT = 'SET_LOGOUT';

let initialState = {
    accounts: [
        { idUser: 1, userName: "Соколов Е. О.", login: "e.o.sokolov", password: "123", isTeacher: false, isAdmin: true },
        { idUser: 2, userName: "Дужий В. Ю.", login: "v.y.dujiy", password: "12345", isTeacher: true, isAdmin: false },
        { idUser: 3, userName: "Куланов В. О.", login: "v.o.kulanov", password: "12345", isTeacher: true, isAdmin: false },
        { idUser: 4, userName: "Шостак А. В.", login: "a.v.shostack", password: "12345", isTeacher: true, isAdmin: false },
        { idUser: 5, userName: "Бабешко Є. В.", login: "e.v.babeshko", password: "12345", isTeacher: true, isAdmin: false },
        { idUser: 6, userName: "Колісник М. О.", login: "m.o.kolisnyk", password: "12345", isTeacher: true, isAdmin: false },
        { idUser: 7, userName: "Рудь І. В.", login: "i.v.rud", password: "1234567", isTeacher: false, isAdmin: false },
        { idUser: 8, userName: "Височин П. С.", login: "p.s.vysochin", password: "1234567", isTeacher: false, isAdmin: false },
        { idUser: 9, userName: "Садовой А. С.", login: "a.s.sadovoy", password: "1234567", isTeacher: false, isAdmin: false },
    ],
    authorized: {},
    isAuth: false,
    isError: false
}

const accountsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN: {
            let authorization = state.accounts.filter(f => f.login == action.login && f.password == action.password);
            authorization = authorization[0];
            if (authorization) {
                return {
                    ...state,
                    authorized: authorization,
                    isAuth: true,
                    isError: false
                }
            }
            else {
                return {
                    ...state,
                    authorized: {},
                    isAuth: false,
                    isError: true
                }
            }
        }
        case SET_LOGOUT:
            return {
                ...state,
                authorized: {},
                isAuth: false,
                isError: false
            }
        default:
            return state;
    }
}

export const login = (login, password) => ({
    type: SET_LOGIN,
    login,
    password
})
export const logout = () => ({
    type: SET_LOGOUT
})

export default accountsReducer;