export default { title: 'Components/Quick Links' };

export const quickLinks = () => `
  <style>.dropdown-pinned {position:inherit;}</style>
  <div class="container">
    <div class="row">
      <div class="col-md-12">

        <div class="quicklinks quicklinks-expanded-md">
          <button class="btn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            On this page<span class="fas fa-chevron-down"></span>
          </button>
          <div class="separator"></div>
          <div id="collapseExample" class="card card-body collapse">
            <nav class="nav" aria-label="Secondary">
              <a class="nav-link" href="#"></span>Live long</a>
              <a class="nav-link" href="#"><span class="fas fa-hand-spock"></span>Prosper</a>
              <a class="nav-link" href="#"><span class="fa fa-lightbulb"></span>To boldly go</a>
              <a class="nav-link" href="#"><span class="fa fa-lightbulb"></span>Where no one</a>
              <a class="nav-link active" href="#">Has gone before</a>
            </nav>
          </div>
        </div>

      </div><!-- end .col -->
    </div><!-- end .row -->
  </div><!-- end .container -->

`;
