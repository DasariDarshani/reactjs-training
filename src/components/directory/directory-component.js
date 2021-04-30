import React from "react";
import MenuItem from "../menu-item/menu-item-component";
import "./directory-styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          imageUrl: "https://picsum.photos/200?random=1",
          title: "Raju",
          id: 1,
          subtitle: "lives in bangalore",
          redirectUrl: "/1",
        },
        {
          imageUrl: "https://picsum.photos/200?random=2",
          title: "Sujith",
          id: 2,
          subtitle: "lives in bangalore",
          redirectUrl: "/2",
        },
        {
          imageUrl: "https://picsum.photos/200?random=3",
          title: "Rakesh",
          id: 3,
          subtitle: "lives in bangalore",
          redirectUrl: "/3",
        },
        {
          imageUrl: "https://picsum.photos/200?random=4",
          title: "Roshan",
          id: 4,
          subtitle: "lives in bangalore",
          redirectUrl: "/4",
        },
        {
          imageUrl: "https://picsum.photos/200?random=5",
          title: "Rajesh",
          id: 5,
          subtitle: "lives in bangalore",
          redirectUrl: "/5",
        },
        {
          imageUrl: "https://picsum.photos/200?random=6",
          title: "Mukesh",
          id: 6,
          subtitle: "lives in bangalore",
          redirectUrl: "/6",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {/* {this.state.sections.map(({ title, subtitle }) => (
          <MenuItem title={title} subtitle={subtitle} />
        ))} */}
        {this.state.sections.map((section) => (
          <MenuItem
            title={section.title}
            subtitle={section.subtitle}
            imageUrl={section.imageUrl}
            redirectUrl={section.redirectUrl}
          />
        ))}
      </div>
    );
  }
}
export default Directory;
