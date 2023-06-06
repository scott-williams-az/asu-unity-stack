import classNames from 'classnames';
import React, { useState } from 'react';

export const RankingCard = ({ imageSrc }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="card-ranking large-image">
      <img
        src={imageSrc}
        alt="Card ranking large version"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      />
      <div className={classNames('info-layer', { [`active`]: open })}>
        <div className="content">
          <div className="header">
            <h4>Ranking title goes here, under the photo</h4>
            <button
              onClick={handleClick}
              id="dispatch"
              className="btn btn-expand"
              aria-label="Expand ranking"
              type="button"
              aria-expanded="false"
              data-toggle="collapse"
              data-target="#collapseExample"
              data-ga="collapsable element"
              data-ga-name="onclick"
              data-ga-event="collapse"
              data-ga-type="click"
              data-ga-region="main content"
              data-ga-section="H4 Ranking title goes here, under the photo"
            >
              <span className="fas fa-chevron-up" />
              <span className="sr-only">Expand</span>
            </button>
          </div>
          <p id="collapseExample">
            ASU has topped U.S. News & World Report’s “Most Innovative Schools”
            list since the inception of the category in 2016. ASU again placed
            ahead of Stanford and MIT on the list, based on a survey of peers.
            College presidents, provosts and admissions deans around the country
            nominated up to 10 colleges or universities that are making the most
            innovative improvements.
          </p>
          <a
            href="#"
            aria-label="Read more"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-name="onclick"
            data-ga-type="internal link (external link if non asu.edu domain)"
            data-ga-region="main content"
            data-ga-section="H4 Ranking title goes here, under the photo"
            data-ga="read more"
          >
            Read more
            <span
              className="fas icon-small fa-arrow-right"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
