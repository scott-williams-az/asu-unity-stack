import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
export default createComponent('Tabbed Panels');
import './tabbed-panels.js'


const WhiteBackgroundComponent = (
  <div>
    <nav class="uds-tabbed-panels">
      <div class="nav nav-tabs" id="nav-tab" role="tablist" data-scroll-position="0">
        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home long tab</a>
        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile long tab</a>
        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact us is a long tab</a>
        <a class="nav-item nav-link" id="nav-another-tab" data-toggle="tab" href="#nav-another" role="tab" aria-controls="nav-another" aria-selected="false">Another tab, long tab</a>
        <a class="nav-item nav-link" id="nav-another-2-tab" data-toggle="tab" href="#nav-another-2" role="tab" aria-controls="nav-another-2" aria-selected="false">Another tab, long tab</a>
        <a class="nav-item nav-link" id="nav-another-3-tab" data-toggle="tab" href="#nav-another-3" role="tab" aria-controls="nav-another-3" aria-selected="false">Another tab, long tab</a>
      </div>
      <a class="scroll-control-prev" href="#carouselExampleControls" role="button" data-scroll="prev" tabIndex="-1">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="scroll-control-next" href="#carouselExampleControls" role="button" data-scroll="next" tabIndex="-1">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        This is an ordinary paragraph that is long enough to wrap to multiple lines so that you can see how spacing looks. At vero eos et accusam et justo duo dolores et ea rebu.
        <br />
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
      </div>
      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        This is an ordinary paragraph that is long enough to wrap to multiple lines so that you can see how spacing looks. At vero eos et accusam et justo duo dolores et ea rebu.
        <br />
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem.</div>
      <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
        This is an ordinary paragraph that is long enough to wrap to multiple lines so that you can see how spacing looks. At vero eos et accusam et justo duo dolores et ea rebu.
        <br />
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem.</div>
      <div class="tab-pane fade" id="nav-another" role="tabpanel" aria-labelledby="nav-another-tab">
        This is an ordinary paragraph that is long enough to wrap to multiple lines so that you can see how spacing looks. At vero eos et accusam et justo duo dolores et ea rebu.
        <br />
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem.</div>
      <div class="tab-pane fade" id="nav-another-2" role="tabpanel" aria-labelledby="nav-another-2-tab">
        This is an ordinary paragraph that is long enough to wrap to multiple lines so that you can see how spacing looks. At vero eos et accusam et justo duo dolores et ea rebu.
        <br />
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem.</div>
      <div class="tab-pane fade" id="nav-another-3" role="tabpanel" aria-labelledby="nav-another-3-tab">
        This is an ordinary paragraph that is long enough to wrap to multiple lines so that you can see how spacing looks. At vero eos et accusam et justo duo dolores et ea rebu.
        <br />
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem.</div>
    </div>
  </div>
)

const Gray1BackgroundComponent = (
  <div>
    <nav class="uds-tabbed-panels">
      <div class="nav nav-tabs" id="nav-tab" role="tablist" data-scroll-position="0">
        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home long tab</a>
        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile long tab</a>
        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact us is a long tab</a>
      </div>
      <a class="scroll-control-prev" href="#carouselExampleControls" role="button" data-scroll="prev" tabIndex="-1">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="scroll-control-next" href="#carouselExampleControls" role="button" data-scroll="next" tabIndex="-1">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </nav>
    <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          This is an ordinary paragraph that is long enough to wrap to multiple lines so that you can see how spacing looks. At vero eos et accusam et justo duo dolores et ea rebu.
          <br />
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          This is an ordinary paragraph that is long enough to wrap to multiple lines so that you can see how spacing looks. At vero eos et accusam et justo duo dolores et ea rebu.
          <br />
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem.</div>
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
          This is an ordinary paragraph that is long enough to wrap to multiple lines so that you can see how spacing looks. At vero eos et accusam et justo duo dolores et ea rebu.
          <br />
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
        </div>
    </div>
  </div>
)

const Gray2BackgroundComponent = (
  <div>
    <nav class="uds-tabbed-panels">
      <div class="nav nav-tabs" id="nav-tab" role="tablist" data-scroll-position="0">
        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home long tab</a>
        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile long tab</a>
        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact us is a long tab</a>
      </div>
      <a class="scroll-control-prev" href="#carouselExampleControls" role="button" data-scroll="prev" tabIndex="-1">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="scroll-control-next" href="#carouselExampleControls" role="button" data-scroll="next" tabIndex="-1">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        This is an ordinary paragraph that is long enough to wrap to multiple lines so that you can see how spacing looks. At vero eos et accusam et justo duo dolores et ea rebu.
        <br />
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
      </div>
      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        This is an ordinary paragraph that is long enough to wrap to multiple lines so that you can see how spacing looks. At vero eos et accusam et justo duo dolores et ea rebu.
        <br />
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem.</div>
      <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
        This is an ordinary paragraph that is long enough to wrap to multiple lines so that you can see how spacing looks. At vero eos et accusam et justo duo dolores et ea rebu.
        <br />
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem.</div>
    </div>
  </div>
)

const Gray7BackgroundComponent = (
  <div>
    <nav class="uds-tabbed-panels uds-tabbed-panels-dark">
      <div class="nav nav-tabs" id="nav-tab" role="tablist" data-scroll-position="0">
        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home long tab</a>
        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile long tab</a>
        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact us is a long tab</a>
      </div>
      <a class="scroll-control-prev" href="#carouselExampleControls" role="button" data-scroll="prev" tabIndex="-1">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="scroll-control-next" href="#carouselExampleControls" role="button" data-scroll="next" tabIndex="-1">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show text-white active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        This is an ordinary paragraph that is long enough to wrap to multiple lines so that you can see how spacing looks. At vero eos et accusam et justo duo dolores et ea rebu.
        <br />
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem.
      </div>
      <div class="tab-pane fade text-white" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        This is an ordinary paragraph that is long enough to wrap to multiple lines so that you can see how spacing looks. At vero eos et accusam et justo duo dolores et ea rebu.
        <br />
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem.</div>
      <div class="tab-pane fade text-white" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
        This is an ordinary paragraph that is long enough to wrap to multiple lines so that you can see how spacing looks. At vero eos et accusam et justo duo dolores et ea rebu.
        <br />
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem.</div>
    </div>
  </div>
)




const WhiteBackgroundStory = (
  <div class="container-xl">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-xl-12 pl-0 pr-0">
        {WhiteBackgroundComponent}
      </div>
    </div>
  </div>
)


const Gray1BackgroundStory = (
  <div class="container-xl bg-gray-1">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-xl-12 pl-0 pr-0">
        {Gray1BackgroundComponent}
      </div>
    </div>
  </div>
)


const Gray2BackgroundStory = (
  <div class="container-xl bg-gray-2">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-xl-12 pl-0 pr-0">
        {Gray2BackgroundComponent}
      </div>
    </div>
  </div>
)


const Gray7BackgroundStory = (
  <div class="container-xl bg-dark">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-xl-12 pl-0 pr-0">
        {Gray7BackgroundComponent}
      </div>
    </div>
  </div>
)



export const WhiteBackground = createStory(WhiteBackgroundStory)
export const Gray1Background = createStory(Gray1BackgroundStory)
export const Gray2Background = createStory(Gray2BackgroundStory)
export const Gray7Background = createStory(Gray7BackgroundStory)
