import React from 'react';

export default function New () {
    return (
        <div>
            <form action = "/logs" method = "POST" >
                <br/> <br/>
                Title: <input type = "text" name = "title"/>
                <br/> <br/>
                Entry: <input type = "textarea" name = "entry" /> 
                <br/> <br/>
                shipIsBroken: <input type =  "checkbox" name = "shipIsBroken"/>
                <br/> <br/>
                <input type="submit" />
            </form>
        </div>
    )
}