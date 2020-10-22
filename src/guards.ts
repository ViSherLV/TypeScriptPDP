function guard(param: number | string) {
    if (typeof param === 'string') {
        return param.trim()
    }
    return param.toFixed(2)
}
//========

type ReponseType = 'success' | 'error' | 'one another'
function setResponseType(type: ReponseType): void {
    console.log(type)
}
setResponseType('success');
//setResponseType('errorka') - here we se error

//========
class successRepsonse {
    header = 'success'
    result = 'result'
    message: any
}

class errorResponse {
    header = 'error'
    message = 'Error here'
    error: any
}

function responseHandler(res: successRepsonse | errorResponse): object {
    if (res instanceof successRepsonse) {
        return {
            response: res.message
        }
    } else {
        return {
            response: res.error
        }
    }
}