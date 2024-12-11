import type { NextConfig } from "next";
import dotenv from 'dotenv';
dotenv.config();

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_NAME: process.env.NEXT_PUBLIC_NAME,
    NEXT_PUBLIC_PORT: process.env.NEXT_PUBLIC_PORT,
    NEXT_PUBLIC_COMPANY: process.env.NEXT_PUBLIC_COMPANY,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
  /* config options here */
  reactStrictMode: false
};

export default nextConfig;
