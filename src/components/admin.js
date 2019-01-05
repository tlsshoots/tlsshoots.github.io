import React, { Component } from 'react';
import ImageLoader from 'react-loading-image'
import Loader from 'react-loader-spinner'
import S3Client from 'aws-s3';
// import { uploadFile, deleteFile } from 'aws-s3';

import logo from '../TLSLogo.png';
import img from '../tls-camera.jpg'
import '../Admin.css';

const width = window.innerWidth;
const height = window.innerHeight;

const config = {
    bucketName: 'tlsshootsTest',
    dirName: 'Test Folder',
    region: 'us-east-1',
    accessKeyId: 'AKIAIWUF6GHRWWD7QRWA',
    secretAccessKey: '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',
}

class Admin extends Component {

  constructor() {
    super();
    this.state = {
      albums: {},
      activeAlbumIdx: 0,
      activeAlbum: {},
      albumTitle: 'No Album Selected',
      albumTitleInput: '',
      totalNumberOfImages: 0,
      counter: 0,
      uploading: false,
      files: [],
      awsFiles: [],
      newFiles: false,
      logged: false,
      adminPass : ''
    }
  }

  componentDidMount() {
    this.getAlbums();
  }

  verifyUser() {
    if (this.state.adminPass == "M!ch3ll3S") {
      this.setState({
        logged: true
      })
    } else {
      alert('wrong password')
    }
  }

