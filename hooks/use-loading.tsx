import { useEffect, useState } from "react"

export const useLoading = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return { loading, setLoading }
}