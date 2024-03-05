"use client"

import { useEffect } from 'react'

export default function ResultsDiagnosisIdPage({ params }: { params: { id: string } }) {
    const id = params.id

    return (
        <>
            <h1>
                {id}
            </h1>
        </>
    )
}