import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import classNames from "classnames";

export type ThemeProps =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";

export interface Theme extends FontAwesomeIconProps {
  theme?: ThemeProps;
}

const Icon: React.FC<Theme> = (props) => {
  const { className, theme, ...resetProps } = props;
  const classes = classNames("viking-icon", className, {
    [`icon-${theme}`]: theme,
  });
  return <FontAwesomeIcon className={classes} {...resetProps} />;
};

Icon.defaultProps = {
  theme: "primary"
};
export default Icon;
