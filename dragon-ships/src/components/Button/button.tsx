import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import classNames from "classnames";

// export enum ButtonSize {
//   Large = "lg",
//   Small = "sm",
// }

type ButtonSize = 'lg' | 'sm'

// export enum ButtonType {
//   Primary = "primary",
//   Default = "default",
//   Danger = "danger",
//   Link = "link",
// }

type ButtonType = 'primary' | 'default' | 'danger' | 'link'
interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

//思考一个问题，怎么继承button a原有事件
// & 交叉类型(直接合并两个类型),和 | 联合类型相反
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

// a和button标签都集成到ButtonProps,出现一个问题，a标签没有button标签属性和方法,TS提供Partial(所有属性换成可选)
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, disabled, size, btnType, children, href, ...restProps } = props;
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });
  if (btnType === 'link' && href) {
    return (
      <a {...restProps} className={classes} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button {...restProps} className={classes} disabled={disabled}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

