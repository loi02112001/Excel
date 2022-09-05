// domain
export const DOMAIN = "http://localhost:3001/item";
// export const DOMAIN = "https://f32531d8ff9a.ngrok.io";
export const LIMIT = 10;

// HTTP method 
export const HTTP_READ = "GET"
export const HTTP_CREATE = "POST"
export const HTTP_UPDATE = "PUT"
export const HTTP_DELETE = "DELETE"

// HTTP headers
export const HTTP_HEADER_JSON = {"Content-Type": "Application/json"}

// types of actions
export const GET_ITEM_REQUEST = 'GET_ITEM_REQUEST'
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS'
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE'

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST'
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS'
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE'

export const ADD_EXCEL_REQUEST = 'ADD_EXCEL_REQUEST'
export const ADD_EXCEL_SUCCESS = 'ADD_EXCEL_SUCCESS'
export const ADD_EXCEL_FAILURE = 'ADD_EXCEL_FAILURE'

export const DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST'
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS'
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE'

export const UPDATE_ITEM_REQUEST = 'UPDATE_ITEM_REQUEST'
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS'
export const UPDATE_ITEM_FAILURE = 'UPDATE_ITEM_FAILURE'