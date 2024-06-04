"use client"

import {useEffect, useState} from "react";
import useSWR from "swr";

const DashBoard = () => {
    // const [data, setData] = useState([])
    // const [err, setErr] = useState<boolean>(false)
    // const [loading, setLoading] = useState<boolean>(false)
    // const getDate = async () => {
    //     setLoading(true)
    //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //         cache: "no-cache"
    //     })
    //     if (!res.ok) setErr(true)
    //     const data = await res.json()
    //     console.log(data);
    //     setData(data)
    //     setLoading(false)
    // }
    //
    // useEffect(() => {
    //     getDate()
    // }, []);

    const fetcher = (...args) => fetch(...args).then((res) => res.json())

    const { data, mutate, error, isLoading } = useSWR(
        // `/api/posts?username=${session?.data?.user.name}`,
        'https://jsonplaceholder.typicode.com/posts',
        fetcher
    )
    console.log(data);

    return (
        <div>dashboard</div>
    )
}

export default DashBoard