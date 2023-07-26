export const AppConstants = {
    SCHEMA:{
        NOTE_SCHEMA : 'notes' ,
        USER_SCHEMA : 'users' ,
        ROLE_SCHEMA : 'roles' ,
        PERMISSION_SCHEMA : 'permissions'
    },
    STATUS_CODE:{
        SUCCESS: 200,
        SERVER_ERROR: 500,
        UNAUTHORIZED: 401,
        RESOURCE_NOT_FOUND : 404
    },
    ROUTES:{
        NOTES:{
            ADD: '/add-notes',
            GET_ALL_NOTES: '/all-notes',
            DELETE_ONE : '/delete-note',
            UPDATE_ONE : '/update-note'
        },
        USERS:{
            REGISTER: '/register',
            DELETE: '/delete',
            VIEW_PROFILE: '/view-profile',
            UPDATE_USER: '/update-user'
        }
    }
}

export const NOTE_ROUTES = AppConstants.ROUTES.NOTES;
export const USER_ROUTES = AppConstants.ROUTES.USERS;
export const SCHEMA = AppConstants.SCHEMA;
export const STATUS_CODE = AppConstants.STATUS_CODE;