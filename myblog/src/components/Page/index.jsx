import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '../routes'



export default function Page() {
    const element = useRoutes(routes)
    return (
        <div>
            <div>
                {element}
            </div>

        </div>
    )
}
