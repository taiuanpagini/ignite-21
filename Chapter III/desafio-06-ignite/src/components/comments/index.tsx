import { Component, JSXElementConstructor, ReactElement } from 'react';

export default class Comments extends Component<
  ReactElement | JSXElementConstructor<unknown>
> {
  componentDidMount(): void {
    const script = document.createElement('script');
    const anchor = document.getElementById('inject-comments-for-uterances');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', 'true');
    script.setAttribute('repo', 'marcelopoars/ignite-chapter-3-challenge-2');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-dark');
    anchor.appendChild(script);
  }

  render(): JSX.Element {
    return <div id="inject-comments-for-uterances" />;
  }
}
