import React, {SVGProps, VFC} from "react";
import {Icon} from "./Icon";

interface GraphqlLogoProps extends SVGProps<SVGSVGElement> {}

export const GraphqlLogo: VFC<GraphqlLogoProps> = (svgProps) => {
  return (
    <Icon viewBox="0 0 32 35.955" {...svgProps}>
      <path
        d="M30.388 22.587a3.178 3.178 0 00-.845-.322v-8.572a3.176 3.176 0 00.854-.324 3.207 3.207 0 10-3.918-4.972l-7.42-4.284a3.178 3.178 0 00.145-.909 3.204 3.204 0 00-6.408 0 3.177 3.177 0 00.144.904L5.518 8.393a3.191 3.191 0 00-.71-.58 3.206 3.206 0 10-3.205 5.556 3.176 3.176 0 00.854.324v8.571a3.178 3.178 0 00-.845.323 3.206 3.206 0 003.205 5.555 3.192 3.192 0 00.703-.573l7.419 4.283a3.204 3.204 0 106.09-.103l7.375-4.258a3.152 3.152 0 00.78.65 3.206 3.206 0 003.204-5.554zm-24.074 2.02a3.18 3.18 0 00-.322-.845 3.192 3.192 0 00-.571-.702l9.694-16.79a2.888 2.888 0 001.773 0l9.692 16.786a2.876 2.876 0 00-.894 1.55zm19.402-14.89a3.186 3.186 0 002.303 3.979v8.562c-.041.01-.081.02-.122.032L18.213 5.516c.028-.028.057-.054.085-.083zM13.7 5.43l.09.088-9.684 16.774a3.15 3.15 0 00-.124-.033v-8.563a3.185 3.185 0 002.3-3.984zm4.661 25.168a3.184 3.184 0 00-4.664-.068l-7.408-4.278.032-.12h19.36c.016.069.04.135.062.204z"
        fill="#e535ab"
      />
    </Icon>
  );
};