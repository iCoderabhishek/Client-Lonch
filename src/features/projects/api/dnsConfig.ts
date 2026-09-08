"use server";

export async function getDnsConfig() {
  return {
    proxyIp: process.env.PROXY_IP,
    proxyDomain: process.env.PROXY_DOMAIN,
    rootDomain: process.env.ROOT_DOMAIN,
  };
}
