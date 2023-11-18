import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import Router from './Copmonent/Router/Router';
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <QueryClientProvider client={queryClient}> 
<HelmetProvider>
<RouterProvider router={Router}/>
</HelmetProvider>
  </QueryClientProvider>
  
  </React.StrictMode>,
)
