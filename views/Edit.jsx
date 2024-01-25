import React from 'react';

export default function Index( {logs, i } ) {
    return (
        <div>
            <h1> Edit Log </h1>
            <form action = {`/logs/${logs?._id}?_method=PUT`} method = "POST"> 
            Title: <input type = 'text' name = 'title' value = {logs?.title} />
            <br/><br/>
            Entry: <input type = 'textarea' name = 'entry' value = {logs?.entry} />
            <br/> <br/>
            Is Ship Broken: <input type = 'checkbox' name = 'shipIsBroken' checked = {logs?.shipIsBroken} />
            <br/><br/>
            <input type = 'Update' name = '' value = 'Update Log' />
            </form>
        </div>
    )
}