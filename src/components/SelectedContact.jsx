import React from 'react';

export default function selectedContact() {
const response = await fetch(`${API_URL}/${selectedContactId}`);
const result = await response.json();

    return (

    )
}