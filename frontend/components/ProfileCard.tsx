"use client";
import React, { useState } from "react";
import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const ProfileCard = () => {
  const [rating, setRating] = useState(4);
  const handleRating = (rate: number) => {
    setRating(rate);
  };
  const fillColorArray = [
    "#f17a45",
    "#f17a45",
    "#f19745",
    "#f19745",
    "#f1a545",
    "#f1a545",
    "#f1b345",
    "#f1b345",
    "#f1d045",
    "#f1d045",
  ];
  return (
    <div className="w-full p-6 space-y-4 border border-gray-300 rounded-xl">
      <div className="flex items-center">
        <div className="w-20 h-20 bg-gray-200 rounded-full shadow-md"></div>
        <div className="ml-5">
          <p className="font-semibold">Organiser</p>
          <p className="text-gray-500">12.2k Followers</p>
        </div>
      </div>
      <div className="py-2">Rating</div>
      <div className="space-y-3 pb-2 text-gray-500">
        <div className="flex items-center">
          <Phone className="text-orange-700" />
          <p className="ml-3 font-medium">+012 123123123</p>
        </div>
        <div className="flex items-center">
          <Mail className="text-orange-700" />
          <p className="ml-3 font-medium">ovatheme@gmail.com</p>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-2">
        <div className="flex gap-2 items-center text-gray-500 py-2">
          <Facebook />
          <span>Facebook</span>
        </div>
        <div className="flex gap-2 items-center text-gray-500 py-2">
          <Twitter />
          <span>Twitter</span>
        </div>
        <div className="flex gap-2 items-center text-gray-500 py-2">
          <Instagram />
          <span>Instagram</span>
        </div>
      </div>
      <Separator />
      <Button className="py-3 px-5 flex gap-2">
        <Mail />
        Send Message
      </Button>
    </div>
  );
};

export default ProfileCard;
