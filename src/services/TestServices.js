const baseurl = "ana base url gideceği url"
const client = {post: "axios interceptor olacak"}

const defaultUrl = "/test"

const TestService = {
    testService: (body) => {
        return client.post("BASEURL VARİABLE", `${defaultUrl}`, body)
    },
    testService2: (body) => {
        return client.post("BASEURL VARİABLE", `${defaultUrl}`, body)
    }
}

export default TestService;
