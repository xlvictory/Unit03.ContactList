import React from 'react';
import { useState, useEffect } from 'react';

export default async function selectedContact() {
    const [contact, setContact] = useState(null);
    const response = await fetch(`${API_URL}/${selectedContactId}`);
    const result = await response.json();

    useEffect(() => {
        fetch(`${API_URL}/${selectedContactId}`)
    }, []);
    return (
        <div></div>
    )
}
