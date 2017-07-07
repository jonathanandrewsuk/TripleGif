import React from 'react';
import '../styles/show.css';
import '../styles/obnoxious.css';
import '../styles/animate.css';
import giphy from '../assets/images/giphy.png'

export default class ShowPage extends React.Component {

  componentDidMount() {
    var url_bar = this._reactInternalInstance._context.router.route.location.pathname.slice(1)
    var url_token = this._reactInternalInstance._context.router.route.location.pathname.slice(6)
    console.log(url_bar)
    console.log(url_token)
     if ( url_bar !== "show!" ) {
    this.props.fetchPhrase(url_token)
     }
   }

  render(props) {
    return (

  <container id="container">

    <div id="content" className={this.props.words[0].gif_theme}>

      <div className= "horizontal div3" id={this.props.words[0].gif_theme}>
        <img className="background-image" src={"https://media.giphy.com/media/" + this.props.images.images_1[`${this.props.shuffle_1}`] + "/giphy.gif"} alt="Image 1"/>
      </div>
      <h1 className="animated intensifies bounceInUp" id={this.props.words[0].text_theme}> {this.props.term_1} </h1>
    </div>

    <div id="primary" className={this.props.words[1].gif_theme}>

    <div className="horizontal div3" id={this.props.words[1].gif_theme}>
          <img className="background-image" src={"https://media.giphy.com/media/" + this.props.images.images_2[`${this.props.shuffle_2}`] + "/giphy.gif"} alt="Image 2"/>
        </div>
        <h1 className="animated intensifies bounceInDown" id={this.props.words[1].text_theme}> {this.props.term_2} </h1>
    </div>

    <div id="secondary" className={this.props.words[2].gif_theme}>

    <div className="horizontal div3" id={this.props.words[2].gif_theme}>
        <img className="background-image" src={"https://media.giphy.com/media/" + this.props.images.images_3[`${this.props.shuffle_3}`] + "/giphy.gif"} alt="Image 3"/>
      </div>
      <h1 className="animated intensifies bounceInRight" id={this.props.words[2].text_theme}> {this.props.term_3} </h1>

    </div>
    <img id="watermark" src={giphy}/>
  </container>
    );
  }

}
