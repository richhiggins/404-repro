import React from "react"

const SsrPage404 = () => {
  return <>I'm an SSR page with 404 response.</>
}
export default SsrPage404

export async function getServerData(context) {
  return {
    status: 404,
    headers: {},
    props: {},
  }
}
