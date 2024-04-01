import React from "react";
import { Button } from "./ui/button";

const FollowComponent = () => {
  return (
    <div className="flex items-center justify-between w-full bg-gray-200 p-5 rounded-lg">
      <div className="space-y-2">
        <p>
          By <span className="font-semibold">Organiser</span>
        </p>
        <p>12.2k Followers</p>
      </div>
      <Button className="py-3 px-5">Follow</Button>
    </div>
  );
};

export default FollowComponent;
