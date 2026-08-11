"use client";

import { motion } from "framer-motion";
import { CloudUploadIcon, LinkSquare01Icon, LockKeyIcon, UserGroupIcon } from "hugeicons-react";

const features = [
  {
    name: "Lightning Fast Uploads",
    description: "Drop your files and watch them sync instantly across your entire workspace.",
    icon: CloudUploadIcon,
  },
  {
    name: "Secure by Default",
    description: "Enterprise-grade encryption ensures your intellectual property remains yours alone.",
    icon: LockKeyIcon,
  },
  {
    name: "Seamless Collaboration",
    description: "Invite team members with role-based access. Keep everyone on the same page.",
    icon: UserGroupIcon,
  },
  {
    name: "Instant Sharing",
    description: "Generate public or private links in a click. Control expiration and passwords.",
    icon: LinkSquare01Icon,
  },
];

export function Features() {
  return (
    <div id="features" className="py-24 sm:py-32 bg-white">

    </div>
  );
}
