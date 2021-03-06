import React from "react";
import { shallow } from "enzyme";
import HappyHourAd from "./HappyHourAd";

const select = {
  title: ".title",
  promoDescription: ".promoDescription",
};

const mockProps = {
  title: "lorem ipsum",
  promoDescription: "sit amet",
};

describe("Component HappyHourAd", () => {
  it("should render without crashing", () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it("should render header and description", () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });

  it("should render title and div from props", () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(mockProps.title);
    expect(component.find(select.promoDescription).text()).toEqual(
      mockProps.promoDescription
    );
  });

  it("Should render title and promoDescription", () => {
    const expectedTitle = mockProps.title;
    const expectedDescription = mockProps.promoDescription;

    const component = shallow(<HappyHourAd {...mockProps} />);

    expect(component.find(select.title).text()).toEqual(expectedTitle);
    expect(component.find(select.description).text()).toEqual(
      expectedDescription
    );
  });
});

const trueDate = Date;
const mockDate = (customDate) =>
  class extends Date {
    constructor(...args) {
      if (args.length) {
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now() {
      return new Date(customDate).getTime();
    }
  };
const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.description).text();

    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value at ${delaySeconds} seconds after ${time}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2019-05-14T${time}.135Z`);
    const component = shallow(<HappyHourAd {...mockProps} />);
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);

    const renderedTime = component.find(select.description).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe("Component HappyHourAd with mocked Date", () => {
  checkDescriptionAtTime("11:57:58", "122");
  checkDescriptionAtTime("11:59:59", "1");
  checkDescriptionAtTime("13:00:00", 23 * 60 * 60 + "");
});

describe("Component HappyHourAd with mocked Date and delay", () => {
  checkDescriptionAfterTime("11:59:58", 2, mockProps.description);
  checkDescriptionAfterTime("12:59:59", 1, 23 * 60 * 60 + "");
});
