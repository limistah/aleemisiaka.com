/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import { Helmet } from 'react-helmet';
import wrapWithProvider from './src/wrap-with-provider';

export const wrapRootElement = wrapWithProvider;

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  const helmet = Helmet.renderStatic();
  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setBodyAttributes(helmet.bodyAttributes.toComponent());
  setHeadComponents([
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ]);
};

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();

  headComponents.sort((x, y) => {
    if (x.props && x.props['data-react-helmet']) {
      return -1;
    } else if (y.props && y.props['data-react-helmet']) {
      return 1;
    }
    return 0;
  });
  headComponents.sort((a, b) => {
    if (a.type && [`meta`, `title`].includes(a.type)) {
      return -1;
    }
    return 0;
  });
  replaceHeadComponents(headComponents);
};
