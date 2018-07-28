import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { CoVoToolbar, CoVoPageContent, CoVoFooter } from "./";

Enzyme.configure({ adapter: new Adapter() });

//Beginning of test

test("shallow render without crashing", () => {
  shallow(<CoVoToolbar />);
  shallow(<CoVoPageContent />);
  shallow(<CoVoFooter />);
});
