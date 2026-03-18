
import React, { useEffect, useState } from 'react'
import "./App.css"

const App = () => {
    const [clients, setClients] = useState([]);
    const [displayClients, setDisplayClients] = useState([]);
    const [searchClientText, setSearchClientText] = useState("");
    const url = "http://localhost:3000/clients"

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched Clients successfully!")
                setClients(data)
            })
    }, [])

    function buttonSearch() {
        setDisplayClients([])
        var tempSearchClient = searchClientText;
        setSearchClientText("");
        const filteredClient = clients.filter(c =>
            JSON.stringify(c).toLowerCase().includes(tempSearchClient.toLocaleLowerCase())
        )
        setDisplayClients(filteredClient);
        console.log(displayClients);
    }

    const [clientId, setClientId] = useState("")
    const [clientAge, setClientAge] = useState("")
    const [clientName, setClientName] = useState("")
    const [clientGender, setClientGender] = useState("")
    const [clientCompany, setClientCompany] = useState("")
    const [clientEmail, setClientEmail] = useState("")
    const [clientPhone, setClientPhone] = useState("")
    const [clientAddress, setClientAddress] = useState("")

    return(
        <>
            Look up client:
            <input type="text" 
                placeholder="Enter client's details here!"
                value = {searchClientText}
                onChange={(e) => setSearchClientText(e.target.value)}
            /> 

            <button onClick={buttonSearch}>
                Search
            </button>

            {displayClients.map((displayClient, index) => (
                <div key={displayClient.id}>
                    <h1>Client #{index + 1}:</h1>
                    <p>Client's name: {displayClient.name}</p>
                    <p>Client's gender: {displayClient.gender}</p>
                    <p>Client's age: {displayClient.age}</p>
                </div>
            ))}

            <div>
                Add a client:
                    <br />
                id: <input type="text" 
                    placeholder="Enter client's id"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                    /> 
                    <br />
                age: <input type="number" 
                    placeholder="Enter client's age"
                    value={clientAge}
                    onChange={(e) => setClientAge(e.target.value)}
                    /> 
                    <br />
                name: <input type="text" 
                    placeholder="Enter client's name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    /> 
                    <br />
                gender: <input type="text" 
                    placeholder="Enter client's gender"
                    value={clientGender}
                    onChange={(e) => setClientGender(e.target.value)}
                    /> 
                    <br />
                company: <input type="text" 
                    placeholder="Enter client's company"
                    value={clientCompany}
                    onChange={(e) => setClientCompany(e.target.value)}
                    /> 
                    <br />
                email: <input type="text" 
                    placeholder="Enter client's email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    /> 
                    <br />
                phone: <input type="text" 
                    placeholder="Enter client's phone"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    /> 
                    <br />
                address: <input type="text" 
                    placeholder="Enter client's address"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                    /> 
                    <br />
                <button>Add</button>

            </div>
        </>
    )
}

export default App
