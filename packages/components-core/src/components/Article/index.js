import { h } from "preact";
import classNames from "classnames";
import dompurify from "dompurify";
import PropTypes from "prop-types";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

import { Button } from "../Button";
import { EventDate } from "../EventDate";
import { EventLocation } from "../EventLocation";

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";
import "./article.css";

const sanitizeDangerousMarkup = (content) => {
  const sanitizer = dompurify.sanitize;

  return { __html: sanitizer(content) };
}

export const Article = ({
  articleUrl,
  authorName,
  authorTitle,
  authorEmail,
  authorPhone,
  body,
  date,
  type,
  image,
  title,
  startTime,
  stopTime,
  locationTitle,
  address1,
  address2,
  city,
  state,
  zip,
  locationLink,
}) => {
  const hClasses = classNames(UdsStyles["col"], {
    [UdsStyles["col-12"]]: "event" !== type,
    [UdsStyles["col-7"]]: "event" === type,
  });

  return (
    <>
      {image && "event" !== type && (
        <div
          className={classNames(
            UdsStyles["uds-hero"],
            UdsStyles["uds-hero-md"]
          )}
          style={{
            backgroundImage: `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${image})`,
          }}
        ></div>
      )}

      <div
        className={classNames(
          UdsStyles["container"],
          `${type}-container`,
          "wrapper-container"
        )}
      >
        <div
          className={classNames(
            UdsStyles["row"],
            UdsStyles["pt-2"],
            UdsStyles["pb-4"]
          )}
        >
          <div className={classNames(UdsStyles["col"], UdsStyles["col-12"])}>
            <Breadcrumb listClassName={UdsStyles["breadcrumb"]}>
              <BreadcrumbItem tag="li" className={UdsStyles["breadcrumb-item"]}>
                <BreadcrumbItem tag="a" href="#">
                  Home
                </BreadcrumbItem>
              </BreadcrumbItem>
              <BreadcrumbItem tag="li" className={UdsStyles["breadcrumb-item"]}>
                <BreadcrumbItem tag="a" href="#">
                  Second nav item
                </BreadcrumbItem>
              </BreadcrumbItem>
              <BreadcrumbItem
                active
                tag="li"
                className={UdsStyles["breadcrumb-item"]}
              >
                Current page
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>

        <div className={classNames(UdsStyles["row"], UdsStyles["pb-2"])}>
          <div className={hClasses}>
            <h2>{title}</h2>
          </div>
          {"event" === type && (
            <div className={classNames(UdsStyles["col"], UdsStyles["col-5"])}>
              <div className={UdsStyles["card-button"]}>
                <Button btnColor="maroon" label="Attend on Zoom" />
              </div>
              <div className={UdsStyles["card-button"]}>
                <Button label="Add to calendar" />
              </div>
            </div>
          )}
        </div>

        {"event" === type && (
          <div
            className={classNames(
              UdsStyles["row"],
              UdsStyles["row-spaced"],
              UdsStyles["pt-2"],
              UdsStyles["pb-2"]
            )}
          >
            <div className={classNames(UdsStyles["col"], UdsStyles["col-6"])}>
              <FontAwesomeIcon icon={faCalendar} />
              <EventDate startTime={startTime} stopTime={stopTime} />
            </div>
            <div className={classNames(UdsStyles["col"], UdsStyles["col-6"])}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <EventLocation
                title={locationTitle}
                address1={address1}
                address2={address2}
                city={city}
                state={state}
                zip={zip}
                locationLink={locationLink}
              />
            </div>
          </div>
        )}

        {"event" !== type && (
          <div
            className={classNames(
              UdsStyles["row"],
              UdsStyles["row-spaced"],
              UdsStyles["pt-2"],
              UdsStyles["pb-2"]
            )}
          >
            <div className={classNames(UdsStyles["col"], UdsStyles["col-12"])}>
              <div className="article-social-media">
                <TwitterShareButton url={articleUrl} quote={title}>
                  <TwitterIcon
                    size={24}
                    borderRadius={4}
                    bgStyle={{ fill: "maroon" }}
                  />
                </TwitterShareButton>
                <FacebookShareButton url={articleUrl} quote={title}>
                  <FacebookIcon
                    size={24}
                    borderRadius={4}
                    bgStyle={{ fill: "maroon" }}
                  />
                </FacebookShareButton>
                <LinkedinShareButton url={articleUrl} quote={title}>
                  <LinkedinIcon
                    size={24}
                    borderRadius={4}
                    bgStyle={{ fill: "maroon" }}
                  />
                </LinkedinShareButton>
              </div>
              {date && <i>{date}</i>}
            </div>
          </div>
        )}

        <div
          className={classNames(
            UdsStyles["row"],
            UdsStyles["row-spaced"],
            UdsStyles["pt-2"],
            UdsStyles["pb-2"]
          )}
        >
          <div className={classNames(UdsStyles["col"], UdsStyles["col-12"])}>
            <p dangerouslySetInnerHTML={sanitizeDangerousMarkup(body)}></p>
            <div>{authorName}</div>
            {authorTitle && <div>{authorTitle}</div>}
            {authorEmail && (
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
                {authorEmail}
              </div>
            )}
            {authorPhone && (
              <div>
                <FontAwesomeIcon icon={faPhone} />
                {authorPhone}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Article.propTypes = {
  /**
   * Type of article (optional)
   */
  type: PropTypes.oneOf(["default", "degree", "event", "news"]),
  /**
   * This is the relative or absolute url to the full-page article
   */
  articleUrl: PropTypes.string.isRequired,
  /**
   * Article image
   */
  image: PropTypes.string,
  /**
   * Title
   */
  title: PropTypes.string.isRequired,
  /**
   * Date for the article
   */
  date: PropTypes.string.isRequired,
  /**
   * Body content for the article
   */
  body: PropTypes.string.isRequired,
  /**
   * Article author full name
   */
  authorName: PropTypes.string.isRequired,
  /**
   * Article author title
   */
  authorTitle: PropTypes.string,
  /**
   * Article author email
   */
  authorEmail: PropTypes.string,
  /**
   * Article author phone number
   */
  authorPhone: PropTypes.string,
  /**
   * Event start time
   */
  startTime: PropTypes.string,
  /**
   * Event stop time
   */
  stopTime: PropTypes.string,
  /**
   * Location title
   */
  locationtitle: PropTypes.string,
  /**
   * Address line 1
   */
  address1: PropTypes.string,
  /**
   * Address line 2
   */
  address2: PropTypes.string,
  /**
   * City
   */
  city: PropTypes.string,
  /**
   * State
   */
  state: PropTypes.string,
  /**
   * Zip
   */
  zip: PropTypes.string,
  /**
   * Location link
   */
  locationLink: PropTypes.string,
};

Article.defaultProps = {
  type: "default",
  image: null,
  authorTitle: null,
  authorEmail: null,
  authorPhone: null,
  startTime: null,
  stopTime: null,
  locationTitle: null,
  address1: null,
  address2: null,
  city: null,
  state: null,
  zip: null,
  locationLink: null,
};
