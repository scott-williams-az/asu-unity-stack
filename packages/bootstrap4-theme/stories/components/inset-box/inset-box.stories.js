export default { title: 'Components/Content Sections/Inset Box' };

export const BasicExample = () => `
<div class="container">
  <div class="row">
    <!-- Component start -->
    <div class="uds-inset-box-container gray-1-bg">
      <div class="uds-inset-box-content">
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
        <div class="d-flex mb-2">
          <a href="#" class="btn btn-dark mr-2">Button link here</a>
          <a href="#" class="btn btn-dark">Button link here</a>
        </div>
        <a href="#" class="">Regular text link here</a>
        </div>
      </div>
    </div>
    <!-- Component end -->
  </div>
</div>
`;

export const ExampleWithBlockquote = () => `
<div class="container">
  <div class="row">
    <!-- Component start -->
    <div class="uds-inset-box-container gray-2-bg">
      <div class="uds-inset-box-content">
        <div class="uds-blockquote uds-testimonial accent-gold">
          <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
            <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z"/>
          </svg>
          <blockquote>
            <p>Computers make excellent and efficient servants, but I have no wish to serve under them.</p>
            <div class="citation">
              <cite class="name">Spock</cite>
              <cite class="description">First officer, USS Enterprise</cite>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
    <!-- Component end -->
  </div>
</div>
`;

export const ExampleWithList = () => `
<div class="container">
  <div class="row">
    <!-- Component start -->
    <div class="uds-inset-box-container gray-7-bg">
      <div class="uds-inset-box-content">
        <ol class="uds-list uds-steplist">
          <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
          <li>This is a quintenary headline<br><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
          <li>This is a quintenary headline<br><span>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
        </ol>
      </div>
    </div>
    <!-- Component end -->
  </div>
</div>
`;

export const WhiteBackground = () => `
<div class="container">
  <div class="row">
    <!-- Component start -->
    <div class="uds-inset-box-container white-bg">
      <div class="uds-inset-box-content">
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.</p>
        <div class="d-flex mb-2">
          <a href="#" class="btn btn-dark mr-2">Button link here</a>
          <a href="#" class="btn btn-dark">Button link here</a>
        </div>
        <a href="#" class="">Regular text link here</a>
        </div>
      </div>
    </div>
    <!-- Component end -->
  </div>
</div>
`;
