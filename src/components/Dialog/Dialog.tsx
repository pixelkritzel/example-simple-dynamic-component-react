import * as React from 'react';
import CSS from './Dialog.module.scss';

export class Dialog extends React.Component<{ content: JSX.Element; button?: JSX.Element }> {
  render() {
    const { content, button } = this.props;

    return (
      <div className={CSS.dialog}>
        <div className={CSS.window}>
          {content}
          {button && <div className={CSS.footer}>{button}</div>}
        </div>
      </div>
    );
  }
}
