import { FC } from "react";
import { Link } from "react-router-dom";

export interface CardProps {
  title: string;
  description: string | JSX.Element;
  href: string;
  linkLabel: string
  isRoute?: boolean;
}
const Card:FC<CardProps> = ({title, description, href,linkLabel, isRoute}) => {
  return (
    <div className="col-md-6 pb-8">
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      <p>
        {isRoute ? (
          <Link
            to={href}
            className="btn btn-maroon btn-medium"
          >
            {linkLabel}
          </Link>
        ) : (
        <a
          className="btn btn-maroon btn-medium"
          target="_blank"
          href={href}
          >
          {linkLabel}
          </a>
        )}
      </p>
    </div>
  );
};

export default Card;
