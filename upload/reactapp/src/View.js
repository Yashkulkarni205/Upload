import React, { useState } from 'react'
import axios from 'axios'

const View = () =>{
    const[uploadlist,setuploadlist] = useState()
    
    const deleteupload = async (pk) =>
    {
        const data = await axios.get(`http://127.0.0.1:8000/delete/${pk}`);
        console.log(data);
    }
    
    const view = async () =>
    {
        const response = await axios.get("http://127.0.0.1:8000/view/");
        setuploadlist(response.data.map((val,i) => 
        {
            return <li key={i}>
                {response.data[i]['fields']['upload_file'].substr(0,40)}
                <a id="download-btn" href={`http://127.0.0.1:8000/media/${response.data[i]['fields']['upload_file']}`} target="_blank" download="download">Download</a>
                <button id="delete-btn" onClick={(e) => deleteupload(response.data[i]['pk'])}>Delete</button>
                </li>
        })
        )
    }

    view();

    return <div id="view-div">
        <div style={{ textAlign: `center` }}><h1>Uploaded Files</h1></div>
        <ul>
            {uploadlist}
        </ul>
    </div>
}

export default View