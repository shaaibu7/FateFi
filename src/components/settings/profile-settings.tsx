"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { useState } from "react";

export function ProfileSettings() {
  const [displayName, setDisplayName] = useState<string>("Anonymous User");
  const [bio, setBio] = useState<string>("");

  const handleSave = () => {
    console.log("Saving profile:", { displayName, bio });
  };

  const getInitials = () => {
    return "AU";
  };

  const memberSince = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-secondary mb-4">
          Profile Information
        </h3>

        <div className="flex items-start space-x-6 mb-6">
          <Avatar className="w-20 h-20 border-2 border-secondary/30">
            <AvatarFallback className="bg-secondary text-primary text-xl">
              {getInitials()}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h4 className="text-white font-semibold">{displayName}</h4>
              <Badge
                variant="outline"
                className="border-secondary/30 bg-secondary/10 text-secondary"
              >
                Active
              </Badge>
            </div>
            <div className="flex items-center space-x-4 text-sm text-white/60">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Member since {memberSince}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="displayName" className="text-white mb-2 block">
              Display Name
            </Label>
            <Input
              id="displayName"
              value={displayName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDisplayName(e.target.value)
              }
              placeholder="Enter your display name"
              className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
            />
          </div>

          <div>
            <Label htmlFor="bio" className="text-white mb-2 block">
              Bio
            </Label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setBio(e.target.value)
              }
              placeholder="Tell us about yourself..."
              rows={4}
              className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <p className="text-xs text-white/40 mt-1">
              {bio.length}/200 characters
            </p>
          </div>

          <div>
            <Label className="text-white mb-2 block">Connected Accounts</Label>
            <div className="space-y-2">
              <p className="text-white/60 text-sm">No connected accounts yet</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-white/10">
        <Button
          variant="outline"
          className="border-white/20 hover:bg-white/5 text-white"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          className="bg-secondary hover:bg-secondary/90 text-primary font-semibold"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}
