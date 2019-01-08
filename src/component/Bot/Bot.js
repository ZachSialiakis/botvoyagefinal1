import { DirectLine } from 'botframework-directlinejs';
import React from 'react';
import ReactWebChat from 'botframework-webchat';
import "./Bot.scss";

class Bot extends React.Component {
  constructor(props) {
    super(props);

    // this.directLine = new DirectLine({ token: 'fJ3Mh68Hmdg.cwA.Fqo.byROQrXgUJFhJMn88M2xy2vmx2uwqAQw8FKPA-pFDaY' });
  }

  render() {
    return (
      //<iframe src="https://webchat.botframework.com/embed/BotVoyage?s=fJ3Mh68Hmdg.cwA.Fqo.byROQrXgUJFhJMn88M2xy2vmx2uwqAQw8FKPA-pFDaY"></iframe>
      // <div className="botchat">
      //   <ReactWebChat  directLine={this.directLine} userID="LS8lLdd5H14.cwA.pc0.BiJgrAvNaiLnEBolJiJEqvzh9ntPMQ3U52uNGUy9B8Y" />
      // </div>

      <div className="tablet">
        <div className="content">
          <iframe src="https://webchat.botframework.com/embed/BotVoyage?s=fJ3Mh68Hmdg.cwA.Fqo.byROQrXgUJFhJMn88M2xy2vmx2uwqAQw8FKPA-pFDaY"></iframe>
        </div>
      </div>
    );
  }
}

export default Bot;