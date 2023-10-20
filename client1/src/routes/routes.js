import {
    AUTH_ROUTE,
    REGISTRATION_ROUTE,
    ABOUT_ROUTE,
} from './consts.js'

import Authorization from '../components/authorization/authorization.jsx'
import Registration from '../components/registration/registration.jsx'

export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Authorization,
        title: 'Авторизация',
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration,
        title: 'Регистрация',
    }
]