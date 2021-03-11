import React, { Component, useState } from 'react'
import axios from 'axios'

const Upload = () => {
        const [percent,setpercent] = useState()

        const fakeinput = () =>
        {
            document.getElementById("file").click();
            document.getElementById("file").addEventListener('change' ,()=>
            {
                if(document.getElementById("file").value)
                {
                    document.getElementById("faketext").innerHTML = document.getElementById("file").value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1].substr(0,30);
                }
            }
            )
        }

        const upload = async (e) =>
        {
            e.preventDefault();
            const file = document.getElementById("file").files[0];

            if(file)
            {
                var progressbox = document.getElementById("progress-box");
                progressbox.style.display = 'block';

                var progresspercent = document.getElementById("progress-percent");
                progresspercent.style.display = 'block';

                var success = document.getElementById("success");
                success.style.display = 'none';

                var btn = document.getElementById("btn");
                btn.style.display = "none";

                const formData = new FormData();
                formData.append('file',file);
                
                try{
                    const response = await axios.post('http://127.0.0.1:8000/upload/',formData,{
                        headers:{
                            'Content-Type':'multipart/form-data'
                        },
                        onUploadProgress: ProgressEvent=>{
                            var percentage = parseInt((ProgressEvent.loaded/ProgressEvent.total)*100);
                            if(percentage<100)
                            {
                                setpercent(percentage);
                            }
                            else
                            {
                                progressbox.style.display = 'none'
                                progresspercent.style.display = 'none';
                                success.style.display = 'block';
                                btn.style.display = "block";
                                setpercent(0);
                            }
                        }
                    })
                }
                catch(er)
                {
                    console.log(e);
                }
            }
            
        }

        return (
            <div id="upload-div">
                <h1>Upload A File</h1>
                <input type="file" id="file" hidden="hidden"/>
                <button id="fakebtn" onClick={fakeinput}>Choose A File</button>
                <span id="faketext">No File Choosen</span>
                <div id="progress-box">
                    <div id="progress-value" style={{ width: `${percent}%` }}></div>
                </div>
                <span id="progress-percent">
                Uploaded : {percent}%
                </span>
                <span id="success">
                    File Successfully Uploaded!!!
                </span>
                <button id="btn" onClick={upload}>Upload</button>
            </div>
            )
        }
    

export default Upload;