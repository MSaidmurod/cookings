import { useEffect, useState } from 'react'

export  function useFetch(url, method = "GET") {
    const [data, setData] = useState(null)
    const [isPending, setIspending] = useState(false)
    const [error, setError] = useState(null)
    const [postData, setPostData] = useState(null)

    const getPostData = (data) => {
        const config = {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
        setPostData(config)
     }


    useEffect((fetchPostData) => {
        const getData = async () => {
            setIspending(true)
            try {
                const req = await fetch(url, {...fetchPostData})
                if(!req.ok) {
                    throw new Error(req.statusText)
                }
                const data = await req.json()
                setData(data)
                setIspending(false)
                setError(null)
            }
            catch(err) {
                setIspending(false)
                setError(err.message)
            }
        }
        if (method == "GET") {
            getData()
        }

        if(method == "POST" && postData) {
            getData(postData)
        }
        getData()
    }, [url, method, postData])

  return {data, isPending, error, getPostData}
}


