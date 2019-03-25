import React from 'react';
import { Link } from 'react-router-dom';
import ContentContainer from '../ContentContainer';

import { Collapse } from '../../../components';

const data = [
  {
    title: 'Selected Question Title',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper viverra nam libero. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Sed ullamcorper morbi tincidunt ornare massa eget. Gravida neque convallis a cras semper auctor neque vitae. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Adipiscing commodo elit at imperdiet dui accumsan. Orci eu lobortis elementum nibh. Nec ullamcorper sit amet risus nullam eget.',
  },
  {
    title: 'Selected Question Title',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper viverra nam libero. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Sed ullamcorper morbi tincidunt ornare massa eget. Gravida neque convallis a cras semper auctor neque vitae. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Adipiscing commodo elit at imperdiet dui accumsan. Orci eu lobortis elementum nibh. Nec ullamcorper sit amet risus nullam eget.',
  },
  {
    title: 'Selected Question Title',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper viverra nam libero. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Sed ullamcorper morbi tincidunt ornare massa eget. Gravida neque convallis a cras semper auctor neque vitae. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Adipiscing commodo elit at imperdiet dui accumsan. Orci eu lobortis elementum nibh. Nec ullamcorper sit amet risus nullam eget.',
  },
];

export default () => (
  <ContentContainer title="Frequently Asked Questions">
    <div className="m-4">
      {data.map((item, idx) => {
        return (
          <Collapse
            key={`faq_collapse_${idx}`}
            title={item.title}
            text={item.text}
          />
        );
      })}
    </div>
    <hr />
    <div className="m-4">
      <h4 className="mb-4">Still Have Questions?</h4>
      <Link className="mb-5 btn btn-primary" to="/contact-us">
        CONTACT US
      </Link>
    </div>
  </ContentContainer>
);