  async getAlbums() {
    fetch('https://enigmatic-lake-22259.herokuapp.com/albums', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then((responseJson) => {
      let sortedResp = responseJson.map(obj => {
        let result = {album: obj.album, images: obj.images.reverse()}
        return result
      })

      this.setState({
        albums: sortedResp.reverse()
      })

      console.log('=====API GET=====', sortedResp)
    })
    .catch(error => {
      console.log('=====API error=====', error)
    })
  }

  selectAlbum(albumIdx) {
    this.clearEditor();
    let album = this.state.albums[albumIdx]
    this.setState({
      activeAlbumIdx: albumIdx,
      activeAlbum: album,
      albumTitle: album.album.title,
      totalNumberOfImages: album.images.length
    })
  }

  updateAlbumTitle() {
    if (this.state.newFiles || !this.state.activeAlbum.album) {
      alert("button not active");
      return;
    }
    if (!this.state.albumTitleInput) {
      alert('No album title');
      return;
    }
    if(window.confirm('Are you sure you want to change the Album title?')) {
      fetch(`https://enigmatic-lake-22259.herokuapp.com/albums/${this.state.activeAlbum.album.id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: this.state.albumTitleInput
        })
      })
      .then(response => response.json())
      .then((responseJson) => {
        let _this = this
        this.setState({ albumTitleInput: '' });
        this.getAlbums();
        setTimeout(function(){
          _this.selectAlbum(_this.state.activeAlbumIdx);
        }, 2000);
        console.log('=====API GET setCover=====', responseJson)
      })
      .catch(error => {
        console.log('=====API error setCover=====', error)
      })
    }

  }

  handleAdminChangeText = e => {
    this.setState({
      adminPass: e.target.value
    })
  }

  handleChangeText = e => {
    this.setState({
      albumTitleInput: e.target.value
    })
  }

  updateAlbumCover(imgObj) {
    if(window.confirm('Are you sure you want to change the cover image?')) {
      fetch(`https://enigmatic-lake-22259.herokuapp.com/albums/${this.state.activeAlbum.album.id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cover: this.state.activeAlbum.images.indexOf(imgObj)
        })
      })
      .then(response => response.json())
      .then((responseJson) => {
        let _this = this
        this.getAlbums()
        setTimeout(function(){
          _this.selectAlbum(_this.state.activeAlbumIdx);
        }, 2000);
        console.log('=====API GET setCover=====', responseJson)
      })
      .catch(error => {
        console.log('=====API error setCover=====', error)
      })
    }
  }

  selectNewAlbum(e) {
    this.clearEditor();
    let obj = e.target.files
    let objArr = [];

    let keys = Object.keys(obj);

    keys.sort(function(a, b) {
        return parseInt(obj[a].name.split('-')[0]) - parseInt(obj[b].name.split('-')[0])
    });

    keys.forEach(function(k) {
      if (obj[k].name.split(".")[1] === "jpg") {
        objArr.push(obj[k]);
      }
    });


    this.setState({
      files: objArr,
      albumTitle: 'New Album',
      newFiles: true
    })
  }

  selectImage = e => {
    let element = document.getElementsByClassName("selectedImg")[0];
    if (element) {
      element.classList.remove("selectedImg");
      element.style.display = 'none'
    }

    let childrenElem = e.target.closest(".fileItem").children

    childrenElem[childrenElem.length - 1].classList.add("selectedImg");
    childrenElem[childrenElem.length - 1].style.display = 'flex';
  }

  uploadNewAlbumS3() {
    if (!this.state.newFiles ) {
      alert("button not active");
      return;
    }
    if (!this.state.albumTitleInput) {
      alert('No album title');
      return;
    }

    let config = {
        bucketName: 'tlsshoots',
        dirName: this.state.albumTitleInput,
        region: 'us-east-1',
        accessKeyId: 'AKIAIWUF6GHRWWD7QRWA',
        secretAccessKey: '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',
    }

    let imgLinks = [];


    if( window.confirm('Are you sure you want to upload this album?')) {
      this.uploading();
      for (var i = 0; i < this.state.files.length; i++) {
        S3Client.uploadFile(this.state.files[i], config)
        .then(data => {
          imgLinks.push(data.location)
          let counter = this.state.counter
          this.setState({
            counter: counter += 1
          })

          if (this.state.counter == this.state.files.length) {
            this.setState({
              awsFiles: imgLinks,
            })
            // this.setActiveGallery({images: imgLinks, title:this.state.galleryTitle})
            // API REQUEST TO SAVE AND UPDATE ALBUM
            this.uploadNewAlbumServer()
          }
          // if (i === this.state.files.length - 1) {
          // }
          this.uploading()
        })
        .catch(err => {
        })
      }
    }
  }

  uploadNewAlbumServer() {
    console.log('======here LLL======', this.state.awsFiles)
    let location = this.state.awsFiles[0].split('/')[3]
    fetch(`https://enigmatic-lake-22259.herokuapp.com/albums`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        album: {
          title: this.state.albumTitleInput,
          cover: 0,
          awsLocation: location,
          images: this.state.awsFiles
        }
      })
    })
    .then(response => response.json())
    .then((responseJson) => {
      let _this = this
      this.getAlbums()
      setTimeout(function(){
        _this.selectAlbum(_this.state.albums.length - 1);
      }, 2000);
      console.log('=====API GET setCover=====', responseJson)
    })
    .catch(error => {
      console.log('=====API error setCover=====', error)
    })
  }

  deleteAlbumS3() {
    if (this.state.newFiles || !this.state.activeAlbum.album) {
      alert("button not active");
      return;
    }
    if(window.confirm('Are you sure you want to delete this album?')) {
      this.uploading();
      let config = {
          bucketName: 'tlsshoots',
          dirName: this.state.activeAlbum.album.awsLocation,
          accessKeyId: 'AKIAIWUF6GHRWWD7QRWA',
          secretAccessKey: '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',
      }

      for (var i = 0; i < this.state.activeAlbum.images.length; i++) {
        let filename = this.state.activeAlbum.images[i].url.split("/")[4]
        let num = i
        S3Client.deleteFile(filename, config)
        .then(response => {

        })
        .catch(err => console.error(err))


        fetch(`https://enigmatic-lake-22259.herokuapp.com/images/${this.state.activeAlbum.images[i].id}`, {
          method: 'DELETE',
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then((responseJson) => {
          let counter = this.state.counter
          this.setState({
            counter: counter += 1
          })

          this.uploading()
          if (this.state.activeAlbum.images.length - 1 == num) {
            console.log('this here', this.state)
            this.deleteAlbumServer();
          }
          console.log('=====API DELETE', responseJson)
        })
        .catch(error => { console.log('=====API error', error) })
      }
    }
  }

  deleteAlbumServer() {
    let _this = this
    fetch(`https://enigmatic-lake-22259.herokuapp.com/albums/${this.state.activeAlbum.album.id}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then((responseJson) => {
      _this.clearEditor();
      _this.getAlbums()
    })
    .catch(error => { console.log('=====API error', error) })
  }

  confirmAction(action) {

  }

  clearEditor() {
    this.setState({
      activeAlbumIdx: 0,
      activeAlbum: {},
      albumTitle: 'No Album Selected',
      albumTitleInput: '',
      totalNumberOfImages: 0,
      files: [],
      newFiles: false
    })
  }

  uploading() {
    if (this.state.newFiles) {
      if (this.state.uploading && this.state.counter === this.state.files.length) {
        this.setState({
          uploading: false,
          counter: 0
        })
      } else {
        this.setState({
          uploading: true
        })
      }
    } else {
      if (this.state.uploading && this.state.counter === this.state.activeAlbum.images.length) {
        this.setState({
          uploading: false,
          counter: 0
        })
      } else {
        this.setState({
          uploading: true
        })
      }
    }
  }

  renderAlbums() {
    let albumsArr = []
    let albums = this.state.albums
    for (var i = 0; i < albums.length; i++) {

      albumsArr.push(
        <div className="albumIcon" onClick={this.selectAlbum.bind(this, i)}>
          <ImageLoader
            src={ albums[i].images[albums[i].album.cover].url }
            style={{
              width: 150,
              height: 150,
              margin: 5
            }}
            loading={() =>
              <Loader
                type="RevolvingDot"
                color="#616161"
                height="30"
                width="30"
                />
            }
            error={() => <div>Loading...</div>}
            />
          <p className="albumIconTitle">{albums[i].album.title}</p>
        </div>
      )
    }
    return albumsArr
  }

  renderActiveAlbumFiles() {
    let filesArr = []
    let album = this.state.activeAlbum
    if (Object.keys(album).length !== 0 ) {
      filesArr.push(
        <div className="fileItem">
          <ImageLoader
            src={album.images[album.album.cover].url}
            style={{
              width: 50,
              height: 50,
            }}
            loading={() =>
              <Loader
                type="RevolvingDot"
                color="#616161"
                height="30"
                width="30"
                />
            }
            error={() => <div>Loading...</div>}
            />
          <p>
            {
              album.images[album.album.cover].url.split('/')[album.images[album.album.cover].url.split('/').length - 1]
            }
          </p>
        </div>
      )

      for (var i = 0; i < album.images.length; i++) {
        if (i !== album.album.cover) {
          filesArr.push(
            <div className="fileItem" onClick={this.selectImage.bind(this)}>
              <ImageLoader
                src={album.images[i].url}
                style={{
                  width: 50,
                  height: 50,
                }}
                loading={() =>
                  <Loader
                    type="RevolvingDot"
                    color="#616161"
                    height="30"
                    width="30"
                    />
                }
                error={() => <div>Loading...</div>}
              />
              <p>
                {
                  album.images[i].url.split('/')[album.images[i].url.split('/').length - 1]
                }
              </p>
              <div className="setCoverBtn" onClick={this.updateAlbumCover.bind(this, album.images[i])}><span>set as cover</span></div>
            </div>
          )
        }
      }
    } else if (this.state.files.length !== 0) {
      for (var int = 0; int < this.state.files.length; int++) {
        filesArr.push(
          <div className="fileItem">
            <p> { this.state.files[int].name } </p>
          </div>
        )
      }
    }
    return filesArr
  }


  render() {
    if (this.state.logged) {
      return (
        <div className="container">
          <h1>Admin</h1>



          <div className="bodyContainer">

            <div className="rightContainer">

              <div className="actionsContainer">
                <h2>Actions</h2>
                <div className="actionsWrapper">
                  <div className="btn"><p>upload album</p>
                  <input className="fileInput" type='file' name="New Gallery" onChange={this.selectNewAlbum.bind(this)} multiple="" directory="" webkitdirectory="" mozdirectory="" />
                </div>
                <div className="btn" onClick={this.updateAlbumTitle.bind(this)}><p>update title</p></div>
                <div className="btn" onClick={this.clearEditor.bind(this)}><p>clear editor</p></div>
                <div className="btn" onClick={this.uploadNewAlbumS3.bind(this)}><p>publish album</p></div>
                <div className="btn" onClick={this.deleteAlbumS3.bind(this)}><p>delete album</p></div>
              </div>
            </div>

              <div className="editorContainer">

                <h2>Album Editor - <strong style={{fontWeight: '900', color: '#d4ae93'}}>{ this.state.albumTitle }</strong> </h2>
                <input onChange={this.handleChangeText.bind(this)} value={this.state.albumTitleInput} placeholder="Update Album Title" type="text" className="titleInput" />

                <div className="filesContainer">
                  { this.renderActiveAlbumFiles() }
                </div>
              </div>
            </div>

            <div className="albumsContainer">
              <h2>Stored Albums</h2>
              <div className="albumIcons">
                { this.renderAlbums() }
              </div>
            </div>
          </div>
          {
            this.state.uploading ?
            (<div style={{
              color: '#fff',
              fontSize: 42,
              position: 'fixed',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#00000090'}}>
              {this.state.newFiles ? "uploaded" : "deleted"}: {this.state.counter}/{this.state.newFiles ? this.state.files.length : this.state.activeAlbum.images.length }
            </div>) :
            (<div />)
          }
        </div>
      );

    } else {
      return (
        <div className="container">
          <div className="editorContainer" style={{width: '95%'}}>

            <h2>Admin Login</h2>
            <input value={this.state.adminPass} type="password" onChange={this.handleAdminChangeText.bind(this)} placeholder="Enter Password" className="titleInput" />

            <div className="btn" style={{width: '20%'}} onClick={this.verifyUser.bind(this)}><p>enter</p></div>
          </div>
        </div>
      )
    }
  }

}

export default Admin;
