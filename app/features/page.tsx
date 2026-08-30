import React from 'react';
import type { Metadata } from 'next';
import { FeaturesContent } from './features-content';

export const metadata: Metadata = {
  title: "Features – Global CDN, Serverless Backends, Branch Deploys & More",
  description:
    "Explore Lonch's platform features: global CDN for static sites, serverless AWS ECS Fargate backends, branch deployments, live log streaming, and automated SSL with custom domains.",
  alternates: { canonical: "https://lonch.cloud/features" },
  openGraph: {
    title: "Platform Features | Lonch",
    description: "Global CDN, serverless backends, branch deploys, live logs, auto-SSL — everything you need to ship fast.",
    url: "https://lonch.cloud/features",
  },
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
