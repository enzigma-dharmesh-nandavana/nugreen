export enum HttpMethod {
    get = "get",
    post = "post",
    put = "put",
    delete = "delete",
    head = "head"
}
export enum StatusCode {
    success = 200,
    serverError = 500,
    invalidSeassion = 401,
    notFound = 404,
    badRequest = 400,
    created = 201,
    pending = 202,
    noContent = 204,
    insufficientAccess = 403,
    loginTimeout = 440
}
export enum Position {
    top = 'top',
    middle = 'middle',
    bottom = 'bottom'
}
export enum Color {
    danger = 'danger',
    warning = 'warning',
    success = 'success',
    tertiary = 'tertiary',
    secondary = 'secondary',
    primary = 'primary',
    dark = 'dark'
}
export enum SpinnerType {
    Lines = "lines",
    Circles = "circles",
    Dots = "dots",
    Crescent = "crescent",
    Bubbles = "bubbles",
    LinesSmall = "lines-small",
    LinesSharp = "lines-sharp",
    LinesVertical = "lines-vertical",
    LinesHorizontal = "lines-horizontal",
    LinesRipple = "lines-ripple",
}
export enum operationTypes {
    LOGIN = 'login',
    REGISTER = 'register'
}