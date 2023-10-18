import client from "@/config/apollo"
import {ApolloProvider} from "@apollo/client"

const MyApp  = ({Component,pageProps})=> {
    return (
    <ApolloProvider client={client}>
        <Component {...pageProps}/>
    </ApolloProvider>
    )
}

export default MyApp