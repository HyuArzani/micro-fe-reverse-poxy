import '@fortawesome/fontawesome-free/css/all.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './i18n';
import Routes from './routes';
import './static/styles/index.scss';
import React from 'react';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { refetchOnWindowFocus: false },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            ORDER
            <Routes />
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default App;
