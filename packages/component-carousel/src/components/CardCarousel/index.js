// @ts-check
import { Card } from "@asu/components-core";
import PropTypes from "prop-types";
import React from "react";
import { useEffect, useState } from "react";

import { BaseCarousel } from "../../core/components/BaseCarousel";

/**
 * @typedef {import('../../core/components/BaseCarousel').CarouselItem} CarouselItem
 */

/**
 * @typedef {import('../../core/types/card-carousel-types').CardItem} CardItem
 */

/**
 * @typedef {import('../../core/types/card-carousel-types').CardCarouselType} CardCarouselType
 */

/**
 * @param {CardItem} props
 * @param {"default" | "degree" | "event" | "news" | "story"} cardType
 * @param {"stack" | "inline"} cardEventFormat
 * @param {boolean} cardHorizontal
 * @returns {CarouselItem}
 * @ignore
 */
const htmlTemplate = (
  {
    id,
    imageSource,
    imageAltText,
    title,
    content,
    eventLocation,
    eventTime,
    buttons,
    linkLabel,
    linkUrl,
    tags,
  },
  cardType,
  cardHorizontal,
  cardEventFormat
) => ({
  id,
  item: (
    <Card
      type={cardType}
      horizontal={cardHorizontal}
      image={imageSource}
      imageAltText={imageAltText}
      title={title}
      body={content}
      eventFormat={cardEventFormat}
      eventLocation={eventLocation}
      eventTime={eventTime}
      buttons={buttons}
      linkLabel={linkLabel}
      linkUrl={linkUrl || buttons?.[0]?.href}
      tags={tags}
    />
  ),
});

/**
 * @param {CardCarouselType} props
 * @returns { JSX.Element }
 */
const CardCarousel = ({
  perView,
  cardItems,
  cardType = "default",
  cardEventFormat = "stack",
  cardHorizontal = false,
  width = undefined,
  maxWidth = undefined,
  imageAutoSize = true,
}) => {
  const [currentPerView, setCurrentPerView] = useState(perView);

  useEffect(() => {
    const updatePerView = () => {
      const screenWidth = window.innerWidth;
      let perViewValue;
      switch (perView) {
        case "3":
          perViewValue = screenWidth > 1024 ? 3 : screenWidth > 768 ? 2 : 1;
          break;
        case "2":
          perViewValue = screenWidth < 768 ? 1 : 2;
          break;
        case "1":
        default:
          perViewValue = 1;
          break;
      }
      setCurrentPerView(perViewValue);
    };

    updatePerView();
    window.addEventListener("resize", updatePerView);

    return () => window.removeEventListener("resize", updatePerView);
  }, [perView]);

  const carouselItems = cardItems.map(item =>
    htmlTemplate(item, cardType, cardHorizontal, cardEventFormat)
  );
  const activateGlideActions = cardItems.length > currentPerView;

  return (
    <BaseCarousel
      perView={+currentPerView}
      maxWidth={maxWidth}
      width={width}
      carouselItems={carouselItems}
      cssClass="aligned-carousel"
      imageAutoSize={imageAutoSize}
      removeSideBackground={cardItems.length <= currentPerView}
      hasPositionIndicators={activateGlideActions}
      hasNavButtons={activateGlideActions}
      isDraggable={activateGlideActions}
      hasShadow
    />
  );
};

CardCarousel.propTypes = {
  perView: PropTypes.string.isRequired,
  cardItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string,
      eventLocation: PropTypes.string,
      eventTime: PropTypes.string,
      image: PropTypes.string,
      imageAltText: PropTypes.string,
      buttons: Card.propTypes.buttons,
      linkLabel: PropTypes.string,
      linkUrl: PropTypes.string,
      tags: Card.propTypes.tags,
    })
  ).isRequired,
  cardType: Card.propTypes.type,
  cardEventFormat: Card.propTypes.eventFormat,
  cardHorizontal: Card.propTypes.horizontal,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  imageAutoSize: PropTypes.bool,
};

export { CardCarousel };
