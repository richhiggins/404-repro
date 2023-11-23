import React from "react"

const SsrPage200 = () => {
  return <>I'm an SSR page with 200 response.</>
}
export default SsrPage200

export async function getServerData(context) {
  return {
    status: 200,
    headers: {},
    props: {},
  }
}
