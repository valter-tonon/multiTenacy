import { App } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import {SnackbarProvider} from "notistack";

const el = document.getElementById('app')
render(
    <SnackbarProvider>
        <App
            initialPage={JSON.parse(el.dataset.page)}
            resolveComponent={name => require(`./Pages/${name}/index.js`).default}
        />
    </SnackbarProvider>
    ,
    el
)
