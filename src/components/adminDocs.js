// - Font Style to Times
// - Routing image and gallery ID
// -  Docs highlight
// -  Single image view loading carousel

import React, { Component } from 'react';
import '../adminDocs.css';

class AdminDocs extends Component {

  render() {
    return(
      <div className="containerAdmin">
        <h1>TLS Shoots Website Docs</h1>
        <a href="#Development">Development Details</a><br/>
        <a href="#Admin">Admin Instructions</a><br/>
        <a href="#Developer">Developer</a>

        <a name="Development"></a>
        <h2>======Development Details======</h2>
        <h3>Tools</h3>
        <ul>
          <li>ReactJS (frontend)</li>
          <li>Ruby on Rails (backend)</li>
          <li>Express.JS (mailing API)</li>
          <li>AWS S3 (image storage)</li>
          <li>Github Pages (frontend hosting)</li>
          <li>Heroku (backend & mailing API hosting)</li>
          <li>GoDaddy (Domain hosting)</li>
        </ul>

        <a name="Admin"></a>
        <h2>======Admin Instructions======</h2>

        <h3>Upload New Album</h3>
        <ol>
          <li>Under Actions, Press "upload album"</li>
          <li>Under Album Editor, type in the desired album title</li>
          <li>Under Actions, Press "publish album" <br/>IMPORTANT: DO NOT CLOSE THE BROSWER UNTIL THE PROCESS IS COMPLETE</li>
        </ol>
        <h3>Modify New Album</h3>
        <p>Change Cover Image</p>
        <ol>
          <li>Under Stored Albums, select the Album you wish to modify</li>
          <li>Under Album Editor, click on the image you want as the cover</li>
          <li>On the selected image, click "set cover"</li>
        </ol>
        <p>Change Album Title</p>
        <ol>
          <li>Under Stored Albums, select the Album you wish to modify</li>
          <li>Under Album Editor, type in the new title</li>
          <li>Under Actions, click "update title"</li>

        </ol>
        <h3>Delete Album</h3>
        <ol>
          <li>Under Stored Albums, select the Album you wish to delete</li>
          <li>Under Actions, click "delete album"<br/>IMPORTANT: DO NOT CLOSE THE BROSWER UNTIL THE PROCESS IS COMPLETE</li>
        </ol>

        <a name="Developer"></a>
        <h2>======Developer======</h2>
        <ul>
          <li>Wellington Vicioso</li>
          <li>wellington.vicioso@gmail.com</li>
          <li>310-367-2608 </li>
        </ul>
      </div>

    )
  }

}

export default AdminDocs;
