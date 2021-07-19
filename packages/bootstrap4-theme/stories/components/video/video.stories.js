import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('Videos');
import './video'
import stockVideo from './stock-video-person-drawing.mp4'


const DefaultComponent = (
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-12">

        <div class="uds-video-container">
          <div class="uds-video-player">
            <video caption="Example video">
              <source src={stockVideo} />
              <track src="path/to/caption.vtt" kind="captions" srclang="en" label="english_captions" />
            </video>
            <div class="uds-video-overlay">
              <button type="button" class="btn btn-circle btn-circle-large btn-circle-alt-white uds-video-btn-play">
                <i class="fa fa-play"></i>
                <span class="sr-only">Play</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);


const DefaultWithCaptionComponent = (
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-12">

        <div class="uds-video-container uds-video-with-caption">
          <div class="uds-video-player">
            <video caption="Example video">
              <source src={stockVideo} />
              <track src="path/to/caption.vtt" kind="captions" srclang="en" label="english_captions" />
            </video>
            <div class="uds-video-overlay">
              <button type="button" class="btn btn-circle btn-circle-large btn-circle-alt-white uds-video-btn-play">
                <i class="fa fa-play"></i>
                <span class="sr-only">Play</span>
              </button>
            </div>
          </div>
          <figure>
            <figcaption>Photo by Dent/ASU Now</figcaption>
          </figure>
        </div>

      </div>
    </div>
  </div>
);


const YoutubeVideoComponent = (
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-12">

        <div class="uds-video-container uds-video-with-caption">
          <div class="uds-video-player">
            <iframe title="Example video" src="https://www.youtube.com/embed/YW2p0ctzK9c"></iframe>
          </div>
        </div>

      </div>
    </div>
  </div>
);


const YoutubeVideoWithCaptionComponent = (
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-12">

        <div class="uds-video-container uds-video-with-caption">
          <div class="uds-video-player">
            <iframe title="Example video" src="https://www.youtube.com/embed/YW2p0ctzK9c"></iframe>
          </div>
          <figure>
            <figcaption>Photo by Dent/ASU Now</figcaption>
          </figure>
        </div>

      </div>
    </div>
  </div>
);


export const Default = createStory(DefaultComponent);
export const DefaultWithCaption = createStory(DefaultWithCaptionComponent);
export const YoutubeVideo = createStory(YoutubeVideoComponent);
export const YoutubeVideoWithCaption = createStory(YoutubeVideoWithCaptionComponent);
