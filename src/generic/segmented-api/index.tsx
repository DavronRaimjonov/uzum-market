import React from "react";
import { Avatar } from "antd";
interface SegmentedOption {
  label: JSX.Element;
  value: string;
}

export const useSegementedApi = () => {
  const segmentedApi = (): SegmentedOption[] => [
    {
      label: (
        <div
          style={{
            padding: 4,
          }}
        >
          <Avatar src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png" />
          <div>English</div>
        </div>
      ),
      value: "en",
    },
    {
      label: (
        <div
          style={{
            padding: 4,
          }}
        >
          <Avatar src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png" />
          <div>Русский</div>
        </div>
      ),
      value: "rus",
    },
    {
      label: (
        <div
          style={{
            padding: 4,
          }}
        >
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png" />
          <div>O'zbek</div>
        </div>
      ),
      value: "uzLotin",
    },
  ];
  return { segmentedApi };
};
